<?php

namespace App\Http\Controllers\Api\Auth;

use Throwable;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Helpers\ApiResponse;
use App\Models\ActivityLog;
use App\Http\Resources\UserResource;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\Auth\LoginRequest;

class AuthController extends BaseApiController
{
    /**
     * Login User
     */
    public function login(LoginRequest $request)
    {
        DB::beginTransaction();

        try {

            /*
            |--------------------------------------------------------------------------
            | Cari user berdasarkan username atau email
            |--------------------------------------------------------------------------
            */

            $user = User::where('email', $request->login)
                ->orWhere('username', $request->login)
                ->first();

            /*
            |--------------------------------------------------------------------------
            | User tidak ditemukan
            |--------------------------------------------------------------------------
            */

            if (!$user) {

                DB::rollBack();

                return $this->unauthorized(
                    'Username, email, atau password salah.'
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Password salah
            |--------------------------------------------------------------------------
            */

            if (!Hash::check($request->password, $user->password)) {

                DB::rollBack();

                return $this->unauthorized(
                    'Username, email, atau password salah.'
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Akun tidak aktif
            |--------------------------------------------------------------------------
            */

            if (!$user->is_active) {

                DB::rollBack();

                return $this->unauthorized(
                    'Akun Anda telah dinonaktifkan.'
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Update Last Login
            |--------------------------------------------------------------------------
            */

            $user->update([
                'last_login_at' => now(),
            ]);

            /*
            |--------------------------------------------------------------------------
            | Generate Sanctum Token
            |--------------------------------------------------------------------------
            */

            $token = $user->createToken(
                'SIPANDA-' . now()->timestamp
            )->plainTextToken;

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            ActivityLog::create([

                'user_id' => $user->id,

                'activity' => 'Login',

                'module' => 'Authentication',

                'description' => 'User berhasil login.',

                'ip_address' => request()->ip(),

                'user_agent' => request()->userAgent(),

                'url' => request()->fullUrl(),

                'method' => request()->method(),

                'status' => 'success',

            ]);

            DB::commit();

            return $this->success(

                data: [

                    'token' => $token,

                    'token_type' => 'Bearer',

                    'user' => new UserResource($user),

                ],

                message: 'Login berhasil.'

            );

        } catch (Throwable $e) {

            DB::rollBack();

            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    /**
     * Logout User
     */
    public function logout()
    {
        try {

            $user = auth()->user();

            ActivityLog::create([

                'user_id' => $user->id,

                'activity' => 'Logout',

                'module' => 'Authentication',

                'description' => 'User logout.',

                'ip_address' => request()->ip(),

                'user_agent' => request()->userAgent(),

                'url' => request()->fullUrl(),

                'method' => request()->method(),

                'status' => 'success',

            ]);

            /*
            |--------------------------------------------------------------------------
            | Hapus token device saat ini saja
            |--------------------------------------------------------------------------
            */

            $user->currentAccessToken()->delete();

            return $this->success(
                message: 'Logout berhasil.'
            );

        } catch (Throwable $e) {

            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    /**
     * Current Auth User
     */
    public function me()
    {
        return $this->success(

            data: new UserResource(auth()->user()),

            message: 'Data user berhasil diambil.'

        );
    }
}