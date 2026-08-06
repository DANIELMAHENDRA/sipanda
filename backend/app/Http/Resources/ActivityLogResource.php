<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityLogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'activity' => $this->activity,

            'module' => $this->module,

            'description' => $this->description,

            'status' => $this->status,

            'method' => $this->method,

            'url' => $this->url,

            'ip_address' => $this->ip_address,

            'user_agent' => $this->user_agent,

            'user' => [

                'id' => $this->user?->id,

                'name' => $this->user?->name,

                'role' => $this->user?->role,

            ],

            'created_at' => optional($this->created_at)
                ->format('Y-m-d H:i:s'),

        ];
    }
}