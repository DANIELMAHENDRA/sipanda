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

        <div
            onClick={onClick}
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
            "
        >

            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="
                        w-full
                        h-72
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
                        from-black/70
                        via-black/20
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-500
                    "
                ></div>

                {/* Category */}

                <span
                    className="
                        absolute
                        top-5
                        left-5
                        bg-green-600
                        text-white
                        text-xs
                        font-semibold
                        px-4
                        py-2
                        rounded-full
                        shadow-lg
                    "
                >

                    {category}

                </span>

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
                        transition
                        duration-500
                    "
                >

                    <div
                        className="
                            bg-white
                            text-green-700
                            rounded-full
                            w-16
                            h-16
                            flex
                            items-center
                            justify-center
                            shadow-xl
                        "
                    >

                        <Eye size={28} />

                    </div>

                </div>

            </div>

            {/* Content */}

            <div className="p-6">

                {/* Date */}

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">

                    <CalendarDays size={16} />

                    <span>

                        {date}

                    </span>

                </div>

                {/* Title */}

                <h3
                    className="
                        text-xl
                        font-bold
                        text-gray-900
                        leading-8
                        mb-4
                        line-clamp-2
                    "
                >

                    {title}

                </h3>

                {/* Footer */}

                <div className="flex items-center justify-between">

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-green-700
                            font-semibold
                        "
                    >

                        <ImageIcon size={18} />

                        <span>

                            Lihat Foto

                        </span>

                    </div>

                    <span
                        className="
                            text-sm
                            text-gray-400
                            group-hover:text-green-700
                            transition
                        "
                    >

                        Klik →

                    </span>

                </div>

            </div>

        </div>

    );

}