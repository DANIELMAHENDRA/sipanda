import SectionTitle from "../../../../components/common/SectionTitle";
import NewsCard from "../../../../components/common/NewsCard";

export default function RelatedNews({

    news,

    loading,

}) {

    if (loading) {

        return (

            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-gray-500">

                        Memuat berita terkait...

                    </p>

                </div>

            </section>

        );

    }

    if (!news || news.length === 0) {

        return null;

    }

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Berita Lainnya"
                    title="Berita Terkait"
                    description="Temukan informasi dan berita terbaru lainnya dari Pemerintah Desa Panca Tunggal."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {news.map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            <NewsCard
                                image={item.thumbnail}
                                category={item.category}
                                date={item.published_at}
                                title={item.title}
                                description={item.description}
                                to={`/berita/${item.id}`}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}