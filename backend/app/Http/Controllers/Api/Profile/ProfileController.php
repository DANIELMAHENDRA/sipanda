<?php

namespace App\Http\Controllers\Api\Profile;

use Throwable;
use Illuminate\Http\JsonResponse;
use App\Services\ProfileService;
use App\Http\Resources\ProfileResource;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\Profile\UpdateProfileRequest;

class ProfileController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected ProfileService $profileService
    ) {
    }

    /**
     * Menampilkan profil desa.
     */
    public function index(): JsonResponse
    {
        try {

            $profile = $this->profileService->getProfile();

            return $this->success(
                data: new ProfileResource($profile),
                message: 'Profil desa berhasil diambil.'
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
     * Memperbarui profil desa.
     */
    public function update(
        UpdateProfileRequest $request
    ): JsonResponse {

        try {

            $profile = $this->profileService->updateProfile(
                $request->validated()
            );

            return $this->success(
                data: new ProfileResource($profile),
                message: 'Profil desa berhasil diperbarui.'
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