<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('books', [BookController::class,'index']);
Route::get('books/{id}', [BookController::class,'show']);
Route::post('books', [BookController::class,'store']);
Route::put('books/{id}', [BookController::class,'update']);
Route::delete('books/{id}', [BookController::class,'destroy']);

Route::get('/user',[HomeController::class,'getUser']);


Route::get('cart', [CartController::class,'index']);
Route::get('cart/create', [CartController::class,'create']);
Route::post('cart', [CartController::class,'store']);
Route::get('cart/{id}', [CartController::class,'show']);
Route::get('cart/{id}/edit', [CartController::class,'edit']);
Route::put('cart/{id}', [CartController::class,'update']);
Route::delete('cart/{id}', [CartController::class,'destroy']);

Route::get('category', [CategoryController::class,'index']);
Route::get('category/create', [CategoryController::class,'create']);
Route::post('category', [CategoryController::class,'store']);
Route::get('category/{id}', [CategoryController::class,'show']);
Route::get('category/{id}/edit', [CategoryController::class,'edit']);
Route::put('category/{id}', [CategoryController::class,'update']);
Route::delete('category/{id}', [CategoryController::class,'destroy']);

Route::get('item', [ItemController::class,'index']);
Route::get('item/create', [ItemController::class,'create']);
Route::post('item', [ItemController::class,'store']);
Route::get('item/{id}', [ItemController::class,'show']);
Route::get('item/{id}/edit', [ItemController::class,'edit']);
Route::put('item/{id}', [ItemController::class,'update']);
Route::delete('item/{id}', [ItemController::class,'destroy']);

Route::get('product', [ProductController::class,'index']);
Route::get('product/create', [ProductController::class,'create']);
Route::post('product', [ProductController::class,'store']);
Route::get('product/{id}', [ProductController::class,'show']);
Route::get('product/{id}/edit', [ProductController::class,'edit']);
Route::put('product/{id}', [ProductController::class,'update']);
Route::delete('product/{id}', [ProductController::class,'destroy']);

Route::get('order', [OrderController::class,'index']);
Route::get('order/create', [OrderController::class,'create']);
Route::post('order', [OrderController::class,'store']);
Route::get('order/{id}', [OrderController::class,'show']);
Route::get('order/{id}/edit', [OrderController::class,'edit']);
Route::put('order/{id}', [OrderController::class,'update']);
Route::delete('order/{id}', [OrderController::class,'destroy']);

Route::get('brand', [BrandController::class,'index']);
