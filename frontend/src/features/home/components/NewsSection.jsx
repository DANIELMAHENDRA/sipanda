import SectionTitle from "../../../components/common/SectionTitle";
import NewsCard from "../../../components/common/NewsCard";
import Button from "../../../components/common/Button";

import { HiOutlineNewspaper } from "react-icons/hi2";

export default function NewsSection({ news = [] }) {

    return (

        <section
            className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
            data-aos="fade-up"
        >

            {/* Background Decoration */}

            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-green-100/40 blur-3xl" />

            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Informasi Desa"
                    title="Berita Terbaru"
                    description="Ikuti informasi terbaru mengenai kegiatan, pembangunan, pelayanan, serta perkembangan Desa Panca Tunggal."
                />

                {/* Header */}

                <div className="flex items-center justify-between mt-16 mb-10">

                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-lg">

                            <HiOutlineNewspaper className="text-3xl" />

                        </div>

                        <div>

                            <h3 className="text-2xl font-bold text-slate-800">

                                Berita & Informasi

                            </h3>

                            <p className="text-gray-500">

                                Update kegiatan dan informasi resmi desa.

                            </p>

                        </div>

                    </div>

                </div>

                {

                    news.length === 0 ? (

                        <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm">

                            <HiOutlineNewspaper
                                className="mx-auto text-6xl text-gray-300"
                            />

                            <h3 className="mt-6 text-2xl font-bold text-gray-700">

                                Belum Ada Berita

                            </h3>

                            <p className="mt-3 text-gray-500 max-w-xl mx-auto">

                                Informasi terbaru mengenai kegiatan desa akan
                                ditampilkan pada bagian ini setelah berita
                                dipublikasikan oleh administrator.

                            </p>

                        </div>

                    ) : (

                        <div
                            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8"
                        >

                            {

                                news
                                    .slice(0, 3)
                                    .map((item, index) => (

                                        <div
                                            key={item.id}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 120}
                                            className="group"
                                        >

                                            <div
                                                className="overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                                            >

                                                <NewsCard
                                                    image={item.thumbnail}
                                                    category={item.category}
                                                    date={item.published_at}
                                                    title={item.title}
                                                    description={item.description}
                                                />

                                            </div>

                                        </div>

                                    ))

                            }

                        </div>

                    )

                }

                <div
                    className="mt-16 flex justify-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >

                    <Button to="/berita">

                        Lihat Semua Berita

                    </Button>

                </div>

            </div>

        </section>

    );

}