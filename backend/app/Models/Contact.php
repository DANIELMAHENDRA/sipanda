<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
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
     * The attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'latitude'   => 'decimal:7',
            'longitude'  => 'decimal:7',
            'is_active'  => 'boolean',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }
}