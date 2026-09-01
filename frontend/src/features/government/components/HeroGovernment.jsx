import { ChevronRight, Landmark } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroGovernment({ profile }) {
    return (
        <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-800">

            {/* =========================
                DECORATION
            ========================== */}

            <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-green-600/30 blur-3xl" />

            <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="absolute right-[10%] top-[20%] h-[350px] w-[350px] rounded-full border border-white/5" />

            <div className="absolute right-[15%] top-[25%] h-[250px] w-[250px] rounded-full border border-white/5" />


            {/* =========================
                CONTENT
            ========================== */}

            <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6">

                <div className="max-w-4xl">

                    {/* Breadcrumb */}

                    <div
                        data-aos="fade-right"
                        className="mb-6 flex items-center gap-2 text-sm"
                    >

                        <NavLink
                            to="/"
                            className="text-green-200 transition hover:text-white"
                        >
                            Beranda
                        </NavLink>

                        <ChevronRight
                            size={16}
                            className="text-green-300"
                        />

                        <span className="text-white">
                            Pemerintahan
                        </span>

                    </div>


                    {/* Badge */}

                    <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
                    >

                        <Landmark
                            size={17}
                            className="text-green-300"
                        />

                        Pemerintah Desa{" "}
                        {profile?.village_name || "Panca Tunggal"}

                    </div>


                    {/* Title */}

                    <h1
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
                    >

                        Pemerintahan

                        <br />

                        <span className="text-green-300">
                            {profile?.village_name || "Desa Panca Tunggal"}
                        </span>

                    </h1>


                    {/* Accent Line */}

                    <div
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="mt-7 h-1 w-24 rounded-full bg-green-400"
                    />


                    {/* Description */}

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="mt-7 max-w-2xl text-base leading-8 text-green-100 sm:text-lg"
                    >
                        Struktur organisasi Pemerintah Desa yang profesional,
                        transparan, dan melayani masyarakat secara optimal.
                        Kenali Kepala Desa, perangkat desa, tugas pokok,
                        fungsi pemerintahan, serta pelayanan publik yang
                        tersedia bagi seluruh warga.
                    </p>

                </div>

            </div>


            {/* =========================
                BOTTOM WAVE
            ========================== */}

            <div className="absolute bottom-0 left-0 w-full">

                <svg
                    viewBox="0 0 1440 100"
                    className="block h-auto w-full"
                    preserveAspectRatio="none"
                >

                    <path
                        fill="white"
                        d="M0,70 C240,120 400,20 650,45 C900,70 1050,110 1250,55 C1340,30 1390,35 1440,45 L1440,100 L0,100 Z"
                    />

                </svg>

            </div>

        </section>
    );
}