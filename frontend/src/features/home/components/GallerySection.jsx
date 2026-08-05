import SectionTitle from "../../../components/common/SectionTitle";
import GalleryCard from "../../../components/common/GalleryCard";
import Button from "../../../components/common/Button";

export default function GallerySection({ gallery = [] }) {

    return (

        <section
            className="py-24 bg-white"
            data-aos="fade-up"
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Dokumentasi"
                    title="Galeri Desa"
                    description="Berbagai dokumentasi kegiatan masyarakat dan pemerintah Desa Panca Tunggal."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {gallery.slice(0, 6).map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="zoom-in"
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
                    className="text-center mt-14"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >

                    <Button to="/galeri">

                        Lihat Semua Galeri

                    </Button>

                </div>

            </div>

        </section>

    );

}