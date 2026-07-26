<?php

namespace App\Helpers;

use Illuminate\Http\JsonResponse;

class ApiResponse
{
    /**
     * Success Response
     */
    public static function success(
        string $message = 'Success',
        mixed $data = null,
        int $status = 200
    ): JsonResponse {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data'    => $data,
        ], $status);
    }

    /**
     * Created Response (201)
     */
    public static function created(
        string $message = 'Data berhasil dibuat.',
        mixed $data = null
    ): JsonResponse {
        return self::success($message, $data, 201);
    }

    /**
     * Updated Response (200)
     */
    public static function updated(
        string $message = 'Data berhasil diperbarui.',
        mixed $data = null
    ): JsonResponse {
        return self::success($message, $data);
    }

    /**
     * Deleted Response (200)
     */
    public static function deleted(
        string $message = 'Data berhasil dihapus.'
    ): JsonResponse {
        return self::success($message);
    }

    /**
     * General Error Response
     */
    public static function error(
        string $message = 'Terjadi kesalahan.',
        mixed $errors = null,
        int $status = 400
    ): JsonResponse {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors'  => $errors,
        ], $status);
    }

    /**
     * Validation Error (422)
     */
    public static function validationError(
        mixed $errors,
        string $message = 'Validasi gagal.'
    ): JsonResponse {
        return self::error($message, $errors, 422);
    }

    /**
     * Unauthorized (401)
     */
    public static function unauthorized(
        string $message = 'Username/email atau password salah.'
    ): JsonResponse {
        return self::error($message, null, 401);
    }

    /**
     * Forbidden (403)
     */
    public static function forbidden(
        string $message = 'Anda tidak memiliki akses.'
    ): JsonResponse {
        return self::error($message, null, 403);
    }

    /**
     * Not Found (404)
     */
    public static function notFound(
        string $message = 'Data tidak ditemukan.'
    ): JsonResponse {
        return self::error($message, null, 404);
    }

    /**
     * Server Error (500)
     */
    public static function serverError(
        string $message = 'Terjadi kesalahan pada server.'
    ): JsonResponse {
        return self::error($message, null, 500);
    }
}