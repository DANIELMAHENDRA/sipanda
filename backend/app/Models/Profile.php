<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'village_name',
        'village_head',
        'district',
        'regency',
        'province',

        'logo',
        'hero_image',

        'history',
        'vision',
        'mission',

        'area',
        'population',
        'family_count',
        'hamlet_count',
        'rt_count',
        'rw_count',

        'north_boundary',
        'south_boundary',
        'east_boundary',
        'west_boundary',

        'latitude',
        'longitude',

        'is_active',
    ];

    /**
     * The attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'area'         => 'decimal:2',

            'population'   => 'integer',
            'family_count' => 'integer',
            'hamlet_count' => 'integer',
            'rt_count'     => 'integer',
            'rw_count'     => 'integer',

            'latitude'     => 'decimal:7',
            'longitude'    => 'decimal:7',

            'is_active'    => 'boolean',

            'created_at'   => 'datetime',
            'updated_at'   => 'datetime',
        ];
    }
}