<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/animals', function() {
//     echo "Menampilkan Data Hewan.";
// });

// Route::post('/animals', function () {
//     return 'menambahkan data animals';
// });

// Route::put('/animals/{id}', function ($id) {
//     return 'mengubah data animals dengan id ' . $id;
// });

// Route::delete('/animals/{id}', function ($id) {
//     return 'menghapus data animals dengan id ' . $id;
// });

Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::put('/animals/{id}', [AnimalController::class, 'update']);
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);