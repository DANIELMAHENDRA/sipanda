<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
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

            'office_name' => $this->office_name,

            'address' => $this->address,

            'phone' => $this->phone,

            'whatsapp' => $this->whatsapp,

            'email' => $this->email,

            'website' => $this->website,

            'facebook' => $this->facebook,

            'instagram' => $this->instagram,

            'youtube' => $this->youtube,

            'tiktok' => $this->tiktok,

            'google_maps_embed' => $this->google_maps_embed,

            'latitude' => $this->latitude,

            'longitude' => $this->longitude,

            'monday_friday' => $this->monday_friday,

            'saturday' => $this->saturday,

            'sunday' => $this->sunday,

            'is_active' => $this->is_active,

            'created_at' => optional($this->created_at)
                ->format('Y-m-d H:i:s'),

            'updated_at' => optional($this->updated_at)
                ->format('Y-m-d H:i:s'),

        ];
    }
}