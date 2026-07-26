<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::truncate();

        Contact::create([

            /*
            |--------------------------------------------------------------------------
            | Informasi Kantor Desa
            |--------------------------------------------------------------------------
            */

            'office_name' => 'Kantor Desa Panca Tunggal',

            'address' => 'Jl. Raya Desa Panca Tunggal, Kecamatan Merbau Mataram, Kabupaten Lampung Selatan, Provinsi Lampung.',

            'phone' => '(0721) 123456',

            'whatsapp' => '081234567890',

            'email' => 'desapancatunggal@sipanda.id',

            'website' => 'https://sipanda.id',

            /*
            |--------------------------------------------------------------------------
            | Media Sosial
            |--------------------------------------------------------------------------
            */

            'facebook' => 'https://facebook.com/desapancatunggal',

            'instagram' => 'https://instagram.com/desapancatunggal',

            'youtube' => 'https://youtube.com/@desapancatunggal',

            'tiktok' => 'https://tiktok.com/@desapancatunggal',

            /*
            |--------------------------------------------------------------------------
            | Google Maps
            |--------------------------------------------------------------------------
            */

            'google_maps_embed' => '<iframe src="https://www.google.com/maps/embed?..."></iframe>',

            /*
            |--------------------------------------------------------------------------
            | Koordinat
            |--------------------------------------------------------------------------
            */

            'latitude' => -5.4556123,

            'longitude' => 105.1935512,

            /*
            |--------------------------------------------------------------------------
            | Jam Operasional
            |--------------------------------------------------------------------------
            */

            'monday_friday' => '08.00 - 16.00 WIB',

            'saturday' => '08.00 - 12.00 WIB',

            'sunday' => 'Tutup',

            /*
            |--------------------------------------------------------------------------
            | Status
            |--------------------------------------------------------------------------
            */

            'is_active' => true,

        ]);
    }
}