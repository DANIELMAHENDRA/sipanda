import {
    CalendarDays,
    ArrowRight,
} from "lucide-react";

import Button from "../../../components/common/Button";

import news1 from "../../../assets/images/news/news1.jpg";
import news2 from "../../../assets/images/news/news2.jpg";
import news3 from "../../../assets/images/news/news3.jpg";
import news4 from "../../../assets/images/news/news4.jpg";
import news5 from "../../../assets/images/news/news5.jpg";
import news6 from "../../../assets/images/news/news6.jpg";

export default function NewsGrid() {

    const news = [

        {
            id: 1,
            image: news1,
            category: "Pemerintahan",
            date: "20 Juli 2026",
            title: "Musyawarah Desa Menyusun Program Kerja Tahun 2026",
            description:
                "Pemerintah Desa bersama masyarakat melaksanakan musyawarah desa guna menyusun prioritas pembangunan desa.",
        },

        {
            id: 2,
            image: news2,
            category: "Kegiatan",
            date: "18 Juli 2026",
            title: "Gotong Royong Membersihkan Lingkungan Desa",
            description:
                "Kegiatan gotong royong melibatkan seluruh masyarakat dalam menjaga kebersihan lingkungan desa.",
        },

        {
            id: 3,
            image: news3,
            category: "UMKM",
            date: "15 Juli 2026",
            title: "Pelatihan Digital Marketing bagi UMKM Desa",
            description:
                "Pelaku UMKM mendapatkan pelatihan mengenai pemasaran digital untuk meningkatkan daya saing produk lokal.",
        },

        {
            id: 4,
            image: news4,
            category: "Pertanian",
            date: "12 Juli 2026",
            title: "Panen Raya Padi Desa Panca Tunggal",
            description:
                "Petani Desa Panca Tunggal berhasil meningkatkan hasil panen melalui penggunaan teknologi pertanian modern.",
        },

        {
            id: 5,
            image: news5,
            category: "Pendidikan",
            date: "10 Juli 2026",
            title: "Sosialisasi Literasi Digital bagi Pelajar",
            description:
                "Program edukasi mengenai penggunaan media sosial secara bijak bagi siswa sekolah dasar dan menengah.",
        },

        {
            id: 6,
            image: news6,
            category: "Kesehatan",
            date: "8 Juli 2026",
            title: "Pelayanan Posyandu Rutin Bulan Juli",
            description:
                "Posyandu Desa Panca Tunggal memberikan pelayanan kesehatan ibu dan anak secara rutin setiap bulan.",
        },

    ];

    return (

        <section className="py-10 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {news.map((item, index) => (

                        <article
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >

                            {/* Image */}

                            <div className="overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                                />

                            </div>

                            {/* Content */}

                            <div className="p-6">

                                <div className="flex items-center justify-between mb-5">

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

                                        {item.category}

                                    </span>

                                    <div className="flex items-center gap-2 text-gray-500 text-sm">

                                        <CalendarDays size={16} />

                                        {item.date}

                                    </div>

                                </div>

                                <h3 className="text-2xl font-bold leading-snug hover:text-green-700 transition">

                                    {item.title}

                                </h3>

                                <p className="mt-4 text-gray-600 leading-7">

                                    {item.description}

                                </p>

                                <div className="mt-8">

                                    <Button
                                        to={`/berita/${item.id}`}
                                        variant="outline"
                                        className="gap-2"
                                    >

                                        Baca Selengkapnya

                                        <ArrowRight size={18} />

                                    </Button>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}