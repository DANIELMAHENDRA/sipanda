<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::truncate();

        $services = [

            [
                'title' => 'Surat Keterangan Domisili',
                'icon' => 'MapPin',
                'description' => 'Pelayanan penerbitan Surat Keterangan Domisili bagi warga Desa Panca Tunggal.',

                'requirements' => "- Fotokopi KTP\n- Fotokopi KK",

                'procedure' => "1. Datang ke Kantor Desa.\n2. Serahkan persyaratan.\n3. Verifikasi data.\n4. Surat diterbitkan.",

                'processing_time' => '± 15 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Kasi Pelayanan',

                'order_number' => 1,

                'is_active' => true,

                'user_id' => 1,
            ],

            [
                'title' => 'Surat Keterangan Usaha',
                'icon' => 'Briefcase',

                'description' => 'Pelayanan penerbitan Surat Keterangan Usaha.',

                'requirements' => "- Fotokopi KTP\n- Fotokopi KK",

                'procedure' => "1. Mengajukan permohonan.\n2. Verifikasi.\n3. Surat diterbitkan.",

                'processing_time' => '± 20 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Sekretaris Desa',

                'order_number' => 2,

                'is_active' => true,

                'user_id' => 1,
            ],

            [
                'title' => 'Surat Pengantar SKCK',
                'icon' => 'Shield',

                'description' => 'Pelayanan surat pengantar pembuatan SKCK.',

                'requirements' => "- Fotokopi KTP\n- Fotokopi KK",

                'procedure' => "1. Mengisi formulir.\n2. Verifikasi data.\n3. Surat diterbitkan.",

                'processing_time' => '± 15 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Kasi Pemerintahan',

                'order_number' => 3,

                'is_active' => true,

                'user_id' => 2,
            ],

            [
                'title' => 'Surat Keterangan Tidak Mampu',

                'icon' => 'HeartHandshake',

                'description' => 'Pelayanan Surat Keterangan Tidak Mampu.',

                'requirements' => "- Fotokopi KTP\n- Fotokopi KK",

                'procedure' => "1. Mengajukan permohonan.\n2. Verifikasi.\n3. Surat diterbitkan.",

                'processing_time' => '± 20 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Kasi Pelayanan',

                'order_number' => 4,

                'is_active' => true,

                'user_id' => 2,
            ],

            [
                'title' => 'Surat Pengantar Nikah',

                'icon' => 'Heart',

                'description' => 'Pelayanan surat pengantar nikah.',

                'requirements' => "- Fotokopi KTP\n- Fotokopi KK\n- Fotokopi Akta Kelahiran",

                'procedure' => "1. Mengajukan berkas.\n2. Verifikasi.\n3. Surat diterbitkan.",

                'processing_time' => '± 30 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Sekretaris Desa',

                'order_number' => 5,

                'is_active' => true,

                'user_id' => 1,
            ],

            [
                'title' => 'Surat Keterangan Kelahiran',

                'icon' => 'Baby',

                'description' => 'Pelayanan administrasi kelahiran.',

                'requirements' => "- Surat Kelahiran\n- Fotokopi KK",

                'procedure' => "1. Mengajukan dokumen.\n2. Verifikasi.\n3. Surat diterbitkan.",

                'processing_time' => '± 20 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Kasi Pelayanan',

                'order_number' => 6,

                'is_active' => true,

                'user_id' => 3,
            ],

            [
                'title' => 'Surat Keterangan Kematian',

                'icon' => 'Cross',

                'description' => 'Pelayanan administrasi kematian.',

                'requirements' => "- Surat Keterangan Rumah Sakit\n- Fotokopi KK",

                'procedure' => "1. Mengajukan dokumen.\n2. Verifikasi.\n3. Surat diterbitkan.",

                'processing_time' => '± 20 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Kasi Pemerintahan',

                'order_number' => 7,

                'is_active' => true,

                'user_id' => 3,
            ],

            [
                'title' => 'Legalisasi Surat',

                'icon' => 'FileCheck',

                'description' => 'Pelayanan legalisasi dokumen administrasi.',

                'requirements' => "- Dokumen Asli\n- Fotokopi Dokumen",

                'procedure' => "1. Serahkan dokumen.\n2. Verifikasi.\n3. Legalisasi.",

                'processing_time' => '± 10 Menit',

                'cost' => 'Gratis',

                'person_in_charge' => 'Sekretaris Desa',

                'order_number' => 8,

                'is_active' => true,

                'user_id' => 1,
            ],

        ];

        foreach ($services as $service) {

            Service::create([

                'title' => $service['title'],

                'slug' => Str::slug($service['title']),

                'icon' => $service['icon'],

                'description' => $service['description'],

                'requirements' => $service['requirements'],

                'procedure' => $service['procedure'],

                'processing_time' => $service['processing_time'],

                'cost' => $service['cost'],

                'person_in_charge' => $service['person_in_charge'],

                'order_number' => $service['order_number'],

                'is_active' => $service['is_active'],

                'user_id' => $service['user_id'],

            ]);

        }
    }
}