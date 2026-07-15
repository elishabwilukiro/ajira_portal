<?php

use App\Http\Controllers\JobController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Middleware\AttachJwtFromCookie;
use Illuminate\Support\Facades\Route;

// Authentication routes
Route::post('/auth/login',[AuthController::class,'login']);
Route::post('/auth/register',[AuthController::class,'register']);
Route::post('/auth/google-login',[GoogleController::class,'googleLogin']);

// Anyone routes
Route::get('/jobs', [JobController::class,'index']);


Route::middleware([AttachJwtFromCookie::class,'auth:api'])->group(function(){
    
    Route::post('/auth/logout',[AuthController::class,'logout']);
    Route::get('/auth/me',[AuthController::class,'me']);


    // Recruiter routes
    Route::middleware('role:recruiter')->group(function(){
        Route::post('jobs', [JobController::class,'store']);

    });

    // User routes
    Route::middleware('role:user')->group(function(){
        
    });
});
