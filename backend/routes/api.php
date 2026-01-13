<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResetPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Auth
Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Reset password
Route::post('/forgot-password', [ResetPasswordController::class, 'forgotPassword'])->name('forgot-password');
Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword'])->name('reset-password');

// Email verification
Route::get('/verify-email', [AuthController::class, 'verifyEmail'])->name('verify-email');
