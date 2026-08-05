import {
    Sprout,
    TrendingUp,
    ArrowRight,
    ImageOff,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function FeaturedPotential({
    potential,
    loading,
    error,
}) {

    const featured =
        potential.find(item => item.is_featured);

    if (loading) {

        return (

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-gray-500">

                        Memuat potensi unggulan...

                    </p>

                </div>

            </section>

        );

    }

    if (error) {

        return (

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-red-500">

                        Gagal memuat data potensi.

                    </p>

                </div>

            </section>

        );

    }

    if (!featured) {

        return null;

    }

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <span className="text-green-700 font-semibold uppercase tracking-widest">

                        Potensi Unggulan

                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900">

                        Komoditas Andalan Desa

                    </h2>

                </div>

                <div
                    data-aos="fade-up"
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >

                    {/* Image */}

                    <div className="relative">

                        {featured.cover_image || featured.thumbnail ? (

                            <img
                                src={featured.cover_image || featured.thumbnail}
                                alt={featured.title}
                                className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                            />

                        ) : (

                            <div className="rounded-3xl shadow-2xl w-full h-[500px] bg-gray-100 flex items-center justify-center">

                                <ImageOff
                                    size={120}
                                    className="text-gray-400"
                                />

                            </div>

                        )}

                        <div className="absolute top-6 left-6 bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">

                            <Sprout size={18} />

                            {featured.category}

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="text-green-700 font-semibold uppercase tracking-wider">

                            Komoditas Terbaik

                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">

                            {featured.title}

                        </h2>

                        <p className="mt-8 text-gray-600 leading-8 text-lg">

                            {featured.excerpt}

                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mt-10">

                            {featured.statistics
                                ?.filter(item => item.title && item.value)
                                .map((item) => (

                                    <div
                                        key={item.title}
                                        className="flex items-center gap-4"
                                    >

                                        <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                            <TrendingUp className="text-green-700" />

                                        </div>

                                        <div>

                                            <p className="text-gray-500 text-sm">

                                                {item.title}

                                            </p>

                                            <h4 className="font-semibold">

                                                {item.value}

                                            </h4>

                                        </div>

                                    </div>

                                ))}

                        </div>

                        <NavLink
                            to={`/potensi/${featured.id}`}
                            className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 transition"
                        >

                            Lihat Detail

                            <ArrowRight size={20} />

                        </NavLink>

                    </div>

                </div>

            </div>

        </section>

    );

}