<?php

namespace Database\Seeders;

use App\Models\Potential;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PotentialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Potential::truncate();

        $potentials = [

            [
                'title' => 'Potensi Pertanian Padi',
                'thumbnail' => 'potentials/padi-thumb.jpg',
                'cover_image' => 'potentials/padi-cover.jpg',
                'category' => 'Pertanian',
                'excerpt' => 'Desa Panca Tunggal memiliki lahan persawahan yang luas dengan hasil panen berkualitas.',
                'content' => 'Sektor pertanian padi menjadi salah satu sumber ekonomi utama masyarakat Desa Panca Tunggal. Dengan dukungan irigasi dan kelompok tani yang aktif, produktivitas padi terus meningkat setiap tahun.',

                'statistic_1_title' => 'Luas Sawah',
                'statistic_1_value' => '520 Ha',

                'statistic_2_title' => 'Kelompok Tani',
                'statistic_2_value' => '12',

                'statistic_3_title' => 'Produksi/Tahun',
                'statistic_3_value' => '3.200 Ton',

                'quote' => 'Pertanian merupakan tulang punggung perekonomian Desa Panca Tunggal.',
                'quote_author' => 'Kepala Desa',

                'is_featured' => true,
                'status' => 'published',
                'published_at' => now(),
                'user_id' => 1,
            ],

            [
                'title' => 'Perkebunan Singkong',
                'thumbnail' => 'potentials/singkong-thumb.jpg',
                'cover_image' => 'potentials/singkong-cover.jpg',
                'category' => 'Perkebunan',
                'excerpt' => 'Singkong menjadi komoditas unggulan masyarakat.',
                'content' => 'Sebagian besar masyarakat mengembangkan perkebunan singkong sebagai sumber pendapatan utama.',

                'statistic_1_title' => 'Luas Kebun',
                'statistic_1_value' => '315 Ha',

                'statistic_2_title' => 'Petani',
                'statistic_2_value' => '247 Orang',

                'statistic_3_title' => 'Produksi',
                'statistic_3_value' => '2.500 Ton',

                'quote' => 'Singkong merupakan komoditas strategis desa.',
                'quote_author' => 'Ketua Gapoktan',

                'is_featured' => true,
                'status' => 'published',
                'published_at' => now(),
                'user_id' => 2,
            ],

            [
                'title' => 'UMKM Keripik Singkong',
                'thumbnail' => 'potentials/keripik-thumb.jpg',
                'cover_image' => 'potentials/keripik-cover.jpg',
                'category' => 'UMKM',
                'excerpt' => 'Produk olahan singkong yang dipasarkan hingga luar daerah.',
                'content' => 'UMKM keripik singkong menjadi salah satu produk unggulan Desa Panca Tunggal dengan berbagai varian rasa.',

                'statistic_1_title' => 'Jumlah UMKM',
                'statistic_1_value' => '24',

                'statistic_2_title' => 'Tenaga Kerja',
                'statistic_2_value' => '87 Orang',

                'statistic_3_title' => 'Produksi/Bulan',
                'statistic_3_value' => '5.000 Bungkus',

                'quote' => 'UMKM menjadi motor penggerak ekonomi masyarakat.',
                'quote_author' => 'Ketua BUMDes',

                'is_featured' => true,
                'status' => 'published',
                'published_at' => now(),
                'user_id' => 1,
            ],

            [
                'title' => 'Peternakan Sapi',
                'thumbnail' => 'potentials/sapi-thumb.jpg',
                'cover_image' => 'potentials/sapi-cover.jpg',
                'category' => 'Peternakan',
                'excerpt' => 'Peternakan sapi berkembang sebagai usaha sampingan masyarakat.',
                'content' => 'Selain pertanian, masyarakat juga mengembangkan usaha peternakan sapi untuk meningkatkan pendapatan keluarga.',

                'statistic_1_title' => 'Jumlah Peternak',
                'statistic_1_value' => '52',

                'statistic_2_title' => 'Populasi Sapi',
                'statistic_2_value' => '486 Ekor',

                'statistic_3_title' => 'Produksi',
                'statistic_3_value' => 'Stabil',

                'quote' => 'Peternakan menjadi peluang usaha yang menjanjikan.',
                'quote_author' => 'Kepala Dusun',

                'is_featured' => false,
                'status' => 'published',
                'published_at' => now(),
                'user_id' => 3,
            ],

            [
                'title' => 'Wisata Embung Desa',
                'thumbnail' => 'potentials/embung-thumb.jpg',
                'cover_image' => 'potentials/embung-cover.jpg',
                'category' => 'Pariwisata',
                'excerpt' => 'Embung desa menjadi salah satu destinasi wisata lokal.',
                'content' => 'Embung Desa Panca Tunggal dimanfaatkan sebagai tempat wisata keluarga sekaligus sumber irigasi masyarakat.',

                'statistic_1_title' => 'Pengunjung/Bulan',
                'statistic_1_value' => '1.200',

                'statistic_2_title' => 'UMKM Sekitar',
                'statistic_2_value' => '18',

                'statistic_3_title' => 'Luas Area',
                'statistic_3_value' => '5 Ha',

                'quote' => 'Potensi wisata harus terus dikembangkan.',
                'quote_author' => 'Pemerintah Desa',

                'is_featured' => true,
                'status' => 'published',
                'published_at' => now(),
                'user_id' => 2,
            ],

        ];

        foreach ($potentials as $potential) {

            Potential::create([

                'title' => $potential['title'],
                'slug' => Str::slug($potential['title']),
                'thumbnail' => $potential['thumbnail'],
                'cover_image' => $potential['cover_image'],
                'category' => $potential['category'],
                'excerpt' => $potential['excerpt'],
                'content' => $potential['content'],

                'statistic_1_title' => $potential['statistic_1_title'],
                'statistic_1_value' => $potential['statistic_1_value'],

                'statistic_2_title' => $potential['statistic_2_title'],
                'statistic_2_value' => $potential['statistic_2_value'],

                'statistic_3_title' => $potential['statistic_3_title'],
                'statistic_3_value' => $potential['statistic_3_value'],

                'quote' => $potential['quote'],
                'quote_author' => $potential['quote_author'],

                'is_featured' => $potential['is_featured'],
                'status' => $potential['status'],
                'published_at' => $potential['published_at'],
                'user_id' => $potential['user_id'],

            ]);

        }
    }
}