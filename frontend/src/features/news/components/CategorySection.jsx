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

                    {/* Category */}

                    <div className="flex flex-wrap gap-4">

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