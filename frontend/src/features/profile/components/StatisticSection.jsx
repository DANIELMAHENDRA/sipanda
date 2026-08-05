import SectionTitle from "../../../components/common/SectionTitle";

import {
    Users,
    House,
    Building2,
    MapPinned,
    Map,
    Home,
} from "lucide-react";

export default function StatisticSection({ profile }) {

    const statistics = [
        {
            icon: Users,
            value: profile?.population ?? 0,
            title: "Jumlah Penduduk",
            description: "Total penduduk yang terdaftar."
        },
        {
            icon: House,
            value: profile?.family_count ?? 0,
            title: "Kepala Keluarga",
            description: "Jumlah kepala keluarga."
        },
        {
            icon: Building2,
            value: profile?.hamlet_count ?? 0,
            title: "Jumlah Dusun",
            description: "Jumlah dusun di Desa."
        },
        {
            icon: Home,
            value: profile?.rt_count ?? 0,
            title: "Jumlah RT",
            description: "Jumlah RT di Desa."
        },
        {
            icon: MapPinned,
            value: profile?.rw_count ?? 0,
            title: "Jumlah RW",
            description: "Jumlah RW di Desa."
        },
        {
            icon: Map,
            value: `${profile?.area ?? 0} Ha`,
            title: "Luas Wilayah",
            description: "Luas wilayah administrasi desa."
        },
    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Statistik Desa"
                    title="Data Statistik Desa"
                    description="Data umum mengenai kondisi wilayah dan kependudukan Desa."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {statistics.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8"
                            >

                                <div className="flex justify-between items-start">

                                    <div>

                                        <h3 className="text-4xl font-bold text-green-700">

                                            {item.value}

                                        </h3>

                                        <h4 className="text-xl font-semibold text-gray-800 mt-3">

                                            {item.title}

                                        </h4>

                                    </div>

                                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                                        <Icon
                                            size={32}
                                            className="text-green-700"
                                        />

                                    </div>

                                </div>

                                <p className="text-gray-500 mt-6 leading-7">

                                    {item.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

                <div className="mt-20 bg-green-700 rounded-3xl text-white p-10">

                    <h3 className="text-3xl font-bold mb-5">

                        Ringkasan Statistik

                    </h3>

                    <p className="leading-8 text-green-100">

                        Desa{" "}
                        <span className="font-semibold text-white">
                            {profile?.village_name}
                        </span>{" "}
                        memiliki jumlah penduduk sebanyak{" "}
                        <span className="font-semibold text-white">
                            {profile?.population} jiwa
                        </span>
                        , yang terdiri dari{" "}
                        <span className="font-semibold text-white">
                            {profile?.family_count} Kepala Keluarga
                        </span>
                        . Wilayah desa memiliki luas sekitar{" "}
                        <span className="font-semibold text-white">
                            {profile?.area} Ha
                        </span>
                        , dengan{" "}
                        <span className="font-semibold text-white">
                            {profile?.hamlet_count} dusun
                        </span>
                        ,{" "}
                        <span className="font-semibold text-white">
                            {profile?.rw_count} RW
                        </span>
                        , dan{" "}
                        <span className="font-semibold text-white">
                            {profile?.rt_count} RT
                        </span>
                        .

                    </p>

                </div>

            </div>

        </section>

    );

}