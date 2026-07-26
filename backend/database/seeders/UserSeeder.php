<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Menghapus seluruh data user terlebih dahulu
        User::truncate();

        // ============================
        // Super Administrator
        // ============================
        User::create([
            'name'              => 'Super Administrator',
            'username'          => 'superadmin',
            'email'             => 'superadmin@sipanda.id',
            'email_verified_at' => now(),
            'password'          => Hash::make('password'),
            'photo'             => 'users/default-avatar.png',
            'role'              => 'super_admin',
            'is_active'         => true,
            'last_login_at'     => now(),
        ]);

        // ============================
        // Administrator
        // ============================
        User::create([
            'name'              => 'Administrator',
            'username'          => 'admin',
            'email'             => 'admin@sipanda.id',
            'email_verified_at' => now(),
            'password'          => Hash::make('password'),
            'photo'             => 'users/default-avatar.png',
            'role'              => 'admin',
            'is_active'         => true,
            'last_login_at'     => now(),
        ]);

        // ============================
        // Editor
        // ============================
        User::create([
            'name'              => 'Editor SIPANDA',
            'username'          => 'editor',
            'email'             => 'editor@sipanda.id',
            'email_verified_at' => now(),
            'password'          => Hash::make('password'),
            'photo'             => 'users/default-avatar.png',
            'role'              => 'editor',
            'is_active'         => true,
            'last_login_at'     => now(),
        ]);
    }
}