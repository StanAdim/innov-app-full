<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\BlogPost;
use App\Models\Feature;
use App\Models\Leader;
use App\Models\User;

class GeneralAppController extends Controller
{
    //
    public function appItemCount (){
        $items = [
            'users'=> User::all()->count(),
            'leaders'=> Leader::all()->count(),
            'posts'=> BlogPost::all()->count(),
            'features'=> Feature::all()->count(),
            'banners'=> Banner::all()->count(),
        ];
        return response()->json([
            'message' => 'App Items',
            'data' => $items
        ]);
    }
}
