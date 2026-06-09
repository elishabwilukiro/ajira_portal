<?php

use App\Http\Controllers\JobController;
use App\Http\Middleware\AttachJwtFromCookie;
use Illuminate\Support\Facades\Route;

// Route::group(['middleware' => ['auth:sanctum','admin']], function(){
//     Route::post('jobs', [JobController::class,'store']);
// });


// Route::middleware([AttachJwtFromCookie::class,'auth:api'])->group(function(){
//     Route::get('jobs', [JobController::class,'index']);
// });

Route::post('jobs', [JobController::class,'store']);