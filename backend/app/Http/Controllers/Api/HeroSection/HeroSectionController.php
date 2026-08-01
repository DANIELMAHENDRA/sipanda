<?php

namespace App\Http\Controllers\Api\HeroSection;

use Throwable;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\HeroSection\UpdateHeroSectionRequest;
use App\Http\Resources\HeroSectionResource;
use App\Services\HeroSectionService;

class HeroSectionController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected HeroSectionService $heroSectionService
    ) {
    }

    /**
     * Menampilkan Hero Section berdasarkan halaman.
     *
     * @param string $page
     * @return JsonResponse
     */
    public function index(string $page): JsonResponse
    {
        try {

            $heroSection = $this->heroSectionService->getHeroSection(
                page: $page
            );

            return $this->success(
                data: new HeroSectionResource($heroSection),
                message: 'Data Hero Section berhasil diambil.'
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
     * Memperbarui Hero Section berdasarkan halaman.
     *
     * @param UpdateHeroSectionRequest $request
     * @param string $page
     * @return JsonResponse
     */
    public function update(
        UpdateHeroSectionRequest $request,
        string $page
    ): JsonResponse {

        try {

            $heroSection = $this->heroSectionService->updateHeroSection(

                page: $page,

                data: $request->validated(),

            );

            return $this->success(
                data: new HeroSectionResource($heroSection),
                message: 'Hero Section berhasil diperbarui.'
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