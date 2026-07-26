<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        News::truncate();

        $news = [

            [
                'title' => 'Gotong Royong Membersihkan Lingkungan Desa',
                'category' => 'Kegiatan Desa',
                'thumbnail' => 'news/gotong-royong.jpg',
                'content' => 'Pemerintah Desa bersama masyarakat melaksanakan kegiatan gotong royong membersihkan lingkungan desa guna menciptakan lingkungan yang bersih, sehat, dan nyaman.',
                'user_id' => 1,
                'views' => 245,
                'is_featured' => true,
                'status' => 'published',
            ],

            [
                'title' => 'Musyawarah Desa Penetapan Program Kerja Tahun 2026',
                'category' => 'Pemerintahan',
                'thumbnail' => 'news/musyawarah.jpg',
                'content' => 'Musyawarah desa dilaksanakan bersama seluruh perangkat desa dan tokoh masyarakat untuk menetapkan prioritas pembangunan desa tahun 2026.',
                'user_id' => 1,
                'views' => 198,
                'is_featured' => true,
                'status' => 'published',
            ],

            [
                'title' => 'Pelatihan Digitalisasi UMKM Desa',
                'category' => 'UMKM',
                'thumbnail' => 'news/umkm.jpg',
                'content' => 'Pelaku UMKM mendapatkan pelatihan pemasaran digital dan pemanfaatan media sosial untuk meningkatkan penjualan produk lokal.',
                'user_id' => 2,
                'views' => 160,
                'is_featured' => false,
                'status' => 'published',
            ],

            [
                'title' => 'Posyandu Balita Bulan Juli Berjalan Lancar',
                'category' => 'Kesehatan',
                'thumbnail' => 'news/posyandu.jpg',
                'content' => 'Kegiatan Posyandu rutin dilaksanakan untuk memantau tumbuh kembang balita dan memberikan pelayanan kesehatan kepada masyarakat.',
                'user_id' => 2,
                'views' => 135,
                'is_featured' => false,
                'status' => 'published',
            ],

            [
                'title' => 'Perbaikan Jalan Dusun II Dimulai',
                'category' => 'Pembangunan',
                'thumbnail' => 'news/jalan.jpg',
                'content' => 'Pemerintah Desa memulai pembangunan jalan lingkungan sebagai bagian dari peningkatan infrastruktur desa.',
                'user_id' => 1,
                'views' => 305,
                'is_featured' => true,
                'status' => 'published',
            ],

            [
                'title' => 'Lomba Kebersihan Antar RT',
                'category' => 'Masyarakat',
                'thumbnail' => 'news/lomba.jpg',
                'content' => 'Lomba kebersihan antar RT bertujuan meningkatkan kepedulian masyarakat terhadap kebersihan lingkungan.',
                'user_id' => 3,
                'views' => 95,
                'is_featured' => false,
                'status' => 'published',
            ],

            [
                'title' => 'Panen Raya Padi Desa Panca Tunggal',
                'category' => 'Pertanian',
                'thumbnail' => 'news/panen.jpg',
                'content' => 'Petani Desa Panca Tunggal berhasil melaksanakan panen raya dengan hasil yang meningkat dibanding tahun sebelumnya.',
                'user_id' => 2,
                'views' => 278,
                'is_featured' => true,
                'status' => 'published',
            ],

            [
                'title' => 'Pelayanan Administrasi Desa Kini Lebih Cepat',
                'category' => 'Pelayanan',
                'thumbnail' => 'news/pelayanan.jpg',
                'content' => 'Pemerintah Desa terus meningkatkan kualitas pelayanan administrasi untuk memberikan pelayanan terbaik kepada masyarakat.',
                'user_id' => 1,
                'views' => 189,
                'is_featured' => false,
                'status' => 'published',
            ],

        ];

        foreach ($news as $item) {

            News::create([
                'title' => $item['title'],
                'slug' => Str::slug($item['title']),
                'thumbnail' => $item['thumbnail'],
                'content' => $item['content'],
                'category' => $item['category'],
                'user_id' => $item['user_id'],
                'views' => $item['views'],
                'is_featured' => $item['is_featured'],
                'status' => $item['status'],
                'published_at' => now(),
            ]);

        }
    }
}