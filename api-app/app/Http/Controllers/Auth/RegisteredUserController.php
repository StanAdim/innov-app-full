<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
   
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()]
         ]);
        if ($validator->fails())
            {
             return response()->json([
              'message' => 'Validation fails',
              'errors' => $validator->errors()
            ],422);
            }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        event(new Registered($user));
        // Auth::login($user);
        return response()->json(['message' => 'Registration successful','New User' => $user]);
    }
}
