import SectionTitle from "../../../../components/common/SectionTitle";
import NewsCard from "../../../../components/common/NewsCard";

export default function RelatedNews({
    news,
    loading,
}) {

    /* Loading */

    if (loading) {

        return (

            <section className="py-16 md:py-20 lg:py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

                    <div className="inline-flex flex-col items-center">

                        <div className="
                            w-12
                            h-12
                            rounded-full
                            border-4
                            border-green-100
                            border-t-green-700
                            animate-spin
                        "></div>

                        <p className="mt-5 text-gray-500">

                            Memuat berita terkait...

                        </p>

                    </div>

                </div>

            </section>

        );

    }

    /* Tidak ada berita terkait */

    if (!news || news.length === 0) {

        return null;

    }

    return (

        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Header */}

                <div
                    data-aos="fade-up"
                    className="mb-12 md:mb-14"
                >

                    <SectionTitle
                        subtitle="Berita Lainnya"
                        title="Berita Terkait"
                        description="Temukan informasi dan berita terbaru lainnya dari Pemerintah Desa Panca Tunggal."
                    />

                </div>

                {/* News Grid */}

                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                    md:gap-8
                ">

                    {news.map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="
                                h-full
                                transition-transform
                                duration-300
                                hover:-translate-y-1
                            "
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