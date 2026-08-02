<?php

namespace App\Http\Controllers\Api\Service;

use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;
use App\Models\Service;
use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Http\Requests\Service\StoreServiceRequest;
use App\Http\Requests\Service\UpdateServiceRequest;

class ServiceController extends Controller
{
    /**
     * Display a listing of services.
     */
    public function index(): JsonResponse
    {
        $services = Service::query()
            ->orderBy('order_number')
            ->paginate(10);

        return response()->json([
            'success' => true,
            'message' => 'Data layanan berhasil diambil.',
            'data' => ServiceResource::collection($services),
            'meta' => [
                'current_page' => $services->currentPage(),
                'last_page' => $services->lastPage(),
                'per_page' => $services->perPage(),
                'total' => $services->total(),
            ]
        ]);
    }

    /**
     * Display the specified service.
     */
    public function show(Service $service): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => 'Detail layanan berhasil diambil.',
            'data' => new ServiceResource($service),
        ]);
    }

    /**
     * Store a newly created service.
     */
    public function store(StoreServiceRequest $request): JsonResponse
    {
        $data = $request->validated();

        $data['slug'] = Str::slug($data['title']);

        $data['user_id'] = auth()->id();

        $service = Service::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Layanan berhasil ditambahkan.',
            'data' => new ServiceResource($service),
        ], 201);
    }

    /**
     * Update the specified service.
     */
    public function update(
        UpdateServiceRequest $request,
        Service $service
    ): JsonResponse {

        $data = $request->validated();

        $data['slug'] = Str::slug($data['title']);

        $service->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Layanan berhasil diperbarui.',
            'data' => new ServiceResource($service),
        ]);
    }

    /**
     * Remove the specified service.
     */
    public function destroy(Service $service): JsonResponse
    {
        $service->delete();

        return response()->json([
            'success' => true,
            'message' => 'Layanan berhasil dihapus.',
        ]);
    }
}