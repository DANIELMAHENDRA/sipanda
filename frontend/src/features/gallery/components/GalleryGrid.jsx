import { useState } from "react";

import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";

export default function GalleryGrid({

    galleries,

    loading,

    error,

}) {


    const [selectedGallery, setSelectedGallery] = useState(null);

    if (loading) {

        return (

            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold mb-6">

                        Dokumentasi Kegiatan Desa

                    </h2>

                    <p>

                        Memuat data galeri...

                    </p>

                </div>

            </section>

        );

    }

    if (error) {

        return (

            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold mb-6">

                        Dokumentasi Kegiatan Desa

                    </h2>

                    <p className="text-red-500">

                        Gagal memuat data galeri.

                    </p>

                </div>

            </section>

        );

    }

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    data-aos="fade-up"
                    className="text-center mb-14"
                >

                    <h2 className="text-4xl font-bold text-gray-900">

                        Dokumentasi Kegiatan Desa

                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">

                        Berbagai dokumentasi kegiatan pemerintahan,
                        pembangunan,
                        pemberdayaan masyarakat,
                        pertanian,
                        pendidikan,
                        hingga aktivitas sosial
                        di Desa Panca Tunggal.

                    </p>

                </div>

                {

                    galleries.length === 0 ? (

                        <div className="text-center py-20">

                            Belum ada data galeri.

                        </div>

                    ) : (

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                            {

                                galleries.map((gallery, index) => (

                                    <div

                                        key={gallery.id}

                                        data-aos="fade-up"

                                        data-aos-delay={index * 100}

                                    >

                                        <GalleryCard

                                            image={gallery.image}

                                            title={gallery.title}

                                            category={gallery.category}

                                            date={gallery.taken_at}

                                            onClick={() =>
                                                setSelectedGallery(gallery)
                                            }

                                        />

                                    </div>

                                ))

                            }

                        </div>

                    )

                }

            </div>

            {

                selectedGallery && (

                    <GalleryModal

                        gallery={selectedGallery}

                        onClose={() =>
                            setSelectedGallery(null)
                        }

                    />

                )

            }

        </section>

    );

}