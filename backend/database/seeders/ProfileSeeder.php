<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Profile::truncate();

        Profile::create([

            'village_name'   => 'Desa Panca Tunggal',
            'village_head'   => 'Bapak Sugiyanto',

            'district'       => 'Merbau Mataram',
            'regency'        => 'Lampung Selatan',
            'province'       => 'Lampung',

            'logo'           => 'logo-desa.png',
            'hero_image'     => 'hero-profile.jpg',

            'about'          =>'Desa Panca Tunggal merupakan salah satu desa di Kecamatan Merbau Mataram, Kabupaten Lampung Selatan yang memiliki potensi di bidang pertanian, perkebunan, serta pengembangan UMKM masyarakat. Desa ini terus berkembang melalui pembangunan infrastruktur, pelayanan publik yang baik, dan pemberdayaan masyarakat.',

            'history'        =>'Sejarah Desa Panca Tunggal dimulai sejak proses pembukaan wilayah transmigrasi pada tahun .... Selanjutnya desa berkembang menjadi salah satu desa yang memiliki sektor pertanian dan perkebunan sebagai mata pencaharian utama masyarakat.',

            'vision'         => 'Terwujudnya Desa Panca Tunggal yang Maju, Mandiri, Sejahtera, Transparan, dan Berdaya Saing.',

            'mission'        => '
1. Meningkatkan kualitas pelayanan kepada masyarakat.
2. Mengembangkan potensi pertanian dan perkebunan.
3. Meningkatkan kualitas SDM masyarakat.
4. Mendorong digitalisasi pelayanan desa.
5. Mewujudkan tata kelola pemerintahan desa yang transparan dan akuntabel.
',

            'area'           => 850.50,

            'population'     => 4625,

            'family_count'   => 1328,

            'hamlet_count'   => 5,

            'rt_count'       => 18,

            'rw_count'       => 7,

            'north_boundary' => 'Desa Karang Rejo',

            'south_boundary' => 'Desa Sumber Agung',

            'east_boundary'  => 'Desa Panca Bakti',

            'west_boundary'  => 'Desa Triharjo',

            'latitude'       => -5.4556123,

            'longitude'      => 105.1935512,

            'is_active'      => true,

        ]);
    }
}