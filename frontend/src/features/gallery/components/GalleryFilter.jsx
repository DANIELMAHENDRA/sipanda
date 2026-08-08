import { Search, SlidersHorizontal } from "lucide-react";

export default function GalleryFilter({
    keyword,
    setKeyword,
    category,
    setCategory,
}) {

    const categories = [
        "Semua",
        "Pemerintahan",
        "Pembangunan",
        "UMKM",
        "Pertanian",
        "Pendidikan",
        "Budaya",
        "Kegiatan",
    ];


    return (

        <section className="bg-white py-16 border-b border-gray-100">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-10"
                >

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            bg-green-100
                            text-green-700
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                            mb-5
                        "
                    >

                        <SlidersHorizontal size={16} />

                        Filter Dokumentasi

                    </div>


                    <h2
                        className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-gray-900
                        "
                    >

                        Jelajahi Dokumentasi Desa

                    </h2>


                    <p
                        className="
                            text-gray-600
                            mt-4
                            max-w-2xl
                            mx-auto
                            leading-7
                        "
                    >

                        Temukan berbagai dokumentasi kegiatan,
                        pembangunan, pelayanan masyarakat,
                        pemberdayaan UMKM,
                        hingga aktivitas pemerintahan
                        Desa Panca Tunggal.

                    </p>

                </div>


                {/* Search */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="
                        relative
                        max-w-2xl
                        mx-auto
                        mb-10
                    "
                >

                    <Search
                        size={21}
                        className="
                            absolute
                            left-5
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "
                    />


                    <input
                        type="text"
                        placeholder="Cari dokumentasi kegiatan..."
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(e.target.value)
                        }
                        className="
                            w-full
                            h-14
                            pl-14
                            pr-5
                            rounded-2xl
                            border
                            border-gray-300
                            bg-gray-50
                            text-gray-700
                            placeholder:text-gray-400
                            focus:bg-white
                            focus:border-green-600
                            focus:ring-4
                            focus:ring-green-100
                            outline-none
                            transition-all
                        "
                    />

                </div>


                {/* Categories */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-3
                        sm:gap-4
                    "
                >

                    {categories.map((item) => (

                        <button
                            key={item}
                            type="button"
                            onClick={() =>
                                setCategory(item)
                            }
                            className={`
                                px-5
                                sm:px-6
                                py-2.5
                                sm:py-3
                                rounded-full
                                font-medium
                                text-sm
                                sm:text-base
                                transition-all
                                duration-300
                                border
                                ${
                                    category === item
                                        ? "bg-green-700 text-white border-green-700 shadow-lg shadow-green-700/20"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-600 hover:text-green-700"
                                }
                            `}
                        >

                            {item}

                        </button>

                    ))}

                </div>

            </div>

        </section>

    );

}