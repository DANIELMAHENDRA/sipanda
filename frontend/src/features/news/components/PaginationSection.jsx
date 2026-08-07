import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationSection({
    pagination,
    onPageChange,
}) {

    if (!pagination || pagination.last_page <= 1) {
        return null;
    }

    return (

        <section className="pb-24 bg-gray-50">

            <div
                data-aos="fade-up"
                className="max-w-7xl mx-auto px-6"
            >

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                        <div>

                            <h3 className="text-2xl font-bold text-gray-900">

                                Halaman Berita

                            </h3>

                            <p className="mt-2 text-gray-600">

                                Halaman
                                <span className="font-semibold text-green-700">
                                    {" "}
                                    {pagination.current_page}
                                </span>
                                {" "}dari{" "}
                                <span className="font-semibold text-green-700">
                                    {pagination.last_page}
                                </span>

                            </p>

                        </div>

                        <nav className="flex flex-wrap justify-center gap-3">

                            {/* Previous */}

                            <button
                                disabled={!pagination.prev_page_url}
                                onClick={() =>
                                    onPageChange(
                                        pagination.current_page - 1
                                    )
                                }
                                className="
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-white
                                    border
                                    border-gray-300
                                    flex
                                    items-center
                                    justify-center
                                    hover:bg-green-700
                                    hover:text-white
                                    transition
                                    disabled:opacity-40
                                    disabled:cursor-not-allowed
                                "
                            >

                                <ChevronLeft size={20} />

                            </button>

                            {[...Array(pagination.last_page)].map((_, index) => {

                                const page = index + 1;

                                return (

                                    <button
                                        key={page}
                                        onClick={() => onPageChange(page)}
                                        className={`
                                            w-12
                                            h-12
                                            rounded-2xl
                                            font-semibold
                                            transition-all
                                            duration-300
                                            ${
                                                page === pagination.current_page
                                                    ? "bg-green-700 text-white shadow-lg scale-105"
                                                    : "bg-white border border-gray-300 hover:bg-green-50 hover:border-green-700 hover:text-green-700"
                                            }
                                        `}
                                    >

                                        {page}

                                    </button>

                                );

                            })}

                            {/* Next */}

                            <button
                                disabled={!pagination.next_page_url}
                                onClick={() =>
                                    onPageChange(
                                        pagination.current_page + 1
                                    )
                                }
                                className="
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-white
                                    border
                                    border-gray-300
                                    flex
                                    items-center
                                    justify-center
                                    hover:bg-green-700
                                    hover:text-white
                                    transition
                                    disabled:opacity-40
                                    disabled:cursor-not-allowed
                                "
                            >

                                <ChevronRight size={20} />

                            </button>

                        </nav>

                    </div>

                </div>

            </div>

        </section>

    );

}