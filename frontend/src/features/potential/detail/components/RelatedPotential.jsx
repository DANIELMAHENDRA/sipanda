import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import agriculture from "../../../../assets/images/potential/agriculture.jpg";
import umkm from "../../../../assets/images/potential/umkm.jpg";
import tourism from "../../../../assets/images/potential/tourism.jpg";
export default function RelatedPotential() {

    const potentials = [

        {
            id: 1,
            title: "Pertanian Modern Desa Panca Tunggal",
            category: "Pertanian",
            image: agriculture,
        },

        {
            id: 2,
            title: "UMKM Lokal yang Terus Berkembang",
            category: "UMKM",
            image: umkm,
        },

        {
            id: 3,
            title: "Potensi Wisata Alam Desa",
            category: "Pariwisata",
            image: tourism,
        },

    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-14"
                >

                    <h2 className="text-4xl font-bold text-gray-900">

                        Potensi Lainnya

                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">

                        Jelajahi berbagai potensi unggulan Desa Panca Tunggal
                        yang menjadi penggerak utama pembangunan ekonomi
                        masyarakat.

                    </p>

                </div>

                {/* Grid */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {potentials.map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
                        >

                            {/* Image */}

                            <div className="overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                                />

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">

                                    {item.category}

                                </span>

                                <h3 className="mt-5 text-2xl font-bold text-gray-900 leading-snug">

                                    {item.title}

                                </h3>

                                <NavLink
                                    to={`/potensi/${item.id}`}
                                    className="inline-flex items-center gap-2 mt-6 text-green-700 font-semibold hover:gap-3 transition-all"
                                >

                                    Lihat Detail

                                    <ArrowRight size={18} />

                                </NavLink>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}