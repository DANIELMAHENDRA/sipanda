import {
    ChevronRight,
    Sprout,
    Tractor,
    Store,
    Trees,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import heroImage from "../../../assets/images/potential/hero-potential.jpg";

export default function HeroPotential() {
    return (
        <section
            className="relative h-[75vh] min-h-[600px] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-black/20 to-green-900/50"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 w-full pt-28">

                {/* Breadcrumb */}
                <div
                    data-aos="fade-right"
                    className="flex items-center gap-2 text-green-200 text-sm mb-6"
                >
                    <NavLink
                        to="/"
                        className="hover:text-white transition"
                    >
                        Beranda
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white">
                        Potensi Desa
                    </span>
                </div>

                {/* Badge */}
                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full shadow-lg mb-8"
                >
                    <Sprout size={18} />

                    Potensi Unggulan Desa Panca Tunggal
                </div>

                {/* Title */}
                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
                >
                    Potensi
                    <br />

                    Desa Panca Tunggal
                </h1>

                {/* Description */}
                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl"
                >
                    Desa Panca Tunggal memiliki berbagai potensi unggulan
                    di bidang pertanian, peternakan, UMKM,
                    serta sumber daya masyarakat yang terus berkembang.
                    Potensi tersebut menjadi kekuatan utama dalam
                    meningkatkan kesejahteraan masyarakat dan
                    mendorong pembangunan desa yang berkelanjutan.
                </p>

                {/* Statistics */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl"
                >
                    {/* Pertanian */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <Sprout
                            size={30}
                            className="text-green-300 mb-4"
                        />

                        <h3 className="text-3xl font-bold text-white">
                            320 Ha
                        </h3>

                        <p className="mt-2 text-green-100">
                            Lahan Pertanian
                        </p>
                    </div>

                    {/* Peternakan */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <Tractor
                            size={30}
                            className="text-green-300 mb-4"
                        />

                        <h3 className="text-3xl font-bold text-white">
                            500+
                        </h3>

                        <p className="mt-2 text-green-100">
                            Pelaku Pertanian
                        </p>
                    </div>

                    {/* UMKM */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <Store
                            size={30}
                            className="text-green-300 mb-4"
                        />

                        <h3 className="text-3xl font-bold text-white">
                            80+
                        </h3>

                        <p className="mt-2 text-green-100">
                            UMKM Aktif
                        </p>
                    </div>
                </div>

                {/* Highlight */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="mt-12 inline-flex items-center gap-3 text-green-200"
                >
                    <Trees size={22} />

                    <span className="text-base md:text-lg">
                        Bersama mengembangkan potensi lokal menuju Desa
                        Panca Tunggal yang mandiri, produktif, dan berdaya saing.
                    </span>
                </div>

            </div>
        </section>
    );
}