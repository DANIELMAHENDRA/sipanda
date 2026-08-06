<?php

namespace App\Http\Controllers\Api\ActivityLog;

use Throwable;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Services\ActivityLogService;
use App\Http\Resources\ActivityLogResource;
use App\Http\Controllers\Api\BaseApiController;

class ActivityLogController extends BaseApiController
{
    /**
     * Constructor.
     */
    public function __construct(
        protected ActivityLogService $activityLogService,
    ) {
    }

    /**
     * Menampilkan seluruh activity log.
     */
    public function index(
        Request $request
    ): JsonResponse {

        try {

            $activityLogs = $this->activityLogService->getAll(

                $request->only([
                    'search',
                    'module',
                    'status',
                    'per_page',
                ])

            );

            return $this->success(

                data: ActivityLogResource::collection($activityLogs),

                message: 'Data activity log berhasil diambil.'

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
     * Menampilkan detail activity log.
     */
    public function show(
        ActivityLog $activityLog
    ): JsonResponse {

        try {

            $activityLog = $this->activityLogService->getById(
                $activityLog->id
            );

            return $this->success(

                data: new ActivityLogResource($activityLog),

                message: 'Detail activity log berhasil diambil.'

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