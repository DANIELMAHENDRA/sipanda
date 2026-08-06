<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(
        Request $request,
        Closure $next,
        string ...$roles
    ): Response {

        /*
        |--------------------------------------------------------------------------
        | User Belum Login
        |--------------------------------------------------------------------------
        */

        $user = $request->user();

        if (!$user) {

            return response()->json([
                'success' => false,
                'message' => 'Anda belum login.',
            ], 401);

        }

        /*
        |--------------------------------------------------------------------------
        | Akun Tidak Aktif
        |--------------------------------------------------------------------------
        */

        if (!$user->is_active) {

            return response()->json([
                'success' => false,
                'message' => 'Akun Anda telah dinonaktifkan.',
            ], 403);

        }

        /*
        |--------------------------------------------------------------------------
        | Middleware Tidak Diberi Role
        |--------------------------------------------------------------------------
        */

        if (empty($roles)) {

            return response()->json([
                'success' => false,
                'message' => 'Role belum ditentukan.',
            ], 500);

        }

        /*
        |--------------------------------------------------------------------------
        | Role Tidak Memiliki Hak Akses
        |--------------------------------------------------------------------------
        */

        if (!in_array($user->role, $roles, true)) {

            return response()->json([
                'success' => false,
                'message' => 'Anda tidak memiliki hak akses.',
            ], 403);

        }

        /*
        |--------------------------------------------------------------------------
        | Lolos Validasi
        |--------------------------------------------------------------------------
        */

        return $next($request);

    }
}