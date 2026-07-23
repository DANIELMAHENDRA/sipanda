<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    use HasFactory;

    /**
     * Mass Assignable
     */
    protected $fillable = [
        'page',
        'title',
        'subtitle',
        'description',
        'background_image',
        'button_text',
        'button_link',
        'overlay_color',
        'overlay_opacity',
        'is_active',
        'order_number',
    ];

    /**
     * Attribute Casting
     */
    protected function casts(): array
    {
        return [
            'overlay_opacity' => 'float',
            'is_active'       => 'boolean',
            'order_number'    => 'integer',
        ];
    }
}