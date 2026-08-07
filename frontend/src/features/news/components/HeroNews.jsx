import { ChevronRight, Newspaper } from "lucide-react";
import { NavLink } from "react-router-dom";

import heroImage from "../../../assets/images/news/hero-news.jpg";

export default function HeroNews({ profile }) {

    return (

        <section
            className="relative h-[72vh] min-h-[550px] flex items-center bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: profile?.hero_image
                    ? `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.70)), url(${profile.hero_image})`
                    : `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.70)), url(${heroImage})`,
            }}
        >

            {/* Decorative Background */}

            <div className="absolute -top-28 -left-20 w-80 h-80 rounded-full bg-green-500/20 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>

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

                    <span className="text-white">

                        Berita

                    </span>

                </div>

                {/* Badge */}

                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 bg-green-600/80 backdrop-blur-md text-white px-5 py-2 rounded-full"
                >

                    <Newspaper size={18} />

                    Berita & Informasi Desa

                </div>

                {/* Line */}

                <div
                    data-aos="fade-right"
                    data-aos-delay="150"
                    className="w-24 h-1 rounded-full bg-green-400 mt-8"
                />

                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-4xl"
                >

                    Berita

                    <br />

                    {profile?.village_name || "Desa"}

                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-base sm:text-lg lg:text-xl text-gray-200 leading-8 max-w-3xl"
                >

                    Temukan berbagai informasi terbaru mengenai kegiatan
                    pemerintahan desa, pembangunan, UMKM, pendidikan,
                    serta berbagai aktivitas masyarakat

                    <strong className="text-white">

                        {profile?.village_name
                            ? ` ${profile.village_name}`
                            : ""}

                    </strong>

                    .

                </p>

            </div>

        </section>

    );

}