import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function GalleryPagination({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) {

    // Jika hanya ada satu halaman,
    // pagination tidak perlu ditampilkan.
    if (totalPages <= 1) {
        return null;
    }

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (page) => {

        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        if (onPageChange) {
            onPageChange(page);
        }
    };

    return (

        <section className="bg-gray-50 pb-16 sm:pb-20 lg:pb-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Pagination */}

                <div
                    data-aos="fade-up"
                    className="
                        flex
                        justify-center
                        items-center
                        gap-2
                        sm:gap-3
                        flex-wrap
                    "
                >

                    {/* Previous */}

                    <button
                        type="button"
                        onClick={() =>
                            handlePageChange(currentPage - 1)
                        }
                        disabled={currentPage === 1}
                        aria-label="Halaman sebelumnya"
                        className="
                            w-10
                            h-10
                            sm:w-12
                            sm:h-12
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            text-gray-700
                            hover:bg-green-700
                            hover:text-white
                            hover:border-green-700
                            active:scale-95
                            transition-all
                            duration-300
                            flex
                            items-center
                            justify-center
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                            disabled:hover:bg-white
                            disabled:hover:text-gray-700
                            disabled:hover:border-gray-300
                        "
                    >

                        <ChevronLeft
                            size={18}
                            className="sm:w-5 sm:h-5"
                        />

                    </button>

                    {/* Number */}

                    {pages.map((page) => (

                        <button
                            key={page}
                            type="button"
                            onClick={() =>
                                handlePageChange(page)
                            }
                            aria-label={`Halaman ${page}`}
                            aria-current={
                                page === currentPage
                                    ? "page"
                                    : undefined
                            }
                            className={`
                                w-10
                                h-10
                                sm:w-12
                                sm:h-12
                                rounded-xl
                                font-semibold
                                text-sm
                                sm:text-base
                                transition-all
                                duration-300
                                border

                                ${
                                    page === currentPage
                                        ? `
                                            bg-green-700
                                            text-white
                                            border-green-700
                                            shadow-lg
                                        `
                                        : `
                                            bg-white
                                            text-gray-700
                                            border-gray-300
                                            hover:bg-green-50
                                            hover:border-green-600
                                            hover:text-green-700
                                        `
                                }
                            `}
                        >

                            {page}

                        </button>

                    ))}

                    {/* Next */}

                    <button
                        type="button"
                        onClick={() =>
                            handlePageChange(currentPage + 1)
                        }
                        disabled={currentPage === totalPages}
                        aria-label="Halaman berikutnya"
                        className="
                            w-10
                            h-10
                            sm:w-12
                            sm:h-12
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            text-gray-700
                            hover:bg-green-700
                            hover:text-white
                            hover:border-green-700
                            active:scale-95
                            transition-all
                            duration-300
                            flex
                            items-center
                            justify-center
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                            disabled:hover:bg-white
                            disabled:hover:text-gray-700
                            disabled:hover:border-gray-300
                        "
                    >

                        <ChevronRight
                            size={18}
                            className="sm:w-5 sm:h-5"
                        />

                    </button>

                </div>

                {/* Information */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="
                        text-center
                        mt-6
                        sm:mt-8
                        text-sm
                        sm:text-base
                        text-gray-500
                    "
                >

                    Menampilkan halaman

                    <span className="font-semibold text-green-700">

                        {" "}{currentPage}{" "}

                    </span>

                    dari

                    <span className="font-semibold text-green-700">

                        {" "}{totalPages}{" "}

                    </span>

                    halaman dokumentasi.

                </div>

            </div>

        </section>

    );
}