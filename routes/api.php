<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('office', App\Http\Controllers\oficinaController::class)->only (['index','store', 'update', 'show','destroy']);

Route::resource('Coordinador', App\Http\Controllers\coordinadorController::class)->only (['index','store', 'update', 'show','destroy']);

Route::resource('Documentos', App\Http\Controllers\documentsController::class)->only (['index','store', 'update', 'show','destroy']);
