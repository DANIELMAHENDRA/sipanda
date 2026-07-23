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
        'site_name',
        'site_tagline',
        'logo',
        'favicon',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'email',
        'phone',
        'footer_description',
        'copyright',
        'maintenance_mode',
    ];

    /**
     * Attribute Casting
     */
    protected function casts(): array
    {
        return [
            'maintenance_mode' => 'boolean',
        ];
    }
}