<?php

namespace App\Services;

use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ActivityLogService
{
    /**
     * Menyimpan activity log.
     *
     * @param string $activity
     * @param string $module
     * @param string|null $description
     * @param string $status
     * @return ActivityLog
     */
    public function log(
        string $activity,
        string $module,
        ?string $description = null,
        string $status = 'success'
    ): ActivityLog {

        $request = request();

        return ActivityLog::create([

            'user_id' => Auth::id(),

            'activity' => $activity,

            'module' => $module,

            'description' => $description,

            'ip_address' => $request->ip(),

            'user_agent' => $request->userAgent(),

            'url' => $request->fullUrl(),

            'method' => $request->method(),

            'status' => $status,

        ]);
    }
}