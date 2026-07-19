import SectionTitle from "../../../components/common/SectionTitle";
import geographyImage from "../../../assets/images/profile/geography.jpg";

import {
    MapPinned,
    Landmark,
    Trees,
    Mountain,
    Sun,
    CloudRain,
} from "lucide-react";

export default function GeographySection() {

    const informations = [
        {
            icon: MapPinned,
            title: "Kecamatan",
            value: "Merbau Mataram",
        },
        {
            icon: Landmark,
            title: "Kabupaten",
            value: "Lampung Selatan",
        },
        {
            icon: Trees,
            title: "Luas Wilayah",
            value: "850 Hektar",
        },
        {
            icon: Mountain,
            title: "Ketinggian",
            value: "±120 mdpl",
        },
        {
            icon: Sun,
            title: "Iklim",
            value: "Tropis",
        },
        {
            icon: CloudRain,
            title: "Curah Hujan",
            value: "±2.000 mm/Tahun",
        },
    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Geografis"
                    title="Kondisi Wilayah Desa"
                    description="Informasi geografis Desa Panca Tunggal sebagai gambaran umum kondisi wilayah."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Gambar */}

                    <div>

                        <img
                            src={geographyImage}
                            alt="Geografis Desa"
                            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                        />

                    </div>

                    {/* Informasi */}

                    <div className="grid sm:grid-cols-2 gap-6">

                        {informations.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >

                                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">

                                        <Icon
                                            size={28}
                                            className="text-green-700"
                                        />

                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-800">

                                        {item.title}

                                    </h3>

                                    <p className="text-gray-500 mt-2">

                                        {item.value}

                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );

}