import SectionTitle from "../../../components/common/SectionTitle";

import {
    FileText,
    Users,
    BadgeCheck,
    Landmark,
    HeartHandshake,
    Building2,
    ArrowRight,
} from "lucide-react";

export default function GovernmentServiceSection() {

    const services = [

        {
            icon: FileText,
            title: "Surat Keterangan",
            description:
                "Pelayanan pembuatan berbagai surat keterangan sesuai kebutuhan masyarakat secara cepat dan transparan.",
        },

        {
            icon: Users,
            title: "Administrasi Kependudukan",
            description:
                "Pelayanan administrasi penduduk, domisili, pindah datang, dan berbagai dokumen kependudukan lainnya.",
        },

        {
            icon: BadgeCheck,
            title: "Legalisasi Dokumen",
            description:
                "Pelayanan pengesahan dan legalisasi berbagai dokumen resmi yang diterbitkan oleh Pemerintah Desa.",
        },

        {
            icon: Landmark,
            title: "Pelayanan Pemerintahan",
            description:
                "Pelayanan administrasi pemerintahan desa serta berbagai kebutuhan masyarakat terkait pemerintahan.",
        },

        {
            icon: HeartHandshake,
            title: "Pelayanan Sosial",
            description:
                "Pelayanan bantuan sosial, pemberdayaan masyarakat, serta kegiatan kemasyarakatan desa.",
        },

        {
            icon: Building2,
            title: "Informasi Desa",
            description:
                "Memberikan informasi mengenai program pemerintah desa, pembangunan, serta kegiatan masyarakat.",
        },

    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Pelayanan Desa"
                    title="Layanan Pemerintah Desa"
                    description="Pemerintah Desa Panca Tunggal menyediakan berbagai pelayanan publik yang mudah diakses, cepat, transparan, dan profesional."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (

                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-green-600 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-700 transition">

                                    <Icon
                                        size={30}
                                        className="text-green-700 group-hover:text-white transition"
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-gray-900">

                                    {service.title}

                                </h3>

                                <p className="mt-5 text-gray-600 leading-8">

                                    {service.description}

                                </p>

                                <button
                                    className="mt-8 inline-flex items-center gap-2 font-semibold text-green-700 group-hover:text-green-800 transition"
                                >

                                    Selengkapnya

                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-2 transition"
                                    />

                                </button>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}s