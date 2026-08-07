import Button from "./Button";

import {
    HiOutlinePhotograph,
    HiArrowRight,
} from "react-icons/hi";

export default function GalleryCard({
    image,
    title,
}) {

    return (

        <div
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-slate-200
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
            "
        >

            {/* Image */}

            <div className="overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="
                        w-full
                        h-72
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                    "
                />

            </div>

            {/* Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/90
                    via-slate-900/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    flex
                    flex-col
                    justify-end
                    p-7
                "
            >

                <div className="flex items-center gap-2 text-green-300 text-sm font-semibold">

                    <HiOutlinePhotograph />

                    Dokumentasi Desa

                </div>

                <h3
                    className="
                        mt-3
                        text-white
                        text-2xl
                        font-bold
                        line-clamp-2
                    "
                >

                    {title}

                </h3>

                <div className="mt-6">

                    <Button
                        to="/galeri"
                        variant="secondary"
                    >

                        <span className="flex items-center gap-2">

                            Lihat Galeri

                            <HiArrowRight />

                        </span>

                    </Button>

                </div>

            </div>

            {/* Bottom Caption */}

            <div className="p-6">

                <h3
                    className="
                        text-xl
                        font-bold
                        text-slate-800
                        line-clamp-2
                    "
                >

                    {title}

                </h3>

            </div>

        </div>

    );

}