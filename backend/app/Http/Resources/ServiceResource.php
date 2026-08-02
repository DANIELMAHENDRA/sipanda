<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
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

            'title' => $this->title,

            'slug' => $this->slug,

            'icon' => $this->icon,

            'description' => $this->description,

            'requirements' => $this->requirements,

            'procedure' => $this->procedure,

            'processing_time' => $this->processing_time,

            'cost' => $this->cost,

            'person_in_charge' => $this->person_in_charge,

            'order_number' => $this->order_number,

            'is_active' => $this->is_active,

            'user_id' => $this->user_id,

            'created_at' => optional($this->created_at)
                ->format('Y-m-d H:i:s'),

            'updated_at' => optional($this->updated_at)
                ->format('Y-m-d H:i:s'),

        ];
    }
}