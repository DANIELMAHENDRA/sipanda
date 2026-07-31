<?php

namespace App\Http\Controllers\Api\Setting;

use Throwable;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\Setting\UpdateSettingRequest;
use App\Http\Resources\SettingResource;
use App\Services\SettingService;
use Illuminate\Http\JsonResponse;

class SettingController extends BaseApiController
{
    /**
     * Constructor
     */
    public function __construct(
        protected SettingService $settingService
    ) {
    }

    /**
     * Menampilkan data pengaturan website.
     */
    public function index(): JsonResponse
    {
        try {

            $setting = $this->settingService->getSetting();

            return $this->success(
                data: new SettingResource($setting),
                message: 'Data pengaturan website berhasil diambil.'
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
     * Memperbarui data pengaturan website.
     */
    public function update(
        UpdateSettingRequest $request
    ): JsonResponse {

        try {

            $setting = $this->settingService->updateSetting(
                $request->validated()
            );

            return $this->success(
                data: new SettingResource($setting),
                message: 'Pengaturan website berhasil diperbarui.'
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