<?php

namespace App\Http\Controllers\Api\Gallery;

use Throwable;
use App\Models\Gallery;
use Illuminate\Http\JsonResponse;
use App\Services\GalleryService;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\Gallery\StoreGalleryRequest;
use App\Http\Requests\Gallery\UpdateGalleryRequest;
use App\Http\Resources\GalleryResource;

class GalleryController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected GalleryService $galleryService
    ) {
    }

    /**
     * Menampilkan seluruh data galeri.
     */
    public function index(): JsonResponse
    {
        try {

            $gallery = $this->galleryService->getAll();

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

    /**
     * Menampilkan detail galeri.
     */
    public function show(
        Gallery $gallery
    ): JsonResponse {

        try {

            $gallery = $this->galleryService->getById(
                $gallery->id
            );

            return $this->success(
                data: new GalleryResource($gallery),
                message: 'Detail galeri berhasil diambil.'
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
     * Menambahkan galeri.
     */
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

    /**
     * Memperbarui galeri.
     */
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

        } catch (Throwable $e) {

            return $this->serverError(
                app()->hasDebugModeEnabled()
                    ? $e->getMessage()
                    : 'Terjadi kesalahan pada server.'
            );

        }
    }

    /**
     * Menghapus galeri.
     */
    public function destroy(
        Gallery $gallery
    ): JsonResponse {

        try {

            $this->galleryService->destroy(
                $gallery
            );

            return $this->success(
                message: 'Galeri berhasil dihapus.'
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