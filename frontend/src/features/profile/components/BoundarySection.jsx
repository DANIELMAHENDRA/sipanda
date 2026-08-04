import SectionTitle from "../../../components/common/SectionTitle";
import useProfile from "../../../hooks/useProfile";

import {
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

export default function BoundarySection() {

    const { profile, loading } = useProfile();

    if (loading) return null;

    const boundaries = [
        {
            icon: ArrowUp,
            direction: "Sebelah Utara",
            village: profile?.north_boundary,
        },
        {
            icon: ArrowRight,
            direction: "Sebelah Timur",
            village: profile?.east_boundary,
        },
        {
            icon: ArrowDown,
            direction: "Sebelah Selatan",
            village: profile?.south_boundary,
        },
        {
            icon: ArrowLeft,
            direction: "Sebelah Barat",
            village: profile?.west_boundary,
        },
    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Wilayah"
                    title="Batas Wilayah Desa"
                    description="Letak administratif desa berdasarkan wilayah yang berbatasan langsung."
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

                                    {item.village || "-"}

                                </p>

                            </div>

                        );

                    })}

                </div>

                <div className="mt-16 bg-green-700 rounded-3xl p-10 text-white">

                    <h3 className="text-3xl font-bold">

                        Lokasi Strategis

                    </h3>

                    <p className="mt-5 leading-8 text-green-100">

                        {profile?.village_name} berada di Kecamatan{" "}
                        <span className="font-semibold">
                            {profile?.district}
                        </span>
                        , Kabupaten{" "}
                        <span className="font-semibold">
                            {profile?.regency}
                        </span>
                        , Provinsi{" "}
                        <span className="font-semibold">
                            {profile?.province}
                        </span>
                        . Posisi geografis ini mendukung aktivitas ekonomi,
                        pertanian, perdagangan, serta mempermudah akses
                        masyarakat menuju pusat pelayanan publik.

                    </p>

                </div>

            </div>

        </section>

    );

}