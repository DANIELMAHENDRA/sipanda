import {
    Quote,
    Tag,
    TrendingUp,
    Leaf,
    Users,
} from "lucide-react";

import coverImage from "../../../../assets/images/potential/agriculture.jpg";

import gallery1 from "../../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../../assets/images/gallery/gallery3.jpg";

export default function PotentialContent() {

    const tags = [
        "Pertanian",
        "Pangan",
        "Ekonomi Desa",
        "Ketahanan Pangan",
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
                    alt="Potensi Pertanian"
                    className="w-full rounded-3xl shadow-xl object-cover"
                />

                {/* Artikel */}

                <div
                    data-aos="fade-up"
                    className="mt-12 space-y-8 text-lg leading-9 text-gray-700"
                >

                    <p>

                        Desa Panca Tunggal memiliki lahan pertanian yang sangat
                        luas dengan kondisi tanah yang subur sehingga menjadi
                        salah satu sumber penghasilan utama masyarakat.
                        Sebagian besar penduduk bekerja sebagai petani
                        dengan komoditas unggulan berupa padi, jagung,
                        singkong, cabai, dan berbagai tanaman hortikultura.

                    </p>

                    <p>

                        Selain didukung oleh kondisi alam yang baik,
                        masyarakat juga mulai menerapkan teknologi pertanian
                        modern untuk meningkatkan produktivitas hasil panen.
                        Pemerintah desa secara aktif memberikan pendampingan,
                        pelatihan, serta bantuan alat pertanian kepada
                        kelompok tani.

                    </p>

                </div>

                {/* Quote */}

                <div
                    data-aos="fade-up"
                    className="my-16 bg-green-50 border-l-8 border-green-700 rounded-r-3xl p-10"
                >

                    <Quote
                        size={42}
                        className="text-green-700 mb-6"
                    />

                    <p className="italic text-2xl leading-10 text-gray-800">

                        "Pertanian merupakan tulang punggung ekonomi
                        masyarakat Desa Panca Tunggal yang terus dikembangkan
                        menuju sistem pertanian modern dan berkelanjutan."

                    </p>

                    <p className="mt-6 font-semibold text-green-700">

                        — Pemerintah Desa Panca Tunggal

                    </p>

                </div>

                {/* Statistik */}

                <div
                    data-aos="fade-up"
                    className="grid md:grid-cols-3 gap-6 my-20"
                >

                    <div className="bg-green-50 rounded-3xl p-8 text-center">

                        <Leaf
                            size={42}
                            className="mx-auto text-green-700 mb-5"
                        />

                        <h3 className="text-4xl font-bold text-green-700">

                            320 Ha

                        </h3>

                        <p className="mt-3 text-gray-600">

                            Luas Lahan Pertanian

                        </p>

                    </div>

                    <div className="bg-green-50 rounded-3xl p-8 text-center">

                        <Users
                            size={42}
                            className="mx-auto text-green-700 mb-5"
                        />

                        <h3 className="text-4xl font-bold text-green-700">

                            500+

                        </h3>

                        <p className="mt-3 text-gray-600">

                            Petani Aktif

                        </p>

                    </div>

                    <div className="bg-green-50 rounded-3xl p-8 text-center">

                        <TrendingUp
                            size={42}
                            className="mx-auto text-green-700 mb-5"
                        />

                        <h3 className="text-4xl font-bold text-green-700">

                            80%

                        </h3>

                        <p className="mt-3 text-gray-600">

                            Penduduk Bekerja di Sektor Pertanian

                        </p>

                    </div>

                </div>

                {/* Artikel */}

                <div
                    data-aos="fade-up"
                    className="space-y-8 text-lg leading-9 text-gray-700"
                >

                    <h2 className="text-3xl font-bold text-gray-900">

                        Pengembangan Potensi

                    </h2>

                    <p>

                        Pemerintah Desa terus mendorong peningkatan kualitas
                        pertanian melalui berbagai program pemberdayaan,
                        penyediaan bibit unggul, pembangunan irigasi,
                        digitalisasi pemasaran hasil panen,
                        hingga pelatihan penggunaan teknologi pertanian.

                    </p>

                    <p>

                        Dengan potensi yang dimiliki saat ini,
                        Desa Panca Tunggal diharapkan mampu menjadi desa
                        mandiri yang memiliki daya saing tinggi dalam sektor
                        pertanian sekaligus meningkatkan kesejahteraan
                        masyarakat secara berkelanjutan.

                    </p>

                </div>

                {/* Gallery */}

                <div
                    data-aos="fade-up"
                    className="mt-20"
                >

                    <h2 className="text-3xl font-bold mb-8">

                        Dokumentasi Potensi

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