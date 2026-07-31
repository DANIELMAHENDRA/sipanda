<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use App\Helpers\ApiResponse;

trait ApiResponseTrait
{
    protected function success(
        mixed $data = null,
        string $message = 'Berhasil.'
    ): JsonResponse {
        return ApiResponse::success($data, $message);
    }

    protected function error(
        string $message = 'Terjadi kesalahan.',
        mixed $errors = null,
        int $status = 400
    ): JsonResponse {
        return ApiResponse::error($message, $errors, $status);
    }

    protected function notFound(
        string $message = 'Data tidak ditemukan.'
    ): JsonResponse {
        return ApiResponse::notFound($message);
    }
}