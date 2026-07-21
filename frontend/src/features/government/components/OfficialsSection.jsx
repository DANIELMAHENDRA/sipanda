import SectionTitle from "../../../components/common/SectionTitle";

import official1 from "../../../assets/images/government/officials/official-1.jpg";
import official2 from "../../../assets/images/government/officials/official-2.jpg";
import official3 from "../../../assets/images/government/officials/official-3.jpg";
import official4 from "../../../assets/images/government/officials/official-4.jpg";
import official5 from "../../../assets/images/government/officials/official-5.jpg";
import official6 from "../../../assets/images/government/officials/official-6.jpg";

import {
    BadgeCheck,
    UserRound,
} from "lucide-react";

export default function OfficialsSection() {

    const officials = [

        {
            name: "Nama Kepala Desa",
            position: "Kepala Desa",
            image: official1,
        },

        {
            name: "Nama Sekretaris Desa",
            position: "Sekretaris Desa",
            image: official2,
        },

        {
            name: "Nama Kasi Pemerintahan",
            position: "Kasi Pemerintahan",
            image: official3,
        },

        {
            name: "Nama Kaur Umum",
            position: "Kaur Umum",
            image: official4,
        },

        {
            name: "Nama Kaur Keuangan",
            position: "Kaur Keuangan",
            image: official5,
        },

        {
            name: "Nama Kepala Dusun",
            position: "Kepala Dusun",
            image: official6,
        },

    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Perangkat Desa"
                    title="Aparatur Pemerintah Desa"
                    description="Seluruh aparatur Pemerintah Desa Panca Tunggal yang berperan dalam memberikan pelayanan terbaik kepada masyarakat."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

                    {officials.map((official, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
                        >

                            {/* Foto */}

                            <div className="relative">

                                <img
                                    src={official.image}
                                    alt={official.name}
                                    className="w-full h-[350px] object-cover"
                                />

                                <div className="absolute top-5 left-5 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">

                                    <BadgeCheck size={16} />

                                    Perangkat Desa

                                </div>

                            </div>

                            {/* Isi */}

                            <div className="p-8">

                                <div className="flex items-center gap-3 mb-5">

                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">

                                        <UserRound
                                            className="text-green-700"
                                            size={22}
                                        />

                                    </div>

                                    <div>

                                        <h3 className="font-bold text-xl">

                                            {official.name}

                                        </h3>

                                        <p className="text-green-700 font-medium">

                                            {official.position}

                                        </p>

                                    </div>

                                </div>

                                <div className="border-t pt-5">

                                    <p className="text-gray-600 leading-7">

                                        Bertugas memberikan pelayanan kepada
                                        masyarakat sesuai dengan bidang
                                        tugas dan fungsi yang diemban dalam
                                        struktur Pemerintah Desa.

                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}