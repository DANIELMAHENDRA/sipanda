import {
    ChevronRight,
    Sprout,
    Tractor,
    Store,
    Trees,
    ArrowRight,
    MapPin,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import useProfile from "../../../hooks/useProfile";

export default function HeroPotential() {

    const { profile, loading } = useProfile();

    if (loading) {
        return (
            <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800">

                <div className="text-center text-white">

                    <div className="w-10 h-10 mx-auto mb-4 border-4 border-white/30 border-t-white rounded-full animate-spin" />

                    <p className="text-green-100">
                        Memuat informasi potensi desa...
                    </p>

                </div>

            </section>
        );
    }

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-emerald-950
                via-emerald-900
                to-green-800
            "
        >

            {/* =========================================================
                BACKGROUND
            ========================================================= */}

            <div className="absolute inset-0">

                <img
                    src={
                        profile?.hero_image ||
                        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop"
                    }
                    alt=""
                    className="
                        w-full
                        h-full
                        object-cover
                        opacity-15
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/30
                    "
                />

            </div>


            {/* =========================================================
                DECORATIVE BLUR
            ========================================================= */}

            <div
                className="
                    absolute
                    -top-44
                    -left-44
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-white/5
                    blur-3xl
                "
            />

            <div
                className="
                    absolute
                    bottom-0
                    right-0
                    w-[420px]
                    h-[420px]
                    rounded-full
                    bg-green-300/10
                    blur-3xl
                "
            />


            {/* =========================================================
                MAIN CONTAINER
            ========================================================= */}

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-6
                    py-20
                    lg:py-32
                "
            >

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-14
                        items-center
                    "
                >


                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div>

                        {/* Breadcrumb */}

                        <div
                            data-aos="fade-right"
                            className="
                                flex
                                items-center
                                gap-2
                                text-green-200
                                text-sm
                                mb-7
                            "
                        >

                            <NavLink
                                to="/"
                                className="
                                    hover:text-white
                                    transition
                                "
                            >
                                Beranda
                            </NavLink>

                            <ChevronRight size={16} />

                            <span className="text-white">
                                Potensi Desa
                            </span>

                        </div>


                        {/* Badge */}

                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-white/20
                                bg-white/10
                                backdrop-blur-md
                                px-5
                                py-2
                            "
                        >

                            <Sprout
                                size={18}
                                className="text-white"
                            />

                            <span
                                className="
                                    text-white
                                    text-sm
                                    font-medium
                                    tracking-wide
                                "
                            >
                                POTENSI UNGGULAN DESA
                            </span>

                        </div>


                        {/* Title */}

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="
                                mt-8
                                text-4xl
                                md:text-5xl
                                lg:text-7xl
                                font-black
                                leading-tight
                                text-white
                            "
                        >

                            Potensi

                            <span
                                className="
                                    block
                                    mt-3
                                    text-green-300
                                "
                            >
                                Desa {profile?.village_name}
                            </span>

                        </h1>


                        {/* Description */}

                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="
                                mt-8
                                max-w-xl
                                text-lg
                                leading-8
                                text-slate-200
                            "
                        >

                            Kenali berbagai potensi unggulan Desa{" "}
                            {profile?.village_name} yang mencakup
                            pertanian, UMKM, sumber daya masyarakat,
                            serta berbagai potensi lokal yang terus
                            dikembangkan untuk mendukung kesejahteraan
                            masyarakat dan pembangunan desa.

                        </p>


                        {/* Buttons */}

                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-4
                            "
                        >

                            <NavLink
                                to="#potensi"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    bg-green-300
                                    px-6
                                    py-3.5
                                    font-semibold
                                    text-emerald-950
                                    shadow-lg
                                    shadow-green-950/20
                                    transition-all
                                    duration-300
                                    hover:bg-green-200
                                    hover:-translate-y-0.5
                                "
                            >

                                Jelajahi Potensi

                                <ArrowRight size={18} />

                            </NavLink>


                            <NavLink
                                to="/"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/25
                                    bg-white/10
                                    backdrop-blur-md
                                    px-6
                                    py-3.5
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:bg-white/20
                                    hover:-translate-y-0.5
                                "
                            >

                                Kembali ke Beranda

                            </NavLink>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT CONTENT
                    ================================================= */}

                    <div className="space-y-5">


                        {/* =================================================
                            BOTTOM WHITE CARD
                        ================================================= */}

                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="
                                rounded-3xl
                                bg-white
                                p-7
                                shadow-2xl
                            "
                        >

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-green-100
                                    "
                                >

                                    <MapPin
                                        size={21}
                                        className="text-green-700"
                                    />

                                </div>


                                <div>

                                    <p
                                        className="
                                            text-sm
                                            uppercase
                                            tracking-wider
                                            text-green-700
                                            font-semibold
                                        "
                                    >
                                        Potensi Lokal
                                    </p>

                                    <h3
                                        className="
                                            mt-1
                                            text-2xl
                                            font-bold
                                            text-slate-800
                                        "
                                    >
                                        Bersama Membangun Desa
                                    </h3>

                                </div>

                            </div>


                            <p
                                className="
                                    mt-5
                                    leading-8
                                    text-slate-600
                                "
                            >

                                Potensi lokal merupakan kekuatan penting
                                dalam pembangunan Desa{" "}
                                {profile?.village_name}. Mari bersama
                                mengenali, mengembangkan, dan memanfaatkan
                                potensi desa untuk menciptakan masyarakat
                                yang mandiri, produktif, dan berdaya saing.

                            </p>


                            <NavLink
                                to="#potensi"
                                className="
                                    group
                                    mt-7
                                    inline-flex
                                    items-center
                                    gap-3
                                    font-semibold
                                    text-green-700
                                    transition
                                "
                            >

                                Lihat Seluruh Potensi

                                <ArrowRight
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-2
                                    "
                                />

                            </NavLink>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}