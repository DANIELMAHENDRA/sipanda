import SectionTitle from "../../../components/common/SectionTitle";
import NewsCard from "../../../components/common/NewsCard";
import Button from "../../../components/common/Button";

import news1 from "../../../assets/images/news/news1.jpg";
import news2 from "../../../assets/images/news/news2.jpg";
import news3 from "../../../assets/images/news/news3.jpg";

export default function NewsSection() {

    const news = [

        {
            image: news1,
            category: "Pemerintahan",
            date: "20 Juli 2026",
            title: "Musyawarah Desa Panca Tunggal",
            description:
                "Pemerintah Desa melaksanakan musyawarah bersama masyarakat dalam rangka penyusunan program kerja desa.",
        },

        {
            image: news2,
            category: "Kegiatan",
            date: "18 Juli 2026",
            title: "Gotong Royong Membersihkan Lingkungan",
            description:
                "Masyarakat Desa Panca Tunggal bersama perangkat desa melaksanakan kegiatan gotong royong rutin.",
        },

        {
            image: news3,
            category: "UMKM",
            date: "15 Juli 2026",
            title: "Pelatihan Digital Marketing UMKM",
            description:
                "Pelaku UMKM mendapatkan pelatihan pemasaran digital guna meningkatkan penjualan produk lokal.",
        },

    ];

    return (

        <section
            className="py-24 bg-gray-50"
            data-aos="fade-up"
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Informasi"
                    title="Berita Terbaru"
                    description="Ikuti informasi terbaru mengenai kegiatan dan perkembangan Desa Panca Tunggal."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {news.map((item, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >

                            <NewsCard
                                image={item.image}
                                category={item.category}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                            />

                        </div>

                    ))}

                </div>

                <div
                    className="mt-14 text-center"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >

                    <Button to="/berita">

                        Lihat Semua Berita

                    </Button>

                </div>

            </div>

        </section>

    );

}