<?php

use App\Http\Controllers\JobController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Middleware\AttachJwtFromCookie;
use Illuminate\Support\Facades\Route;

Route::post('/auth/login',[AuthController::class,'login']);
Route::post('/auth/register',[AuthController::class,'register']);
Route::post('/auth/google-login',[GoogleController::class,'googleLogin']);


// Route::group(['middleware' => ['auth:sanctum','admin']], function(){
//     Route::post('jobs', [JobController::class,'store']);
// });


Route::middleware([AttachJwtFromCookie::class,'auth:api'])->group(function(){
    Route::get('jobs', [JobController::class,'index']);


    // Recruiter routes
    Route::middleware('role:recruiter')->group(function(){

    });

    // User routes
    Route::middleware('role:user')->group(function(){
        
    });
});

Route::post('jobs', [JobController::class,'store']);