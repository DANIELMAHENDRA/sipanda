import { Search } from "lucide-react";

export default function SearchSection() {
    return (
        <section className="bg-white py-12">

            <div
                className="max-w-7xl mx-auto px-6"
                data-aos="fade-up"
            >

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">

                    <div className="flex flex-col lg:flex-row gap-4">

                        {/* Search Input */}

                        <div className="relative flex-1">

                            <Search
                                size={20}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="Cari berita desa..."
                                className="w-full h-14 rounded-xl border border-gray-300 pl-14 pr-5 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
                            />

                        </div>

                        {/* Search Button */}

                        <button
                            className="h-14 px-8 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold transition duration-300"
                        >
                            Cari Berita
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}