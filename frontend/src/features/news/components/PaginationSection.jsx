import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationSection() {

    return (

        <section className="py-16 bg-gray-50">

            <div
                className="max-w-7xl mx-auto px-6 flex justify-center"
                data-aos="fade-up"
            >

                <nav className="flex items-center gap-3">

                    {/* Previous */}

                    <button
                        className="w-12 h-12 rounded-xl border border-gray-300 bg-white hover:bg-green-700 hover:text-white transition duration-300 flex items-center justify-center"
                    >

                        <ChevronLeft size={20} />

                    </button>

                    {/* Page Number */}

                    <button className="w-12 h-12 rounded-xl bg-green-700 text-white font-semibold shadow-lg">

                        1

                    </button>

                    <button className="w-12 h-12 rounded-xl border border-gray-300 bg-white hover:bg-green-700 hover:text-white transition duration-300">

                        2

                    </button>

                    <button className="w-12 h-12 rounded-xl border border-gray-300 bg-white hover:bg-green-700 hover:text-white transition duration-300">

                        3

                    </button>

                    <span className="px-2 text-gray-500">

                        ...

                    </span>

                    <button className="w-12 h-12 rounded-xl border border-gray-300 bg-white hover:bg-green-700 hover:text-white transition duration-300">

                        10

                    </button>

                    {/* Next */}

                    <button
                        className="w-12 h-12 rounded-xl border border-gray-300 bg-white hover:bg-green-700 hover:text-white transition duration-300 flex items-center justify-center"
                    >

                        <ChevronRight size={20} />

                    </button>

                </nav>

            </div>

        </section>

    );

}