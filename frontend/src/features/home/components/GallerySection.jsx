import SectionTitle from "../../../components/common/SectionTitle";
import GalleryCard from "../../../components/common/GalleryCard";
import Button from "../../../components/common/Button";

import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpg";

export default function GallerySection() {

    const galleries = [
        {
            image: gallery1,
            title: "Gotong Royong Desa",
        },
        {
            image: gallery2,
            title: "Musyawarah Desa",
        },
        {
            image: gallery3,
            title: "Pelatihan UMKM",
        },
        {
            image: gallery4,
            title: "Panen Raya",
        },
        {
            image: gallery5,
            title: "Kegiatan Posyandu",
        },
        {
            image: gallery6,
            title: "Perayaan Hari Kemerdekaan",
        },
    ];

    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Dokumentasi"
                    title="Galeri Desa"
                    description="Berbagai dokumentasi kegiatan masyarakat dan pemerintah Desa Panca Tunggal."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {galleries.map((item, index) => (
                        <GalleryCard
                            key={index}
                            image={item.image}
                            title={item.title}
                        />
                    ))}

                </div>

                <div className="text-center mt-12">
                    <Button to="/galeri">
                        Lihat Semua Galeri
                    </Button>
                </div>

            </div>

        </section>
    );
}