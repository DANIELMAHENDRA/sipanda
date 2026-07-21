import SectionTitle from "../../../components/common/SectionTitle";

import {
    Building2,
    Landmark,
    Users,
    ShieldCheck,
} from "lucide-react";

export default function DutiesSection() {

    const duties = [

        {
            icon: Landmark,
            title: "Penyelenggaraan Pemerintahan",
            description:
                "Melaksanakan tata kelola pemerintahan desa yang transparan, efektif, profesional, serta sesuai dengan peraturan perundang-undangan.",
        },

        {
            icon: Building2,
            title: "Pelaksanaan Pembangunan",
            description:
                "Merencanakan dan melaksanakan pembangunan desa untuk meningkatkan kualitas infrastruktur serta kesejahteraan masyarakat.",
        },

        {
            icon: Users,
            title: "Pembinaan Kemasyarakatan",
            description:
                "Mendorong partisipasi masyarakat, menjaga kerukunan, keamanan, serta mengembangkan kegiatan sosial dan budaya desa.",
        },

        {
            icon: ShieldCheck,
            title: "Pemberdayaan Masyarakat",
            description:
                "Meningkatkan kemampuan masyarakat melalui pendidikan, pelatihan, UMKM, pertanian, dan pemanfaatan teknologi informasi.",
        },

    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Tugas & Fungsi"
                    title="Peran Pemerintah Desa"
                    description="Pemerintah Desa Panca Tunggal menjalankan tugas dan fungsi berdasarkan Undang-Undang Desa untuk memberikan pelayanan terbaik kepada masyarakat."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-16">

                    {duties.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">

                                    <Icon
                                        size={32}
                                        className="text-green-700"
                                    />

                                </div>

                                <h3 className="text-2xl font-bold text-gray-900">

                                    {item.title}

                                </h3>

                                <p className="mt-5 text-gray-600 leading-8">

                                    {item.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}