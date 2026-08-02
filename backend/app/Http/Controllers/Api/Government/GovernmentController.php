<?php

namespace App\Http\Controllers\Api\Government;

use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;
use App\Models\Government;
use App\Http\Controllers\Controller;
use App\Http\Resources\GovernmentResource;
use App\Http\Requests\Government\StoreGovernmentRequest;
use App\Http\Requests\Government\UpdateGovernmentRequest;

class GovernmentController extends Controller
{
    /**
     * Menampilkan seluruh perangkat desa.
     */
    public function index(): JsonResponse
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
            ]
        ]);
    }

    /**
     * Menampilkan detail perangkat desa.
     */
    public function show(Government $government): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => 'Detail perangkat desa berhasil diambil.',
            'data' => new GovernmentResource($government),
        ]);
    }

    /**
     * Menyimpan perangkat desa baru.
     */
    public function store(StoreGovernmentRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('photo')) {

            $data['photo'] = $request
                ->file('photo')
                ->store('government', 'public');
        }

        $data['slug'] = Str::slug($data['name']);

        $government = Government::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Perangkat desa berhasil ditambahkan.',
            'data' => new GovernmentResource($government),
        ], 201);
    }

    /**
     * Memperbarui perangkat desa.
     */
    public function update(
        UpdateGovernmentRequest $request,
        Government $government
    ): JsonResponse {

        $data = $request->validated();

        if ($request->hasFile('photo')) {

            if ($government->photo &&
                \Storage::disk('public')->exists($government->photo)) {

                \Storage::disk('public')->delete($government->photo);
            }

            $data['photo'] = $request
                ->file('photo')
                ->store('government', 'public');
        }

        $data['slug'] = Str::slug($data['name']);

        $government->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Perangkat desa berhasil diperbarui.',
            'data' => new GovernmentResource($government),
        ]);
    }

    /**
     * Menghapus perangkat desa.
     */
    public function destroy(
        Government $government
    ): JsonResponse {

        if ($government->photo &&
            \Storage::disk('public')->exists($government->photo)) {

            \Storage::disk('public')->delete($government->photo);
        }

        $government->delete();

        return response()->json([
            'success' => true,
            'message' => 'Perangkat desa berhasil dihapus.',
        ]);
    }
}