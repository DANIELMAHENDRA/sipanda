import SectionTitle from "../../../components/common/SectionTitle";

import {
    Eye,
    Target,
    CheckCircle2,
} from "lucide-react";

export default function VisionMission() {

    const missions = [
        "Meningkatkan kualitas pelayanan publik yang cepat, transparan, dan akuntabel.",
        "Mengembangkan sektor pertanian, perkebunan, dan UMKM sebagai penggerak ekonomi desa.",
        "Meningkatkan kualitas pendidikan, kesehatan, dan kesejahteraan masyarakat.",
        "Memanfaatkan teknologi informasi dalam pelayanan dan administrasi desa.",
        "Membangun tata kelola pemerintahan desa yang profesional dan partisipatif."
    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Arah Pembangunan"
                    title="Visi & Misi Desa"
                    description="Komitmen Pemerintah Desa Panca Tunggal dalam mewujudkan pembangunan yang berkelanjutan."
                />

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* VISI */}

                    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-8">

                            <Eye
                                size={34}
                                className="text-green-700"
                            />

                        </div>

                        <h3 className="text-3xl font-bold text-gray-800 mb-6">

                            Visi

                        </h3>

                        <p className="text-gray-600 leading-9 text-justify">

                            Terwujudnya Desa Panca Tunggal yang maju,
                            mandiri, sejahtera, berbudaya,
                            serta berbasis teknologi informasi
                            menuju pelayanan publik yang
                            transparan, berkualitas, dan berdaya saing.

                        </p>

                    </div>

                    {/* MISI */}

                    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-8">

                            <Target
                                size={34}
                                className="text-green-700"
                            />

                        </div>

                        <h3 className="text-3xl font-bold text-gray-800 mb-8">

                            Misi

                        </h3>

                        <div className="space-y-6">

                            {missions.map((mission, index) => (

                                <div
                                    key={index}
                                    className="flex gap-4"
                                >

                                    <CheckCircle2
                                        size={24}
                                        className="text-green-700 mt-1 flex-shrink-0"
                                    />

                                    <p className="text-gray-600 leading-8">

                                        {mission}

                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}