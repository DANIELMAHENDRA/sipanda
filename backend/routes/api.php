<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\HeroSection\HeroSectionController;
use App\Http\Controllers\Api\Setting\SettingController;
use App\Http\Controllers\Api\Profile\ProfileController;
use App\Http\Controllers\Api\News\NewsController;
use App\Http\Controllers\Api\Gallery\GalleryController;
use App\Http\Controllers\Api\Potential\PotentialController;
use App\Http\Controllers\Api\Government\GovernmentController;
use App\Http\Controllers\Api\Service\ServiceController;
use App\Http\Controllers\Api\Contact\ContactController;

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

    Route::prefix('potential')->group(function () {

        Route::get('/', [PotentialController::class, 'index']);

        Route::get('/{potential}', [PotentialController::class, 'show']);

        Route::post('/', [PotentialController::class, 'store']);

        Route::put('/{potential}', [PotentialController::class, 'update']);

        Route::delete('/{potential}', [PotentialController::class, 'destroy']);

    });

    Route::prefix('government')->group(function () {

    Route::get('/', [GovernmentController::class, 'index']);

    Route::get('/{government}', [GovernmentController::class, 'show']);

    Route::post('/', [GovernmentController::class, 'store']);

    Route::put('/{government}', [GovernmentController::class, 'update']);

    Route::delete('/{government}', [GovernmentController::class, 'destroy']);

    });

    Route::prefix('service')->group(function () {

    Route::get('/', [ServiceController::class, 'index']);

    Route::get('/{service}', [ServiceController::class, 'show']);

    Route::post('/', [ServiceController::class, 'store']);

    Route::put('/{service}', [ServiceController::class, 'update']);

    Route::delete('/{service}', [ServiceController::class, 'destroy']);

    });

    Route::prefix('contact')->group(function () {

    Route::get('/', [ContactController::class, 'index']);

    Route::put('/', [ContactController::class, 'update']);

    });

});