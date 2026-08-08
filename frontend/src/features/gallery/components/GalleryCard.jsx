import {
    CalendarDays,
    Eye,
    Image as ImageIcon,
} from "lucide-react";

export default function GalleryCard({
    image,
    title,
    category,
    date,
    onClick,
}) {

    return (

        <article
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onClick?.();
                }
            }}
            className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
                cursor-pointer
                border
                border-gray-100
                focus:outline-none
                focus:ring-4
                focus:ring-green-100
            "
        >

            {/* =========================
                IMAGE
            ========================= */}

            <div className="relative overflow-hidden">

                <img
                    src={image || "/images/no-image.png"}
                    alt={title || "Dokumentasi Desa"}
                    loading="lazy"
                    className="
                        w-full
                        h-60
                        sm:h-64
                        lg:h-72
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                />

                {/* Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/20
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                    "
                />

                {/* Category */}

                {category && (

                    <span
                        className="
                            absolute
                            top-4
                            left-4
                            sm:top-5
                            sm:left-5
                            bg-green-600
                            text-white
                            text-xs
                            sm:text-sm
                            font-semibold
                            px-3
                            sm:px-4
                            py-2
                            rounded-full
                            shadow-lg
                            max-w-[70%]
                            truncate
                        "
                    >

                        {category}

                    </span>

                )}

                {/* View Button */}

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                    "
                >

                    <div
                        className="
                            bg-white
                            text-green-700
                            rounded-full
                            w-14
                            h-14
                            sm:w-16
                            sm:h-16
                            flex
                            items-center
                            justify-center
                            shadow-xl
                            transform
                            scale-90
                            group-hover:scale-100
                            transition-transform
                            duration-500
                        "
                    >

                        <Eye
                            size={26}
                            className="sm:w-7 sm:h-7"
                        />

                    </div>

                </div>

            </div>

            {/* =========================
                CONTENT
            ========================= */}

            <div className="p-5 sm:p-6">

                {/* Date */}

                {date && (

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-500
                            text-sm
                            mb-3
                        "
                    >

                        <CalendarDays size={16} />

                        <span className="truncate">

                            {date}

                        </span>

                    </div>

                )}

                {/* Title */}

                <h3
                    className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-gray-900
                        leading-7
                        sm:leading-8
                        mb-5
                        line-clamp-2
                        group-hover:text-green-700
                        transition-colors
                        duration-300
                    "
                >

                    {title || "Dokumentasi Kegiatan Desa"}

                </h3>

                {/* Footer */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-4
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-green-700
                            font-semibold
                            text-sm
                            sm:text-base
                        "
                    >

                        <ImageIcon size={18} />

                        <span>

                            Lihat Foto

                        </span>

                    </div>

                    <span
                        className="
                            hidden
                            sm:inline
                            text-sm
                            text-gray-400
                            group-hover:text-green-700
                            transition-colors
                            duration-300
                        "
                    >

                        Klik →

                    </span>

                </div>

            </div>

        </article>

    );
}