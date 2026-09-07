<?php

namespace App\Http\Controllers\Api\Potential;

use Throwable;

use App\Models\Potential;
use Illuminate\Http\JsonResponse;

use App\Services\PotentialService;

use App\Http\Resources\PotentialResource;

use App\Http\Controllers\Api\BaseApiController;

use App\Http\Requests\Potential\StorePotentialRequest;
use App\Http\Requests\Potential\UpdatePotentialRequest;


class PotentialController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected PotentialService $potentialService
    ) {
    }


    /*
    |--------------------------------------------------------------------------
    | PUBLIC
    |--------------------------------------------------------------------------
    */


    /**
     * Menampilkan potensi desa yang sudah dipublikasikan.
     *
     * Public hanya boleh melihat:
     *
     * status = published
     */
    public function index(): JsonResponse
    {
        try {

            $potential = $this->potentialService->getPublished();


            return $this->success(
                data: PotentialResource::collection(
                    $potential
                ),
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
     * Menampilkan detail potensi untuk public.
     *
     * Draft tidak boleh diakses.
     */
    public function show(
        Potential $potential
    ): JsonResponse {

        try {

            /*
            |--------------------------------------------------------------------------
            | Pastikan Published
            |--------------------------------------------------------------------------
            */

            if (
                $potential->status !== 'published'
            ) {

                return $this->notFound(
                    message: 'Data potensi desa tidak ditemukan.'
                );

            }


            /*
            |--------------------------------------------------------------------------
            | Ambil Data Published
            |--------------------------------------------------------------------------
            */

            $potential = $this->potentialService->getPublishedById(
                $potential->id
            );


            return $this->success(
                data: new PotentialResource(
                    $potential
                ),
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


    /*
    |--------------------------------------------------------------------------
    | ADMIN
    |--------------------------------------------------------------------------
    */


    /**
     * Menampilkan seluruh data potensi untuk admin.
     *
     * Admin dapat melihat:
     *
     * - draft
     * - published
     */
    public function indexAdmin(): JsonResponse
    {
        try {

            $potential = $this->potentialService->getAll();


            return $this->success(
                data: PotentialResource::collection(
                    $potential
                ),
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
     * Menampilkan detail potensi untuk admin.
     *
     * Admin boleh melihat draft maupun published.
     */
    public function showAdmin(
        Potential $potential
    ): JsonResponse {

        try {

            $potential = $this->potentialService->getById(
                $potential->id
            );


            return $this->success(
                data: new PotentialResource(
                    $potential
                ),
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


    /*
    |--------------------------------------------------------------------------
    | STORE
    |--------------------------------------------------------------------------
    */


    /**
     * Menambahkan data potensi baru.
     *
     * Endpoint ini digunakan oleh admin.
     */
public function store(
    StorePotentialRequest $request
): JsonResponse {

    try {

        return response()->json([
            'success' => true,
            'debug' => [
                'validated' => $request->validated(),
                'all' => $request->all(),
            ],
        ]);

    } catch (Throwable $e) {

        return response()->json([
            'success' => false,
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
        ], 500);

    }
}


    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */


    /**
     * Memperbarui data potensi.
     *
     * Status dapat diubah:
     *
     * published -> draft
     * draft     -> published
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
                data: new PotentialResource(
                    $potential
                ),
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


    /*
    |--------------------------------------------------------------------------
    | DELETE
    |--------------------------------------------------------------------------
    */


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