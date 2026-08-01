<?php

namespace App\Http\Controllers\Api\News;

use Throwable;
use App\Models\News;
use Illuminate\Http\JsonResponse;
use App\Services\NewsService;
use App\Http\Resources\NewsResource;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\News\StoreNewsRequest;
use App\Http\Requests\News\UpdateNewsRequest;

class NewsController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected NewsService $newsService
    ) {
    }

    /**
     * Menampilkan seluruh berita.
     */
    public function index(): JsonResponse
    {
        try {

            $news = $this->newsService->getAll();

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
     * Menampilkan detail berita.
     */
    public function show(
        News $news
    ): JsonResponse {

        try {

            $news = $this->newsService->getById(
                $news->id
            );

            return $this->success(

                data: new NewsResource($news),

                message: 'Detail berita berhasil diambil.'

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

        } catch (Throwable $e) {

            return $this->serverError(

                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'

            );

        }
    }
}