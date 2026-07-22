import {
    ChevronRight,
    Sprout,
    CalendarDays,
    User,
    MapPin,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import heroImage from "../../../../assets/images/potential/hero-potential.jpg";

export default function HeroDetailPotential() {

    return (

        <section
            className="relative min-h-[75vh] flex items-center bg-cover bg-center pt-24 pb-16"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/70"></div>

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-black/30 to-green-900/60"></div>

            {/* Content */}

            <div className="relative max-w-7xl mx-auto px-6 w-full">

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

                    <NavLink
                        to="/potensi"
                        className="hover:text-white transition"
                    >
                        Potensi Desa
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white">
                        Detail Potensi
                    </span>

                </div>

                {/* Badge */}

                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full shadow-lg mb-8"
                >

                    <Sprout size={18} />

                    Potensi Unggulan Desa

                </div>

                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl"
                >

                    Potensi Pertanian
                    <br />

                    Desa Panca Tunggal

                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl"
                >

                    Pertanian merupakan sektor utama yang menjadi
                    penopang perekonomian masyarakat Desa Panca Tunggal.
                    Dengan lahan yang luas dan kondisi tanah yang subur,
                    desa ini mampu menghasilkan berbagai komoditas unggulan
                    yang memiliki nilai ekonomi tinggi.

                </p>

                {/* Meta */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex flex-wrap items-center gap-8 mt-10 text-green-100"
                >

                    <div className="flex items-center gap-2">

                        <CalendarDays size={20} />

                        <span>
                            Diperbarui 20 Juli 2026
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <User size={20} />

                        <span>
                            Pemerintah Desa
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <MapPin size={20} />

                        <span>
                            Desa Panca Tunggal
                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}