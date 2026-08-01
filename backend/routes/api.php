<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\HeroSection\HeroSectionController;
use App\Http\Controllers\Api\Setting\SettingController;
use App\Http\Controllers\Api\Profile\ProfileController;
use App\Http\Controllers\Api\News\NewsController;
use App\Http\Controllers\Api\Gallery\GalleryController;

Route::prefix('auth')->group(function () {

    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {

        Route::get('/me', [AuthController::class, 'me']);

        Route::post('/logout', [AuthController::class, 'logout']);

    });

});

Route::middleware('auth:sanctum')->group(function () {

    Route::prefix('settings')->group(function () {

        Route::get('/', [SettingController::class, 'index']);

        Route::put('/', [SettingController::class, 'update']);

    });

    Route::prefix('hero-sections')->group(function () {

        Route::get('/{page}', [HeroSectionController::class, 'index']);

        Route::put('/{page}', [HeroSectionController::class, 'update']);

    });

    Route::prefix('profile')->group(function () {

        Route::get('/', [ProfileController::class, 'index']);

        Route::put('/', [ProfileController::class, 'update']);

    });

    Route::prefix('news')->group(function () {

        Route::get('/', [NewsController::class, 'index']);

        Route::get('/{news}', [NewsController::class, 'show']);

        Route::post('/', [NewsController::class, 'store']);

        Route::put('/{news}', [NewsController::class, 'update']);

        Route::delete('/{news}', [NewsController::class, 'destroy']);

    });

    Route::prefix('gallery')->group(function () {

        Route::get('/', [GalleryController::class, 'index']);

        Route::get('/{gallery}', [GalleryController::class, 'show']);

        Route::post('/', [GalleryController::class, 'store']);

        Route::put('/{gallery}', [GalleryController::class, 'update']);

        Route::delete('/{gallery}', [GalleryController::class, 'destroy']);

    });

});