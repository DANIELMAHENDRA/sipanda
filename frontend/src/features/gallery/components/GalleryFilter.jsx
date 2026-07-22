import { useState } from "react";
import { Search } from "lucide-react";

export default function GalleryFilter() {

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

    const [activeCategory, setActiveCategory] = useState("Semua");
    const [search, setSearch] = useState("");

    return (

        <section className="bg-white py-12 border-b border-gray-100">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-10"
                >

                    <h2 className="text-3xl font-bold text-gray-900">

                        Jelajahi Dokumentasi Desa

                    </h2>

                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto leading-7">

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
                    className="relative max-w-xl mx-auto mb-10"
                >

                    <Search
                        size={20}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Cari dokumentasi..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            w-full
                            pl-14
                            pr-5
                            py-4
                            rounded-full
                            border
                            border-gray-300
                            focus:border-green-600
                            focus:ring-4
                            focus:ring-green-100
                            outline-none
                            transition
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
                        gap-4
                    "
                >

                    {categories.map((category) => (

                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                px-6
                                py-3
                                rounded-full
                                font-medium
                                transition-all
                                duration-300
                                border
                                ${
                                    activeCategory === category
                                        ? "bg-green-700 text-white border-green-700 shadow-lg"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-600 hover:text-green-700"
                                }
                            `}
                        >

                            {category}

                        </button>

                    ))}

                </div>

            </div>

        </section>

    );

}