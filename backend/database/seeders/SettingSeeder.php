<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::truncate();

        Setting::create([

            /*
            |--------------------------------------------------------------------------
            | Website Information
            |--------------------------------------------------------------------------
            */

            'site_name' => 'SIPANDA',

            'site_tagline' => 'Sistem Informasi Desa Panca Tunggal',

            'logo' => 'settings/logo.png',

            'favicon' => 'settings/favicon.ico',

            /*
            |--------------------------------------------------------------------------
            | SEO
            |--------------------------------------------------------------------------
            */

            'meta_title' => 'Website Resmi Desa Panca Tunggal',

            'meta_description' => 'Website Resmi Desa Panca Tunggal Kecamatan Merbau Mataram Kabupaten Lampung Selatan sebagai media informasi, pelayanan publik, transparansi pemerintahan, dan promosi potensi desa.',

            'meta_keywords' => 'desa panca tunggal, sipanda, desa digital, lampung selatan, website desa, pelayanan desa',

            /*
            |--------------------------------------------------------------------------
            | Contact
            |--------------------------------------------------------------------------
            */

            'email' => 'desapancatunggal@sipanda.id',

            'phone' => '081234567890',

            /*
            |--------------------------------------------------------------------------
            | Footer
            |--------------------------------------------------------------------------
            */

            'footer_description' => 'Website resmi Desa Panca Tunggal yang menyediakan informasi desa, berita, layanan publik, galeri kegiatan, dan potensi desa secara transparan dan mudah diakses masyarakat.',

            'copyright' => '© 2026 SIPANDA - Sistem Informasi Desa Panca Tunggal. All Rights Reserved.',

            /*
            |--------------------------------------------------------------------------
            | Maintenance
            |--------------------------------------------------------------------------
            */

            'maintenance_mode' => false,

        ]);
    }
}