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
            'village_head'   => 'Agus Suroto',

            'district'       => 'Merbau Mataram',
            'regency'        => 'Lampung Selatan',
            'province'       => 'Lampung',

            'logo'           => 'logo-desa.png',
            'hero_image'     => 'hero-profile.jpg',

            'about'          =>'Desa Panca Tunggal merupakan salah satu desa di Kecamatan Merbau Mataram, Kabupaten Lampung Selatan yang memiliki potensi di bidang pertanian, perkebunan, serta pengembangan UMKM masyarakat. Desa ini terus berkembang melalui pembangunan infrastruktur, pelayanan publik yang baik, dan pemberdayaan masyarakat.',

            'history'        =>'Sejarah Desa Panca Tunggal dimulai sejak proses pembukaan wilayah transmigrasi pada tahun .... Selanjutnya desa berkembang menjadi salah satu desa yang memiliki sektor pertanian dan perkebunan sebagai mata pencaharian utama masyarakat.',

            'vision'         => 'Dengan Bermusyawarah/Bergotong Royong Menuju Desa Panca Tunggal Maju, Mandiri, Berakhlak dan Transparan',

            'mission'        => '
1. Mewujudkan Pemerintahan Desa yang jujur dan berwibawa dengan pengambilan keputusan yang cepat dan tepat.
2. Mengedepankan kejujuran dan musywarah mufakat dalam kehidupan sehari-hari baik dengan pemerintahan maupun Masyarakat desa.
3. Meningkatkan profesionalitas dan mengaktifkan seluruh perangkat desa.
4. Mewujudkan sarana dan prasarana desa yang memadai.
5. Mewujudkan perekonomian dan kesejahteraan warga desa.
6. Meningkatkan Pelayanan Kesehatan Masyarakat Desa yang maksimal.
7. Meningkatkan kehidupan desa secara dinamis dalam segi keagamaan dan budaya.
',

            'area'           => 850.50,

            'population'     => 5051,

            'family_count'   => 1328,

            'hamlet_count'   => 11,

            'rt_count'       => 32,

            'rw_count'       => 11,

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