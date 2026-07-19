import SectionTitle from "../../../components/common/SectionTitle";

import {
    Users,
    House,
    User,
    UserRound,
    GraduationCap,
    BriefcaseBusiness,
} from "lucide-react";

export default function DemographySection() {

    const demographics = [
        {
            icon: Users,
            value: "4.250",
            title: "Jumlah Penduduk",
            description: "Total penduduk yang terdaftar."
        },
        {
            icon: House,
            value: "1.120",
            title: "Kepala Keluarga",
            description: "Jumlah kepala keluarga."
        },
        {
            icon: User,
            value: "2.110",
            title: "Laki-laki",
            description: "Penduduk berjenis kelamin laki-laki."
        },
        {
            icon: UserRound,
            value: "2.140",
            title: "Perempuan",
            description: "Penduduk berjenis kelamin perempuan."
        },
        {
            icon: GraduationCap,
            value: "90%",
            title: "Usia Sekolah",
            description: "Penduduk usia sekolah aktif."
        },
        {
            icon: BriefcaseBusiness,
            value: "70%",
            title: "Petani",
            description: "Mayoritas mata pencaharian masyarakat."
        },
    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Demografi"
                    title="Data Kependudukan"
                    description="Gambaran umum kondisi penduduk Desa Panca Tunggal berdasarkan data administrasi desa."
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

                {/* Ringkasan */}

                <div className="mt-20 bg-green-700 rounded-3xl text-white p-10">

                    <h3 className="text-3xl font-bold mb-5">

                        Ringkasan Demografi

                    </h3>

                    <p className="leading-8 text-green-100">

                        Desa Panca Tunggal memiliki jumlah penduduk sekitar
                        <span className="font-semibold text-white"> 4.250 jiwa </span>
                        yang tersebar dalam
                        <span className="font-semibold text-white"> 1.120 Kepala Keluarga</span>.
                        Sebagian besar masyarakat bekerja pada sektor pertanian,
                        perkebunan, dan UMKM yang menjadi penggerak utama
                        perekonomian desa.

                    </p>

                </div>

            </div>

        </section>

    );

}