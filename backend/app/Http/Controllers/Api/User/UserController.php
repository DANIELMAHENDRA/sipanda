<?php

namespace App\Http\Controllers\Api\User;

use Throwable;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use App\Services\UserService;
use App\Http\Resources\UserResource;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;

class UserController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected UserService $userService
    ) {
    }

    /**
     * Menampilkan seluruh data user.
     */
    public function index(): JsonResponse
    {
        try {

            $users = $this->userService->getAll();

            return $this->success(
                data: UserResource::collection($users),
                message: 'Data user berhasil diambil.'
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
     * Menampilkan detail user.
     */
    public function show(
        User $user
    ): JsonResponse {

        try {

            $user = $this->userService->getById(
                $user->id
            );

            return $this->success(
                data: new UserResource($user),
                message: 'Detail user berhasil diambil.'
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
     * Menambahkan user baru.
     */
    public function store(
        StoreUserRequest $request
    ): JsonResponse {

        try {

            $user = $this->userService->store(
                $request->validated()
            );

            return $this->success(
                data: new UserResource($user),
                message: 'User berhasil ditambahkan.'
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
     * Memperbarui data user.
     */
    public function update(
        UpdateUserRequest $request,
        User $user
    ): JsonResponse {

        try {

            $user = $this->userService->update(
                $user,
                $request->validated()
            );

            return $this->success(
                data: new UserResource($user),
                message: 'User berhasil diperbarui.'
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
     * Menghapus user.
     */
    public function destroy(
        User $user
    ): JsonResponse {

        try {

            $this->userService->destroy(
                $user
            );

            return $this->success(
                message: 'User berhasil dihapus.'
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
     * Mengubah status aktif user.
     */
    public function toggleStatus(
        User $user
    ): JsonResponse {

        try {

            $user = $this->userService->toggleStatus(
                $user
            );

            return $this->success(
                data: new UserResource($user),
                message: 'Status user berhasil diperbarui.'
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
     * Reset password user.
     */
    public function resetPassword(
        User $user
    ): JsonResponse {

        try {

            $user = $this->userService->resetPassword(
                $user,
                'password'
            );

            return $this->success(
                data: new UserResource($user),
                message: 'Password user berhasil direset.'
            );

        } catch (Throwable $e) {

            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );

        }

    }
}