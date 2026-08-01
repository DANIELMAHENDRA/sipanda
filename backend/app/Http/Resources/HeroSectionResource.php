<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class HeroSectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,

            /*
            |--------------------------------------------------------------------------
            | Page
            |--------------------------------------------------------------------------
            */

            'page' => $this->page,

            /*
            |--------------------------------------------------------------------------
            | Hero Content
            |--------------------------------------------------------------------------
            */

            'title' => $this->title,

            'subtitle' => $this->subtitle,

            'description' => $this->description,

            /*
            |--------------------------------------------------------------------------
            | Background
            |--------------------------------------------------------------------------
            */

            'background_image' => $this->background_image
                ? Storage::url($this->background_image)
                : null,

            /*
            |--------------------------------------------------------------------------
            | Button
            |--------------------------------------------------------------------------
            */

            'button_text' => $this->button_text,

            'button_link' => $this->button_link,

            /*
            |--------------------------------------------------------------------------
            | Overlay
            |--------------------------------------------------------------------------
            */

            'overlay_color' => $this->overlay_color,

            'overlay_opacity' => (float) $this->overlay_opacity,

            /*
            |--------------------------------------------------------------------------
            | Status
            |--------------------------------------------------------------------------
            */

            'is_active' => $this->is_active,

            /*
            |--------------------------------------------------------------------------
            | Order
            |--------------------------------------------------------------------------
            */

            'order_number' => $this->order_number,

            /*
            |--------------------------------------------------------------------------
            | Timestamp
            |--------------------------------------------------------------------------
            */

            'created_at' => optional($this->created_at)
                ->format('Y-m-d H:i:s'),

            'updated_at' => optional($this->updated_at)
                ->format('Y-m-d H:i:s'),

        ];
    }
}