import {
    ChevronRight,
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import heroImage from "../../../assets/images/contact/hero-contact.jpg";

export default function HeroContact() {

    return (

        <section
            className="relative min-h-screen pt-36 pb-20 flex items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-black/30 to-green-900/60"></div>

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
                        Kontak
                    </span>

                </div>

                {/* Badge */}
                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full shadow-lg mb-8"
                >

                    <MessageCircle size={18} />

                    Hubungi Pemerintah Desa

                </div>

                {/* Title */}
                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
                >

                    Hubungi
                    <br />

                    Desa Panca Tunggal

                </h1>

                {/* Description */}
                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl"
                >

                    Pemerintah Desa Panca Tunggal siap memberikan
                    pelayanan terbaik kepada masyarakat.
                    Silakan menghubungi kami apabila membutuhkan
                    informasi, pelayanan administrasi,
                    maupun menyampaikan aspirasi dan saran
                    untuk kemajuan desa.

                </p>

                {/* Information Cards */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="grid md:grid-cols-3 gap-6 mt-14 max-w-5xl"
                >

                    {/* Telepon */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

                        <Phone
                            size={30}
                            className="text-green-300 mb-4"
                        />

                        <h3 className="text-xl font-bold text-white">

                            Telepon

                        </h3>

                        <p className="mt-2 text-green-100">

                            (0721) 123456

                        </p>

                    </div>

                    {/* Email */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

                        <Mail
                            size={30}
                            className="text-green-300 mb-4"
                        />

                        <h3 className="text-xl font-bold text-white">

                            Email

                        </h3>

                        <p className="mt-2 text-green-100 break-all">

                            desapancatunggal@gmail.com

                        </p>

                    </div>

                    {/* Lokasi */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

                        <MapPin
                            size={30}
                            className="text-green-300 mb-4"
                        />

                        <h3 className="text-xl font-bold text-white">

                            Lokasi

                        </h3>

                        <p className="mt-2 text-green-100">

                            Merbau Mataram,
                            Lampung Selatan

                        </p>

                    </div>

                </div>

                {/* Office Hours */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="mt-12 inline-flex items-center gap-3 text-green-200"
                >

                    <Clock size={22} />

                    <span className="text-base md:text-lg">

                        Jam Pelayanan :
                        Senin - Jumat •
                        08.00 WIB - 15.00 WIB

                    </span>

                </div>

            </div>

        </section>

    );

}