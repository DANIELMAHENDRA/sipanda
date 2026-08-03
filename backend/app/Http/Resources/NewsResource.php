<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class NewsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            'title' => $this->title,

            'slug' => $this->slug,

            'thumbnail' => $this->thumbnail
            ? asset(Storage::url($this->thumbnail))
            : null,

            'description' => Str::limit(strip_tags($this->content), 140),

            'content' => $this->content,

            'category' => $this->category,

            'author' => $this->user?->name,

            'views' => $this->views,

            'is_featured' => $this->is_featured,

            'status' => $this->status,

            'published_at' => optional($this->published_at)
                ->format('d F Y'),

            'created_at' => optional($this->created_at)
                ->format('Y-m-d H:i:s'),

            'updated_at' => optional($this->updated_at)
                ->format('Y-m-d H:i:s'),

        ];
    }
}