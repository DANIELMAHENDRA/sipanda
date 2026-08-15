<?php

namespace App\Http\Controllers\Api\Gallery;

use Throwable;
use App\Models\Gallery;
use App\Services\GalleryService;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\GalleryResource;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\Gallery\StoreGalleryRequest;
use App\Http\Requests\Gallery\UpdateGalleryRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class GalleryController extends BaseApiController
{
    public function __construct(
        protected GalleryService $galleryService
    ) {
    }

    public function indexPublic(): JsonResponse
    {
        try {
            $gallery = $this->galleryService->getPublished(
                perPage: 10,
                keyword: request()->input('keyword'),
                category: request()->input('category')
            );

            return $this->success(
                data: GalleryResource::collection($gallery),
                message: 'Data galeri berhasil diambil.'
            );
        } catch (Throwable $e) {
            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    public function showPublic(
        Gallery $gallery
    ): JsonResponse {
        try {
            $gallery = $this->galleryService->getPublishedById(
                $gallery->id
            );

            return $this->success(
                data: new GalleryResource($gallery),
                message: 'Detail galeri berhasil diambil.'
            );
        } catch (ModelNotFoundException $e) {
            return $this->notFound(
                'Galeri tidak ditemukan.'
            );
        } catch (Throwable $e) {
            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    public function indexAdmin(): JsonResponse
    {
        try {
            $gallery = $this->galleryService->getAll(
                perPage: 10,
                keyword: request()->input('keyword'),
                category: request()->input('category'),
                status: request()->input('status')
            );

            return $this->success(
                data: GalleryResource::collection($gallery),
                message: 'Data galeri admin berhasil diambil.'
            );
        } catch (Throwable $e) {
            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    public function showAdmin(
        Gallery $gallery
    ): JsonResponse {
        try {
            $gallery = $this->galleryService->getById(
                $gallery->id
            );

            return $this->success(
                data: new GalleryResource($gallery),
                message: 'Detail galeri admin berhasil diambil.'
            );
        } catch (ModelNotFoundException $e) {
            return $this->notFound(
                'Galeri tidak ditemukan.'
            );
        } catch (Throwable $e) {
            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    public function statistics(): JsonResponse
    {
        try {
            $statistics = $this->galleryService->getStatistics();

            return $this->success(
                data: $statistics,
                message: 'Statistik galeri berhasil diambil.'
            );
        } catch (Throwable $e) {
            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    public function store(
        StoreGalleryRequest $request
    ): JsonResponse {
        try {
            $gallery = $this->galleryService->store(
                $request->validated()
            );

            return $this->success(
                data: new GalleryResource($gallery),
                message: 'Galeri berhasil ditambahkan.'
            );
        } catch (Throwable $e) {
            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    public function update(
        UpdateGalleryRequest $request,
        Gallery $gallery
    ): JsonResponse {
        try {
            $gallery = $this->galleryService->update(
                $gallery,
                $request->validated()
            );

            return $this->success(
                data: new GalleryResource($gallery),
                message: 'Galeri berhasil diperbarui.'
            );
        } catch (ModelNotFoundException $e) {
            return $this->notFound(
                'Galeri tidak ditemukan.'
            );
        } catch (Throwable $e) {
            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );
        }
    }

    public function destroy(
        Gallery $gallery
    ): JsonResponse {
        try {
            $this->galleryService->destroy($gallery);

            return $this->success(
                message: 'Galeri berhasil dihapus.'
            );
        } catch (ModelNotFoundException $e) {
            return $this->notFound(
                'Galeri tidak ditemukan.'
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