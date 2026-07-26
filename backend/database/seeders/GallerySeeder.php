<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Gallery::truncate();

        $galleries = [

            [
                'title' => 'Gotong Royong Membersihkan Lingkungan',
                'category' => 'Kegiatan Desa',
                'image' => 'gallery/gotong-royong.jpg',
                'description' => 'Kegiatan gotong royong bersama masyarakat Desa Panca Tunggal.',
                'location' => 'Dusun I',
                'photographer' => 'Admin SIPANDA',
                'taken_at' => '2026-07-05',
                'order_number' => 1,
                'is_featured' => true,
                'status' => 'published',
                'user_id' => 1,
            ],

            [
                'title' => 'Musyawarah Desa',
                'category' => 'Pemerintahan',
                'image' => 'gallery/musyawarah.jpg',
                'description' => 'Pelaksanaan Musyawarah Desa Tahun 2026.',
                'location' => 'Balai Desa',
                'photographer' => 'Admin SIPANDA',
                'taken_at' => '2026-07-10',
                'order_number' => 2,
                'is_featured' => true,
                'status' => 'published',
                'user_id' => 1,
            ],

            [
                'title' => 'Panen Raya Padi',
                'category' => 'Pertanian',
                'image' => 'gallery/panen-raya.jpg',
                'description' => 'Dokumentasi panen raya petani Desa Panca Tunggal.',
                'location' => 'Area Persawahan',
                'photographer' => 'Admin SIPANDA',
                'taken_at' => '2026-06-28',
                'order_number' => 3,
                'is_featured' => true,
                'status' => 'published',
                'user_id' => 2,
            ],

            [
                'title' => 'Pelatihan UMKM',
                'category' => 'UMKM',
                'image' => 'gallery/umkm.jpg',
                'description' => 'Pelatihan digital marketing untuk pelaku UMKM.',
                'location' => 'Balai Desa',
                'photographer' => 'Editor SIPANDA',
                'taken_at' => '2026-07-15',
                'order_number' => 4,
                'is_featured' => false,
                'status' => 'published',
                'user_id' => 3,
            ],

            [
                'title' => 'Posyandu Balita',
                'category' => 'Kesehatan',
                'image' => 'gallery/posyandu.jpg',
                'description' => 'Pelayanan kesehatan balita oleh kader Posyandu.',
                'location' => 'Posyandu Melati',
                'photographer' => 'Admin SIPANDA',
                'taken_at' => '2026-07-18',
                'order_number' => 5,
                'is_featured' => false,
                'status' => 'published',
                'user_id' => 2,
            ],

            [
                'title' => 'Pembangunan Jalan Desa',
                'category' => 'Pembangunan',
                'image' => 'gallery/pembangunan-jalan.jpg',
                'description' => 'Proses pembangunan jalan lingkungan desa.',
                'location' => 'Dusun II',
                'photographer' => 'Admin SIPANDA',
                'taken_at' => '2026-07-20',
                'order_number' => 6,
                'is_featured' => true,
                'status' => 'published',
                'user_id' => 1,
            ],

        ];

        foreach ($galleries as $gallery) {

            Gallery::create([
                'title' => $gallery['title'],
                'slug' => Str::slug($gallery['title']),
                'image' => $gallery['image'],
                'category' => $gallery['category'],
                'description' => $gallery['description'],
                'location' => $gallery['location'],
                'photographer' => $gallery['photographer'],
                'taken_at' => $gallery['taken_at'],
                'order_number' => $gallery['order_number'],
                'is_featured' => $gallery['is_featured'],
                'status' => $gallery['status'],
                'user_id' => $gallery['user_id'],
            ]);

        }
    }
}