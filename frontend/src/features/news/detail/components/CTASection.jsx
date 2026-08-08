import { ArrowRight, Newspaper, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CTASection() {

    return (

        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-r from-green-700 via-green-800 to-green-900">

            {/* Background Decoration */}

            <div className="
                absolute
                -top-32
                -left-32
                w-72
                h-72
                rounded-full
                bg-white/5
                blur-2xl
            "></div>

            <div className="
                absolute
                -bottom-40
                -right-32
                w-96
                h-96
                rounded-full
                bg-green-400/10
                blur-3xl
            "></div>

            <div className="
                absolute
                top-1/2
                left-1/2
                w-64
                h-64
                rounded-full
                bg-white/5
                -translate-x-1/2
                -translate-y-1/2
                blur-2xl
            "></div>


            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

                <div
                    data-aos="zoom-in"
                    className="
                        bg-white
                        rounded-3xl
                        shadow-2xl
                        p-6
                        sm:p-8
                        md:p-10
                        lg:p-14
                        xl:p-16
                    "
                >

                    <div className="
                        grid
                        lg:grid-cols-2
                        gap-10
                        lg:gap-16
                        items-center
                    ">

                        {/* =========================
                            LEFT CONTENT
                        ========================== */}

                        <div>

                            {/* Badge */}

                            <div className="
                                inline-flex
                                items-center
                                gap-2
                                bg-green-100
                                text-green-700
                                px-4
                                sm:px-5
                                py-2
                                rounded-full
                                font-semibold
                                text-sm
                                sm:text-base
                            ">

                                <Newspaper size={18} />

                                Tetap Ikuti Informasi Terbaru

                            </div>


                            {/* Title */}

                            <h2 className="
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                font-bold
                                text-gray-900
                                mt-6
                                leading-tight
                            ">

                                Jangan Lewatkan{" "}

                                <span className="text-green-700">
                                    Berita Terbaru
                                </span>

                                <br className="hidden sm:block" />

                                {" "}dari Desa Panca Tunggal

                            </h2>


                            {/* Description */}

                            <p className="
                                mt-6
                                text-base
                                sm:text-lg
                                text-gray-600
                                leading-7
                                sm:leading-8
                                max-w-2xl
                            ">

                                Website SIPANDA selalu menghadirkan informasi
                                terbaru mengenai kegiatan pemerintahan,
                                pembangunan desa, pelayanan masyarakat,
                                serta berbagai potensi Desa Panca Tunggal.

                            </p>

                        </div>


                        {/* =========================
                            RIGHT ACTION
                        ========================== */}

                        <div className="
                            flex
                            flex-col
                            gap-4
                            w-full
                            lg:items-end
                        ">

                            {/* Berita */}

                            <NavLink
                                to="/berita"
                                className="
                                    w-full
                                    sm:w-auto
                                    lg:min-w-[220px]
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    bg-green-700
                                    hover:bg-green-800
                                    active:scale-[0.98]
                                    text-white
                                    px-7
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    transition-all
                                    duration-300
                                    shadow-lg
                                    hover:shadow-xl
                                "
                            >

                                <Newspaper size={20} />

                                <span>
                                    Lihat Semua Berita
                                </span>

                                <ArrowRight size={20} />

                            </NavLink>


                            {/* Kontak */}

                            <NavLink
                                to="/kontak"
                                className="
                                    w-full
                                    sm:w-auto
                                    lg:min-w-[220px]
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    border-2
                                    border-green-700
                                    text-green-700
                                    hover:bg-green-700
                                    hover:text-white
                                    active:scale-[0.98]
                                    px-7
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    transition-all
                                    duration-300
                                "
                            >

                                <PhoneCall size={20} />

                                <span>
                                    Hubungi Kami
                                </span>

                            </NavLink>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}