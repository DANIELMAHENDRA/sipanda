import { useState } from "react";

import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";

import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpg";

export default function GalleryGrid() {

    const galleries = [

        {
            id: 1,
            title: "Gotong Royong Membersihkan Lingkungan Desa",
            category: "Kegiatan",
            date: "20 Juli 2026",
            image: gallery1,
        },

        {
            id: 2,
            title: "Musyawarah Desa Penyusunan RKP Desa",
            category: "Pemerintahan",
            date: "18 Juli 2026",
            image: gallery2,
        },

        {
            id: 3,
            title: "Pelatihan UMKM Bagi Masyarakat Desa",
            category: "UMKM",
            date: "15 Juli 2026",
            image: gallery3,
        },

        {
            id: 4,
            title: "Panen Raya Jagung Desa Panca Tunggal",
            category: "Pertanian",
            date: "12 Juli 2026",
            image: gallery4,
        },

        {
            id: 5,
            title: "Peresmian Jalan Dusun",
            category: "Pembangunan",
            date: "10 Juli 2026",
            image: gallery5,
        },

        {
            id: 6,
            title: "Festival Seni dan Budaya Desa",
            category: "Budaya",
            date: "05 Juli 2026",
            image: gallery6,
        },

    ];

    const [selectedGallery, setSelectedGallery] = useState(null);

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-14"
                >

                    <h2 className="text-4xl font-bold text-gray-900">

                        Dokumentasi Kegiatan Desa

                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">

                        Berbagai dokumentasi kegiatan pemerintahan,
                        pembangunan, pemberdayaan masyarakat,
                        pertanian, pendidikan,
                        hingga aktivitas sosial yang ada
                        di Desa Panca Tunggal.

                    </p>

                </div>

                {/* Grid */}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                    {galleries.map((gallery, index) => (

                        <div
                            key={gallery.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            <GalleryCard

                                image={gallery.image}

                                title={gallery.title}

                                category={gallery.category}

                                date={gallery.date}

                                onClick={() =>
                                    setSelectedGallery(gallery)
                                }

                            />

                        </div>

                    ))}

                </div>

            </div>

            {/* Modal */}

            {selectedGallery && (

                <GalleryModal

                    gallery={selectedGallery}

                    onClose={() =>
                        setSelectedGallery(null)
                    }

                />

            )}

        </section>

    );

}