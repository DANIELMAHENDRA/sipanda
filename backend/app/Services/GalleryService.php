<?php

namespace App\Services;

use App\Models\Gallery;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GalleryService
{
    /**
     * Folder upload gambar galeri.
     */
    private const IMAGE_FOLDER = 'gallery/image';

    /**
     * Constructor.
     */
    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Mengambil seluruh data galeri.
     */
    public function getAll(
        int $perPage = 10
    ): LengthAwarePaginator {

        return Gallery::query()
            ->with('user')
            ->latest()
            ->paginate($perPage);

    }

    /**
     * Mengambil detail galeri.
     */
    public function getById(
        int $id
    ): Gallery {

        return Gallery::query()
            ->with('user')
            ->findOrFail($id);

    }

    /**
     * Menambahkan galeri.
     */
    public function store(
        array $data
    ): Gallery {

        return DB::transaction(function () use ($data) {

            /*
            |--------------------------------------------------------------------------
            | Upload Image
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('image', $data)
                && $data['image']
            ) {

                $data['image'] = $this->fileUploadService->upload(
                    file: $data['image'],
                    folder: self::IMAGE_FOLDER,
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

            $gallery = Gallery::create($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Create Gallery',
                module: 'Gallery',
                description: 'Menambahkan data galeri.',
                status: 'success',
            );

            return $gallery->fresh();

        });

    }

    /**
     * Memperbarui galeri.
     */
    public function update(
        Gallery $gallery,
        array $data
    ): Gallery {

        return DB::transaction(function () use ($gallery, $data) {

            /*
            |--------------------------------------------------------------------------
            | Replace Image
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('image', $data)
                && $data['image']
            ) {

                $data['image'] = $this->fileUploadService->replace(
                    file: $data['image'],
                    oldPath: $gallery->image,
                    folder: self::IMAGE_FOLDER,
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

            $gallery->update($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Update Gallery',
                module: 'Gallery',
                description: 'Memperbarui data galeri.',
                status: 'success',
            );

            return $gallery->fresh();

        });

    }

    /**
     * Menghapus galeri.
     */
    public function destroy(
        Gallery $gallery
    ): void {

        DB::transaction(function () use ($gallery) {

            /*
            |--------------------------------------------------------------------------
            | Delete Image
            |--------------------------------------------------------------------------
            */

            if ($gallery->image) {

                $this->fileUploadService->delete(
                    $gallery->image
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Soft Delete
            |--------------------------------------------------------------------------
            */

            $gallery->delete();

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(
                activity: 'Delete Gallery',
                module: 'Gallery',
                description: 'Menghapus data galeri.',
                status: 'success',
            );

        });

    }
}