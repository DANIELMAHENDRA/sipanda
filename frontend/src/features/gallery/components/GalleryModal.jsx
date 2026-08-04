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
                p-5
            "
            onClick={onClose}
        >

            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    max-w-5xl
                    w-full
                    max-h-[90vh]
                    flex
                    flex-col
                    animate-fadeIn
                "
            >

                {/* Image */}

                <div className="relative">

                    <img
                        src={gallery.image}
                        alt={gallery.title}
                        className="
                            w-full
                            h-[500px]
                            object-cover
                        "
                    />

                    <button
                        onClick={onClose}
                        className="
                            absolute
                            top-5
                            right-5
                            w-12
                            h-12
                            rounded-full
                            bg-white
                            shadow-lg
                            flex
                            items-center
                            justify-center
                            hover:bg-red-500
                            hover:text-white
                            transition
                        "
                    >

                        <X size={24} />

                    </button>

                </div>

                {/* Content */}

                <div className="p-8 overflow-y-auto">

                    {/* Category */}

                    <span
                        className="
                            inline-block
                            px-4
                            py-2
                            rounded-full
                            bg-green-100
                            text-green-700
                            font-semibold
                            text-sm
                            mb-5
                        "
                    >

                        {gallery.category}

                    </span>

                    {/* Title */}

                    <h2
                        className="
                            text-3xl
                            font-bold
                            text-gray-900
                            leading-tight
                        "
                    >

                        {gallery.title}

                    </h2>

                    {/* Metadata */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-6
                            mt-6
                            text-gray-500
                        "
                    >

                        <div className="flex items-center gap-2">

                            <CalendarDays size={18} />

                            <span>

                                {gallery.taken_at}

                            </span>

                        </div>

                        <div className="flex items-center gap-2">

                            <Tag size={18} />

                            <span>

                                {gallery.category}

                            </span>

                        </div>

                        {

                            gallery.location && (

                                <div className="flex items-center gap-2">

                                    <MapPin size={18} />

                                    <span>

                                        {gallery.location}

                                    </span>

                                </div>

                            )

                        }

                        {

                            gallery.photographer && (

                                <div className="flex items-center gap-2">

                                    <Camera size={18} />

                                    <span>

                                        {gallery.photographer}

                                    </span>

                                </div>

                            )

                        }

                    </div>

                    {/* Description */}

                    <div
                        className="
                            mt-8
                            text-gray-700
                            leading-8
                            whitespace-pre-line
                        "
                    >

                        {

                            gallery.description
                                ? gallery.description
                                : "Tidak ada deskripsi."

                        }

                    </div>

                </div>

            </div>

        </div>

    );

}