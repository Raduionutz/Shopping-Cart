<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controller\ProductsController;
use App\Http\Controller\OrdersController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('products', 'App\Http\Controllers\ProductsController@show');
Route::get('orders', 'App\Http\Controllers\OrdersController@show');
Route::post('orders', 'App\Http\Controllers\OrdersController@store');
Route::put('orders/{id}', 'App\Http\Controllers\OrdersController@update');
