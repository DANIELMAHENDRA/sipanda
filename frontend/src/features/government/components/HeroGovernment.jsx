import { ChevronRight, Landmark } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroGovernment({ profile }) {

    return (

        <section
            className="relative h-[70vh] min-h-[500px] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: profile?.hero_image
                    ? `url(${profile.hero_image})`
                    : "linear-gradient(to right,#166534,#15803d)",
            }}
        >

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}

            <div className="relative max-w-7xl mx-auto px-6 w-full">

                {/* Breadcrumb */}

                <div className="flex items-center gap-2 text-green-200 text-sm mb-6">

                    <NavLink
                        to="/"
                        className="hover:text-white transition"
                    >
                        Beranda
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white">
                        Pemerintahan
                    </span>

                </div>

                {/* Badge */}

                <div className="inline-flex items-center gap-2 bg-green-600/80 backdrop-blur-md text-white px-5 py-2 rounded-full mb-8">

                    <Landmark size={18} />

                    Pemerintah {profile?.village_name}

                </div>

                {/* Title */}

                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">

                    Pemerintahan

                    <br />

                    {profile?.village_name}

                </h1>

                {/* Description */}

                <p className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl">

                    Mengenal struktur organisasi Pemerintah Desa,
                    perangkat desa, tugas dan fungsi,
                    serta pelayanan publik yang diberikan kepada masyarakat
                    secara profesional, transparan, dan akuntabel.

                </p>

            </div>

        </section>

    );

}