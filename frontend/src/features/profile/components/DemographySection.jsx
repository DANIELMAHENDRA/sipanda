import SectionTitle from "../../../components/common/SectionTitle";

import {
    Users,
    House,
    Map,
    Building2,
    Home,
    MapPinned,
} from "lucide-react";

import useProfile from "../../../hooks/useProfile";

export default function DemographySection() {

    const {
        profile,
        loading,
        error,
    } = useProfile();

    if (loading) {
        return (
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    Memuat data...
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center text-red-600">
                    Gagal memuat data profil desa.
                </div>
            </section>
        );
    }

    const demographics = [
        {
            icon: Users,
            value: profile.population ?? "-",
            title: "Jumlah Penduduk",
            description: "Total penduduk yang terdaftar."
        },
        {
            icon: House,
            value: profile.family_count ?? "-",
            title: "Kepala Keluarga",
            description: "Jumlah kepala keluarga."
        },
        {
            icon: Building2,
            value: profile.hamlet_count ?? "-",
            title: "Jumlah Dusun",
            description: "Jumlah dusun di desa."
        },
        {
            icon: Home,
            value: profile.rt_count ?? "-",
            title: "Jumlah RT",
            description: "Jumlah RT di desa."
        },
        {
            icon: MapPinned,
            value: profile.rw_count ?? "-",
            title: "Jumlah RW",
            description: "Jumlah RW di desa."
        },
        {
            icon: Map,
            value: profile.area
                ? `${profile.area} Ha`
                : "-",
            title: "Luas Wilayah",
            description: "Total luas wilayah desa."
        },
    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Demografi"
                    title="Data Kependudukan Desa"
                    description="Data kependudukan dan wilayah Desa yang diperoleh dari sistem SIPANDA."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {demographics.map((item, index) => {

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

                        Ringkasan Demografi

                    </h3>

                    <p className="leading-8 text-green-100">

                        Desa
                        <span className="font-semibold text-white">
                            {" "}{profile.village_name}
                        </span>
                        memiliki jumlah penduduk sebanyak
                        <span className="font-semibold text-white">
                            {" "}{profile.population ?? "-"} jiwa
                        </span>
                        yang tersebar dalam
                        <span className="font-semibold text-white">
                            {" "}{profile.family_count ?? "-"} Kepala Keluarga
                        </span>
                        dengan luas wilayah sekitar
                        <span className="font-semibold text-white">
                            {" "}{profile.area ?? "-"} Ha.
                        </span>

                    </p>

                </div>

            </div>

        </section>

    );

}