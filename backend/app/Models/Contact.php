<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    /**
     * Mass Assignable
     */
    protected $fillable = [
        'office_name',
        'address',
        'phone',
        'whatsapp',
        'email',
        'website',
        'facebook',
        'instagram',
        'youtube',
        'tiktok',
        'google_maps_embed',
        'latitude',
        'longitude',
        'monday_friday',
        'saturday',
        'sunday',
        'is_active',
    ];

    /**
     * Attribute Casting
     */
    protected function casts(): array
    {
        return [
            'latitude'  => 'float',
            'longitude' => 'float',
            'is_active' => 'boolean',
        ];
    }
}