import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationSection({

    pagination,

    onPageChange,

}) {

    if (!pagination || pagination.last_page <= 1) {

        return null;

    }

    return (

        <section className="py-16 bg-gray-50">

            <div
                className="max-w-7xl mx-auto px-6 flex justify-center"
                data-aos="fade-up"
            >

                <nav className="flex items-center gap-3">

                    {/* Previous */}

                    <button
                        disabled={!pagination.prev_page_url}
                        onClick={() => onPageChange(pagination.current_page - 1)}
                        className="
                            w-12 h-12
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            hover:bg-green-700
                            hover:text-white
                            transition
                            duration-300
                            flex
                            items-center
                            justify-center
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                        "
                    >

                        <ChevronLeft size={20} />

                    </button>

                    {

                        [...Array(pagination.last_page)].map((_, index) => {

                            const page = index + 1;

                            return (

                                <button
                                    key={page}
                                    onClick={() => onPageChange(page)}
                                    className={`
                                        w-12
                                        h-12
                                        rounded-xl
                                        transition
                                        duration-300
                                        ${
                                            page === pagination.current_page
                                                ? "bg-green-700 text-white shadow-lg"
                                                : "bg-white border border-gray-300 hover:bg-green-700 hover:text-white"
                                        }
                                    `}
                                >

                                    {page}

                                </button>

                            );

                        })

                    }

                    {/* Next */}

                    <button
                        disabled={!pagination.next_page_url}
                        onClick={() => onPageChange(pagination.current_page + 1)}
                        className="
                            w-12 h-12
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            hover:bg-green-700
                            hover:text-white
                            transition
                            duration-300
                            flex
                            items-center
                            justify-center
                            disabled:opacity-40
                            disabled:cursor-not-allowed
                        "
                    >

                        <ChevronRight size={20} />

                    </button>

                </nav>

            </div>

        </section>

    );

}