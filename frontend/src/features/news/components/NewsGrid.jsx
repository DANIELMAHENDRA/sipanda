import {
    CalendarDays,
    ArrowRight,
    Newspaper,
} from "lucide-react";

import Button from "../../../components/common/Button";

export default function NewsGrid({

    news,

    loading,

    error,

}) {

    if (loading) {

        return (

            <section className="py-14 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-gray-500 text-lg">

                        Memuat berita...

                    </p>

                </div>

            </section>

        );

    }

    if (error) {

        return (

            <section className="py-14 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-red-500 text-lg">

                        Gagal memuat data berita.

                    </p>

                </div>

            </section>

        );

    }

    if (!news.length) {

        return (

            <section className="py-20 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="bg-white rounded-3xl border border-gray-200 p-14 text-center">

                        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">

                            <Newspaper
                                size={36}
                                className="text-green-700"
                            />

                        </div>

                        <h3 className="mt-8 text-3xl font-bold text-gray-900">

                            Belum Ada Berita

                        </h3>

                        <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-8">

                            Saat ini belum terdapat berita yang dapat
                            ditampilkan.

                        </p>

                    </div>

                </div>

            </section>

        );

    }

    return (

        <section className="pb-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {news.map((item, index) => (

                        <article
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="
                                group
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                border
                                border-gray-200
                                shadow-sm
                                hover:shadow-2xl
                                hover:-translate-y-2
                                transition-all
                                duration-300
                                flex
                                flex-col
                            "
                        >

                            {/* Thumbnail */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={
                                        item.thumbnail ||
                                        "/images/no-image.png"
                                    }
                                    alt={item.title}
                                    className="
                                        w-full
                                        h-64
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                                <div className="absolute top-5 left-5">

                                    <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-green-700 text-sm font-semibold shadow">

                                        {item.category}

                                    </span>

                                </div>

                            </div>

                            {/* Content */}

                            <div className="flex flex-col flex-1 p-7">

                                <div className="flex items-center gap-2 text-sm text-gray-500">

                                    <CalendarDays size={17} />

                                    {item.published_at}

                                </div>

                                <h3 className="
                                    mt-5
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                    group-hover:text-green-700
                                    transition
                                    line-clamp-2
                                ">

                                    {item.title}

                                </h3>

                                <p className="
                                    mt-5
                                    text-gray-600
                                    leading-8
                                    line-clamp-3
                                    flex-1
                                ">

                                    {item.description}

                                </p>

                                <div className="mt-8">

                                    <Button
                                        to={`/berita/${item.id}`}
                                        variant="outline"
                                        className="group/button"
                                    >

                                        <span>

                                            Baca Selengkapnya

                                        </span>

                                        <ArrowRight
                                            size={18}
                                            className="transition-transform group-hover/button:translate-x-1"
                                        />

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