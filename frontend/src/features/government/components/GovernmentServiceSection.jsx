import SectionTitle from "../../../components/common/SectionTitle";

import {
    FileText,
    Users,
    BadgeCheck,
    Landmark,
    HeartHandshake,
    Building2,
    ArrowRight,
    Sparkles,
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

        <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Pelayanan Desa"
                    title="Layanan Pemerintah Desa"
                    description="Pemerintah Desa menyediakan berbagai layanan publik yang mudah diakses, profesional, transparan, dan berorientasi pada kepuasan masyarakat."
                />

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (

                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group relative overflow-hidden bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >

                                {/* Decoration */}

                                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-green-50 translate-x-10 -translate-y-10 group-hover:bg-green-100 transition"></div>

                                <div className="relative p-8">

                                    {/* Nomor */}

                                    <div className="flex justify-between items-start">

                                        <span className="text-5xl font-black text-gray-100">

                                            0{index + 1}

                                        </span>

                                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-700 transition">

                                            <Icon
                                                size={30}
                                                className="text-green-700 group-hover:text-white transition"
                                            />

                                        </div>

                                    </div>

                                    {/* Badge */}

                                    <div className="inline-flex items-center gap-2 mt-6 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">

                                        <Sparkles size={14} />

                                        Layanan Publik

                                    </div>

                                    <h3 className="mt-5 text-2xl font-bold text-gray-900">

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

                            </div>

                        );

                    })}

                </div>

                {/* Bottom Information */}

                <div
                    data-aos="fade-up"
                    className="mt-20 rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white p-10 lg:p-14 shadow-2xl"
                >

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        <div>

                            <h3 className="text-3xl font-bold">

                                Pelayanan yang Cepat, Mudah, dan Transparan

                            </h3>

                            <p className="mt-6 text-green-100 leading-8">

                                Pemerintah Desa berkomitmen memberikan pelayanan terbaik kepada masyarakat melalui proses administrasi yang profesional, efektif, serta berorientasi pada kepuasan masyarakat.

                            </p>

                        </div>

                        <div className="grid grid-cols-2 gap-5">

                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">

                                <h4 className="text-3xl font-bold">

                                    6+

                                </h4>

                                <p className="mt-2 text-green-100">

                                    Jenis Pelayanan

                                </p>

                            </div>

                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">

                                <h4 className="text-3xl font-bold">

                                    100%

                                </h4>

                                <p className="mt-2 text-green-100">

                                    Transparan

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}