import SectionTitle from "../../../components/common/SectionTitle";

import {
    Map,
    Compass,
    Globe2,
    Trees,
    Navigation,
    MapPin,
} from "lucide-react";

export default function GeographySection({ profile }) {

    const geography = [
        {
            icon: Globe2,
            title: "Provinsi",
            value: profile?.province || "-",
        },
        {
            icon: Map,
            title: "Kabupaten",
            value: profile?.regency || "-",
        },
        {
            icon: Compass,
            title: "Kecamatan",
            value: profile?.district || "-",
        },
        {
            icon: Trees,
            title: "Luas Wilayah",
            value: profile?.area
                ? `${profile.area} Ha`
                : "-",
        },
        {
            icon: Navigation,
            title: "Lintang",
            value: profile?.latitude || "-",
        },
        {
            icon: Navigation,
            title: "Bujur",
            value: profile?.longitude || "-",
        },
    ];

    const boundaries = [
        {
            label: "Utara",
            value: "Desa Budi Lestari",
        },
        {
            label: "Selatan",
            value: "Desa Tri Harjo",
        },
        {
            label: "Timur",
            value: "Talang Jawa",
        },
        {
            label: "Barat",
            value: "Desa Galih Lunik",
        },
    ];

    return (
        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* =====================================================
                    SECTION TITLE
                ====================================================== */}

                <SectionTitle
                    subtitle="Kondisi Wilayah"
                    title="Geografi Desa"
                    description="Informasi mengenai letak geografis dan karakteristik wilayah Desa Panca Tunggal."
                />


                <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">

                    {/* =====================================================
                        BATAS WILAYAH
                    ====================================================== */}

                    <div>

                        <div className="
                            rounded-3xl
                            bg-gradient-to-br
                            from-green-700
                            to-emerald-900
                            p-8
                            sm:p-10
                            text-white
                            shadow-xl
                        ">

                            {/* Header */}

                            <div className="flex items-center gap-4 mb-8">

                                <div className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-white/10
                                ">

                                    <MapPin size={28} />

                                </div>

                                <div>

                                    <p className="text-sm font-medium text-green-100">
                                        Wilayah Desa
                                    </p>

                                    <h3 className="text-2xl font-bold">
                                        Batas Wilayah
                                    </h3>

                                </div>

                            </div>


                            {/* =================================================
                                DAFTAR BATAS WILAYAH
                            ================================================== */}

                            <div className="space-y-4">

                                {boundaries.map((item) => (

                                    <div
                                        key={item.label}
                                        className="
                                            flex
                                            items-start
                                            justify-between
                                            gap-5
                                            rounded-2xl
                                            bg-white/10
                                            p-5
                                            backdrop-blur-sm
                                        "
                                    >

                                        <div>

                                            <p className="text-sm text-green-100">
                                                Sebelah {item.label}
                                            </p>

                                            <p className="mt-1 text-base font-semibold">
                                                {item.value}
                                            </p>

                                        </div>

                                        <MapPin
                                            size={20}
                                            className="
                                                mt-1
                                                shrink-0
                                                text-green-200
                                            "
                                        />

                                    </div>

                                ))}

                            </div>


                            {/* =================================================
                                KOORDINAT
                            ================================================== */}

                            {(profile?.latitude || profile?.longitude) && (

                                <div className="mt-6 border-t border-white/20 pt-6">

                                    <p className="text-sm text-green-100 mb-3">
                                        Koordinat Desa
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">

                                        {/* Latitude */}

                                        <div className="
                                            rounded-xl
                                            bg-white/10
                                            p-4
                                        ">

                                            <p className="text-xs text-green-100">
                                                Latitude
                                            </p>

                                            <p className="mt-1 font-semibold">
                                                {profile?.latitude || "-"}
                                            </p>

                                        </div>


                                        {/* Longitude */}

                                        <div className="
                                            rounded-xl
                                            bg-white/10
                                            p-4
                                        ">

                                            <p className="text-xs text-green-100">
                                                Longitude
                                            </p>

                                            <p className="mt-1 font-semibold">
                                                {profile?.longitude || "-"}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            )}

                        </div>

                    </div>


                    {/* =====================================================
                        INFORMASI GEOGRAFI
                    ====================================================== */}

                    <div>

                        <h2 className="
                            text-4xl
                            font-bold
                            text-gray-900
                            mb-6
                        ">
                            Letak Geografis
                        </h2>


                        <p className="
                            text-gray-600
                            leading-8
                            mb-10
                        ">

                            Desa{" "}

                            <strong>
                                {profile?.village_name || "-"}
                            </strong>{" "}

                            berada di Kecamatan{" "}

                            <strong>
                                {profile?.district || "-"}
                            </strong>
                            , Kabupaten{" "}

                            <strong>
                                {profile?.regency || "-"}
                            </strong>
                            , Provinsi{" "}

                            <strong>
                                {profile?.province || "-"}
                            </strong>
                            .

                        </p>


                        {/* =================================================
                            DATA GEOGRAFI
                        ================================================== */}

                        <div className="
                            grid
                            sm:grid-cols-2
                            gap-5
                        ">

                            {geography.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={item.title}
                                        className="
                                            group
                                            rounded-2xl
                                            border
                                            border-gray-200
                                            bg-white
                                            p-6
                                            transition-all
                                            duration-300
                                            hover:border-green-400
                                            hover:shadow-xl
                                        "
                                    >

                                        {/* Icon */}

                                        <div className="
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-green-100
                                            flex
                                            items-center
                                            justify-center
                                            mb-5
                                            transition
                                            group-hover:bg-green-600
                                        ">

                                            <Icon
                                                size={28}
                                                className="
                                                    text-green-700
                                                    transition
                                                    group-hover:text-white
                                                "
                                            />

                                        </div>


                                        {/* Label */}

                                        <p className="text-sm text-gray-500">
                                            {item.title}
                                        </p>


                                        {/* Value */}

                                        <h3 className="
                                            text-xl
                                            font-bold
                                            text-gray-900
                                            mt-2
                                        ">
                                            {item.value}
                                        </h3>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}