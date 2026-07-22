import {
    ChevronRight,
    Images,
    Image,
    Camera,
    Video,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import heroImage from "../../../assets/images/gallery/hero-gallery.jpg";

export default function HeroGallery() {

    return (

            <section
                className="
                    relative
                    h-[75vh]
                    min-h-[550px]
                    flex
                    items-center
                    pt-28
                    bg-cover
                    bg-center
                "
            >

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/65"></div>

            {/* Background Gradient */}

            <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 via-transparent to-green-900/40"></div>

            {/* Content */}

            <div className="relative max-w-7xl mx-auto px-6 w-full">

                {/* Breadcrumb */}

                <div
                    data-aos="fade-right"
                    className="flex items-center gap-2 text-green-200 text-sm mb-6"
                >

                    <NavLink
                        to="/"
                        className="hover:text-white transition"
                    >
                        Beranda
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white">

                        Galeri

                    </span>

                </div>

                {/* Badge */}

                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full shadow-lg mb-8"
                >

                    <Images size={18} />

                    Dokumentasi Desa Panca Tunggal

                </div>

                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
                >

                    Galeri
                    <br />

                    Desa Panca Tunggal

                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl"
                >

                    Dokumentasi berbagai kegiatan pemerintahan,
                    pembangunan desa, pemberdayaan masyarakat,
                    pendidikan, pertanian, UMKM,
                    serta berbagai momen penting yang menjadi
                    bagian dari perkembangan Desa Panca Tunggal.

                </p>

                {/* Statistics */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="grid grid-cols-3 gap-6 mt-14 max-w-3xl"
                >

                    {/* Foto */}

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

                        <Image
                            className="text-green-300 mb-4"
                            size={30}
                        />

                        <h3 className="text-3xl font-bold text-white">

                            250+

                        </h3>

                        <p className="text-green-100 mt-2">

                            Foto Kegiatan

                        </p>

                    </div>

                    {/* Video */}

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

                        <Video
                            className="text-green-300 mb-4"
                            size={30}
                        />

                        <h3 className="text-3xl font-bold text-white">

                            35+

                        </h3>

                        <p className="text-green-100 mt-2">

                            Video Dokumentasi

                        </p>

                    </div>

                    {/* Event */}

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

                        <Camera
                            className="text-green-300 mb-4"
                            size={30}
                        />

                        <h3 className="text-3xl font-bold text-white">

                            120+

                        </h3>

                        <p className="text-green-100 mt-2">

                            Kegiatan Desa

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}