import Button from "../../../components/common/Button";

import {
    FaBuildingColumns,
    FaLocationDot,
    FaArrowRightLong,
    FaTreeCity,
    FaMap,
} from "react-icons/fa6";

export default function HeroSection({ profile }) {

    return (

        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800">

            {/* Background */}

            <div className="absolute inset-0">

                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover opacity-15"
                />

                <div className="absolute inset-0 bg-black/30" />

            </div>


            {/* Blur */}

            <div className="absolute -top-44 -left-44 w-[450px] h-[450px] rounded-full bg-white/5 blur-3xl" />

            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-green-300/10 blur-3xl" />


            {/* Content */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-32">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">


                    {/* ================= LEFT ================= */}

                    <div>

                        <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2">

                            <FaBuildingColumns className="text-white text-base sm:text-lg shrink-0" />

                            <span className="text-white text-xs sm:text-sm font-medium tracking-wide">

                                WEBSITE PROFIL DESA PANCA TUNGGAL

                            </span>

                        </div>


                        <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-white">

                            Selamat Datang di

                            <span className="block mt-2 sm:mt-3 text-green-300 break-words">

                                {profile?.village_name}

                            </span>

                        </h1>


                        <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-200">

                            {profile?.about}

                        </p>


                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">

                            <Button to="/profil">

                                Profil Desa

                            </Button>

                            <Button
                                to="/berita"
                                variant="outline"
                            >

                                Berita Desa

                            </Button>

                        </div>

                    </div>


                    {/* ================= RIGHT ================= */}

                    <div className="space-y-4 sm:space-y-5">


                        {/* Card 1 */}

                        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 sm:p-6 transition hover:bg-white/15">

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">

                                <div className="flex shrink-0 h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20">

                                    <FaLocationDot className="text-2xl sm:text-3xl text-white" />

                                </div>


                                <div className="min-w-0">

                                    <p className="text-xs sm:text-sm uppercase tracking-wider text-green-200">

                                        Lokasi Desa

                                    </p>

                                    <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-bold text-white break-words">

                                        Kecamatan Merbau Mataram

                                    </h3>

                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white break-words">

                                        Lampung Selatan

                                    </h3>

                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white break-words">

                                        Provinsi Lampung

                                    </h3>

                                </div>

                            </div>

                        </div>


                        {/* Card 2 */}

                        <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 sm:p-6 transition hover:bg-white/15">

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">

                                <div className="flex shrink-0 h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20">

                                    <FaTreeCity className="text-2xl sm:text-3xl text-white" />

                                </div>


                                <div className="min-w-0">

                                    <p className="text-xs sm:text-sm uppercase tracking-wider text-green-200">

                                        Potensi Desa

                                    </p>

                                    <h3 className="mt-1 text-lg sm:text-xl lg:text-2xl font-bold text-white break-words">

                                        Pertanian • UMKM • Peternakan

                                    </h3>

                                </div>

                            </div>

                        </div>


                        {/* Card 3 */}

                        <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 shadow-2xl">

                            <div className="flex items-center gap-3">

                                <div className="flex shrink-0 h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-100">

                                    <FaMap className="text-lg sm:text-xl text-green-700" />

                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">

                                    Jelajahi Desa

                                </h3>

                            </div>


                            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">

                                Temukan berbagai informasi resmi mengenai profil desa,
                                berita terkini, layanan masyarakat, potensi desa,
                                galeri kegiatan, serta transparansi pemerintahan
                                dalam satu portal digital yang mudah diakses.

                            </p>


                            <a
                                href="/profil"
                                className="mt-6 sm:mt-8 inline-flex items-center gap-3 font-semibold text-green-700 group"
                            >

                                Mulai Menjelajah

                                <FaArrowRightLong className="transition duration-300 group-hover:translate-x-2" />

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}