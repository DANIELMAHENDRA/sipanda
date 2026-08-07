import SectionTitle from "../../../components/common/SectionTitle";

import {
    FaFileSignature,
    FaNewspaper,
    FaLandmark,
    FaSeedling,
    FaImages,
    FaHeadset,
} from "react-icons/fa";

export default function ServiceSection() {

    const services = [

        {
            icon: <FaFileSignature />,
            title: "Surat Online",
            description:
                "Layanan pengajuan surat secara online yang memudahkan masyarakat tanpa harus datang ke kantor desa.",
        },

        {
            icon: <FaNewspaper />,
            title: "Berita Desa",
            description:
                "Menyediakan informasi terbaru mengenai kegiatan, pembangunan, dan pengumuman resmi desa.",
        },

        {
            icon: <FaLandmark />,
            title: "Pemerintahan",
            description:
                "Menampilkan struktur organisasi, perangkat desa, serta informasi pemerintahan secara lengkap.",
        },

        {
            icon: <FaSeedling />,
            title: "Potensi Desa",
            description:
                "Memperkenalkan potensi pertanian, UMKM, peternakan, serta sumber daya yang dimiliki desa.",
        },

        {
            icon: <FaImages />,
            title: "Galeri",
            description:
                "Dokumentasi berbagai kegiatan masyarakat dan pemerintah desa dalam bentuk foto dan video.",
        },

        {
            icon: <FaHeadset />,
            title: "Kontak",
            description:
                "Hubungi Pemerintah Desa melalui berbagai media komunikasi yang tersedia.",
        },

    ];

    return (

        <section
            className="relative py-24 bg-slate-50 overflow-hidden"
            data-aos="fade-up"
        >

            {/* Background */}

            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-green-100 blur-3xl opacity-40" />

            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-40" />

            <div className="relative max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Pelayanan"
                    title="Layanan Desa"
                    description="Berbagai layanan dan informasi yang tersedia melalui Website SIPANDA."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
                        >

                            {/* Accent */}

                            <div className="absolute left-0 top-0 h-full w-1 bg-green-700 group-hover:w-2 transition-all duration-500" />

                            <div className="p-8">

                                {/* Icon */}

                                <div className="w-20 h-20 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-4xl text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-500">

                                    {service.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-8 text-2xl font-bold text-slate-800">

                                    {service.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-5 text-gray-600 leading-8">

                                    {service.description}

                                </p>

                            </div>

                            {/* Watermark */}

                            <div
                                className="
                                    absolute
                                    bottom-5
                                    right-5
                                    text-5xl
                                    text-slate-200
                                    opacity-30
                                    group-hover:opacity-50
                                    transition-all
                                    duration-500
                                    pointer-events-none
                                "
                            >

                                {service.icon}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}