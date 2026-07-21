import { useState } from "react";

export default function CategorySection() {

    const categories = [
        "Semua",
        "Pemerintahan",
        "Pembangunan",
        "UMKM",
        "Pertanian",
        "Pendidikan",
        "Kesehatan",
        "Kegiatan Desa",
    ];

    const [activeCategory, setActiveCategory] = useState("Semua");

    return (

        <section className="pb-14 bg-white">

            <div
                className="max-w-7xl mx-auto px-6"
                data-aos="fade-up"
            >

                <div className="flex flex-wrap justify-center gap-4">

                    {categories.map((category) => (

                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                px-6 py-3 rounded-full
                                font-semibold
                                transition-all duration-300
                                ${
                                    activeCategory === category
                                        ? "bg-green-700 text-white shadow-lg"
                                        : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
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