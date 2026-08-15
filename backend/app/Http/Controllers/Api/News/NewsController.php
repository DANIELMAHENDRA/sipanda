<?php

namespace App\Http\Controllers\Api\News;

use Throwable;
use App\Models\News;
use App\Services\NewsService;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\NewsResource;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\News\StoreNewsRequest;
use App\Http\Requests\News\UpdateNewsRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class NewsController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected NewsService $newsService
    ) {
    }

    /*
    |--------------------------------------------------------------------------
    | PUBLIC
    |--------------------------------------------------------------------------
    */

    /**
     * Menampilkan berita yang sudah dipublikasikan.
     *
     * GET /api/news
     */
    public function indexPublic(): JsonResponse
    {
        try {

            $news = $this->newsService->getPublished();

            return $this->success(
                data: NewsResource::collection($news),
                message: 'Data berita berhasil diambil.'
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
     * Menampilkan detail berita public.
     *
     * Draft tidak boleh diakses public.
     *
     * GET /api/news/{news}
     */
    public function showPublic(
        News $news
    ): JsonResponse {

        try {

            $news = $this->newsService->getPublishedById(
                $news->id
            );

            return $this->success(
                data: new NewsResource($news),
                message: 'Detail berita berhasil diambil.'
            );

        } catch (ModelNotFoundException $e) {

            return $this->notFound(
                'Berita tidak ditemukan.'
            );

        } catch (Throwable $e) {

            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    /*
    |--------------------------------------------------------------------------
    | ADMIN
    |--------------------------------------------------------------------------
    */

    /**
     * Menampilkan seluruh berita untuk admin.
     *
     * Draft dan published sama-sama ditampilkan.
     *
     * GET /api/admin/news
     */
    public function indexAdmin(): JsonResponse
    {
        try {

            $news = $this->newsService->getAll();

            return $this->success(
                data: NewsResource::collection($news),
                message: 'Data berita admin berhasil diambil.'
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
     * Menampilkan detail berita untuk admin.
     *
     * Admin boleh melihat draft.
     *
     * GET /api/admin/news/{news}
     */
    public function showAdmin(
        News $news
    ): JsonResponse {

        try {

            $news = $this->newsService->getById(
                $news->id
            );

            return $this->success(
                data: new NewsResource($news),
                message: 'Detail berita admin berhasil diambil.'
            );

        } catch (ModelNotFoundException $e) {

            return $this->notFound(
                'Berita tidak ditemukan.'
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
     * Menambahkan berita.
     *
     * POST /api/admin/news
     */
    public function store(
        StoreNewsRequest $request
    ): JsonResponse {

        try {

            $news = $this->newsService->store(
                $request->validated()
            );

            return $this->success(
                data: new NewsResource($news),
                message: 'Berita berhasil ditambahkan.'
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
     * Memperbarui berita.
     *
     * PUT /api/admin/news/{news}
     */
    public function update(
        UpdateNewsRequest $request,
        News $news
    ): JsonResponse {

        try {

            $news = $this->newsService->update(
                $news,
                $request->validated()
            );

            return $this->success(
                data: new NewsResource($news),
                message: 'Berita berhasil diperbarui.'
            );

        } catch (ModelNotFoundException $e) {

            return $this->notFound(
                'Berita tidak ditemukan.'
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
     * Menghapus berita.
     *
     * DELETE /api/admin/news/{news}
     */
    public function destroy(
        News $news
    ): JsonResponse {

        try {

            $this->newsService->destroy(
                $news
            );

            return $this->success(
                message: 'Berita berhasil dihapus.'
            );

        } catch (ModelNotFoundException $e) {

            return $this->notFound(
                'Berita tidak ditemukan.'
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