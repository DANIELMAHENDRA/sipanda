import {
    ArrowRight,
    Phone,
    Sprout,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function CTASection() {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    data-aos="zoom-in"
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        bg-gradient-to-r
                        from-green-700
                        via-green-800
                        to-green-900
                        px-10
                        py-20
                        lg:px-20
                        text-center
                    "
                >

                    {/* Background Decoration */}

                    <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

                    <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-green-500/20 blur-3xl"></div>

                    {/* Icon */}

                    <div
                        className="
                            mx-auto
                            w-24
                            h-24
                            rounded-full
                            bg-white/10
                            backdrop-blur-md
                            flex
                            items-center
                            justify-center
                            border
                            border-white/20
                        "
                    >

                        <Sprout
                            size={42}
                            className="text-white"
                        />

                    </div>

                    {/* Title */}

                    <h2
                        className="
                            mt-10
                            text-4xl
                            lg:text-5xl
                            font-bold
                            text-white
                        "
                    >

                        Bersama Mengembangkan
                        <br />

                        Potensi Desa Panca Tunggal

                    </h2>

                    {/* Description */}

                    <p
                        className="
                            mt-8
                            max-w-3xl
                            mx-auto
                            text-lg
                            leading-8
                            text-green-100
                        "
                    >

                        Potensi desa akan berkembang apabila didukung oleh
                        seluruh masyarakat, pelaku usaha, pemerintah,
                        maupun berbagai pihak yang ingin berkolaborasi
                        membangun Desa Panca Tunggal menjadi desa yang
                        mandiri, maju, dan berdaya saing.

                    </p>

                    {/* Button */}

                    <div
                        className="
                            flex
                            flex-wrap
                            justify-center
                            gap-5
                            mt-12
                        "
                    >

                        <NavLink
                            to="/kontak"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                bg-white
                                text-green-700
                                px-8
                                py-4
                                rounded-full
                                font-semibold
                                hover:scale-105
                                transition
                                duration-300
                            "
                        >

                            <Phone size={20} />

                            Hubungi Kami

                        </NavLink>

                        <NavLink
                            to="/berita"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                border
                                border-white/30
                                bg-white/10
                                backdrop-blur-md
                                text-white
                                px-8
                                py-4
                                rounded-full
                                font-semibold
                                hover:bg-white/20
                                transition
                                duration-300
                            "
                        >

                            Lihat Berita Desa

                            <ArrowRight size={20} />

                        </NavLink>

                    </div>

                </div>

            </div>

        </section>

    );

}