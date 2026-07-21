import {
    ChevronRight,
    CalendarDays,
    User,
    Eye,
    Newspaper,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import heroImage from "../../../assets/images/news/hero-detail-news.jpg";

export default function HeroDetailNews() {

    return (

        <section
            className="relative h-[70vh] min-h-[550px] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/65"></div>

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
                        to="/berita"
                        className="hover:text-white transition"
                    >
                        Berita
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white">
                        Detail Berita
                    </span>

                </div>

                {/* Badge */}

                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full mb-8 shadow-lg"
                >

                    <Newspaper size={18} />

                    Pemerintahan

                </div>

                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl"
                >

                    Musyawarah Desa Penyusunan
                    <br />

                    RKP Desa Tahun 2026

                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl"
                >

                    Pemerintah Desa Panca Tunggal bersama masyarakat
                    melaksanakan musyawarah desa dalam rangka
                    penyusunan Rencana Kerja Pemerintah Desa
                    (RKP Desa) Tahun 2026 sebagai dasar pembangunan
                    desa yang lebih maju, transparan, dan partisipatif.

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
                            20 Juli 2026
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <User size={20} />

                        <span>
                            Admin Desa
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <Eye size={20} />

                        <span>
                            1.245 Dibaca
                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}