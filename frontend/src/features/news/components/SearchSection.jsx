import { Search, Sparkles } from "lucide-react";

export default function SearchSection({
    keyword,
    setKeyword,
}) {

    return (

        <section className="relative py-16 bg-gradient-to-b from-white to-gray-50">

            <div
                data-aos="fade-up"
                className="max-w-7xl mx-auto px-6"
            >

                <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 lg:p-8">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                        {/* Left */}

                        <div className="max-w-xl">

                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">

                                <Sparkles size={16} />

                                Temukan Informasi

                            </div>

                            <h2 className="mt-5 text-3xl font-bold text-gray-900">

                                Cari Berita Desa

                            </h2>

                            <p className="mt-3 text-gray-600 leading-7">

                                Temukan berita terbaru mengenai kegiatan
                                pemerintahan, pembangunan, UMKM,
                                pendidikan, serta informasi penting
                                lainnya dengan mudah.

                            </p>

                        </div>

                        {/* Search */}

                        <div className="w-full lg:max-w-xl">

                            <div className="flex flex-col sm:flex-row gap-4">

                                <div className="relative flex-1">

                                    <Search
                                        size={22}
                                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) =>
                                            setKeyword(e.target.value)
                                        }
                                        placeholder="Cari judul berita..."
                                        className="
                                            w-full
                                            h-14
                                            rounded-2xl
                                            border
                                            border-gray-300
                                            bg-gray-50
                                            pl-14
                                            pr-5
                                            text-gray-700
                                            placeholder:text-gray-400
                                            focus:border-green-600
                                            focus:ring-4
                                            focus:ring-green-100
                                            outline-none
                                            transition
                                        "
                                    />

                                </div>

                                <button
                                    className="
                                        h-14
                                        px-8
                                        rounded-2xl
                                        bg-green-700
                                        hover:bg-green-800
                                        active:scale-95
                                        text-white
                                        font-semibold
                                        transition-all
                                        whitespace-nowrap
                                    "
                                >

                                    Cari

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}