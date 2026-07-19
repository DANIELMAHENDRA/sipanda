import SectionTitle from "../../../components/common/SectionTitle";

export default function ServiceSection() {

    const services = [

        {
            icon: "📄",
            title: "Surat Online",
            description: "Layanan pengajuan surat secara online.",
        },

        {
            icon: "📰",
            title: "Berita Desa",
            description: "Informasi dan berita terbaru desa.",
        },

        {
            icon: "🏛",
            title: "Pemerintahan",
            description: "Struktur organisasi pemerintah desa.",
        },

        {
            icon: "🌾",
            title: "Potensi Desa",
            description: "Potensi pertanian, UMKM, dan wisata.",
        },

        {
            icon: "🖼",
            title: "Galeri",
            description: "Dokumentasi kegiatan desa.",
        },

        {
            icon: "📞",
            title: "Kontak",
            description: "Hubungi pemerintah desa.",
        },

    ];

    return (

        <section className="py-24 bg-white">

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
                            className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="text-6xl mb-6">

                                {service.icon}

                            </div>

                            <h3 className="text-2xl font-bold mb-4">

                                {service.title}

                            </h3>

                            <p className="text-gray-600 leading-7">

                                {service.description}

                            </p>

                            <button
                                className="mt-8 text-green-700 font-semibold hover:underline"
                            >
                                Selengkapnya →
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}