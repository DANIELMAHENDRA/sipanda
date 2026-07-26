<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class SettingResource extends JsonResource
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
            | Website Information
            |--------------------------------------------------------------------------
            */

            'site_name' => $this->site_name,

            'site_tagline' => $this->site_tagline,

            'logo' => $this->logo
                ? Storage::url($this->logo)
                : null,

            'favicon' => $this->favicon
                ? Storage::url($this->favicon)
                : null,

            /*
            |--------------------------------------------------------------------------
            | SEO
            |--------------------------------------------------------------------------
            */

            'meta_title' => $this->meta_title,

            'meta_description' => $this->meta_description,

            'meta_keywords' => $this->meta_keywords,

            /*
            |--------------------------------------------------------------------------
            | Contact
            |--------------------------------------------------------------------------
            */

            'email' => $this->email,

            'phone' => $this->phone,

            'address' => $this->address,

            'google_maps_embed' => $this->google_maps_embed,

            /*
            |--------------------------------------------------------------------------
            | Social Media
            |--------------------------------------------------------------------------
            */

            'facebook' => $this->facebook,

            'instagram' => $this->instagram,

            'youtube' => $this->youtube,

            'tiktok' => $this->tiktok,

            'x' => $this->x,

            'whatsapp' => $this->whatsapp,

            /*
            |--------------------------------------------------------------------------
            | Footer
            |--------------------------------------------------------------------------
            */

            'footer_description' => $this->footer_description,

            'copyright' => $this->copyright,

            /*
            |--------------------------------------------------------------------------
            | System
            |--------------------------------------------------------------------------
            */

            'maintenance_mode' => $this->maintenance_mode,

            'maintenance_message' => $this->maintenance_message,

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