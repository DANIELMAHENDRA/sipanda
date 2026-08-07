import { Grid2X2, Tag } from "lucide-react";

export default function CategorySection({
    categories,
    selectedCategory,
    setSelectedCategory,
}) {

    return (

        <section className="pb-16 bg-white">

            <div
                data-aos="fade-up"
                className="max-w-7xl mx-auto px-6"
            >

                <div className="bg-gradient-to-r from-gray-50 to-green-50 border border-gray-200 rounded-3xl p-6 lg:p-8">

                    {/* Header */}

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

                        <div>

                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">

                                <Tag size={16} />

                                Kategori Berita

                            </div>

                            <h3 className="mt-4 text-3xl font-bold text-gray-900">

                                Jelajahi Berdasarkan Kategori

                            </h3>

                            <p className="mt-3 text-gray-600 leading-7 max-w-2xl">

                                Pilih kategori untuk menampilkan berita sesuai
                                topik yang ingin Anda baca.

                            </p>

                        </div>

                        <div className="hidden lg:flex items-center justify-center w-20 h-20 rounded-3xl bg-green-100">

                            <Grid2X2
                                size={38}
                                className="text-green-700"
                            />

                        </div>

                    </div>

                    {/* Category */}

                    <div className="flex flex-wrap gap-4">

                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`
                                px-6
                                py-3
                                rounded-2xl
                                font-semibold
                                transition-all
                                duration-300
                                border
                                ${
                                    selectedCategory === null
                                        ? "bg-green-700 text-white border-green-700 shadow-lg scale-105"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-green-50 hover:border-green-600 hover:text-green-700"
                                }
                            `}
                        >
                            Semua
                        </button>

                        {categories.map((category) => (

                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`
                                    px-6
                                    py-3
                                    rounded-2xl
                                    font-semibold
                                    transition-all
                                    duration-300
                                    border
                                    ${
                                        selectedCategory === category.id
                                            ? "bg-green-700 text-white border-green-700 shadow-lg scale-105"
                                            : "bg-white text-gray-700 border-gray-200 hover:bg-green-50 hover:border-green-600 hover:text-green-700"
                                    }
                                `}
                            >

                                {category.name}

                            </button>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}