import {
    Images,
    Star,
    Tags,
    CalendarDays,
} from "lucide-react";

import useGalleryStatistics from "../../../hooks/useGalleryStatistics";

export default function GalleryStatistics() {

    const {
        statistics,
        loading,
        error,
    } = useGalleryStatistics();


    /*
    |--------------------------------------------------------------------------
    | Data Statistik
    |--------------------------------------------------------------------------
    */

    const statisticsData = [
        {
            id: 1,
            icon: Images,
            total: statistics.photos,
            title: "Foto Dokumentasi",
            description:
                "Seluruh dokumentasi foto kegiatan Desa Panca Tunggal yang tersimpan dalam sistem.",
        },

        {
            id: 2,
            icon: Star,
            total: statistics.featured,
            title: "Foto Unggulan",
            description:
                "Dokumentasi pilihan yang ditetapkan sebagai foto unggulan Desa Panca Tunggal.",
        },

        {
            id: 3,
            icon: Tags,
            total: statistics.categories,
            title: "Kategori Galeri",
            description:
                "Jumlah kategori dokumentasi yang tersedia dalam galeri desa.",
        },

        {
            id: 4,
            icon: CalendarDays,
            total: statistics.this_year,
            title: "Dokumentasi Tahun Ini",
            description:
                "Jumlah dokumentasi kegiatan yang tercatat pada tahun berjalan.",
        },
    ];


    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <section className="py-16 sm:py-20 lg:py-24 bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center">

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                bg-green-100
                                text-green-700
                                text-sm
                                font-semibold
                            "
                        >

                            <Images size={16} />

                            Statistik Galeri

                        </span>


                        <h2
                            className="
                                mt-5
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                font-bold
                                text-gray-900
                            "
                        >

                            Statistik Dokumentasi Desa

                        </h2>


                        <p
                            className="
                                mt-4
                                max-w-3xl
                                mx-auto
                                text-sm
                                sm:text-base
                                text-gray-600
                                leading-7
                                sm:leading-8
                            "
                        >

                            Memuat statistik dokumentasi desa...

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

            <section className="py-16 sm:py-20 lg:py-24 bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center">

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                bg-red-100
                                text-red-700
                                text-sm
                                font-semibold
                            "
                        >

                            <Images size={16} />

                            Statistik Galeri

                        </span>


                        <h2
                            className="
                                mt-5
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                font-bold
                                text-gray-900
                            "
                        >

                            Statistik Dokumentasi Desa

                        </h2>


                        <p className="mt-6 text-red-500">

                            Gagal memuat statistik galeri.

                        </p>

                    </div>

                </div>

            </section>

        );

    }


    /*
    |--------------------------------------------------------------------------
    | Tampilan Statistik
    |--------------------------------------------------------------------------
    */

    return (

        <section className="py-16 sm:py-20 lg:py-24 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-12 sm:mb-16"
                >

                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            bg-green-100
                            text-green-700
                            text-sm
                            font-semibold
                        "
                    >

                        <Images size={16} />

                        Statistik Galeri

                    </span>


                    <h2
                        className="
                            mt-5
                            text-3xl
                            sm:text-4xl
                            lg:text-5xl
                            font-bold
                            text-gray-900
                        "
                    >

                        Statistik Dokumentasi Desa

                    </h2>


                    <p
                        className="
                            mt-4
                            max-w-3xl
                            mx-auto
                            text-sm
                            sm:text-base
                            text-gray-600
                            leading-7
                            sm:leading-8
                        "
                    >

                        Data statistik dokumentasi Desa Panca Tunggal
                        yang diperbarui berdasarkan data galeri yang
                        tersimpan dalam sistem.

                    </p>

                </div>


                {/* Statistics */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-6
                        lg:gap-8
                    "
                >

                    {statisticsData.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="
                                    group
                                    bg-white
                                    rounded-3xl
                                    border
                                    border-gray-100
                                    shadow-md
                                    hover:shadow-2xl
                                    p-7
                                    sm:p-8
                                    lg:p-9
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                "
                            >

                                {/* Icon */}

                                <div
                                    className="
                                        w-16
                                        h-16
                                        sm:w-20
                                        sm:h-20
                                        mx-auto
                                        rounded-2xl
                                        bg-green-100
                                        flex
                                        items-center
                                        justify-center
                                        mb-5
                                        sm:mb-6
                                        group-hover:bg-green-700
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <Icon
                                        size={32}
                                        className="
                                            text-green-700
                                            group-hover:text-white
                                            transition-colors
                                            duration-300
                                        "
                                    />

                                </div>


                                {/* Number */}

                                <h3
                                    className="
                                        text-4xl
                                        sm:text-5xl
                                        font-bold
                                        text-green-700
                                    "
                                >

                                    {item.total}

                                </h3>


                                {/* Title */}

                                <h4
                                    className="
                                        mt-4
                                        text-xl
                                        sm:text-2xl
                                        font-semibold
                                        text-gray-900
                                    "
                                >

                                    {item.title}

                                </h4>


                                {/* Description */}

                                <p
                                    className="
                                        mt-3
                                        sm:mt-4
                                        text-sm
                                        sm:text-base
                                        text-gray-600
                                        leading-7
                                    "
                                >

                                    {item.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}