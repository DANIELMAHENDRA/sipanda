<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PotentialResource extends JsonResource
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

            'thumbnail' => $this->thumbnail
                ? Storage::url($this->thumbnail)
                : null,

            'cover_image' => $this->cover_image
                ? Storage::url($this->cover_image)
                : null,

            'category' => $this->category,

            'excerpt' => $this->excerpt,

            'content' => $this->content,

            'statistics' => [

                [
                    'title' => $this->statistic_1_title,
                    'value' => $this->statistic_1_value,
                ],

                [
                    'title' => $this->statistic_2_title,
                    'value' => $this->statistic_2_value,
                ],

                [
                    'title' => $this->statistic_3_title,
                    'value' => $this->statistic_3_value,
                ],

            ],

            'quote' => $this->quote,

            'quote_author' => $this->quote_author,

            'is_featured' => $this->is_featured,

            'status' => $this->status,

            'published_at' => optional($this->published_at)
                ->format('Y-m-d H:i:s'),

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