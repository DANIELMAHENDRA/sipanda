<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    use HasFactory;

    /**
     * Mass Assignable
     */
    protected $fillable = [
        'user_id',
        'activity',
        'module',
        'description',
        'ip_address',
        'user_agent',
        'url',
        'method',
        'status',
    ];

    /**
     * Attribute Casting
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Relationships
    |--------------------------------------------------------------------------
    */

    /**
     * Activity Log belongs to User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}