import { NavLink } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6">
            <div className="max-w-2xl text-center">

                {/* Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                        <SearchX
                            size={70}
                            className="text-green-700"
                        />
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-green-700">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-4xl font-bold text-gray-900">
                    Halaman Tidak Ditemukan
                </h2>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-600 leading-8">
                    Maaf, halaman yang Anda cari tidak tersedia,
                    telah dipindahkan, atau alamat URL yang Anda masukkan
                    tidak benar.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-5 mt-10">

                    <NavLink
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition"
                    >
                        <Home size={20} />
                        Kembali ke Beranda
                    </NavLink>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-green-700 text-green-700 font-semibold hover:bg-green-50 transition"
                    >
                        <ArrowLeft size={20} />
                        Halaman Sebelumnya
                    </button>

                </div>

            </div>
        </section>
    );
}