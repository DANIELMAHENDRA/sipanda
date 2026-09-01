import { ChevronRight, Newspaper } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroNews({ profile }) {
    return (
        <section className="relative flex min-h-[520px] items-center overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-600 sm:min-h-[560px] lg:min-h-[600px]">

            {/* =========================
                BACKGROUND DECORATION
            ========================== */}

            <div className="absolute inset-0 overflow-hidden">

                {/* Gradasi cahaya kiri atas */}
                <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-green-400/20 blur-3xl" />

                {/* Gradasi cahaya kanan bawah */}
                <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-green-300/15 blur-3xl" />

                {/* Garis dekorasi */}
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent" />

                {/* Pattern garis sederhana */}
                <div className="absolute right-10 top-20 hidden h-64 w-64 rotate-12 rounded-3xl border border-white/10 lg:block" />

                <div className="absolute right-20 top-32 hidden h-64 w-64 rotate-12 rounded-3xl border border-white/5 lg:block" />

            </div>


            {/* =========================
                CONTENT
            ========================== */}

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

                {/* Breadcrumb */}

                <div
                    data-aos="fade-right"
                    className="mb-6 flex flex-wrap items-center gap-2 text-sm text-green-200"
                >

                    <NavLink
                        to="/"
                        className="transition hover:text-white"
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
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md sm:px-5"
                >

                    <Newspaper size={18} />

                    Berita & Informasi Desa

                </div>


                {/* Accent Line */}

                <div
                    data-aos="fade-right"
                    data-aos-delay="150"
                    className="mt-7 h-1 w-20 rounded-full bg-green-300 sm:w-24"
                />


                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-7 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
                >

                    Berita

                    <br />

                    {profile?.village_name || "Desa"}

                </h1>


                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-7 max-w-3xl text-base leading-8 text-green-100 sm:mt-8 sm:text-lg lg:text-xl"
                >

                    Temukan berbagai informasi terbaru mengenai kegiatan
                    pemerintahan desa, pembangunan, UMKM, pendidikan,
                    serta berbagai aktivitas masyarakat{" "}

                    <strong className="text-white">
                        {profile?.village_name
                            ? ` ${profile.village_name}`
                            : ""}
                    </strong>.

                </p>

            </div>

        </section>
    );
}