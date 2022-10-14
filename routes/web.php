<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ChartController;

Route::get('/', function () {
  return view('login');
})->middleware('guest');

/* LOGIN */

Route::get('/Login', [SessionController::class, 'create'])
  ->middleware('guest')
  ->name('login');

Route::post('/Login', [SessionController::class, 'store'])
  ->name('Logn.store');

Route::get('/Logout', [SessionController::class, 'destroy'])
  ->middleware('auth')
  ->name('Logn.destroy');

/* DASHBOARD */

Route::get('/Dashboard', [UserController::class,'dashboard'])
   ->middleware('auth')
   ->name('dashboard');

