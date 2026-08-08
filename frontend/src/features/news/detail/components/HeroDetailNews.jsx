import {
    ChevronRight,
    CalendarDays,
    User,
    Eye,
    Newspaper,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function HeroDetailNews({ news }) {

    return (

        <section
            className="
                relative
                min-h-[620px]
                lg:min-h-[680px]
                flex
                items-end
                bg-cover
                bg-center
                overflow-hidden
            "
            style={{
                backgroundImage: news?.thumbnail
                    ? `url(${news.thumbnail})`
                    : "linear-gradient(to right,#15803d,#166534)",
            }}
        >

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>

            {/* Decorative blur */}

            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-500/20 blur-3xl"></div>

            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-green-700/20 blur-3xl"></div>


            {/* Content */}

            <div
                className="
                    relative
                    w-full
                    max-w-7xl
                    mx-auto
                    px-6
                    pb-16
                    lg:pb-20
                "
            >

                {/* Breadcrumb */}

                <div
                    data-aos="fade-right"
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        text-sm
                        text-green-200
                        mb-8
                    "
                >

                    <NavLink
                        to="/"
                        className="hover:text-white transition-colors"
                    >
                        Beranda
                    </NavLink>

                    <ChevronRight size={16} />

                    <NavLink
                        to="/berita"
                        className="hover:text-white transition-colors"
                    >
                        Berita
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white/80 truncate max-w-[200px] sm:max-w-none">
                        Detail Berita
                    </span>

                </div>


                {/* Category */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        bg-green-600/90
                        backdrop-blur-md
                        text-white
                        px-5
                        py-2.5
                        rounded-full
                        text-sm
                        font-semibold
                        shadow-lg
                    "
                >

                    <Newspaper size={18} />

                    {news?.category || "Berita Desa"}

                </div>


                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        mt-7
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        font-bold
                        text-white
                        leading-[1.15]
                        tracking-tight
                        max-w-5xl
                    "
                >

                    {news?.title}

                </h1>


                {/* Description */}

                {news?.description && (

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="
                            mt-7
                            text-base
                            sm:text-lg
                            lg:text-xl
                            text-gray-200
                            leading-8
                            max-w-3xl
                        "
                    >

                        {news.description}

                    </p>

                )}


                {/* Meta */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="
                        mt-9
                        flex
                        flex-wrap
                        gap-x-7
                        gap-y-4
                        text-sm
                        sm:text-base
                        text-green-100
                    "
                >

                    {/* Date */}

                    <div className="flex items-center gap-2.5">

                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">

                            <CalendarDays size={18} />

                        </div>

                        <span>
                            {news?.published_at}
                        </span>

                    </div>


                    {/* Author */}

                    <div className="flex items-center gap-2.5">

                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">

                            <User size={18} />

                        </div>

                        <span>
                            {news?.author || "Admin Desa"}
                        </span>

                    </div>


                    {/* Views */}

                    <div className="flex items-center gap-2.5">

                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">

                            <Eye size={18} />

                        </div>

                        <span>
                            {news?.views ?? 0} Dibaca
                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}