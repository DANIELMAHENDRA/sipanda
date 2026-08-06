<?php

namespace App\Http\Controllers\Api\Dashboard;

use Throwable;
use Illuminate\Http\JsonResponse;
use App\Services\DashboardService;
use App\Http\Controllers\Api\BaseApiController;
use App\Http\Resources\DashboardResource;

class DashboardController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected DashboardService $dashboardService,
    ) {
    }

    /**
     * Menampilkan dashboard.
     */
    public function index(): JsonResponse
    {
        try {

            $dashboard = $this->dashboardService->getDashboard();

            return $this->success(

                data: new DashboardResource($dashboard),

                message: 'Data dashboard berhasil diambil.'

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