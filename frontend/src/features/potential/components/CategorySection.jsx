import {
    Sprout,
    Beef,
    Store,
    Trees,
    Landmark,
    GraduationCap,
    ArrowRight,
} from "lucide-react";

const categories = [
    {
        title: "Pertanian",
        icon: Sprout,
        total: "12 Potensi",
        description:
            "Jagung, padi, singkong, cabai, dan berbagai komoditas unggulan desa.",
    },
    {
        title: "Peternakan",
        icon: Beef,
        total: "6 Potensi",
        description:
            "Pengembangan ternak sapi, kambing, ayam, dan usaha peternakan rakyat.",
    },
    {
        title: "UMKM",
        icon: Store,
        total: "18 UMKM",
        description:
            "Produk olahan pangan, kerajinan, kuliner, dan usaha mikro masyarakat.",
    },
    {
        title: "Wisata",
        icon: Trees,
        total: "4 Destinasi",
        description:
            "Potensi wisata alam, edukasi, dan ruang terbuka hijau desa.",
    },
    {
        title: "Budaya",
        icon: Landmark,
        total: "5 Kegiatan",
        description:
            "Pelestarian adat, seni budaya, dan kegiatan masyarakat desa.",
    },
    {
        title: "Pendidikan",
        icon: GraduationCap,
        total: "3 Program",
        description:
            "Pengembangan literasi, pendidikan, dan pemberdayaan generasi muda.",
    },
];

export default function CategorySection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >
                    <span className="text-green-700 font-semibold uppercase tracking-widest">
                        Kategori Potensi
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900">
                        Potensi Unggulan Desa
                    </h2>

                    <p className="mt-5 text-gray-600 leading-8 max-w-3xl mx-auto">
                        Desa Panca Tunggal memiliki berbagai potensi yang
                        menjadi sumber kekuatan ekonomi, sosial, dan budaya
                        masyarakat. Potensi-potensi ini terus dikembangkan
                        untuk meningkatkan kesejahteraan warga desa.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {categories.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group bg-white rounded-3xl border border-gray-200 p-8 hover:border-green-600 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-700 transition">

                                    <Icon
                                        size={30}
                                        className="text-green-700 group-hover:text-white transition"
                                    />

                                </div>

                                <span className="text-sm text-green-700 font-semibold">
                                    {item.total}
                                </span>

                                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-gray-600 leading-7">
                                    {item.description}
                                </p>

                                <button
                                    className="mt-8 inline-flex items-center gap-2 text-green-700 font-semibold group-hover:gap-3 transition-all"
                                >
                                    Lihat Potensi

                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}