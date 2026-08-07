import SectionTitle from "../../../components/common/SectionTitle";

import {
    FaPeopleGroup,
    FaHouse,
    FaMapLocationDot,
    FaMountainSun,
} from "react-icons/fa6";

export default function StatisticsSection({ profile }) {

    const stats = [
        {
            value: profile?.population ?? "-",
            label: "Jumlah Penduduk",
            icon: FaPeopleGroup,
        },
        {
            value: profile?.family_count ?? "-",
            label: "Kepala Keluarga",
            icon: FaHouse,
        },
        {
            value: profile?.hamlet_count ?? "-",
            label: "Jumlah Dusun",
            icon: FaMapLocationDot,
        },
        {
            value: profile?.area
                ? `${profile.area} Ha`
                : "-",
            label: "Luas Wilayah",
            icon: FaMountainSun,
        },
    ];

    return (

        <section
            className="relative py-24 bg-slate-50 overflow-hidden"
            data-aos="fade-up"
        >

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-green-100 blur-3xl opacity-60" />

                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-50 blur-3xl opacity-70" />

            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Data Desa"
                    title="Statistik Desa"
                    description="Gambaran singkat mengenai kondisi Desa Panca Tunggal berdasarkan data terbaru."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-md hover:bg-green-700 hover:border-green-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                            >

                                {/* Watermark */}

                                <Icon
                                    className="absolute -right-6 -bottom-6 text-[130px] text-gray-100 group-hover:text-green-600/20 transition-all duration-500"
                                />

                                <div className="relative p-8">

                                    <div className="w-16 h-16 rounded-2xl bg-green-100 group-hover:bg-white/15 flex items-center justify-center transition">

                                        <Icon className="text-3xl text-green-700 group-hover:text-white" />

                                    </div>

                                    <h2 className="mt-8 text-4xl font-extrabold text-slate-900 group-hover:text-white transition">

                                        {item.value}

                                    </h2>

                                    <p className="mt-3 text-gray-500 group-hover:text-green-100 transition">

                                        {item.label}

                                    </p>

                                    <div className="mt-8 h-1 w-14 rounded-full bg-green-600 group-hover:bg-white transition" />

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}