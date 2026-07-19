import SectionTitle from "../../../components/common/SectionTitle";
import { ArrowRight } from "lucide-react";

export default function ServiceSection() {

    const services = [

        {
            icon: "📄",
            title: "Surat Online",
            description: "Layanan pengajuan surat secara online yang memudahkan masyarakat tanpa harus datang ke kantor desa.",
        },

        {
            icon: "📰",
            title: "Berita Desa",
            description: "Menyediakan informasi terbaru mengenai kegiatan, pembangunan, dan pengumuman resmi desa.",
        },

        {
            icon: "🏛",
            title: "Pemerintahan",
            description: "Menampilkan struktur organisasi, perangkat desa, serta informasi pemerintahan secara lengkap.",
        },

        {
            icon: "🌾",
            title: "Potensi Desa",
            description: "Memperkenalkan potensi pertanian, UMKM, peternakan, serta sumber daya yang dimiliki desa.",
        },

        {
            icon: "🖼",
            title: "Galeri",
            description: "Dokumentasi berbagai kegiatan masyarakat dan pemerintah desa dalam bentuk foto dan video.",
        },

        {
            icon: "📞",
            title: "Kontak",
            description: "Hubungi Pemerintah Desa melalui berbagai media komunikasi yang tersedia.",
        },

    ];

    return (

        <section
            className="py-24 bg-white"
            data-aos="fade-up"
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Pelayanan"
                    title="Layanan Desa"
                    description="Berbagai layanan dan informasi yang tersedia melalui Website SIPANDA."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (

                        <div
                            key={index}
                            data-aos="flip-left"
                            data-aos-delay={index * 100}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
                        >

                            <div className="text-6xl mb-6">

                                {service.icon}

                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">

                                {service.title}

                            </h3>

                            <p className="text-gray-600 leading-8">

                                {service.description}

                            </p>

                            <button
                                className="mt-8 inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-all duration-300 group"
                            >

                                Selengkapnya

                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}