import {
    Images,
    Camera,
    Video,
    ImagePlus,
} from "lucide-react";

export default function GalleryStatistics() {

    const statistics = [

        {
            id: 1,
            icon: Images,
            total: "250+",
            title: "Foto Dokumentasi",
            description: "Dokumentasi kegiatan pemerintahan, pembangunan, dan pelayanan masyarakat.",
        },

        {
            id: 2,
            icon: Camera,
            total: "80+",
            title: "Kegiatan Desa",
            description: "Berbagai kegiatan sosial, budaya, olahraga, dan gotong royong masyarakat.",
        },

        {
            id: 3,
            icon: Video,
            total: "35+",
            title: "Video Dokumentasi",
            description: "Video kegiatan resmi Pemerintah Desa yang telah diarsipkan secara digital.",
        },

        {
            id: 4,
            icon: ImagePlus,
            total: "15+",
            title: "Album Galeri",
            description: "Kumpulan album dokumentasi berdasarkan kategori kegiatan desa.",
        },

    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl font-bold text-gray-900">

                        Statistik Dokumentasi Desa

                    </h2>

                    <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-8">

                        Pemerintah Desa Panca Tunggal terus melakukan
                        digitalisasi dokumentasi sebagai bentuk
                        transparansi informasi serta arsip kegiatan desa
                        yang mudah diakses oleh seluruh masyarakat.

                    </p>

                </div>

                {/* Statistics */}

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                    {statistics.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-lg
                                    hover:shadow-2xl
                                    border
                                    border-gray-100
                                    p-10
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                "
                            >

                                {/* Icon */}

                                <div
                                    className="
                                        w-20
                                        h-20
                                        mx-auto
                                        rounded-full
                                        bg-green-100
                                        flex
                                        items-center
                                        justify-center
                                        mb-6
                                    "
                                >

                                    <Icon
                                        size={38}
                                        className="text-green-700"
                                    />

                                </div>

                                {/* Number */}

                                <h3 className="text-5xl font-bold text-green-700">

                                    {item.total}

                                </h3>

                                {/* Title */}

                                <h4 className="mt-5 text-2xl font-semibold text-gray-900">

                                    {item.title}

                                </h4>

                                {/* Description */}

                                <p className="mt-4 text-gray-600 leading-7">

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