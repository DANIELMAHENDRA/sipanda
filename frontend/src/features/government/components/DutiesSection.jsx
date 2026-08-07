import SectionTitle from "../../../components/common/SectionTitle";

import {
    Building2,
    Landmark,
    Users,
    ShieldCheck,
    ArrowRight,
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

        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Tugas & Fungsi"
                    title="Peran Pemerintah Desa"
                    description="Pemerintah Desa menjalankan fungsi pemerintahan, pembangunan, pembinaan, dan pemberdayaan masyarakat demi terciptanya pelayanan publik yang berkualitas."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-16">

                    {duties.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >

                                {/* Decoration */}

                                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-green-50 translate-x-16 -translate-y-16 group-hover:scale-125 transition duration-500"></div>

                                {/* Icon */}

                                <div className="relative w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition">

                                    <Icon
                                        size={30}
                                        className="text-green-700 group-hover:text-white transition"
                                    />

                                </div>

                                {/* Title */}

                                <h3 className="relative text-2xl font-bold text-gray-900">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="relative mt-5 text-gray-600 leading-8">

                                    {item.description}

                                </p>

                                {/* Footer */}

                                <div className="relative mt-8 flex items-center text-green-700 font-semibold">

                                    <span>
                                        Pelajari lebih lanjut
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                                    />

                                </div>

                            </div>

                        );

                    })}

                </div>

                {/* Bottom Highlight */}

                <div
                    data-aos="fade-up"
                    className="mt-20 rounded-3xl bg-green-700 p-10 lg:p-12 text-white text-center shadow-xl"
                >

                    <h3 className="text-3xl font-bold">

                        Pemerintahan yang Melayani

                    </h3>

                    <p className="mt-6 max-w-4xl mx-auto leading-8 text-green-100">

                        Pemerintah Desa berkomitmen memberikan pelayanan yang
                        cepat, transparan, profesional, serta berorientasi pada
                        kepentingan masyarakat melalui tata kelola pemerintahan
                        yang baik (Good Governance).

                    </p>

                </div>

            </div>

        </section>

    );

}