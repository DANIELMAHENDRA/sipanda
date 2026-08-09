import {
    ArrowRight,
    Phone,
    Sprout,
    Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";


export default function CTASection() {

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-white
                py-20
                sm:py-24
                lg:py-28
            "
        >

            {/* =====================================================
                BACKGROUND DECORATION
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-32
                    -left-32
                    h-72
                    w-72
                    rounded-full
                    bg-emerald-100/60
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -right-32
                    h-80
                    w-80
                    rounded-full
                    bg-green-100/60
                    blur-3xl
                "
            />


            {/* =====================================================
                CONTAINER
            ====================================================== */}

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                <div
                    data-aos="zoom-in"
                    className="
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        sm:rounded-[2.5rem]
                        bg-gradient-to-br
                        from-emerald-950
                        via-emerald-900
                        to-green-800
                        px-6
                        py-14
                        sm:px-10
                        sm:py-16
                        lg:px-20
                        lg:py-20
                        text-center
                        shadow-2xl
                    "
                >

                    {/* =================================================
                        DECORATIVE GLOW
                    ================================================== */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            -top-32
                            h-96
                            w-96
                            rounded-full
                            bg-white/5
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-40
                            -left-32
                            h-96
                            w-96
                            rounded-full
                            bg-green-300/10
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            top-1/2
                            left-1/2
                            h-80
                            w-80
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-emerald-400/5
                            blur-3xl
                        "
                    />


                    {/* =================================================
                        CONTENT
                    ================================================== */}

                    <div className="relative">

                        {/* =================================================
                            ICON
                        ================================================== */}

                        <div
                            className="
                                mx-auto
                                flex
                                h-20
                                w-20
                                sm:h-24
                                sm:w-24
                                items-center
                                justify-center
                                rounded-[1.75rem]
                                border
                                border-white/15
                                bg-white/10
                                shadow-xl
                                backdrop-blur-xl
                            "
                        >

                            <Sprout
                                size={40}
                                strokeWidth={1.8}
                                className="
                                    text-green-300
                                    sm:w-11
                                    sm:h-11
                                "
                            />

                        </div>


                        {/* =================================================
                            BADGE
                        ================================================== */}

                        <div
                            className="
                                mt-8
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/15
                                bg-white/10
                                px-4
                                py-2
                                text-xs
                                sm:text-sm
                                font-bold
                                uppercase
                                tracking-widest
                                text-green-200
                                backdrop-blur-md
                            "
                        >

                            <Sparkles size={15} />

                            Bersama Membangun Desa

                        </div>


                        {/* =================================================
                            TITLE
                        ================================================== */}

                        <h2
                            className="
                                mx-auto
                                mt-6
                                max-w-4xl
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                font-black
                                leading-tight
                                text-white
                            "
                        >

                            Bersama Mengembangkan
                            
                            <span className="block text-green-300">

                                Potensi Desa Panca Tunggal

                            </span>

                        </h2>


                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-3xl
                                text-base
                                sm:text-lg
                                leading-8
                                text-slate-200
                            "
                        >

                            Potensi desa akan berkembang apabila didukung
                            oleh seluruh masyarakat, pelaku usaha, pemerintah,
                            maupun berbagai pihak yang ingin berkolaborasi
                            membangun Desa Panca Tunggal menjadi desa yang
                            mandiri, maju, dan berdaya saing.

                        </p>


                        {/* =================================================
                            BUTTONS
                        ================================================== */}

                        <div
                            className="
                                mt-9
                                sm:mt-11
                                flex
                                flex-col
                                sm:flex-row
                                items-stretch
                                sm:items-center
                                justify-center
                                gap-3
                                sm:gap-4
                            "
                        >


                            {/* Secondary */}

                            <NavLink
                                to="/berita"
                                className="
                                    group
                                    inline-flex
                                    min-h-14
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-white/20
                                    bg-white/10
                                    px-7
                                    sm:px-8
                                    py-4
                                    font-bold
                                    text-white
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    hover:bg-white/15
                                    hover:border-white/30
                                    active:scale-95
                                "
                            >

                                Lihat Berita Desa

                                <ArrowRight
                                    size={19}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                />

                            </NavLink>

                        </div>


                        {/* =================================================
                            BOTTOM HIGHLIGHT
                        ================================================== */}

                        <div
                            className="
                                mt-9
                                flex
                                flex-col
                                sm:flex-row
                                items-center
                                justify-center
                                gap-2
                                sm:gap-3
                                text-sm
                                text-green-100
                            "
                        >

                            <Sprout
                                size={17}
                                className="text-green-300"
                            />

                            <span>

                                Potensi lokal, masyarakat kuat,
                                desa semakin maju.

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}