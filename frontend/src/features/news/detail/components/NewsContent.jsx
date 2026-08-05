import {
    Quote,
    Tag,
} from "lucide-react";

export default function NewsContent({ news }) {

    const tags = news?.category
        ? [news.category]
        : [];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* Cover */}

                {news?.thumbnail && (

                    <img
                        data-aos="zoom-in"
                        src={news.thumbnail}
                        alt={news.title}
                        className="w-full rounded-3xl shadow-xl object-cover"
                    />

                )}

                {/* Artikel */}

                <div
                    data-aos="fade-up"
                    className="mt-12"
                >

                    <div
                        className="prose prose-lg max-w-none prose-green"
                        dangerouslySetInnerHTML={{
                            __html: news.content,
                        }}
                    />

                </div>

                {/* Quote */}

                <div
                    data-aos="fade-up"
                    className="my-16 bg-green-50 border-l-8 border-green-700 rounded-r-2xl p-10"
                >

                    <Quote
                        className="text-green-700 mb-5"
                        size={42}
                    />

                    <p className="text-2xl italic leading-10 text-gray-800">

                        "Informasi yang transparan merupakan langkah awal menuju pelayanan publik yang lebih baik."

                    </p>

                    <p className="mt-6 font-semibold text-green-700">

                        — Pemerintah Desa

                    </p>

                </div>

                {/* Tags */}

                <div
                    data-aos="fade-up"
                    className="mt-20 flex flex-wrap items-center gap-4"
                >

                    <Tag
                        size={22}
                        className="text-green-700"
                    />

                    {tags.map((tag) => (

                        <span
                            key={tag}
                            className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium"
                        >

                            {tag}

                        </span>

                    ))}

                </div>

            </div>

        </section>

    );

}