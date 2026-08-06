<?php

namespace App\Services;

use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ActivityLogService
{
    /**
     * Constructor.
     */
    public function __construct(
        protected Request $request,
    ) {
    }

    /**
     * Menyimpan activity log.
     */
    public function log(
        string $activity,
        string $module,
        ?string $description = null,
        string $status = 'success',
        ?int $userId = null,
    ): ActivityLog {

        return ActivityLog::create([

            'user_id'     => $userId ?? Auth::id(),

            'activity'    => $activity,

            'module'      => $module,

            'description' => $description,

            'ip_address'  => $this->request->ip(),

            'user_agent'  => $this->request->userAgent(),

            'url'         => $this->request->fullUrl(),

            'method'      => $this->request->method(),

            'status'      => strtolower($status),

        ]);

    }

    /**
     * Mengambil seluruh activity log.
     */
    public function getAll(
        array $filters = []
    ): LengthAwarePaginator {

        return ActivityLog::query()

            ->with('user')

            ->when(

                $filters['search'] ?? null,

                function ($query, $search) {

                    $query->where(function ($q) use ($search) {

                        $q->where('activity', 'like', "%{$search}%")
                            ->orWhere('module', 'like', "%{$search}%")
                            ->orWhere('description', 'like', "%{$search}%");

                    });

                }

            )

            ->when(

                $filters['module'] ?? null,

                fn($query, $module) =>

                $query->where('module', $module)

            )

            ->when(

                $filters['status'] ?? null,

                fn($query, $status) =>

                $query->where('status', $status)

            )

            ->latest()

            ->paginate(

                $filters['per_page'] ?? 10

            );

    }

    /**
     * Mengambil detail activity log.
     */
    public function getById(
        int $id
    ): ActivityLog {

        return ActivityLog::query()

            ->with('user')

            ->findOrFail($id);

    }

}