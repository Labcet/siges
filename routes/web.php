<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\AdminController;



Route::get('/', function () {
  return view('home');
})->middleware('auth');

//Route::get('/intro', function () {
  //  return view('saludo');
//});

Route::get('/register', [RegisterController::class, 'create'])
  ->middleware('guest')
  ->name('register.index');

Route::post('/register', [RegisterController::class, 'store'])
  ->name('register.store');

Route::get('/Logn', [SessionController::class, 'create'])
  ->middleware('guest')
  ->name('Logn.index');

Route::post('/Logn', [SessionController::class, 'store'])
  ->name('Logn.store');

Route::get('/Logout', [SessionController::class, 'destroy'])
  ->middleware('auth')
  ->name('Logn.destroy');


Route::get('/admin', [AdminController::class, 'index'])
   ->middleware('auth.admin')
   ->name('admin.index');

