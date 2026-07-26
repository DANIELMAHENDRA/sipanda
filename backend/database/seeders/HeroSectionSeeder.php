<?php

namespace Database\Seeders;

use App\Models\HeroSection;
use Illuminate\Database\Seeder;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HeroSection::truncate();

        $heroes = [

            [
                'page' => 'home',
                'title' => 'Selamat Datang di Website Resmi Desa Panca Tunggal',
                'subtitle' => 'Website Resmi Desa',
                'description' => 'Media informasi, pelayanan publik, transparansi, dan promosi potensi Desa Panca Tunggal.',
                'background_image' => 'hero/home.jpg',
                'button_text' => 'Jelajahi Desa',
                'button_link' => '/profile',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 1,
            ],

            [
                'page' => 'profile',
                'title' => 'Profil Desa Panca Tunggal',
                'subtitle' => 'Tentang Desa',
                'description' => 'Mengenal sejarah, visi, misi, serta kondisi umum Desa Panca Tunggal.',
                'background_image' => 'hero/profile.jpg',
                'button_text' => 'Lihat Pemerintahan',
                'button_link' => '/government',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 2,
            ],

            [
                'page' => 'government',
                'title' => 'Pemerintahan Desa',
                'subtitle' => 'Struktur Organisasi',
                'description' => 'Mengenal perangkat desa yang melayani masyarakat Desa Panca Tunggal.',
                'background_image' => 'hero/government.jpg',
                'button_text' => 'Lihat Profil Desa',
                'button_link' => '/profile',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 3,
            ],

            [
                'page' => 'news',
                'title' => 'Berita Desa',
                'subtitle' => 'Informasi Terkini',
                'description' => 'Ikuti berbagai berita, kegiatan, dan informasi terbaru dari Desa Panca Tunggal.',
                'background_image' => 'hero/news.jpg',
                'button_text' => 'Lihat Galeri',
                'button_link' => '/gallery',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 4,
            ],

            [
                'page' => 'gallery',
                'title' => 'Galeri Desa',
                'subtitle' => 'Dokumentasi Kegiatan',
                'description' => 'Kumpulan dokumentasi kegiatan dan pembangunan Desa Panca Tunggal.',
                'background_image' => 'hero/gallery.jpg',
                'button_text' => 'Lihat Berita',
                'button_link' => '/news',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 5,
            ],

            [
                'page' => 'potential',
                'title' => 'Potensi Desa',
                'subtitle' => 'Potensi Unggulan',
                'description' => 'Berbagai potensi pertanian, UMKM, dan wisata yang dimiliki Desa Panca Tunggal.',
                'background_image' => 'hero/potential.jpg',
                'button_text' => 'Lihat Layanan',
                'button_link' => '/services',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 6,
            ],

            [
                'page' => 'services',
                'title' => 'Pelayanan Desa',
                'subtitle' => 'Layanan Administrasi',
                'description' => 'Informasi layanan administrasi yang tersedia bagi masyarakat Desa Panca Tunggal.',
                'background_image' => 'hero/services.jpg',
                'button_text' => 'Hubungi Kami',
                'button_link' => '/contact',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 7,
            ],

            [
                'page' => 'contact',
                'title' => 'Hubungi Kami',
                'subtitle' => 'Kontak Desa',
                'description' => 'Silakan menghubungi Pemerintah Desa Panca Tunggal untuk informasi dan pelayanan.',
                'background_image' => 'hero/contact.jpg',
                'button_text' => 'Kembali ke Beranda',
                'button_link' => '/',
                'overlay_color' => '#000000',
                'overlay_opacity' => 0.60,
                'is_active' => true,
                'order_number' => 8,
            ],

        ];

        foreach ($heroes as $hero) {
            HeroSection::create($hero);
        }
    }
}