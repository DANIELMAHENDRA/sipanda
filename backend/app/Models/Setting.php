<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    /**
     * Mass Assignable
     */
    protected $fillable = [

        /*
        |--------------------------------------------------------------------------
        | Website
        |--------------------------------------------------------------------------
        */

        'site_name',
        'site_tagline',
        'logo',
        'favicon',

        /*
        |--------------------------------------------------------------------------
        | SEO
        |--------------------------------------------------------------------------
        */

        'meta_title',
        'meta_description',
        'meta_keywords',

        /*
        |--------------------------------------------------------------------------
        | Contact
        |--------------------------------------------------------------------------
        */

        'email',
        'phone',
        'address',
        'google_maps_embed',

        /*
        |--------------------------------------------------------------------------
        | Social Media
        |--------------------------------------------------------------------------
        */

        'facebook',
        'instagram',
        'youtube',
        'tiktok',
        'x',
        'whatsapp',

        /*
        |--------------------------------------------------------------------------
        | Footer
        |--------------------------------------------------------------------------
        */

        'footer_description',
        'copyright',

        /*
        |--------------------------------------------------------------------------
        | System
        |--------------------------------------------------------------------------
        */

        'maintenance_mode',
        'maintenance_message',
    ];

    /**
     * Attribute Casting
     */
    protected function casts(): array
    {
        return [

            'maintenance_mode' => 'boolean',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

        ];
    }
}