<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Use App\Models\oficina;

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

Route::resource('oficinas', App\Http\Controllers\oficinaController::class)->only (['index','store', 'update', 'show','destroy']);

Route::resource('coordinadores', App\Http\Controllers\UserController::class)->only (['dashboard','index','create','store', 'update', 'show','destroy']);

Route::get('coordinadores/barChart', [App\Http\Controllers\UserController::class, 'barChart']);

Route::get('consultaOficina', function(){

    $offic = oficina::all();
    //return response()->json(['offic'=>$offic]);
    return $offic;
});

Route::resource('documentos', App\Http\Controllers\documentsController::class)->only (['index','store', 'update', 'show','destroy','derivarDoc']);

Route::get('showDocuments/{id}', [App\Http\Controllers\documentsController::class, 'showDocuments']);

Route::get('getUserOficina/{id}', [App\Http\Controllers\documentsController::class, 'getUserOficina']);

Route::get('derivarDoc/{id}', [App\Http\Controllers\documentsController::class, 'derivarDoc']);

Route::resource('rutas', App\Http\Controllers\rutaController::class)->only (['index','store', 'update', 'show','destroy']);

//Route::resource('Coor', resource\components\coordinador::class)->only (['crea.vue']);

