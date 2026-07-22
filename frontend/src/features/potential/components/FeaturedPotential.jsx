import {
    Sprout,
    MapPin,
    TrendingUp,
    Users,
    ArrowRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import featuredImage from "../../../assets/images/potential/featured-potential.jpg";

export default function FeaturedPotential() {

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

                {/* Content */}

                <div
                    data-aos="fade-up"
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >

                    {/* Image */}

                    <div className="relative">

                        <img
                            src={featuredImage}
                            alt="Pertanian Jagung"
                            className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                        />

                        <div className="absolute top-6 left-6 bg-green-700 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">

                            <Sprout size={18} />

                            Pertanian

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="text-green-700 font-semibold uppercase tracking-wider">

                            Komoditas Terbaik

                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">

                            Pertanian Jagung
                            Menjadi Potensi
                            Unggulan Desa

                        </h2>

                        <p className="mt-8 text-gray-600 leading-8 text-lg">

                            Jagung merupakan salah satu komoditas utama
                            masyarakat Desa Panca Tunggal. Didukung oleh
                            lahan pertanian yang luas dan petani yang
                            berpengalaman, hasil produksi jagung terus
                            meningkat setiap tahunnya sehingga menjadi
                            salah satu penggerak ekonomi desa.

                        </p>

                        {/* Info */}

                        <div className="grid sm:grid-cols-2 gap-6 mt-10">

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <MapPin className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Lokasi

                                    </p>

                                    <h4 className="font-semibold">

                                        Dusun I & II

                                    </h4>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <TrendingUp className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Produksi

                                    </p>

                                    <h4 className="font-semibold">

                                        ± 1.250 Ton/Tahun

                                    </h4>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <Users className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Petani

                                    </p>

                                    <h4 className="font-semibold">

                                        320 Orang

                                    </h4>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <Sprout className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        Luas Lahan

                                    </p>

                                    <h4 className="font-semibold">

                                        ± 320 Hektar

                                    </h4>

                                </div>

                            </div>

                        </div>

                        {/* Button */}

                        <NavLink
                            to="/potensi/1"
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