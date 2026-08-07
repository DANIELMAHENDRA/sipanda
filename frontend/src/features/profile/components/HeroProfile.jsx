import { ChevronDown, ChevronRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroProfile({ profile }) {
    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                backgroundImage: profile?.hero_image
                    ? `url(${profile.hero_image})`
                    : "url('/images/default-hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/70 to-black/50" />

            {/* Blur Circle */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-500/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-400/20 blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

                {/* Breadcrumb */}

                <div
                    data-aos="fade-right"
                    className="flex items-center gap-2 text-green-200 mb-8"
                >
                    <NavLink
                        to="/"
                        className="hover:text-white transition"
                    >
                        Beranda
                    </NavLink>

                    <ChevronRight size={18} />

                    <span className="text-white">
                        Profil Desa
                    </span>
                </div>

                {/* Badge */}

                <div
                    data-aos="fade-up"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white"
                >
                    <MapPin size={18} />

                    <span>
                        {profile?.district},
                        {" "}
                        {profile?.regency}
                    </span>
                </div>

                {/* Heading */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-white"
                >
                    Selamat Datang di
                    <br />

                    <span className="text-green-400">
                        {profile?.village_name ||
                            "Desa Panca Tunggal"}
                    </span>
                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-8 max-w-3xl text-lg lg:text-xl text-gray-200 leading-9"
                >
                    Mengenal lebih dekat Desa{" "}
                    <strong className="text-white">
                        {profile?.village_name}
                    </strong>{" "}
                    yang berada di Kecamatan{" "}
                    <strong className="text-white">
                        {profile?.district}
                    </strong>
                    , Kabupaten{" "}
                    <strong className="text-white">
                        {profile?.regency}
                    </strong>
                    , Provinsi{" "}
                    <strong className="text-white">
                        {profile?.province}
                    </strong>
                    .
                </p>

                {/* Info Card */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 max-w-xl"
                >
                    <div className="grid grid-cols-2 gap-6">

                        <div>

                            <p className="text-gray-300 text-sm">
                                Kecamatan
                            </p>

                            <h3 className="text-white text-lg font-semibold">
                                {profile?.district}
                            </h3>

                        </div>

                        <div>

                            <p className="text-gray-300 text-sm">
                                Kabupaten
                            </p>

                            <h3 className="text-white text-lg font-semibold">
                                {profile?.regency}
                            </h3>

                        </div>

                        <div>

                            <p className="text-gray-300 text-sm">
                                Provinsi
                            </p>

                            <h3 className="text-white text-lg font-semibold">
                                {profile?.province}
                            </h3>

                        </div>

                        <div>

                            <p className="text-gray-300 text-sm">
                                Status
                            </p>

                            <h3 className="text-green-300 text-lg font-semibold">
                                Desa Definitif
                            </h3>

                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll */}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">

                <ChevronDown size={40} />

            </div>

            {/* Wave */}

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-24 fill-white"
                >
                    <path d="M0,0V46.29c47.79,22,103.59,29.05,158,17,70.36-15.55,136.33-55.11,206.8-67.61C438.64-16.66,512.34,5,583,32.39c69.27,26.9,138.3,57.2,209.4,56.66,36.15-.27,71.62-8.45,106-19.22C989.49,43,1113-11,1200,10V0Z"></path>
                </svg>
            </div>
        </section>
    );
}