import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function GalleryPagination() {

    // Dummy Data
    const currentPage = 1;
    const totalPages = 5;

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (

        <section className="bg-gray-50 pb-24">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    data-aos="fade-up"
                    className="flex justify-center items-center gap-3 flex-wrap"
                >

                    {/* Previous */}

                    <button
                        className="
                            w-12
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            hover:bg-green-700
                            hover:text-white
                            transition
                            flex
                            items-center
                            justify-center
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                        "
                        disabled={currentPage === 1}
                    >

                        <ChevronLeft size={20} />

                    </button>

                    {/* Number */}

                    {pages.map((page) => (

                        <button
                            key={page}
                            className={`
                                w-12
                                h-12
                                rounded-xl
                                font-semibold
                                transition
                                border
                                ${
                                    page === currentPage
                                        ? "bg-green-700 text-white border-green-700 shadow-lg"
                                        : "bg-white border-gray-300 hover:bg-green-50 hover:border-green-600 hover:text-green-700"
                                }
                            `}
                        >

                            {page}

                        </button>

                    ))}

                    {/* Next */}

                    <button
                        className="
                            w-12
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            hover:bg-green-700
                            hover:text-white
                            transition
                            flex
                            items-center
                            justify-center
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                        "
                        disabled={currentPage === totalPages}
                    >

                        <ChevronRight size={20} />

                    </button>

                </div>

                {/* Information */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-center mt-8 text-gray-500"
                >

                    Menampilkan halaman

                    <span className="font-semibold text-green-700">

                        {" "}1{" "}

                    </span>

                    dari

                    <span className="font-semibold text-green-700">

                        {" "}5{" "}

                    </span>

                    halaman dokumentasi.

                </div>

            </div>

        </section>

    );

}