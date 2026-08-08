import PotentialCard from "./PotentialCard";
import { Sprout, ArrowRight } from "lucide-react";

export default function PotentialGrid({
    potential = [],
    loading,
    error,
}) {

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (
            <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">

                {/* Decorative Background */}

                <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-green-100/60 blur-3xl" />

                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col items-center justify-center text-center min-h-[300px]">

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-5 animate-pulse">

                            <Sprout
                                size={30}
                                className="text-green-700"
                            />

                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800">

                            Memuat Potensi Desa

                        </h3>

                        <p className="mt-3 text-slate-500">

                            Sedang mengambil data potensi Desa Panca Tunggal...

                        </p>

                    </div>

                </div>

            </section>
        );
    }


    /*
    |--------------------------------------------------------------------------
    | Error
    |--------------------------------------------------------------------------
    */

    if (error) {

        return (
            <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-xl mx-auto text-center bg-white border border-red-100 rounded-3xl p-8 sm:p-10 shadow-lg">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 flex items-center justify-center mb-5">

                            <Sprout
                                size={30}
                                className="text-red-500"
                            />

                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800">

                            Data Potensi Tidak Dapat Dimuat

                        </h3>

                        <p className="mt-3 text-slate-500 leading-7">

                            Terjadi kendala saat mengambil data potensi
                            Desa Panca Tunggal. Silakan coba kembali
                            beberapa saat lagi.

                        </p>

                    </div>

                </div>

            </section>
        );
    }


    /*
    |--------------------------------------------------------------------------
    | Empty Data
    |--------------------------------------------------------------------------
    */

    if (!potential.length) {

        return (
            <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div
                        data-aos="fade-up"
                        className="max-w-xl mx-auto text-center bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-lg"
                    >

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5">

                            <Sprout
                                size={30}
                                className="text-green-700"
                            />

                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800">

                            Belum Ada Data Potensi

                        </h3>

                        <p className="mt-3 text-slate-500 leading-7">

                            Data potensi Desa Panca Tunggal belum tersedia
                            untuk saat ini.

                        </p>

                    </div>

                </div>

            </section>
        );
    }


    /*
    |--------------------------------------------------------------------------
    | Main Content
    |--------------------------------------------------------------------------
    */

    return (

        <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-28">

            {/* Decorative Background */}

            <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-green-100/60 blur-3xl" />

            <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-emerald-100/50 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                {/* ============================================================
                    HEADER
                ============================================================ */}

                <div
                    data-aos="fade-up"
                    className="max-w-3xl mx-auto text-center mb-14 sm:mb-16"
                >

                    {/* Badge */}

                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">

                        <Sprout
                            size={17}
                            className="text-green-700"
                        />

                        <span className="text-sm font-semibold text-green-700">

                            POTENSI UNGGULAN DESA

                        </span>

                    </div>


                    {/* Title */}

                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-800">

                        Jelajahi Potensi{" "}

                        <span className="text-green-700">

                            Desa Panca Tunggal

                        </span>

                    </h2>


                    {/* Description */}

                    <p className="mt-5 text-base sm:text-lg text-slate-600 leading-8">

                        Berbagai potensi lokal Desa Panca Tunggal menjadi
                        kekuatan ekonomi, sosial, dan budaya masyarakat
                        yang terus dikembangkan secara berkelanjutan.

                    </p>

                </div>


                {/* ============================================================
                    GRID
                ============================================================ */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">

                    {potential.map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="h-full"
                        >

                            <PotentialCard
                                id={item.id}
                                image={item.thumbnail}
                                title={item.title}
                                category={item.category}
                                description={item.excerpt}
                            />

                        </div>

                    ))}

                </div>


                {/* ============================================================
                    BOTTOM INFORMATION
                ============================================================ */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="
                        mt-12
                        sm:mt-16
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        justify-between
                        gap-5
                        rounded-3xl
                        border
                        border-green-100
                        bg-white
                        p-6
                        sm:p-7
                        shadow-lg
                    "
                >

                    <div className="flex items-center gap-4 text-center sm:text-left">

                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                            <Sprout
                                size={22}
                                className="text-green-700"
                            />

                        </div>

                        <div>

                            <h3 className="font-bold text-slate-800">

                                Potensi Lokal, Kekuatan Desa

                            </h3>

                            <p className="mt-1 text-sm text-slate-500">

                                Mendukung masyarakat yang produktif,
                                mandiri, dan berdaya saing.

                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-green-700
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-green-700/20
                            transition-all
                            duration-300
                            hover:bg-green-800
                            hover:-translate-y-0.5
                            active:scale-95
                            whitespace-nowrap
                        "
                    >

                        Lihat Selengkapnya

                        <ArrowRight size={17} />

                    </button>

                </div>

            </div>

        </section>

    );
}