<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\GeneralAppController;
use App\Http\Controllers\LeaderController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Website routes
Route::get('/site/posts' ,function(){return response()->json(['message'=> 'Website Posts']);});

//Management Site routes

Route::middleware(['auth:sanctum'])->group(function () {
    // Your protected routes go here
    Route::resource('/auth/blog-post',BlogPostController::class);
    Route::resource('/auth/medium-banner',BannerController::class);
    Route::resource('/auth/commission-leader',LeaderController::class);
    Route::resource('/auth/medium-feature',FeatureController::class);

    Route::get('/app/count-items',[GeneralAppController::class,'appItemCount']);


    //logged In
    Route::get('/user', function (Request $request) {return $request->user();});
    Route::get('/users', function () {return response()->json([
        'data'=> User::all()
    ]);});
});
