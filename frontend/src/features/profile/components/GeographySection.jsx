import SectionTitle from "../../../components/common/SectionTitle";

import {
    Map,
    Mountain,
    Compass,
    Globe2,
    Trees,
    Waves,
    ImageOff,
} from "lucide-react";

export default function GeographySection({ profile }) {

    const geography = [
        {
            icon: Globe2,
            title: "Provinsi",
            value: profile?.province || "-"
        },
        {
            icon: Map,
            title: "Kabupaten",
            value: profile?.regency || "-"
        },
        {
            icon: Compass,
            title: "Kecamatan",
            value: profile?.district || "-"
        },
        {
            icon: Mountain,
            title: "Ketinggian",
            value: profile?.elevation
                ? `${profile.elevation} mdpl`
                : "-"
        },
        {
            icon: Trees,
            title: "Luas Wilayah",
            value: profile?.area
                ? `${profile.area} Ha`
                : "-"
        },
        {
            icon: Waves,
            title: "Topografi",
            value:
                profile?.topography || "Dataran"
        },
    ];

    return (

        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Kondisi Wilayah"
                    title="Geografi Desa"
                    description="Informasi mengenai letak geografis dan karakteristik wilayah Desa."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

                    {/* =========================
                        FOTO / PETA
                    ========================== */}

                    <div>

                        <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-100 h-[600px]">

                            {profile?.map_image || profile?.hero_image ? (

                                <img
                                    src={
                                        profile?.map_image ||
                                        profile?.hero_image
                                    }
                                    alt="Peta Desa"
                                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                                />

                            ) : (

                                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">

                                    <ImageOff
                                        size={70}
                                        className="mb-4"
                                    />

                                    <p className="text-lg">

                                        Belum ada gambar wilayah

                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                    {/* =========================
                        INFORMASI
                    ========================== */}

                    <div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6">

                            Letak Geografis

                        </h2>

                        <p className="text-gray-600 leading-8 mb-10">

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

                            {profile?.geography && (

                                <>
                                    <br />
                                    <br />

                                    {profile.geography}

                                </>

                            )}

                        </p>

                        <div className="grid sm:grid-cols-2 gap-5">

                            {geography.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={index}
                                        className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-green-400 hover:shadow-xl transition-all duration-300"
                                    >

                                        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-5 group-hover:bg-green-600 transition">

                                            <Icon
                                                size={28}
                                                className="text-green-700 group-hover:text-white transition"
                                            />

                                        </div>

                                        <p className="text-sm text-gray-500">

                                            {item.title}

                                        </p>

                                        <h3 className="text-xl font-bold text-gray-900 mt-2">

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