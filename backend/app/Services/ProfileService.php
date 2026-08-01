<?php

namespace App\Services;

use App\Models\Profile;
use Illuminate\Support\Facades\DB;

class ProfileService
{
    /**
     * Folder upload logo.
     */
    private const LOGO_FOLDER = 'profile/logo';

    /**
     * Folder upload hero image.
     */
    private const HERO_FOLDER = 'profile/hero';

    /**
     * Constructor.
     */
    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Mengambil data profil desa.
     *
     * Jika belum ada maka otomatis dibuat.
     */
    public function getProfile(): Profile
    {
        return Profile::query()->firstOrCreate(
            [],
            [
                'village_name' => 'Desa Panca Tunggal',
                'district'     => 'Merbau Mataram',
                'regency'      => 'Lampung Selatan',
                'province'     => 'Lampung',
            ]
        );
    }

    /**
     * Update profil desa.
     */
    public function updateProfile(array $data): Profile
    {
        return DB::transaction(function () use ($data) {

            $profile = $this->getProfile();

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
                    oldPath: $profile->logo,
                    folder: self::LOGO_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Upload Hero Image
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('hero_image', $data)
                && $data['hero_image']
            ) {

                $data['hero_image'] = $this->fileUploadService->replace(
                    file: $data['hero_image'],
                    oldPath: $profile->hero_image,
                    folder: self::HERO_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Update Database
            |--------------------------------------------------------------------------
            */

            $profile->update($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Update Village Profile',
                module: 'Profile',
                description: 'Memperbarui profil desa.',
                status: 'success',
            );

            /*
            |--------------------------------------------------------------------------
            | Return Fresh Data
            |--------------------------------------------------------------------------
            */

            return $profile->fresh();
        });
    }
}