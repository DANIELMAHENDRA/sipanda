import SectionTitle from "../../../components/common/SectionTitle";
import NewsCard from "../../../components/common/NewsCard";
import Button from "../../../components/common/Button";

export default function NewsSection({ news = [] }) {

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

                    {news.slice(0, 3).map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >

                            <NewsCard
                                image={item.thumbnail}
                                category={item.category}
                                date={item.published_at}
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