<?php

use App\Http\Controllers\GeneralAppController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Sido\BusinessProfileController;
use App\Http\Controllers\Sido\CompetitionStatusController;
use App\Http\Controllers\Sido\PersonalProfileController;
use App\Http\Controllers\Sido\ProjectionController;
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
// Route::get('/site/posts' ,function(){return response()->json(['message'=> 'Website Posts', 'posts'=>BlogPost::all()]);});
Route::get('/test',function(){return "Hello From Server => (0_0)";});

//Management Site routes
Route::get('/applicant-profiles', [PersonalProfileController::class, 'index']);
Route::get('/application-before-submission/{slug}', [PersonalProfileController::class, 'show']);
Route::post('/create-applicant-profile', [PersonalProfileController::class, 'store']);

Route::post('/create-business-profile/{slug}', [BusinessProfileController::class, 'store']);

Route::post('/create-competition-profile/{slug}', [CompetitionStatusController::class, 'store']);
Route::post('/create-business-projection/{slug}', [ProjectionController::class, 'store']);

Route::middleware(['auth:sanctum'])->group(function () {
    // Route::get('/app/count-items',[GeneralAppController::class,'appItemCount']);
    //logged In
    Route::get('/user', function (Request $request) {return $request->user();});
    Route::get('/users', function () {return response()->json([
        'data'=> User::all()
    ]);});
});
