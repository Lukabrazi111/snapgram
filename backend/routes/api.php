<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Auth
Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

// Reset password
Route::post('/forgot-password', [ResetPasswordController::class, 'forgotPassword'])->name('forgot-password');
Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword'])->name('reset-password');
Route::get('/reset-password/{token}', [ResetPasswordController::class, 'checkToken'])->name('reset-password-confirm');

// Email verification
Route::get('/verify-email', [AuthController::class, 'verifyEmail'])->name('verify-email');

// Sanctum protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'show'])->name('user.show');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
