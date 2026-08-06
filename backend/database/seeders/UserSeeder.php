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
        /*
        |--------------------------------------------------------------------------
        | Super Administrator
        |--------------------------------------------------------------------------
        |
        | Username : superadmin
        | Password : password
        |
        */

        User::updateOrCreate(

            [
                'username' => 'superadmin',
            ],

            [

                'name'              => 'Super Administrator',

                'email'             => 'superadmin@sipanda.id',

                'email_verified_at' => now(),

                'password'          => Hash::make('password'),

                'photo'             => 'users/default-avatar.png',

                'role'              => 'super_admin',

                'is_active'         => true,

                'last_login_at'     => null,

            ]

        );

        /*
        |--------------------------------------------------------------------------
        | Administrator Desa
        |--------------------------------------------------------------------------
        |
        | Username : admin
        | Password : password
        |
        */

        User::updateOrCreate(

            [
                'username' => 'admin',
            ],

            [

                'name'              => 'Administrator Desa',

                'email'             => 'admin@sipanda.id',

                'email_verified_at' => now(),

                'password'          => Hash::make('password'),

                'photo'             => 'users/default-avatar.png',

                'role'              => 'admin',

                'is_active'         => true,

                'last_login_at'     => null,

            ]

        );
    }
}