<?php

namespace App\Services;

use App\Models\Potential;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PotentialService
{
    private const THUMBNAIL_FOLDER = 'potential/thumbnail';

    private const COVER_FOLDER = 'potential/cover';

    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }


    public function getPublished(
        int $perPage = 10
    ): LengthAwarePaginator {

        return Potential::query()
            ->with('user')
            ->where('status', 'published')
            ->latest()
            ->paginate($perPage);

    }


    public function getPublishedById(
        int $id
    ): Potential {

        return Potential::query()
            ->with('user')
            ->where('status', 'published')
            ->findOrFail($id);

    }

    public function getAll(
        int $perPage = 10
    ): LengthAwarePaginator {

        return Potential::query()
            ->with('user')
            ->latest()
            ->paginate($perPage);

    }

    public function getById(
        int $id
    ): Potential {

        return Potential::query()
            ->with('user')
            ->findOrFail($id);

    }

    public function store(
        array $data
    ): Potential {

        return DB::transaction(function () use ($data) {


            if (
                array_key_exists('thumbnail', $data)
                && $data['thumbnail']
            ) {

                $data['thumbnail'] = $this->fileUploadService->upload(
                    file: $data['thumbnail'],
                    folder: self::THUMBNAIL_FOLDER,
                );

            }

            if (
                array_key_exists('cover_image', $data)
                && $data['cover_image']
            ) {

                $data['cover_image'] = $this->fileUploadService->upload(
                    file: $data['cover_image'],
                    folder: self::COVER_FOLDER,
                );

            }

            $data['slug'] = Str::slug(
                $data['title']
            );

            $data['user_id'] = auth()->id();

            if (
                isset($data['status'])
                && $data['status'] === 'published'
                && empty($data['published_at'])
            ) {

                $data['published_at'] = now();

            }

            if (
                isset($data['status'])
                && $data['status'] === 'draft'
            ) {

                $data['published_at'] = null;

            }

            $potential = Potential::create(
                $data
            );

            $this->activityLogService->log(
                activity: 'Create Potential',
                module: 'Potential',
                description: 'Menambahkan data potensi desa.',
                status: 'success',
            );


            return $potential->fresh([
                'user'
            ]);

        });

    }

    public function update(
        Potential $potential,
        array $data
    ): Potential {

        return DB::transaction(function () use (
            $potential,
            $data
        ) {

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

            if (
                array_key_exists('title', $data)
                && $data['title']
            ) {

                $data['slug'] = Str::slug(
                    $data['title']
                );

            }

            if (
                isset($data['status'])
                && $data['status'] === 'published'
            ) {

                if (
                    empty($potential->published_at)
                    && empty($data['published_at'])
                ) {

                    $data['published_at'] = now();

                }

            }

            if (
                isset($data['status'])
                && $data['status'] === 'draft'
            ) {

                $data['published_at'] = null;

            }

            $potential->update(
                $data
            );

            $this->activityLogService->log(
                activity: 'Update Potential',
                module: 'Potential',
                description: 'Memperbarui data potensi desa.',
                status: 'success',
            );


            return $potential->fresh([
                'user'
            ]);

        });

    }


    public function destroy(
        Potential $potential
    ): void {

        DB::transaction(function () use (
            $potential
        ) {

            if (
                $potential->thumbnail
            ) {

                $this->fileUploadService->delete(
                    $potential->thumbnail
                );

            }

            if (
                $potential->cover_image
            ) {

                $this->fileUploadService->delete(
                    $potential->cover_image
                );

            }

            $potential->delete();

            $this->activityLogService->log(
                activity: 'Delete Potential',
                module: 'Potential',
                description: 'Menghapus data potensi desa.',
                status: 'success',
            );

        });

    }
}