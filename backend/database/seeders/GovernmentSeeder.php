<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Government;
use Illuminate\Database\Seeder;

class GovernmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Government::truncate();

        $admin = User::first();

        Government::insert([

            [
                'name' => 'Sugiyanto',
                'position' => 'Kepala Desa',
                'photo' => null,
                'description' => 'Memimpin penyelenggaraan pemerintahan desa serta bertanggung jawab atas pembangunan dan pelayanan kepada masyarakat.',
                'order_number' => 1,
                'is_head' => true,
                'status' => 'published',
                'user_id' => $admin->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Budi Santoso',
                'position' => 'Sekretaris Desa',
                'photo' => null,
                'description' => 'Membantu Kepala Desa dalam administrasi pemerintahan, surat-menyurat, dan pelayanan masyarakat.',
                'order_number' => 2,
                'is_head' => false,
                'status' => 'published',
                'user_id' => $admin->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Andi Saputra',
                'position' => 'Kaur Tata Usaha dan Umum',
                'photo' => null,
                'description' => 'Mengelola administrasi umum, kepegawaian, arsip, dan inventaris desa.',
                'order_number' => 3,
                'is_head' => false,
                'status' => 'published',
                'user_id' => $admin->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Siti Rahmawati',
                'position' => 'Kaur Keuangan',
                'photo' => null,
                'description' => 'Mengelola keuangan desa mulai dari perencanaan, penatausahaan, hingga pelaporan keuangan.',
                'order_number' => 4,
                'is_head' => false,
                'status' => 'published',
                'user_id' => $admin->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Rudi Hartono',
                'position' => 'Kasi Pemerintahan',
                'photo' => null,
                'description' => 'Membantu pelaksanaan urusan pemerintahan, administrasi kependudukan, dan ketertiban masyarakat.',
                'order_number' => 5,
                'is_head' => false,
                'status' => 'published',
                'user_id' => $admin->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Dewi Lestari',
                'position' => 'Kasi Kesejahteraan',
                'photo' => null,
                'description' => 'Melaksanakan kegiatan yang berkaitan dengan kesejahteraan masyarakat, pendidikan, kesehatan, dan sosial.',
                'order_number' => 6,
                'is_head' => false,
                'status' => 'published',
                'user_id' => $admin->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Ahmad Fauzi',
                'position' => 'Kasi Pelayanan',
                'photo' => null,
                'description' => 'Memberikan pelayanan administrasi kepada masyarakat serta membantu penyelenggaraan pelayanan publik.',
                'order_number' => 7,
                'is_head' => false,
                'status' => 'published',
                'user_id' => $admin->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}