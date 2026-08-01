<?php

namespace App\Services;

use App\Models\HeroSection;
use Illuminate\Support\Facades\DB;

class HeroSectionService
{
    /**
     * Folder upload background hero.
     */
    private const BACKGROUND_FOLDER = 'hero/background';

    /**
     * Constructor.
     */
    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Mengambil Hero Section berdasarkan halaman.
     *
     * Jika belum ada maka otomatis dibuat.
     *
     * @param string $page
     * @return HeroSection
     */
    public function getHeroSection(string $page): HeroSection
    {
        return HeroSection::query()->firstOrCreate(
            [
                'page' => $page,
            ],
            [
                'title' => 'Hero Section',
                'is_active' => true,
            ]
        );
    }

    /**
     * Update Hero Section.
     *
     * @param string $page
     * @param array $data
     * @return HeroSection
     */
    public function updateHeroSection(
        string $page,
        array $data
    ): HeroSection {

        return DB::transaction(function () use ($page, $data) {

            $heroSection = $this->getHeroSection($page);

            /*
            |--------------------------------------------------------------------------
            | Upload Background Image
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('background_image', $data)
                && $data['background_image']
            ) {

                $data['background_image'] = $this->fileUploadService->replace(

                    file: $data['background_image'],

                    oldPath: $heroSection->background_image,

                    folder: self::BACKGROUND_FOLDER,

                );
            }

            /*
            |--------------------------------------------------------------------------
            | Pastikan Page Tidak Berubah
            |--------------------------------------------------------------------------
            */

            $data['page'] = $page;

            /*
            |--------------------------------------------------------------------------
            | Update Database
            |--------------------------------------------------------------------------
            */

            $heroSection->update($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(

                activity: 'Update Hero Section',

                module: 'Hero Section',

                description: "Memperbarui Hero Section halaman {$page}.",

                status: 'success',

            );

            /*
            |--------------------------------------------------------------------------
            | Return Fresh Data
            |--------------------------------------------------------------------------
            */

            return $heroSection->fresh();
        });
    }
}