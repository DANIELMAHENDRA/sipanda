import {
    Sprout,
    TrendingUp,
    ArrowRight,
    ImageOff,
    MapPin,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function FeaturedPotential({
    potential,
    loading,
    error,
}) {

    /*
    |--------------------------------------------------------------------------
    | Featured Potential
    |--------------------------------------------------------------------------
    */

    const featured = potential?.find(
        (item) => item.is_featured
    );


    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <section className="bg-white py-20 sm:py-24 lg:py-28">

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                        text-center
                    "
                >

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            bg-emerald-50
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-emerald-700
                        "
                    >

                        <Sprout
                            size={18}
                            className="animate-pulse"
                        />

                        Memuat potensi unggulan...

                    </div>

                </div>

            </section>

        );

    }


    /*
    |--------------------------------------------------------------------------
    | Error
    |--------------------------------------------------------------------------
    */

    if (error) {

        return (

            <section className="bg-white py-20 sm:py-24">

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                        text-center
                    "
                >

                    <div
                        className="
                            mx-auto
                            max-w-xl
                            rounded-3xl
                            border
                            border-red-100
                            bg-red-50
                            p-8
                        "
                    >

                        <p
                            className="
                                font-semibold
                                text-red-600
                            "
                        >

                            Gagal memuat data potensi desa.

                        </p>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-red-500
                            "
                        >

                            Silakan coba kembali beberapa saat lagi.

                        </p>

                    </div>

                </div>

            </section>

        );

    }


    /*
    |--------------------------------------------------------------------------
    | No Featured Data
    |--------------------------------------------------------------------------
    */

    if (!featured) {

        return null;

    }


    /*
    |--------------------------------------------------------------------------
    | Statistics
    |--------------------------------------------------------------------------
    */

    const statistics =
        featured.statistics?.filter(
            (item) =>
                item?.title &&
                item?.value
        ) ?? [];


    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

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
                    -top-40
                    -right-40
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-emerald-100/50
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-green-100/40
                    blur-3xl
                "
            />


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

                {/* =================================================
                    HEADING
                ================================================== */}

                <div
                    data-aos="fade-up"
                    className="
                        max-w-3xl
                        mx-auto
                        text-center
                        mb-14
                        sm:mb-16
                    "
                >

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-emerald-100
                            bg-emerald-50
                            px-5
                            py-2.5
                            text-sm
                            font-bold
                            uppercase
                            tracking-widest
                            text-emerald-700
                        "
                    >

                        <Sprout size={17} />

                        Potensi Unggulan

                    </div>


                    <h2
                        className="
                            mt-5
                            text-3xl
                            sm:text-4xl
                            lg:text-5xl
                            font-black
                            leading-tight
                            text-slate-900
                        "
                    >

                        Komoditas Andalan Desa

                    </h2>


                    <p
                        className="
                            mt-5
                            text-base
                            sm:text-lg
                            leading-8
                            text-slate-600
                        "
                    >

                        Mengenal lebih dekat potensi unggulan yang
                        menjadi salah satu kekuatan ekonomi dan
                        sumber daya masyarakat Desa Panca Tunggal.

                    </p>

                </div>


                {/* =================================================
                    MAIN FEATURED CARD
                ================================================== */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="
                        relative
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-emerald-100
                        bg-gradient-to-br
                        from-emerald-950
                        via-emerald-900
                        to-green-800
                        shadow-2xl
                    "
                >

                    {/* Background Decoration */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-32
                            -top-32
                            h-80
                            w-80
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
                            -left-20
                            h-80
                            w-80
                            rounded-full
                            bg-green-300/10
                            blur-3xl
                        "
                    />


                    <div
                        className="
                            relative
                            grid
                            lg:grid-cols-2
                            gap-0
                            lg:gap-10
                            items-stretch
                        "
                    >

                        {/* =================================================
                            IMAGE
                        ================================================== */}

                        <div className="relative min-h-[360px] sm:min-h-[450px] lg:min-h-[600px]">

                            {featured.cover_image ||
                            featured.thumbnail ? (

                                <img
                                    src={
                                        featured.cover_image ||
                                        featured.thumbnail
                                    }
                                    alt={
                                        featured.title ||
                                        "Potensi unggulan desa"
                                    }
                                    loading="lazy"
                                    className="
                                        absolute
                                        inset-0
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                />

                            ) : (

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                        bg-gradient-to-br
                                        from-emerald-950
                                        via-emerald-900
                                        to-green-800
                                    "
                                >

                                    <ImageOff
                                        size={90}
                                        strokeWidth={1.3}
                                        className="text-white/40"
                                    />

                                    <p
                                        className="
                                            mt-4
                                            text-sm
                                            text-white/50
                                        "
                                    >

                                        Gambar belum tersedia

                                    </p>

                                </div>

                            )}


                            {/* Image Overlay */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-emerald-950
                                    via-emerald-950/20
                                    to-transparent
                                "
                            />


                            {/* Category */}

                            <div
                                className="
                                    absolute
                                    left-5
                                    top-5
                                    sm:left-7
                                    sm:top-7
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-emerald-950/70
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-xl
                                    backdrop-blur-md
                                "
                            >

                                <Sprout size={17} />

                                {featured.category ||
                                    "Potensi Desa"}

                            </div>


                            {/* Featured Label */}

                            <div
                                className="
                                    absolute
                                    bottom-5
                                    left-5
                                    sm:bottom-7
                                    sm:left-7
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-white
                                    px-4
                                    py-2
                                    text-xs
                                    sm:text-sm
                                    font-bold
                                    text-emerald-800
                                    shadow-xl
                                "
                            >

                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-emerald-600
                                        animate-pulse
                                    "
                                />

                                POTENSI UNGGULAN

                            </div>

                        </div>


                        {/* =================================================
                            CONTENT
                        ================================================== */}

                        <div
                            className="
                                flex
                                flex-col
                                justify-center
                                p-7
                                sm:p-10
                                lg:py-14
                                lg:pr-14
                                lg:pl-4
                            "
                        >

                            {/* Label */}

                            <div
                                className="
                                    inline-flex
                                    w-fit
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

                                <TrendingUp size={16} />

                                Komoditas Terbaik

                            </div>


                            {/* Title */}

                            <h3
                                className="
                                    mt-5
                                    text-3xl
                                    sm:text-4xl
                                    lg:text-5xl
                                    font-black
                                    leading-tight
                                    text-white
                                "
                            >

                                {featured.title}

                            </h3>


                            {/* Description */}

                            <p
                                className="
                                    mt-6
                                    text-base
                                    sm:text-lg
                                    leading-8
                                    text-slate-200
                                "
                            >

                                {featured.excerpt ||
                                    "Potensi unggulan Desa Panca Tunggal yang terus dikembangkan untuk mendukung perekonomian dan kesejahteraan masyarakat."
                                }

                            </p>


                            {/* Location */}

                            {featured.location && (

                                <div
                                    className="
                                        mt-6
                                        flex
                                        items-center
                                        gap-3
                                        text-green-200
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/10
                                        "
                                    >

                                        <MapPin size={18} />

                                    </div>

                                    <span className="text-sm sm:text-base">

                                        {featured.location}

                                    </span>

                                </div>

                            )}


                            {/* =================================================
                                STATISTICS
                            ================================================== */}

                            {statistics.length > 0 && (

                                <div
                                    className="
                                        mt-8
                                        grid
                                        grid-cols-1
                                        sm:grid-cols-2
                                        gap-4
                                    "
                                >

                                    {statistics.map(
                                        (item) => (

                                            <div
                                                key={item.title}
                                                className="
                                                    rounded-2xl
                                                    border
                                                    border-white/10
                                                    bg-white/10
                                                    p-4
                                                    backdrop-blur-md
                                                    transition
                                                    duration-300
                                                    hover:bg-white/15
                                                "
                                            >

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                    "
                                                >

                                                    <div
                                                        className="
                                                            flex
                                                            h-11
                                                            w-11
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-xl
                                                            bg-white/10
                                                            border
                                                            border-white/10
                                                        "
                                                    >

                                                        <TrendingUp
                                                            size={19}
                                                            className="text-green-300"
                                                        />

                                                    </div>

                                                    <div>

                                                        <p
                                                            className="
                                                                text-xs
                                                                text-green-200
                                                            "
                                                        >

                                                            {item.title}

                                                        </p>

                                                        <p
                                                            className="
                                                                mt-1
                                                                font-bold
                                                                text-white
                                                            "
                                                        >

                                                            {item.value}

                                                        </p>

                                                    </div>

                                                </div>

                                            </div>

                                        )
                                    )}

                                </div>

                            )}


                            {/* =================================================
                                BUTTON
                            ================================================== */}

                            <div className="mt-9 sm:mt-10">

                                <NavLink
                                    to={`/potensi/${featured.id}`}
                                    className="
                                        group/button
                                        inline-flex
                                        w-full
                                        sm:w-auto
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-2xl
                                        bg-white
                                        px-7
                                        py-4
                                        font-bold
                                        text-emerald-800
                                        shadow-xl
                                        transition-all
                                        duration-300
                                        hover:bg-green-50
                                        hover:gap-5
                                        active:scale-95
                                    "
                                >

                                    <span>
                                        Lihat Detail Potensi
                                    </span>

                                    <ArrowRight
                                        size={19}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover/button:translate-x-1
                                        "
                                    />

                                </NavLink>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}