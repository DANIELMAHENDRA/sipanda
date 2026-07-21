import {
    Quote,
    Tag,
} from "lucide-react";

import coverImage from "../../../../assets/images/news/news1.jpg";

import gallery1 from "../../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../../assets/images/gallery/gallery3.jpg";

export default function NewsContent() {

    const tags = [
        "Pemerintahan",
        "Musyawarah Desa",
        "RKP Desa",
        "Pembangunan",
    ];

    const galleries = [
        gallery1,
        gallery2,
        gallery3,
    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* Cover */}

                <img
                    data-aos="zoom-in"
                    src={coverImage}
                    alt="Berita Desa"
                    className="w-full rounded-3xl shadow-xl object-cover"
                />

                {/* Artikel */}

                <div
                    data-aos="fade-up"
                    className="mt-12 space-y-8 text-gray-700 text-lg leading-9"
                >

                    <p>

                        Pemerintah Desa Panca Tunggal melaksanakan Musyawarah
                        Desa sebagai langkah awal dalam menyusun Rencana Kerja
                        Pemerintah Desa (RKP Desa) Tahun 2026. Musyawarah ini
                        melibatkan seluruh unsur masyarakat mulai dari
                        perangkat desa, BPD, tokoh masyarakat, tokoh agama,
                        pemuda hingga perwakilan kelompok perempuan.

                    </p>

                    <p>

                        Kegiatan ini bertujuan untuk menghimpun berbagai
                        usulan pembangunan yang berasal langsung dari
                        masyarakat sehingga program yang dijalankan benar-benar
                        sesuai dengan kebutuhan warga Desa Panca Tunggal.

                    </p>

                </div>

                {/* Quote */}

                <div
                    data-aos="fade-up"
                    className="my-16 bg-green-50 border-l-8 border-green-700 rounded-r-2xl p-10"
                >

                    <Quote
                        className="text-green-700 mb-5"
                        size={42}
                    />

                    <p className="text-2xl italic leading-10 text-gray-800">

                        "Pembangunan desa tidak hanya berasal dari pemerintah,
                        tetapi dari seluruh masyarakat yang bersama-sama
                        memiliki visi untuk memajukan Desa Panca Tunggal."

                    </p>

                    <p className="mt-6 font-semibold text-green-700">

                        — Kepala Desa Panca Tunggal

                    </p>

                </div>

                {/* Artikel */}

                <div
                    data-aos="fade-up"
                    className="space-y-8 text-gray-700 text-lg leading-9"
                >

                    <p>

                        Dalam musyawarah tersebut, berbagai usulan prioritas
                        pembangunan berhasil dirumuskan, mulai dari
                        pembangunan infrastruktur jalan desa, peningkatan
                        pelayanan kesehatan, pengembangan UMKM, peningkatan
                        kualitas pendidikan, hingga digitalisasi pelayanan
                        pemerintahan desa melalui Website SIPANDA.

                    </p>

                    <p>

                        Pemerintah Desa berharap seluruh hasil musyawarah
                        tersebut dapat menjadi dasar penyusunan program kerja
                        yang transparan, efektif, dan mampu meningkatkan
                        kesejahteraan masyarakat secara berkelanjutan.

                    </p>

                </div>

                {/* Gallery */}

                <div
                    data-aos="fade-up"
                    className="mt-20"
                >

                    <h2 className="text-3xl font-bold mb-8">

                        Dokumentasi Kegiatan

                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        {galleries.map((image, index) => (

                            <img
                                key={index}
                                src={image}
                                alt=""
                                className="rounded-2xl h-64 w-full object-cover shadow-lg hover:scale-105 transition duration-300"
                            />

                        ))}

                    </div>

                </div>

                {/* Tags */}

                <div
                    data-aos="fade-up"
                    className="mt-20 flex flex-wrap items-center gap-4"
                >

                    <Tag
                        size={22}
                        className="text-green-700"
                    />

                    {tags.map((tag) => (

                        <span
                            key={tag}
                            className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium"
                        >

                            {tag}

                        </span>

                    ))}

                </div>

            </div>

        </section>

    );

}