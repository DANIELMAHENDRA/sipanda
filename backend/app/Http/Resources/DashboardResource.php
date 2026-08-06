<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DashboardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            /*
            |--------------------------------------------------------------------------
            | Statistik Dashboard
            |--------------------------------------------------------------------------
            */

            'statistics' => $this['statistics'],

            /*
            |--------------------------------------------------------------------------
            | Berita Terbaru
            |--------------------------------------------------------------------------
            */

            'latest_news' => NewsResource::collection(
                $this['latest_news']
            ),

            /*
            |--------------------------------------------------------------------------
            | User Terbaru
            |--------------------------------------------------------------------------
            */

            'latest_users' => UserResource::collection(
                $this['latest_users']
            ),

            /*
            |--------------------------------------------------------------------------
            | Aktivitas Terbaru
            |--------------------------------------------------------------------------
            */

            'recent_activity' => ActivityLogResource::collection(
                $this['recent_activity']
            ),

        ];
    }
}