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
     *
     * Mendukung:
     * - keyword
     * - category
     * - pagination
     */
    public function getAll(
        int $perPage = 10,
        ?string $keyword = null,
        ?string $category = null
    ): LengthAwarePaginator {

        return Gallery::query()
            ->with('user')

            /*
            |--------------------------------------------------------------------------
            | Hanya Gallery Published
            |--------------------------------------------------------------------------
            */

            ->where('status', 'published')


            /*
            |--------------------------------------------------------------------------
            | Search Keyword
            |--------------------------------------------------------------------------
            |
            | Pencarian dilakukan pada:
            | - title
            | - description
            | - category
            | - location
            | - photographer
            |
            */

            ->when(
                $keyword,
                function ($query) use ($keyword) {

                    $query->where(function ($query) use ($keyword) {

                        $query
                            ->where('title', 'like', "%{$keyword}%")
                            ->orWhere(
                                'description',
                                'like',
                                "%{$keyword}%"
                            )
                            ->orWhere(
                                'category',
                                'like',
                                "%{$keyword}%"
                            )
                            ->orWhere(
                                'location',
                                'like',
                                "%{$keyword}%"
                            )
                            ->orWhere(
                                'photographer',
                                'like',
                                "%{$keyword}%"
                            );

                    });

                }
            )


            /*
            |--------------------------------------------------------------------------
            | Filter Category
            |--------------------------------------------------------------------------
            */

            ->when(
                $category,
                function ($query) use ($category) {

                    $query->where(
                        'category',
                        $category
                    );

                }
            )


            /*
            |--------------------------------------------------------------------------
            | Urutan Data
            |--------------------------------------------------------------------------
            */

            ->orderByDesc('is_featured')
            ->orderBy('order_number')
            ->latest()


            /*
            |--------------------------------------------------------------------------
            | Pagination
            |--------------------------------------------------------------------------
            */

            ->paginate($perPage);
    }


    /**
     * Mengambil statistik galeri.
     */
    public function getStatistics(): array
    {
        $totalGallery = Gallery::query()
            ->where('status', 'published')
            ->count();


        $totalCategories = Gallery::query()
            ->where('status', 'published')
            ->whereNotNull('category')
            ->distinct('category')
            ->count('category');


        $totalFeatured = Gallery::query()
            ->where('status', 'published')
            ->where('is_featured', true)
            ->count();


        $totalThisYear = Gallery::query()
            ->where('status', 'published')
            ->whereYear('taken_at', now()->year)
            ->count();


        return [
            'total_gallery' => $totalGallery,
            'total_categories' => $totalCategories,
            'total_featured' => $totalFeatured,
            'total_this_year' => $totalThisYear,
        ];
    }


    /**
     * Mengambil detail galeri.
     */
    public function getById(
        int $id
    ): Gallery {

        return Gallery::query()
            ->with('user')
            ->where('status', 'published')
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

                $data['image'] =
                    $this->fileUploadService->upload(
                        file: $data['image'],
                        folder: self::IMAGE_FOLDER,
                    );
            }


            /*
            |--------------------------------------------------------------------------
            | Generate Slug
            |--------------------------------------------------------------------------
            */

            $data['slug'] =
                Str::slug($data['title']);


            /*
            |--------------------------------------------------------------------------
            | User Login
            |--------------------------------------------------------------------------
            */

            $data['user_id'] =
                auth()->id();


            /*
            |--------------------------------------------------------------------------
            | Simpan Data
            |--------------------------------------------------------------------------
            */

            $gallery =
                Gallery::create($data);


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

        return DB::transaction(function () use (
            $gallery,
            $data
        ) {

            /*
            |--------------------------------------------------------------------------
            | Replace Image
            |--------------------------------------------------------------------------
            */

            if (
                array_key_exists('image', $data)
                && $data['image']
            ) {

                $data['image'] =
                    $this->fileUploadService->replace(
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

                $data['slug'] =
                    Str::slug($data['title']);
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