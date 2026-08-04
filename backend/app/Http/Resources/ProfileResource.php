<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProfileResource extends JsonResource
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
            | Informasi Desa
            |--------------------------------------------------------------------------
            */

            'village_name' => $this->village_name,

            'village_head' => $this->village_head,

            'district' => $this->district,

            'regency' => $this->regency,

            'province' => $this->province,

            /*
            |--------------------------------------------------------------------------
            | Media
            |--------------------------------------------------------------------------
            */

            'logo' => $this->logo
                ? asset(Storage::url($this->logo))
                : null,

            'hero_image' => $this->hero_image
                ? asset(Storage::url($this->hero_image))
                : null,

            /*
            |--------------------------------------------------------------------------
            | Profil Desa
            |--------------------------------------------------------------------------
            */

            'about' => $this->about,

            'history' => $this->history,

            'vision' => $this->vision,

            'mission' => $this->mission,

            /*
            |--------------------------------------------------------------------------
            | Geografi
            |--------------------------------------------------------------------------
            */

            'area' => $this->area,

            'population' => $this->population,

            'family_count' => $this->family_count,

            'hamlet_count' => $this->hamlet_count,

            'rt_count' => $this->rt_count,

            'rw_count' => $this->rw_count,

            /*
            |--------------------------------------------------------------------------
            | Batas Wilayah
            |--------------------------------------------------------------------------
            */

            'north_boundary' => $this->north_boundary,

            'south_boundary' => $this->south_boundary,

            'east_boundary' => $this->east_boundary,

            'west_boundary' => $this->west_boundary,

            /*
            |--------------------------------------------------------------------------
            | Koordinat
            |--------------------------------------------------------------------------
            */

            'latitude' => $this->latitude,

            'longitude' => $this->longitude,

            /*
            |--------------------------------------------------------------------------
            | Status
            |--------------------------------------------------------------------------
            */

            'is_active' => $this->is_active,

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