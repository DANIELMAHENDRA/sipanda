import { ChevronRight, Landmark } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroGovernment({ profile }) {
    return (
        <section
            className="relative h-[75vh] min-h-[550px] flex items-center overflow-hidden"
        >
            {/* Background Image */}
            {profile?.hero_image ? (
                <img
                    src={profile.hero_image}
                    alt={profile?.village_name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-700" />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Decoration */}
            <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-green-400/20 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 w-full">

                {/* Breadcrumb */}

                <div
                    data-aos="fade-right"
                    className="flex flex-wrap items-center gap-2 text-green-200 text-sm mb-6"
                >
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

                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600/80 backdrop-blur-md text-white px-5 py-2 mb-8"
                >
                    <Landmark size={18} />

                    Pemerintah {profile?.village_name}
                </div>

                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
                >
                    Pemerintahan

                    <br />

                    {profile?.village_name}
                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-lg leading-8 text-gray-200 max-w-3xl"
                >
                    Struktur organisasi Pemerintah Desa yang profesional,
                    transparan, dan melayani masyarakat secara optimal.
                    Kenali Kepala Desa, perangkat desa, tugas pokok,
                    fungsi pemerintahan, serta pelayanan publik yang
                    tersedia bagi seluruh warga.
                </p>

                {/* Button */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="mt-10"
                >
                    <a
                        href="#kepala-desa"
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-green-600 hover:bg-green-700 transition text-white font-semibold shadow-lg"
                    >
                        Lihat Struktur Pemerintahan

                        <ChevronRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}