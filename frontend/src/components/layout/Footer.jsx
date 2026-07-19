import { NavLink } from "react-router-dom";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";

export default function Footer() {

    const menus = [
        {
            name: "Beranda",
            path: "/",
        },
        {
            name: "Profil",
            path: "/profil",
        },
        {
            name: "Pemerintahan",
            path: "/pemerintahan",
        },
        {
            name: "Berita",
            path: "/berita",
        },
        {
            name: "Galeri",
            path: "/galeri",
        },
        {
            name: "Potensi",
            path: "/potensi",
        },
        {
            name: "Kontak",
            path: "/kontak",
        },
    ];

    return (

        <footer className="bg-green-900 text-white">

            {/* Footer */}

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-4">

                            <img
                                src={logo}
                                alt="Logo SIPANDA"
                                className="w-16 h-16 object-contain"
                            />

                            <div>

                                <h2 className="text-2xl font-bold">

                                    SIPANDA

                                </h2>

                                <p className="text-green-200">

                                    Desa Panca Tunggal

                                </p>

                            </div>

                        </div>

                        <p className="mt-6 text-green-100 leading-8">

                            SIPANDA merupakan Website Resmi Desa
                            Panca Tunggal yang menyediakan informasi
                            pemerintahan, pelayanan publik, berita,
                            galeri, potensi desa, serta berbagai layanan
                            digital untuk masyarakat secara cepat,
                            transparan, dan mudah diakses.

                        </p>

                        {/* Social Media */}

                        <div className="flex gap-4 mt-8">

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-green-800 hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center hover:scale-110"
                            >

                                <FaFacebookF size={18} />

                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-green-800 hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center hover:scale-110"
                            >

                                <FaInstagram size={18} />

                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-green-800 hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center hover:scale-110"
                            >

                                <FaYoutube size={18} />

                            </a>

                        </div>

                    </div>

                    {/* Menu */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">

                            Menu Cepat

                        </h3>

                        <div className="flex flex-col gap-4">

                            {menus.map((menu) => (

                                <NavLink
                                    key={menu.path}
                                    to={menu.path}
                                    className="text-green-100 hover:text-white hover:translate-x-2 transition-all duration-300"
                                >

                                    {menu.name}

                                </NavLink>

                            ))}

                        </div>

                    </div>

                    {/* Kontak */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">

                            Kontak Desa

                        </h3>

                        <div className="space-y-6">

                            <div className="flex gap-4">

                                <MapPin
                                    size={22}
                                    className="text-green-300 mt-1 flex-shrink-0"
                                />

                                <p className="text-green-100 leading-7">

                                    Desa Panca Tunggal,
                                    Kecamatan Merbau Mataram,
                                    Kabupaten Lampung Selatan

                                </p>

                            </div>

                            <div className="flex gap-4">

                                <Phone
                                    size={20}
                                    className="text-green-300 flex-shrink-0"
                                />

                                <p className="text-green-100">

                                    +62 812-3456-7890

                                </p>

                            </div>

                            <div className="flex gap-4">

                                <Mail
                                    size={20}
                                    className="text-green-300 flex-shrink-0"
                                />

                                <p className="text-green-100">

                                    desapancatunggal@gmail.com

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Jam Pelayanan */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">

                            Jam Pelayanan

                        </h3>

                        <div className="space-y-6">

                            <div className="flex gap-4">

                                <Clock
                                    size={20}
                                    className="text-green-300 mt-1"
                                />

                                <div>

                                    <p className="font-medium">

                                        Senin - Jumat

                                    </p>

                                    <p className="text-green-100">

                                        08.00 - 16.00 WIB

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <Clock
                                    size={20}
                                    className="text-green-300 mt-1"
                                />

                                <div>

                                    <p className="font-medium">

                                        Sabtu

                                    </p>

                                    <p className="text-green-100">

                                        08.00 - 12.00 WIB

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <Clock
                                    size={20}
                                    className="text-green-300 mt-1"
                                />

                                <div>

                                    <p className="font-medium">

                                        Minggu

                                    </p>

                                    <p className="text-green-100">

                                        Libur

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Copyright */}

            <div className="border-t border-green-800">

                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-green-200 text-center md:text-left">

                        © {new Date().getFullYear()} SIPANDA —
                        Sistem Informasi Profil Desa Panca Tunggal.
                        Seluruh Hak Cipta Dilindungi.

                    </p>

                    <p className="text-green-300 text-sm">

                        Developed by KKN Universitas Lampung

                    </p>

                </div>

            </div>

        </footer>

    );

}