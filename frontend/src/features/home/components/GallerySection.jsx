import SectionTitle from "../../../components/common/SectionTitle";
import GalleryCard from "../../../components/common/GalleryCard";
import Button from "../../../components/common/Button";

import { HiOutlinePhoto } from "react-icons/hi2";

export default function GallerySection({ gallery = [] }) {
    return (
        <section
            className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
            data-aos="fade-up"
        >
            {/* Background Decoration */}

            <div className="absolute top-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-30" />

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Dokumentasi"
                    title="Galeri Desa"
                    description="Berbagai dokumentasi kegiatan masyarakat dan Pemerintah Desa Panca Tunggal."
                />

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

                    {gallery.slice(0, 6).map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                        >

                            <GalleryCard
                                image={item.image}
                                title={item.title}
                            />

                        </div>

                    ))}

                </div>

                <div
                    className="mt-16 flex justify-center"
                    data-aos="fade-up"
                >

                    <Button to="/galeri">

                        <span className="flex items-center gap-2">

                            <HiOutlinePhoto className="text-lg" />

                            Lihat Semua Galeri

                        </span>

                    </Button>

                </div>

            </div>
        </section>
    );
}