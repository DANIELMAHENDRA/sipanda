<?php

namespace App\Services;

use App\Models\Potential;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PotentialService
{
    /**
     * Folder upload thumbnail.
     */
    private const THUMBNAIL_FOLDER = 'potential/thumbnail';

    /**
     * Folder upload cover.
     */
    private const COVER_FOLDER = 'potential/cover';

    /**
     * Constructor.
     */
    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Mengambil seluruh data potensi.
     */
    public function getAll(
        int $perPage = 10
    ): LengthAwarePaginator {

        return Potential::query()
            ->with('user')
            ->latest()
            ->paginate($perPage);

    }

    /**
     * Mengambil detail potensi.
     */
    public function getById(
        int $id
    ): Potential {

        return Potential::query()
            ->with('user')
            ->findOrFail($id);

    }

    /**
     * Menambahkan potensi.
     */
    public function store(
        array $data
    ): Potential {

        return DB::transaction(function () use ($data) {

            /*
            |--------------------------------------------------------------------------
            | Upload Thumbnail
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('thumbnail', $data)
                && $data['thumbnail']
            ) {

                $data['thumbnail'] = $this->fileUploadService->upload(
                    file: $data['thumbnail'],
                    folder: self::THUMBNAIL_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Upload Cover
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('cover_image', $data)
                && $data['cover_image']
            ) {

                $data['cover_image'] = $this->fileUploadService->upload(
                    file: $data['cover_image'],
                    folder: self::COVER_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Generate Slug
            |--------------------------------------------------------------------------
            */

            $data['slug'] = Str::slug($data['title']);

            /*
            |--------------------------------------------------------------------------
            | User Login
            |--------------------------------------------------------------------------
            */

            $data['user_id'] = auth()->id();

            /*
            |--------------------------------------------------------------------------
            | Simpan Data
            |--------------------------------------------------------------------------
            */

            $potential = Potential::create($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Create Potential',
                module: 'Potential',
                description: 'Menambahkan data potensi desa.',
                status: 'success',
            );

            return $potential->fresh();

        });

    }

    /**
     * Memperbarui potensi.
     */
    public function update(
        Potential $potential,
        array $data
    ): Potential {

        return DB::transaction(function () use ($potential, $data) {

            /*
            |--------------------------------------------------------------------------
            | Replace Thumbnail
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('thumbnail', $data)
                && $data['thumbnail']
            ) {

                $data['thumbnail'] = $this->fileUploadService->replace(
                    file: $data['thumbnail'],
                    oldPath: $potential->thumbnail,
                    folder: self::THUMBNAIL_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Replace Cover
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('cover_image', $data)
                && $data['cover_image']
            ) {

                $data['cover_image'] = $this->fileUploadService->replace(
                    file: $data['cover_image'],
                    oldPath: $potential->cover_image,
                    folder: self::COVER_FOLDER,
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Update Slug
            |--------------------------------------------------------------------------
            */

            if (isset($data['title'])) {

                $data['slug'] = Str::slug($data['title']);

            }

            /*
            |--------------------------------------------------------------------------
            | Update Database
            |--------------------------------------------------------------------------
            */

            $potential->update($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Update Potential',
                module: 'Potential',
                description: 'Memperbarui data potensi desa.',
                status: 'success',
            );

            return $potential->fresh();

        });

    }

    /**
     * Menghapus potensi.
     */
    public function destroy(
        Potential $potential
    ): void {

        DB::transaction(function () use ($potential) {

            /*
            |--------------------------------------------------------------------------
            | Delete Thumbnail
            |--------------------------------------------------------------------------
            */

            if ($potential->thumbnail) {

                $this->fileUploadService->delete(
                    $potential->thumbnail
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Delete Cover
            |--------------------------------------------------------------------------
            */

            if ($potential->cover_image) {

                $this->fileUploadService->delete(
                    $potential->cover_image
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Soft Delete
            |--------------------------------------------------------------------------
            */

            $potential->delete();

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Delete Potential',
                module: 'Potential',
                description: 'Menghapus data potensi desa.',
                status: 'success',
            );

        });

    }
}