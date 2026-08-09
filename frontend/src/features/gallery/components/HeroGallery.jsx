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
                min-h-[650px]
                lg:min-h-[700px]
                flex
                items-center
                pt-28
                pb-16
                bg-cover
                bg-center
            "
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/65"></div>

            {/* Green Gradient */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-green-950/70
                    via-black/30
                    to-green-900/50
                "
            ></div>

            {/* Decorative Blur */}

            <div
                className="
                    absolute
                    -top-24
                    -left-24
                    w-72
                    h-72
                    bg-green-500/20
                    rounded-full
                    blur-3xl
                "
            ></div>

            <div
                className="
                    absolute
                    -bottom-24
                    -right-24
                    w-80
                    h-80
                    bg-green-400/20
                    rounded-full
                    blur-3xl
                "
            ></div>

            {/* Content */}

            <div className="relative max-w-7xl mx-auto px-6 w-full">

                {/* Breadcrumb */}

                <div
                    data-aos="fade-right"
                    className="
                        flex
                        items-center
                        gap-2
                        text-green-200
                        text-sm
                        mb-6
                    "
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
                    className="
                        inline-flex
                        items-center
                        gap-2
                        bg-green-600/90
                        backdrop-blur-md
                        text-white
                        px-5
                        py-2.5
                        rounded-full
                        shadow-lg
                        mb-8
                    "
                >

                    <Images size={18} />

                    Dokumentasi Desa Panca Tunggal

                </div>

                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        font-bold
                        text-white
                        leading-tight
                        max-w-4xl
                    "
                >

                    Galeri

                    <br />

                    Desa Panca Tunggal

                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="
                        mt-8
                        text-base
                        sm:text-lg
                        text-gray-200
                        leading-8
                        max-w-3xl
                    "
                >

                    Dokumentasi berbagai kegiatan pemerintahan,
                    pembangunan desa, pemberdayaan masyarakat,
                    pendidikan, pertanian, UMKM,
                    serta berbagai momen penting yang menjadi
                    bagian dari perkembangan Desa Panca Tunggal.

                </p>

            </div>

        </section>
    );
}