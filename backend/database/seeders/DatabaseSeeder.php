<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();

        $this->call([
            UserSeeder::class,
            ProfileSeeder::class,
            GovernmentSeeder::class,
            OfficialSeeder::class,
            HeroSectionSeeder::class,
            ContactSeeder::class,
            SettingSeeder::class,
            NewsSeeder::class,
            GallerySeeder::class,
            PotentialSeeder::class,
            ServiceSeeder::class,
        ]);

        Schema::enableForeignKeyConstraints();
    }
}