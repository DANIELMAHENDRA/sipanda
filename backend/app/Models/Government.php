<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Government extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Mass Assignable
     */
    protected $fillable = [

        'name',

        'position',

        'photo',

        'description',

        'order_number',

        'is_head',

        'status',

        'user_id',

    ];

    /**
     * Attribute Casting
     */
    protected function casts(): array
    {
        return [

            'order_number' => 'integer',

            'is_head' => 'boolean',

            'created_at' => 'datetime',

            'updated_at' => 'datetime',

            'deleted_at' => 'datetime',

        ];
    }

    /**
     * Relationship
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}