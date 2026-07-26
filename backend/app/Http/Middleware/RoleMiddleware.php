<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\ApiResponse;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(
        Request $request,
        Closure $next,
        string ...$roles
    ): Response {

        /*
        |--------------------------------------------------------------------------
        | Ambil user yang sedang login
        |--------------------------------------------------------------------------
        */

        $user = $request->user();

        /*
        |--------------------------------------------------------------------------
        | Belum Login
        |--------------------------------------------------------------------------
        */

        if (!$user) {
            return ApiResponse::unauthorized(
                'Anda belum login.'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Akun Tidak Aktif
        |--------------------------------------------------------------------------
        */

        if (!$user->is_active) {
            return ApiResponse::unauthorized(
                'Akun Anda telah dinonaktifkan.'
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Role Tidak Diizinkan
        |--------------------------------------------------------------------------
        */

        if (!in_array($user->role, $roles, true)) {

            return ApiResponse::error(
                message: 'Anda tidak memiliki hak akses untuk mengakses resource ini.',
                status: 403
            );
        }

        /*
        |--------------------------------------------------------------------------
        | Lolos
        |--------------------------------------------------------------------------
        */

        return $next($request);
    }
}