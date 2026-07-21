import SectionTitle from "../../../../components/common/SectionTitle";
import NewsCard from "../../../../components/common/NewsCard";

import news2 from "../../../../assets/images/news/news2.jpg";
import news3 from "../../../../assets/images/news/news3.jpg";
import news4 from "../../../../assets/images/news/news4.jpg";

export default function RelatedNews() {

    const relatedNews = [
        {
            image: news2,
            category: "Kegiatan",
            date: "18 Juli 2026",
            title: "Gotong Royong Membersihkan Lingkungan Desa",
            description:
                "Masyarakat bersama pemerintah desa melaksanakan kegiatan gotong royong untuk menjaga kebersihan lingkungan.",
        },
        {
            image: news3,
            category: "UMKM",
            date: "15 Juli 2026",
            title: "Pelatihan Digital Marketing UMKM Desa",
            description:
                "Pelaku UMKM memperoleh pelatihan pemasaran digital guna meningkatkan daya saing produk lokal.",
        },
        {
            image: news4,
            category: "Pertanian",
            date: "10 Juli 2026",
            title: "Panen Raya Meningkatkan Produktivitas Petani",
            description:
                "Hasil panen tahun ini mengalami peningkatan berkat kerja sama kelompok tani dan pemerintah desa.",
        },
    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Berita Lainnya"
                    title="Berita Terkait"
                    description="Temukan informasi dan berita terbaru lainnya dari Pemerintah Desa Panca Tunggal."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {relatedNews.map((item, index) => (

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

            </div>

        </section>

    );

}