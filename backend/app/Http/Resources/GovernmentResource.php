<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class GovernmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'name' => $this->name,

            'position' => $this->position,

            'photo' => $this->photo
                ? asset(Storage::url($this->photo))
                : null,

            'description' => $this->description,

            'order_number' => $this->order_number,

            'is_head' => $this->is_head,

            'status' => $this->status,

            'user_id' => $this->user_id,

            'created_at' => optional($this->created_at)
                ->format('Y-m-d H:i:s'),

            'updated_at' => optional($this->updated_at)
                ->format('Y-m-d H:i:s'),

        ];
    }
}