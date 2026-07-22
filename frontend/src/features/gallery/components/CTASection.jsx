import {
    ArrowRight,
    Camera,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function CTASection() {

    return (

        <section className="py-24 bg-gradient-to-r from-green-800 via-green-700 to-green-900">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    data-aos="zoom-in"
                    className="
                        bg-white/10
                        backdrop-blur-lg
                        rounded-[40px]
                        p-10
                        md:p-16
                        text-center
                        border
                        border-white/20
                    "
                >

                    {/* Icon */}

                    <div
                        className="
                            w-24
                            h-24
                            rounded-full
                            bg-white/20
                            flex
                            items-center
                            justify-center
                            mx-auto
                            mb-8
                        "
                    >

                        <Camera
                            size={46}
                            className="text-white"
                        />

                    </div>

                    {/* Title */}

                    <h2
                        className="
                            text-4xl
                            lg:text-5xl
                            font-bold
                            text-white
                            leading-tight
                        "
                    >

                        Dokumentasikan

                        <br />

                        Kemajuan Desa Bersama Kami

                    </h2>

                    {/* Description */}

                    <p
                        className="
                            mt-8
                            max-w-3xl
                            mx-auto
                            text-green-100
                            text-lg
                            leading-9
                        "
                    >

                        Galeri Desa Panca Tunggal merupakan arsip digital
                        berbagai kegiatan pemerintahan, pembangunan,
                        pelayanan masyarakat, budaya, pendidikan,
                        serta pemberdayaan masyarakat sebagai bentuk
                        transparansi informasi publik.

                    </p>

                    {/* Button */}

                    <div className="mt-12">

                        <NavLink
                            to="/kontak"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                px-8
                                py-4
                                rounded-full
                                bg-white
                                text-green-700
                                font-semibold
                                text-lg
                                hover:bg-green-100
                                transition-all
                                duration-300
                                shadow-xl
                                hover:scale-105
                            "
                        >

                            Hubungi Pemerintah Desa

                            <ArrowRight size={22} />

                        </NavLink>

                    </div>

                </div>

            </div>

        </section>

    );

}