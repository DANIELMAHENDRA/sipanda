<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class BaseApiController extends Controller
{
    /**
     * Success Response
     */
    protected function success(
        mixed $data = null,
        string $message = 'Berhasil.',
        int $status = 200
    ): JsonResponse {
        return ApiResponse::success(
            message: $message,
            data: $data,
            status: $status
        );
    }

    /**
     * Error Response
     */
    protected function error(
        string $message = 'Terjadi kesalahan.',
        mixed $errors = null,
        int $status = 400
    ): JsonResponse {
        return ApiResponse::error(
            message: $message,
            errors: $errors,
            status: $status
        );
    }

    /**
     * Unauthorized Response
     */
    protected function unauthorized(
        string $message = 'Unauthorized.'
    ): JsonResponse {
        return ApiResponse::unauthorized($message);
    }

    /**
     * Validation Error Response
     */
    protected function validationError(
        mixed $errors,
        string $message = 'Validasi gagal.'
    ): JsonResponse {
        return ApiResponse::validationError(
            errors: $errors,
            message: $message
        );
    }

    /**
     * Not Found Response
     */
    protected function notFound(
        string $message = 'Data tidak ditemukan.'
    ): JsonResponse {
        return ApiResponse::notFound($message);
    }

    /**
     * Server Error Response
     */
    protected function serverError(
        string $message = 'Terjadi kesalahan pada server.'
    ): JsonResponse {
        return ApiResponse::serverError($message);
    }
}