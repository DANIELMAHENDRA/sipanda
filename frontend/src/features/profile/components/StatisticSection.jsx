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

        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Data Desa"
                    title="Statistik Desa"
                    description="Gambaran umum kondisi wilayah dan kependudukan Desa."
                />

                {/* Cards */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

                    {statistics.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >

                                {/* Top Decoration */}

                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-400"></div>

                                <div className="p-8">

                                    <div className="flex justify-between items-start">

                                        <div>

                                            <p className="text-gray-500 mb-3 text-sm uppercase tracking-widest">

                                                {item.title}

                                            </p>

                                            <h2 className="text-5xl font-extrabold text-gray-900">

                                                {item.value}

                                            </h2>

                                        </div>

                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition">

                                            <Icon
                                                size={30}
                                                className="text-white"
                                            />

                                        </div>

                                    </div>

                                    <div className="mt-8 border-t border-gray-200 pt-5">

                                        <p className="text-gray-600 leading-7">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

                {/* Summary */}

                <div className="mt-24">

                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 shadow-2xl">

                        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

                        <div className="relative px-10 py-14 lg:px-16">

                            <div className="max-w-4xl">

                                <span className="inline-flex px-4 py-2 rounded-full bg-white/15 text-green-100 text-sm font-medium mb-6">

                                    Ringkasan Statistik

                                </span>

                                <h3 className="text-4xl font-bold text-white mb-8">

                                    Gambaran Singkat Desa {profile?.village_name}

                                </h3>

                                <p className="text-green-100 leading-9 text-lg">

                                    Desa{" "}
                                    <strong className="text-white">
                                        {profile?.village_name}
                                    </strong>{" "}
                                    memiliki jumlah penduduk sebanyak{" "}
                                    <strong className="text-white">
                                        {profile?.population} jiwa
                                    </strong>
                                    , terdiri dari{" "}
                                    <strong className="text-white">
                                        {profile?.family_count} Kepala Keluarga
                                    </strong>
                                    . Wilayah desa memiliki luas sekitar{" "}
                                    <strong className="text-white">
                                        {profile?.area} Ha
                                    </strong>
                                    , yang terbagi menjadi{" "}
                                    <strong className="text-white">
                                        {profile?.hamlet_count} Dusun
                                    </strong>
                                    ,{" "}
                                    <strong className="text-white">
                                        {profile?.rw_count} RW
                                    </strong>
                                    , serta{" "}
                                    <strong className="text-white">
                                        {profile?.rt_count} RT
                                    </strong>
                                    . Data ini menjadi dasar dalam penyusunan
                                    program pembangunan dan pelayanan kepada
                                    masyarakat secara berkelanjutan.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}