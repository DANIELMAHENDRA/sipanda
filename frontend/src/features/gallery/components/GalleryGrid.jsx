import { useState } from "react";

import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";

export default function GalleryGrid({
    galleries,
    loading,
    error,
}) {

    const [selectedGallery, setSelectedGallery] = useState(null);

    /* =========================
       LOADING
    ========================= */

    if (loading) {

        return (

            <section className="py-20 sm:py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <div
                        className="
                            max-w-md
                            mx-auto
                            bg-white
                            rounded-3xl
                            p-10
                            shadow-sm
                            border
                            border-gray-100
                        "
                    >

                        <div
                            className="
                                w-16
                                h-16
                                mx-auto
                                mb-6
                                rounded-2xl
                                bg-green-100
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <div
                                className="
                                    w-8
                                    h-8
                                    border-4
                                    border-green-200
                                    border-t-green-700
                                    rounded-full
                                    animate-spin
                                "
                            ></div>

                        </div>

                        <h2 className="text-2xl font-bold text-gray-900">

                            Dokumentasi Kegiatan Desa

                        </h2>

                        <p className="mt-3 text-gray-500">

                            Memuat data galeri...

                        </p>

                    </div>

                </div>

            </section>

        );

    }

    /* =========================
       ERROR
    ========================= */

    if (error) {

        return (

            <section className="py-20 sm:py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <div
                        className="
                            max-w-lg
                            mx-auto
                            bg-white
                            rounded-3xl
                            p-10
                            shadow-sm
                            border
                            border-red-100
                        "
                    >

                        <div
                            className="
                                w-16
                                h-16
                                mx-auto
                                mb-6
                                rounded-2xl
                                bg-red-100
                                flex
                                items-center
                                justify-center
                                text-red-500
                                text-2xl
                                font-bold
                            "
                        >

                            !

                        </div>

                        <h2 className="text-2xl font-bold text-gray-900">

                            Dokumentasi Kegiatan Desa

                        </h2>

                        <p className="mt-3 text-red-500">

                            Gagal memuat data galeri.

                        </p>

                        <p className="mt-2 text-sm text-gray-500">

                            Silakan coba kembali beberapa saat lagi.

                        </p>

                    </div>

                </div>

            </section>

        );

    }

    /* =========================
       MAIN CONTENT
    ========================= */

    return (

        <section className="py-20 sm:py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-12 sm:mb-14"
                >

                    <h2
                        className="
                            text-3xl
                            sm:text-4xl
                            font-bold
                            text-gray-900
                        "
                    >

                        Dokumentasi Kegiatan Desa

                    </h2>

                    <p
                        className="
                            mt-4
                            text-gray-600
                            max-w-3xl
                            mx-auto
                            leading-8
                            text-sm
                            sm:text-base
                        "
                    >

                        Berbagai dokumentasi kegiatan pemerintahan,
                        pembangunan, pemberdayaan masyarakat,
                        pertanian, pendidikan,
                        hingga aktivitas sosial
                        di Desa Panca Tunggal.

                    </p>

                </div>

                {/* Gallery */}

                {galleries?.length === 0 ? (

                    <div
                        className="
                            bg-white
                            rounded-3xl
                            border
                            border-gray-200
                            p-12
                            sm:p-16
                            text-center
                        "
                    >

                        <h3 className="text-xl font-semibold text-gray-800">

                            Belum Ada Dokumentasi

                        </h3>

                        <p className="mt-3 text-gray-500">

                            Belum terdapat dokumentasi kegiatan
                            yang dapat ditampilkan.

                        </p>

                    </div>

                ) : (

                    <div
                        className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            gap-6
                            sm:gap-8
                        "
                    >

                        {galleries.map((gallery, index) => (

                            <div
                                key={gallery.id}
                                data-aos="fade-up"
                                data-aos-delay={Math.min(index * 100, 500)}
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

                        ))}

                    </div>

                )}

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