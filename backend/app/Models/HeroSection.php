<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
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
     * The attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'overlay_opacity' => 'decimal:2',
            'is_active'       => 'boolean',
            'order_number'    => 'integer',
            'created_at'      => 'datetime',
            'updated_at'      => 'datetime',
        ];
    }
}