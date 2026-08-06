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
use App\Http\Controllers\Api\User\UserController;
use App\Http\Controllers\Api\Dashboard\DashboardController;
use App\Http\Controllers\Api\ActivityLog\ActivityLogController;

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

Route::prefix('auth')->group(function () {

    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {

        Route::get('/me', [AuthController::class, 'me']);

        Route::post('/logout', [AuthController::class, 'logout']);

    });

});

/*
|--------------------------------------------------------------------------
| PUBLIC API
|--------------------------------------------------------------------------
| Endpoint yang digunakan oleh Frontend React
*/

Route::prefix('settings')->group(function () {

    Route::get('/', [SettingController::class, 'index']);

});

Route::prefix('hero-sections')->group(function () {

    Route::get('/{page}', [HeroSectionController::class, 'index']);

});

Route::prefix('profile')->group(function () {

    Route::get('/', [ProfileController::class, 'index']);

});

Route::prefix('news')->group(function () {

    Route::get('/', [NewsController::class, 'index']);

    Route::get('/{news}', [NewsController::class, 'show']);

});

Route::prefix('gallery')->group(function () {

    Route::get('/', [GalleryController::class, 'index']);

    Route::get('/{gallery}', [GalleryController::class, 'show']);

});

Route::prefix('potential')->group(function () {

    Route::get('/', [PotentialController::class, 'index']);

    Route::get('/{potential}', [PotentialController::class, 'show']);

});

Route::prefix('government')->group(function () {

    Route::get('/', [GovernmentController::class, 'index']);

    Route::get('/{government}', [GovernmentController::class, 'show']);

});

Route::prefix('service')->group(function () {

    Route::get('/', [ServiceController::class, 'index']);

    Route::get('/{service}', [ServiceController::class, 'show']);

});

Route::prefix('contact')->group(function () {

    Route::get('/', [ContactController::class, 'index']);

});

/*
|--------------------------------------------------------------------------
| ADMIN API
|--------------------------------------------------------------------------
| Semua endpoint di bawah ini membutuhkan login Sanctum
*/

Route::middleware('auth:sanctum')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | User Management (Super Admin)
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin')->group(function () {

        Route::get('/users', [UserController::class, 'index']);

        Route::get('/users/{user}', [UserController::class, 'show']);

        Route::post('/users', [UserController::class, 'store']);

        Route::put('/users/{user}', [UserController::class, 'update']);

        Route::delete('/users/{user}', [UserController::class, 'destroy']);

        Route::patch('/users/{user}/toggle-status', [
            UserController::class,
            'toggleStatus'
        ]);

        Route::patch('/users/{user}/reset-password', [
            UserController::class,
            'resetPassword'
        ]);

    });

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::get('/dashboard', [DashboardController::class, 'index']);

    });

    /*
    |--------------------------------------------------------------------------
    | Activity Log
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin')->group(function () {

        Route::get('/activity-logs', [

            ActivityLogController::class,

            'index'

        ]);

        Route::get('/activity-logs/{activityLog}', [

            ActivityLogController::class,

            'show'

        ]);

    });

    /*
    |--------------------------------------------------------------------------
    | Settings
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin')->group(function () {

        Route::put('/settings', [SettingController::class, 'update']);

    });

    /*
    |--------------------------------------------------------------------------
    | Hero Section
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::put('/hero-sections/{page}', [HeroSectionController::class, 'update']);

    });

    /*
    |--------------------------------------------------------------------------
    | Profile
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::put('/profile', [ProfileController::class, 'update']);

    });

    /*
    |--------------------------------------------------------------------------
    | News
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::post('/news', [NewsController::class, 'store']);

        Route::put('/news/{news}', [NewsController::class, 'update']);

        Route::delete('/news/{news}', [NewsController::class, 'destroy']);

    });

    /*
    |--------------------------------------------------------------------------
    | Gallery
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::post('/gallery', [GalleryController::class, 'store']);

        Route::put('/gallery/{gallery}', [GalleryController::class, 'update']);

        Route::delete('/gallery/{gallery}', [GalleryController::class, 'destroy']);

    });

    /*
    |--------------------------------------------------------------------------
    | Potential
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::post('/potential', [PotentialController::class, 'store']);

        Route::put('/potential/{potential}', [PotentialController::class, 'update']);

        Route::delete('/potential/{potential}', [PotentialController::class, 'destroy']);

    });

    /*
    |--------------------------------------------------------------------------
    | Government
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::post('/government', [GovernmentController::class, 'store']);

        Route::put('/government/{government}', [GovernmentController::class, 'update']);

        Route::delete('/government/{government}', [GovernmentController::class, 'destroy']);

    });

    /*
    |--------------------------------------------------------------------------
    | Service
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::post('/service', [ServiceController::class, 'store']);

        Route::put('/service/{service}', [ServiceController::class, 'update']);

        Route::delete('/service/{service}', [ServiceController::class, 'destroy']);

    });

    /*
    |--------------------------------------------------------------------------
    | Contact
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:super_admin,admin')->group(function () {

        Route::put('/contact', [ContactController::class, 'update']);

    });

});