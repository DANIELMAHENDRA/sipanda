export default function CategorySection({

    categories,

    selectedCategory,

    setSelectedCategory,

}) {

    return (

        <section className="pb-14 bg-white">

            <div
                className="max-w-7xl mx-auto px-6"
                data-aos="fade-up"
            >

                <div className="flex flex-wrap justify-center gap-4">

                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`
                            px-6 py-3 rounded-full
                            font-semibold
                            transition-all duration-300
                            ${
                                selectedCategory === null
                                    ? "bg-green-700 text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
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
                                px-6 py-3 rounded-full
                                font-semibold
                                transition-all duration-300
                                ${
                                    selectedCategory === category.id
                                        ? "bg-green-700 text-white shadow-lg"
                                        : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                                }
                            `}
                        >

                            {category.name}

                        </button>

                    ))}

                </div>

            </div>

        </section>

    );

}