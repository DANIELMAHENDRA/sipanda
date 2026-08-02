<?php

namespace App\Http\Controllers\Api\Potential;

use Throwable;
use App\Models\Potential;
use Illuminate\Http\JsonResponse;
use App\Services\PotentialService;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Requests\Potential\StorePotentialRequest;
use App\Http\Requests\Potential\UpdatePotentialRequest;
use App\Http\Resources\PotentialResource;

class PotentialController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected PotentialService $potentialService
    ) {
    }

    /**
     * Menampilkan seluruh data potensi.
     */
    public function index(): JsonResponse
    {
        try {

            $potential = $this->potentialService->getAll();

            return $this->success(
                data: PotentialResource::collection($potential),
                message: 'Data potensi desa berhasil diambil.'
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
     * Menampilkan detail potensi.
     */
    public function show(
        Potential $potential
    ): JsonResponse {

        try {

            $potential = $this->potentialService->getById(
                $potential->id
            );

            return $this->success(
                data: new PotentialResource($potential),
                message: 'Detail potensi desa berhasil diambil.'
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
     * Menambahkan data potensi.
     */
    public function store(
        StorePotentialRequest $request
    ): JsonResponse {

        try {

            $potential = $this->potentialService->store(
                $request->validated()
            );

            return $this->success(
                data: new PotentialResource($potential),
                message: 'Potensi desa berhasil ditambahkan.'
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
     * Memperbarui data potensi.
     */
    public function update(
        UpdatePotentialRequest $request,
        Potential $potential
    ): JsonResponse {

        try {

            $potential = $this->potentialService->update(
                $potential,
                $request->validated()
            );

            return $this->success(
                data: new PotentialResource($potential),
                message: 'Potensi desa berhasil diperbarui.'
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
     * Menghapus data potensi.
     */
    public function destroy(
        Potential $potential
    ): JsonResponse {

        try {

            $this->potentialService->destroy(
                $potential
            );

            return $this->success(
                message: 'Potensi desa berhasil dihapus.'
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