import {
    ArrowRight,
    ImageOff,
    Sprout,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function PotentialCard({
    id,
    image,
    title,
    category,
    description,
}) {

    return (

        <article
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-200
                hover:shadow-2xl
            "
        >

            {/* =====================================================
                IMAGE
            ====================================================== */}

            <div className="relative h-64 sm:h-72 overflow-hidden">

                {image ? (

                    <img
                        src={image}
                        alt={title || "Potensi Desa"}
                        loading="lazy"
                        className="
                            w-full
                            h-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-110
                        "
                    />

                ) : (

                    <div
                        className="
                            w-full
                            h-full
                            bg-gradient-to-br
                            from-emerald-950
                            via-emerald-900
                            to-green-800
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                    >

                        <ImageOff
                            size={56}
                            strokeWidth={1.5}
                            className="text-white/50"
                        />

                        <span className="mt-3 text-sm text-white/60">
                            Gambar belum tersedia
                        </span>

                    </div>

                )}


                {/* Image Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-emerald-950/80
                        via-emerald-900/10
                        to-transparent
                        opacity-70
                        group-hover:opacity-90
                        transition-opacity
                        duration-500
                    "
                />


                {/* Category */}

                {category && (

                    <div
                        className="
                            absolute
                            top-5
                            left-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/20
                            bg-emerald-950/70
                            backdrop-blur-md
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                        "
                    >

                        <Sprout size={15} />

                        {category}

                    </div>

                )}


                {/* Hover Indicator */}

                <div
                    className="
                        absolute
                        bottom-5
                        right-5
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-md
                        text-white
                        opacity-0
                        translate-y-3
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-y-0
                    "
                >

                    <ArrowRight size={20} />

                </div>

            </div>


            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="p-6 sm:p-7">

                {/* Category Label */}

                <div className="flex items-center gap-2">

                    <span
                        className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-emerald-600
                        "
                    />

                    <span
                        className="
                            text-xs
                            sm:text-sm
                            font-bold
                            uppercase
                            tracking-widest
                            text-emerald-700
                        "
                    >

                        Potensi Desa

                    </span>

                </div>


                {/* Title */}

                <h3
                    className="
                        mt-3
                        text-xl
                        sm:text-2xl
                        font-bold
                        leading-tight
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-emerald-800
                    "
                >

                    {title}

                </h3>


                {/* Description */}

                <p
                    className="
                        mt-4
                        text-sm
                        sm:text-base
                        leading-7
                        text-slate-600
                        line-clamp-3
                    "
                >

                    {description ||
                        "Informasi mengenai potensi unggulan dan sumber daya Desa Panca Tunggal."
                    }

                </p>


                {/* Divider */}

                <div className="my-6 h-px bg-slate-100" />


                {/* Detail Link */}

                <NavLink
                    to={`/potensi/${id}`}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        font-semibold
                        text-emerald-700
                        transition-all
                        duration-300
                        hover:gap-4
                        hover:text-emerald-900
                    "
                >

                    <span>
                        Lihat Detail
                    </span>

                    <span
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            bg-emerald-50
                            transition-all
                            duration-300
                            group-hover:bg-emerald-700
                            group-hover:text-white
                        "
                    >

                        <ArrowRight size={16} />

                    </span>

                </NavLink>

            </div>

        </article>

    );
}