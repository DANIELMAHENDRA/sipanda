<?php

namespace Database\Seeders;

use App\Models\Official;
use Illuminate\Database\Seeder;

class OfficialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Official::truncate();

        $officials = [

            [
                'name'             => 'Sugiyanto',
                'nip'              => null,
                'position'         => 'Kepala Desa',
                'photo'            => 'officials/kepala-desa.jpg',
                'description'      => 'Kepala Desa Panca Tunggal periode 2021–2029.',
                'message'          => 'Selamat datang di Website Resmi Desa Panca Tunggal. Website ini hadir sebagai media informasi, transparansi, dan pelayanan publik berbasis digital untuk masyarakat.',
                'phone'            => '081234567890',
                'email'            => 'kepaladesa@sipanda.id',
                'order_number'     => 1,
                'is_village_head'  => true,
                'is_active'        => true,
            ],

            [
                'name'             => 'Andi Saputra',
                'nip'              => null,
                'position'         => 'Sekretaris Desa',
                'photo'            => 'officials/sekretaris.jpg',
                'description'      => 'Bertanggung jawab terhadap administrasi pemerintahan desa.',
                'message'          => null,
                'phone'            => '081234567891',
                'email'            => 'sekdes@sipanda.id',
                'order_number'     => 2,
                'is_village_head'  => false,
                'is_active'        => true,
            ],

            [
                'name'             => 'Budi Santoso',
                'nip'              => null,
                'position'         => 'Kaur Keuangan',
                'photo'            => 'officials/kaur-keuangan.jpg',
                'description'      => 'Mengelola administrasi keuangan desa.',
                'message'          => null,
                'phone'            => null,
                'email'            => null,
                'order_number'     => 3,
                'is_village_head'  => false,
                'is_active'        => true,
            ],

            [
                'name'             => 'Rina Wulandari',
                'nip'              => null,
                'position'         => 'Kaur Umum',
                'photo'            => 'officials/kaur-umum.jpg',
                'description'      => 'Mengelola administrasi umum desa.',
                'message'          => null,
                'phone'            => null,
                'email'            => null,
                'order_number'     => 4,
                'is_village_head'  => false,
                'is_active'        => true,
            ],

            [
                'name'             => 'Dedi Kurniawan',
                'nip'              => null,
                'position'         => 'Kasi Pemerintahan',
                'photo'            => 'officials/kasi-pemerintahan.jpg',
                'description'      => 'Membantu penyelenggaraan urusan pemerintahan desa.',
                'message'          => null,
                'phone'            => null,
                'email'            => null,
                'order_number'     => 5,
                'is_village_head'  => false,
                'is_active'        => true,
            ],

            [
                'name'             => 'Siti Aminah',
                'nip'              => null,
                'position'         => 'Kasi Pelayanan',
                'photo'            => 'officials/kasi-pelayanan.jpg',
                'description'      => 'Bertanggung jawab terhadap pelayanan administrasi masyarakat.',
                'message'          => null,
                'phone'            => null,
                'email'            => null,
                'order_number'     => 6,
                'is_village_head'  => false,
                'is_active'        => true,
            ],

        ];

        foreach ($officials as $official) {
            Official::create($official);
        }
    }
}