<?php

namespace App\Services;

use App\Models\Setting;
use Illuminate\Support\Facades\DB;

class SettingService
{
    /**
     * Folder upload logo.
     */
    private const LOGO_FOLDER = 'settings/logo';

    /**
     * Folder upload favicon.
     */
    private const FAVICON_FOLDER = 'settings/favicon';

    /**
     * Constructor.
     */
    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Mengambil data pengaturan website.
     *
     * Jika belum ada data setting,
     * maka otomatis akan dibuat.
     *
     * @return Setting
     */
    public function getSetting(): Setting
    {
        return Setting::query()->firstOrCreate(
            [],
            [
                'site_name' => config('app.name'),
            ]
        );
    }

    /**
     * Memperbarui data pengaturan website.
     *
     * @param array $data
     * @return Setting
     */
    public function updateSetting(array $data): Setting
    {
        return DB::transaction(function () use ($data) {

            $setting = $this->getSetting();

            /*
            |--------------------------------------------------------------------------
            | Upload Logo
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('logo', $data)
                && $data['logo']
            ) {
                $data['logo'] = $this->fileUploadService->replace(
                    file: $data['logo'],
                    oldPath: $setting->logo,
                    folder: self::LOGO_FOLDER,
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Upload Favicon
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('favicon', $data)
                && $data['favicon']
            ) {
                $data['favicon'] = $this->fileUploadService->replace(
                    file: $data['favicon'],
                    oldPath: $setting->favicon,
                    folder: self::FAVICON_FOLDER,
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Update Database
            |--------------------------------------------------------------------------
            */

            $setting->update($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Update Website Setting',
                module: 'Setting',
                description: 'Memperbarui data pengaturan website.',
                status: 'success',
            );

            /*
            |--------------------------------------------------------------------------
            | Return Fresh Data
            |--------------------------------------------------------------------------
            */

            return $setting->fresh();
        });
    }
}