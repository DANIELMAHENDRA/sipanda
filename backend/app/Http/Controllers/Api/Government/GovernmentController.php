<?php

namespace App\Http\Controllers\Api\Government;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

use App\Models\Government;
use App\Http\Controllers\Controller;
use App\Http\Resources\GovernmentResource;
use App\Http\Requests\Government\StoreGovernmentRequest;
use App\Http\Requests\Government\UpdateGovernmentRequest;

class GovernmentController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | PUBLIC
    |--------------------------------------------------------------------------
    */

    /**
     * Menampilkan perangkat desa yang sudah dipublikasikan.
     */
    public function indexPublic(): JsonResponse
    {
        $governments = Government::query()
            ->where('status', 'published')
            ->orderBy('order_number')
            ->paginate(10);

        return response()->json([
            'success' => true,
            'message' => 'Data perangkat desa berhasil diambil.',
            'data' => GovernmentResource::collection($governments),
            'meta' => [
                'current_page' => $governments->currentPage(),
                'last_page' => $governments->lastPage(),
                'per_page' => $governments->perPage(),
                'total' => $governments->total(),
            ],
        ]);
    }


    /**
     * Menampilkan detail perangkat desa public.
     *
     * Draft tidak boleh diakses public.
     */
    public function showPublic(
        Government $government
    ): JsonResponse {

        if ($government->status !== 'published') {

            return response()->json([
                'success' => false,
                'message' => 'Data perangkat desa tidak ditemukan.',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Detail perangkat desa berhasil diambil.',
            'data' => new GovernmentResource($government),
        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | ADMIN
    |--------------------------------------------------------------------------
    */

    /**
     * Menampilkan seluruh perangkat desa untuk admin.
     *
     * Draft dan published sama-sama ditampilkan.
     */
    public function indexAdmin(): JsonResponse
    {
        $governments = Government::query()
            ->orderBy('order_number')
            ->paginate(10);

        return response()->json([
            'success' => true,
            'message' => 'Data perangkat desa berhasil diambil.',
            'data' => GovernmentResource::collection($governments),
            'meta' => [
                'current_page' => $governments->currentPage(),
                'last_page' => $governments->lastPage(),
                'per_page' => $governments->perPage(),
                'total' => $governments->total(),
            ],
        ]);
    }


    /**
     * Menampilkan detail perangkat desa untuk admin.
     *
     * Admin boleh melihat draft.
     */
    public function showAdmin(
        Government $government
    ): JsonResponse {

        return response()->json([
            'success' => true,
            'message' => 'Detail perangkat desa berhasil diambil.',
            'data' => new GovernmentResource($government),
        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | STORE
    |--------------------------------------------------------------------------
    */

    /**
     * Menyimpan perangkat desa baru.
     */
    public function store(
        StoreGovernmentRequest $request
    ): JsonResponse {

        $data = $request->validated();


        /*
        |--------------------------------------------------------------------------
        | Upload Foto
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('photo')) {

            $data['photo'] = $request
                ->file('photo')
                ->store('government', 'public');
        }


        /*
        |--------------------------------------------------------------------------
        | User Login
        |--------------------------------------------------------------------------
        */

        $data['user_id'] = auth()->id();


        /*
        |--------------------------------------------------------------------------
        | Simpan Data
        |--------------------------------------------------------------------------
        */

        $government = Government::create($data);


        return response()->json([
            'success' => true,
            'message' => 'Perangkat desa berhasil ditambahkan.',
            'data' => new GovernmentResource($government),
        ], 201);
    }


    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    /**
     * Memperbarui perangkat desa.
     *
     * Status draft/published dapat diubah dari admin.
     */
    public function update(
        UpdateGovernmentRequest $request,
        Government $government
    ): JsonResponse {

        $data = $request->validated();


        /*
        |--------------------------------------------------------------------------
        | Replace Foto
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('photo')) {

            if (
                $government->photo &&
                Storage::disk('public')->exists(
                    $government->photo
                )
            ) {

                Storage::disk('public')->delete(
                    $government->photo
                );
            }


            $data['photo'] = $request
                ->file('photo')
                ->store('government', 'public');
        }


        /*
        |--------------------------------------------------------------------------
        | Update Database
        |--------------------------------------------------------------------------
        */

        $government->update($data);


        return response()->json([
            'success' => true,
            'message' => 'Perangkat desa berhasil diperbarui.',
            'data' => new GovernmentResource(
                $government->fresh()
            ),
        ]);
    }


    /*
    |--------------------------------------------------------------------------
    | DELETE
    |--------------------------------------------------------------------------
    */

    /**
     * Menghapus perangkat desa.
     */
    public function destroy(
        Government $government
    ): JsonResponse {

        /*
        |--------------------------------------------------------------------------
        | Delete Foto
        |--------------------------------------------------------------------------
        */

        if (
            $government->photo &&
            Storage::disk('public')->exists(
                $government->photo
            )
        ) {

            Storage::disk('public')->delete(
                $government->photo
            );
        }


        /*
        |--------------------------------------------------------------------------
        | Soft Delete
        |--------------------------------------------------------------------------
        */

        $government->delete();


        return response()->json([
            'success' => true,
            'message' => 'Perangkat desa berhasil dihapus.',
        ]);
    }
}