<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/employees', [EmployeeController::class, 'index']); // Get All Resource
    Route::post('/employees', [EmployeeController::class, 'store']); // Add Resource
    Route::get('/employees/{id}', [EmployeeController::class, 'show']); // Get Detail Resource
    Route::put('/employees/{id}', [EmployeeController::class, 'update']); // Edit Resource
    Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']); // Delete Resource
    Route::get('/employees/search/{name}', [EmployeeController::class, 'search']); // Search Resource by name
    Route::get('/employees/status/active', [EmployeeController::class, 'active']); // Get Active Resource
    Route::get('/employees/status/inactive', [EmployeeController::class, 'inactive']); // Get Inactive Resource
    Route::get('/employees/status/terminated', [EmployeeController::class, 'terminated']); // Get Terminated Resource

});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);