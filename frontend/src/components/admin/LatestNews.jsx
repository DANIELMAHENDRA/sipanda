import { Newspaper } from "lucide-react";

export default function LatestNews({ news = [] }) {
    return (
        <div className="
            bg-white
            rounded-2xl
            border
            border-gray-100
            shadow-sm
            overflow-hidden
        ">

            {/* Header */}
            <div className="
                px-5
                sm:px-6
                py-4
                border-b
                border-gray-100
            ">

                <div className="flex items-center gap-3">

                    <div className="
                        w-10
                        h-10
                        rounded-xl
                        bg-green-100
                        text-green-600
                        flex
                        items-center
                        justify-center
                        shrink-0
                    ">
                        <Newspaper size={20} />
                    </div>

                    <div>

                        <h2 className="
                            text-base
                            sm:text-lg
                            font-semibold
                            text-gray-800
                        ">
                            Berita Terbaru
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                            Informasi berita terbaru desa.
                        </p>

                    </div>

                </div>

            </div>

            {/* Body */}
            <div className="divide-y divide-gray-100">

                {news.length === 0 ? (
                    <div className="
                        px-5
                        sm:px-6
                        py-12
                        text-center
                    ">

                        <div className="
                            w-12
                            h-12
                            mx-auto
                            rounded-full
                            bg-gray-100
                            flex
                            items-center
                            justify-center
                            mb-3
                        ">
                            <Newspaper
                                size={22}
                                className="text-gray-400"
                            />
                        </div>

                        <p className="text-sm text-gray-500">
                            Belum ada berita.
                        </p>

                    </div>
                ) : (
                    news.map((item) => (
                        <div
                            key={item.id}
                            className="
                                px-5
                                sm:px-6
                                py-4
                                hover:bg-gray-50
                                transition
                            "
                        >

                            <div className="
                                flex
                                items-start
                                gap-3
                            ">

                                {/* Thumbnail */}
                                <div className="
                                    w-12
                                    h-12
                                    sm:w-14
                                    sm:h-14
                                    rounded-xl
                                    overflow-hidden
                                    bg-gray-100
                                    shrink-0
                                ">

                                    {item.thumbnail ? (
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                            "
                                        />
                                    ) : (
                                        <div className="
                                            w-full
                                            h-full
                                            flex
                                            items-center
                                            justify-center
                                        ">
                                            <Newspaper
                                                size={20}
                                                className="text-gray-400"
                                            />
                                        </div>
                                    )}

                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">

                                    <h4 className="
                                        text-sm
                                        font-semibold
                                        text-gray-800
                                        line-clamp-2
                                        leading-5
                                    ">
                                        {item.title || "-"}
                                    </h4>

                                    <div className="
                                        flex
                                        flex-wrap
                                        items-center
                                        gap-2
                                        mt-2
                                    ">

                                        <span className="
                                            px-2
                                            py-0.5
                                            rounded-full
                                            bg-gray-100
                                            text-gray-600
                                            text-[10px]
                                            sm:text-xs
                                        ">
                                            {item.category || "Umum"}
                                        </span>

                                        <span className="
                                            text-[10px]
                                            sm:text-xs
                                            text-gray-400
                                        ">
                                            {item.created_at || "-"}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>
                    ))
                )}

            </div>

        </div>
    );
}