import SectionTitle from "../../../components/common/SectionTitle";

import {
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

export default function BoundarySection() {

    const boundaries = [
        {
            icon: ArrowUp,
            direction: "Sebelah Utara",
            village: "Desa Karang Rejo",
        },
        {
            icon: ArrowRight,
            direction: "Sebelah Timur",
            village: "Desa Mekar Jaya",
        },
        {
            icon: ArrowDown,
            direction: "Sebelah Selatan",
            village: "Desa Sumber Agung",
        },
        {
            icon: ArrowLeft,
            direction: "Sebelah Barat",
            village: "Desa Sukamaju",
        },
    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Wilayah"
                    title="Batas Wilayah Desa"
                    description="Letak administratif Desa Panca Tunggal berdasarkan wilayah yang berbatasan langsung."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {boundaries.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">

                                    <Icon
                                        size={30}
                                        className="text-green-700"
                                    />

                                </div>

                                <h3 className="text-xl font-semibold text-gray-800">

                                    {item.direction}

                                </h3>

                                <p className="text-gray-600 mt-3 text-lg">

                                    {item.village}

                                </p>

                            </div>

                        );

                    })}

                </div>

                {/* Informasi Tambahan */}

                <div className="mt-16 bg-green-700 rounded-3xl p-10 text-white">

                    <h3 className="text-3xl font-bold">

                        Lokasi Strategis

                    </h3>

                    <p className="mt-5 leading-8 text-green-100">

                        Desa Panca Tunggal memiliki lokasi yang strategis karena
                        berbatasan langsung dengan beberapa desa di Kecamatan
                        Merbau Mataram. Kondisi ini mendukung aktivitas ekonomi,
                        pertanian, perdagangan, serta mempermudah akses
                        masyarakat menuju pusat pelayanan publik.

                    </p>

                </div>

            </div>

        </section>

    );

}