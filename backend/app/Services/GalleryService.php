<?php

namespace App\Services;

use App\Models\Gallery;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GalleryService
{
    private const IMAGE_FOLDER = 'gallery/image';

    public function __construct(
        protected FileUploadService $fileUploadService,
        protected ActivityLogService $activityLogService,
    ) {
    }

    public function getPublished(
        int $perPage = 10,
        ?string $keyword = null,
        ?string $category = null
    ): LengthAwarePaginator {
        $perPage = min(max($perPage, 1), 100);

        return Gallery::query()
            ->with('user')
            ->where('status', 'published')
            ->when($keyword, function ($query) use ($keyword) {
                $query->where(function ($query) use ($keyword) {
                    $query
                        ->where('title', 'like', "%{$keyword}%")
                        ->orWhere('description', 'like', "%{$keyword}%")
                        ->orWhere('category', 'like', "%{$keyword}%")
                        ->orWhere('location', 'like', "%{$keyword}%")
                        ->orWhere('photographer', 'like', "%{$keyword}%");
                });
            })
            ->when($category, function ($query) use ($category) {
                $query->where('category', $category);
            })
            ->orderByDesc('is_featured')
            ->orderBy('order_number')
            ->latest()
            ->paginate($perPage);
    }

    public function getPublishedById(
        int $id
    ): Gallery {
        return Gallery::query()
            ->with('user')
            ->where('status', 'published')
            ->findOrFail($id);
    }

    public function getAll(
        int $perPage = 10,
        ?string $keyword = null,
        ?string $category = null,
        ?string $status = null
    ): LengthAwarePaginator {
        $perPage = min(max($perPage, 1), 100);

        if ($status !== null && !in_array($status, ['draft', 'published'], true)) {
            $status = null;
        }

        return Gallery::query()
            ->with('user')
            ->when($keyword, function ($query) use ($keyword) {
                $query->where(function ($query) use ($keyword) {
                    $query
                        ->where('title', 'like', "%{$keyword}%")
                        ->orWhere('description', 'like', "%{$keyword}%")
                        ->orWhere('category', 'like', "%{$keyword}%")
                        ->orWhere('location', 'like', "%{$keyword}%")
                        ->orWhere('photographer', 'like', "%{$keyword}%");
                });
            })
            ->when($category, function ($query) use ($category) {
                $query->where('category', $category);
            })
            ->when($status, function ($query) use ($status) {
                $query->where('status', $status);
            })
            ->orderByDesc('is_featured')
            ->orderBy('order_number')
            ->latest()
            ->paginate($perPage);
    }

    public function getById(
        int $id
    ): Gallery {
        return Gallery::query()
            ->with('user')
            ->findOrFail($id);
    }

    public function getStatistics(): array
    {
        $published = Gallery::query()
            ->where('status', 'published');

        return [
            'total_gallery' => (clone $published)->count(),
            'total_categories' => (clone $published)
                ->whereNotNull('category')
                ->distinct()
                ->count('category'),
            'total_featured' => (clone $published)
                ->where('is_featured', true)
                ->count(),
            'total_this_year' => (clone $published)
                ->whereYear('taken_at', now()->year)
                ->count(),
        ];
    }

    public function store(
        array $data
    ): Gallery {
        return DB::transaction(function () use ($data) {
            if (
                array_key_exists('image', $data)
                && $data['image']
            ) {
                $data['image'] = $this->fileUploadService->upload(
                    file: $data['image'],
                    folder: self::IMAGE_FOLDER,
                );
            }

            $data['slug'] = Str::slug($data['title']);
            $data['user_id'] = auth()->id();

            $gallery = Gallery::create($data);

            $this->activityLogService->log(
                activity: 'Create Gallery',
                module: 'Gallery',
                description: 'Menambahkan data galeri.',
                status: 'success',
            );

            return $gallery->fresh();
        });
    }

    public function update(
        Gallery $gallery,
        array $data
    ): Gallery {
        return DB::transaction(function () use ($gallery, $data) {
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

            if (isset($data['title'])) {
                $data['slug'] = Str::slug($data['title']);
            }

            $gallery->update($data);

            $this->activityLogService->log(
                activity: 'Update Gallery',
                module: 'Gallery',
                description: 'Memperbarui data galeri.',
                status: 'success',
            );

            return $gallery->fresh();
        });
    }

    public function destroy(
        Gallery $gallery
    ): void {
        DB::transaction(function () use ($gallery) {
            if ($gallery->image) {
                $this->fileUploadService->delete(
                    $gallery->image
                );
            }

            $gallery->delete();

            $this->activityLogService->log(
                activity: 'Delete Gallery',
                module: 'Gallery',
                description: 'Menghapus data galeri.',
                status: 'success',
            );
        });
    }
}