<?php

namespace App\Services;

use App\Models\User;
use App\Models\News;
use App\Models\Gallery;
use App\Models\Service;
use App\Models\Potential;
use App\Models\Government;
use App\Models\ActivityLog;

class DashboardService
{
    /**
     * Mengambil seluruh data dashboard.
     */
    public function getDashboard(): array
    {
        return [

            /*
            |--------------------------------------------------------------------------
            | Statistik
            |--------------------------------------------------------------------------
            */

            'statistics' => [

                'users' => [
                    'total' => User::count(),
                    'active' => User::where('is_active', true)->count(),
                    'inactive' => User::where('is_active', false)->count(),
                    'super_admin' => User::where('role', 'super_admin')->count(),
                    'admin' => User::where('role', 'admin')->count(),
                    'pengguna' => User::where('role', 'pengguna')->count(),
                ],

                'news' => [
                    'total' => News::count(),
                    'published' => News::where('status', 'published')->count(),
                    'draft' => News::where('status', 'draft')->count(),
                ],

                'gallery' => Gallery::count(),

                'potential' => Potential::count(),

                'government' => Government::count(),

                'service' => Service::count(),

                'activity_log' => ActivityLog::count(),

            ],

            /*
            |--------------------------------------------------------------------------
            | User Terbaru
            |--------------------------------------------------------------------------
            */

            'latest_users' => User::query()
                ->latest()
                ->take(5)
                ->get(),

            /*
            |--------------------------------------------------------------------------
            | Berita Terbaru
            |--------------------------------------------------------------------------
            */

            'latest_news' => News::query()
                ->latest()
                ->take(5)
                ->get(),

            /*
            |--------------------------------------------------------------------------
            | Aktivitas Terbaru
            |--------------------------------------------------------------------------
            */

            'recent_activity' => ActivityLog::query()
                ->with('user')
                ->latest()
                ->take(10)
                ->get(),

        ];
    }
}