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
            className="relative h-[70vh] min-h-[550px] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: news?.thumbnail
                    ? `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url(${news.thumbnail})`
                    : "linear-gradient(to right,#15803d,#166534)"
            }}
        >

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-7xl mx-auto px-6 w-full">

                {/* Breadcrumb */}

                <div className="flex items-center gap-2 text-green-200 text-sm mb-6">

                    <NavLink
                        to="/"
                        className="hover:text-white transition"
                    >
                        Beranda
                    </NavLink>

                    <ChevronRight size={16} />

                    <NavLink
                        to="/berita"
                        className="hover:text-white transition"
                    >
                        Berita
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white">

                        {news.title}

                    </span>

                </div>

                {/* Category */}

                <div className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full mb-8">

                    <Newspaper size={18} />

                    {news.category}

                </div>

                {/* Title */}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl">

                    {news.title}

                </h1>

                {/* Description */}

                <p className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl">

                    {news.description}

                </p>

                {/* Meta */}

                <div className="flex flex-wrap gap-8 mt-10 text-green-100">

                    <div className="flex items-center gap-2">

                        <CalendarDays size={20} />

                        <span>{news.published_at}</span>

                    </div>

                    <div className="flex items-center gap-2">

                        <User size={20} />

                        <span>{news.author}</span>

                    </div>

                    <div className="flex items-center gap-2">

                        <Eye size={20} />

                        <span>{news.views} Dibaca</span>

                    </div>

                </div>

            </div>

        </section>

    );

}