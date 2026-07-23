<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Potential extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'title',
        'slug',
        'thumbnail',
        'cover_image',
        'category',
        'excerpt',
        'content',

        'statistic_1_title',
        'statistic_1_value',

        'statistic_2_title',
        'statistic_2_value',

        'statistic_3_title',
        'statistic_3_value',

        'quote',
        'quote_author',

        'is_featured',
        'status',
        'published_at',
        'user_id',
    ];

    /**
     * The attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'is_featured' => 'boolean',
            'published_at' => 'datetime',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'deleted_at' => 'datetime',
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Relationships
    |--------------------------------------------------------------------------
    */

    /**
     * Potential belongs to User.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}