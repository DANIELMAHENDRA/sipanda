import {
    CalendarDays,
    ArrowRight,
} from "lucide-react";

import Button from "../../../components/common/Button";

export default function NewsGrid({

    news,

    loading,

    error,

}) {

    if (loading) {

        return (

            <section className="py-10 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-gray-500">

                        Memuat berita...

                    </p>

                </div>

            </section>

        );

    }

    if (error) {

        return (

            <section className="py-10 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-red-500">

                        Gagal memuat data berita.

                    </p>

                </div>

            </section>

        );

    }

    if (!news.length) {

        return (

            <section className="py-10 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-gray-500">

                        Belum ada berita.

                    </p>

                </div>

            </section>

        );

    }

    return (

        <section className="py-10 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {news.map((item, index) => (

                        <article
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={item.thumbnail || "/images/no-image.png"}
                                    alt={item.title}
                                    className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                                />

                            </div>

                            <div className="p-6">

                                <div className="flex justify-between items-center mb-5">

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

                                        {item.category}

                                    </span>

                                    <div className="flex items-center gap-2 text-gray-500 text-sm">

                                        <CalendarDays size={16} />

                                        {item.published_at}

                                    </div>

                                </div>

                                <h3 className="text-2xl font-bold hover:text-green-700 transition">

                                    {item.title}

                                </h3>

                                <p className="mt-4 text-gray-600 leading-7">

                                    {item.description}

                                </p>

                                <div className="mt-8">

                                    <Button
                                    to={`/berita/${item.id}`}
                                    variant="outline"
                                >

                                        Baca Selengkapnya

                                        <ArrowRight size={18} />

                                    </Button>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}