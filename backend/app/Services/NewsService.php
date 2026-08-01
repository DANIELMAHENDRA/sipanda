<?php

namespace App\Services;

use App\Models\News;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class NewsService
{
    /**
     * Folder upload thumbnail.
     */
    private const THUMBNAIL_FOLDER = 'news/thumbnail';

    /**
     * Constructor.
     */
    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Mengambil seluruh data berita.
     */
    public function getAll(
        int $perPage = 10
    ): LengthAwarePaginator {

        return News::query()
            ->with('user')
            ->latest()
            ->paginate($perPage);
    }

    /**
     * Mengambil detail berita.
     */
    public function getById(
        int $id
    ): News {

        return News::query()
            ->with('user')
            ->findOrFail($id);
    }

    /**
     * Menambahkan berita baru.
     */
    public function store(
        array $data
    ): News {

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
            | Published At
            |--------------------------------------------------------------------------
            */

            if (
                $data['status'] === 'published'
                && empty($data['published_at'])
            ) {

                $data['published_at'] = now();

            }

            /*
            |--------------------------------------------------------------------------
            | Simpan Data
            |--------------------------------------------------------------------------
            */

            $news = News::create($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(

                activity: 'Create News',

                module: 'News',

                description: 'Menambahkan berita baru.',

                status: 'success',

            );

            return $news->fresh();

        });

    }

    /**
     * Memperbarui berita.
     */
    public function update(
        News $news,
        array $data
    ): News {

        return DB::transaction(function () use ($news, $data) {

            /*
            |--------------------------------------------------------------------------
            | Upload Thumbnail
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('thumbnail', $data)
                && $data['thumbnail']
            ) {

                $data['thumbnail'] = $this->fileUploadService->replace(

                    file: $data['thumbnail'],

                    oldPath: $news->thumbnail,

                    folder: self::THUMBNAIL_FOLDER,

                );

            }

            /*
            |--------------------------------------------------------------------------
            | Update Slug
            |--------------------------------------------------------------------------
            */

            if (
                isset($data['title'])
            ) {

                $data['slug'] = Str::slug($data['title']);

            }

            /*
            |--------------------------------------------------------------------------
            | Published At
            |--------------------------------------------------------------------------
            */

            if (
                isset($data['status'])
                && $data['status'] === 'published'
                && empty($news->published_at)
            ) {

                $data['published_at'] = now();

            }

            /*
            |--------------------------------------------------------------------------
            | Update Database
            |--------------------------------------------------------------------------
            */

            $news->update($data);

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(

                activity: 'Update News',

                module: 'News',

                description: 'Memperbarui berita.',

                status: 'success',

            );

            return $news->fresh();

        });

    }

    /**
     * Menghapus berita.
     */
    public function destroy(
        News $news
    ): void {

        DB::transaction(function () use ($news) {

            /*
            |--------------------------------------------------------------------------
            | Hapus Thumbnail
            |--------------------------------------------------------------------------
            */

            if ($news->thumbnail) {

                $this->fileUploadService->delete(
                    $news->thumbnail
                );

            }

            /*
            |--------------------------------------------------------------------------
            | Soft Delete
            |--------------------------------------------------------------------------
            */

            $news->delete();

            /*
            |--------------------------------------------------------------------------
            | Activity Log
            |--------------------------------------------------------------------------
            */

            $this->activityLogService->log(

                activity: 'Delete News',

                module: 'News',

                description: 'Menghapus berita.',

                status: 'success',

            );

        });

    }
}