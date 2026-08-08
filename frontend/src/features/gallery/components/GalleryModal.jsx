import {
    X,
    CalendarDays,
    Tag,
    MapPin,
    Camera,
} from "lucide-react";

export default function GalleryModal({
    gallery,
    onClose,
}) {

    if (!gallery) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                bg-black/80
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-3
                sm:p-5
            "
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={gallery.title || "Detail dokumentasi"}
        >

            {/* Modal Container */}

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    relative
                    bg-white
                    rounded-2xl
                    sm:rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    w-full
                    max-w-5xl
                    max-h-[95vh]
                    sm:max-h-[90vh]
                    flex
                    flex-col
                "
            >

                {/* =========================
                    IMAGE
                ========================= */}

                <div className="relative shrink-0 bg-black">

                    <img
                        src={gallery.image || "/images/no-image.png"}
                        alt={gallery.title || "Dokumentasi Desa"}
                        className="
                            w-full
                            h-[260px]
                            sm:h-[350px]
                            md:h-[450px]
                            lg:h-[500px]
                            object-contain
                        "
                    />

                    {/* Close Button */}

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Tutup galeri"
                        className="
                            absolute
                            top-3
                            right-3
                            sm:top-5
                            sm:right-5
                            w-10
                            h-10
                            sm:w-12
                            sm:h-12
                            rounded-full
                            bg-white/95
                            text-gray-700
                            shadow-lg
                            flex
                            items-center
                            justify-center
                            hover:bg-red-500
                            hover:text-white
                            active:scale-95
                            transition-all
                            duration-300
                        "
                    >

                        <X
                            size={22}
                            className="sm:w-6 sm:h-6"
                        />

                    </button>

                </div>

                {/* =========================
                    CONTENT
                ========================= */}

                <div
                    className="
                        p-5
                        sm:p-8
                        overflow-y-auto
                    "
                >

                    {/* Category */}

                    {gallery.category && (

                        <span
                            className="
                                inline-flex
                                items-center
                                px-4
                                py-2
                                rounded-full
                                bg-green-100
                                text-green-700
                                font-semibold
                                text-xs
                                sm:text-sm
                                mb-4
                            "
                        >

                            {gallery.category}

                        </span>

                    )}

                    {/* Title */}

                    <h2
                        className="
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            font-bold
                            text-gray-900
                            leading-tight
                        "
                    >

                        {gallery.title || "Dokumentasi Kegiatan Desa"}

                    </h2>

                    {/* =========================
                        METADATA
                    ========================= */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-x-6
                            gap-y-4
                            mt-6
                            text-sm
                            sm:text-base
                            text-gray-500
                        "
                    >

                        {/* Date */}

                        {gallery.taken_at && (

                            <div className="flex items-center gap-2">

                                <CalendarDays
                                    size={18}
                                    className="text-green-700 shrink-0"
                                />

                                <span>

                                    {gallery.taken_at}

                                </span>

                            </div>

                        )}

                        {/* Category */}

                        {gallery.category && (

                            <div className="flex items-center gap-2">

                                <Tag
                                    size={18}
                                    className="text-green-700 shrink-0"
                                />

                                <span>

                                    {gallery.category}

                                </span>

                            </div>

                        )}

                        {/* Location */}

                        {gallery.location && (

                            <div className="flex items-center gap-2">

                                <MapPin
                                    size={18}
                                    className="text-green-700 shrink-0"
                                />

                                <span>

                                    {gallery.location}

                                </span>

                            </div>

                        )}

                        {/* Photographer */}

                        {gallery.photographer && (

                            <div className="flex items-center gap-2">

                                <Camera
                                    size={18}
                                    className="text-green-700 shrink-0"
                                />

                                <span>

                                    {gallery.photographer}

                                </span>

                            </div>

                        )}

                    </div>

                    {/* =========================
                        DESCRIPTION
                    ========================= */}

                    <div
                        className="
                            mt-8
                            text-gray-700
                            leading-7
                            sm:leading-8
                            text-sm
                            sm:text-base
                            whitespace-pre-line
                        "
                    >

                        {gallery.description
                            ? gallery.description
                            : "Tidak ada deskripsi untuk dokumentasi ini."
                        }

                    </div>

                </div>

            </div>

        </div>

    );
}