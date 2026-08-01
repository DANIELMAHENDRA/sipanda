<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class GalleryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'title' => $this->title,

            'slug' => $this->slug,

            'image' => $this->image
                ? Storage::url($this->image)
                : null,

            'category' => $this->category,

            'description' => $this->description,

            'location' => $this->location,

            'photographer' => $this->photographer,

            'taken_at' => optional($this->taken_at)
                ->format('Y-m-d'),

            'order_number' => $this->order_number,

            'is_featured' => $this->is_featured,

            'status' => $this->status,

            'user' => [
                'id' => $this->user?->id,
                'name' => $this->user?->name,
            ],

            'created_at' => optional($this->created_at)
                ->format('Y-m-d H:i:s'),

            'updated_at' => optional($this->updated_at)
                ->format('Y-m-d H:i:s'),

        ];
    }
}