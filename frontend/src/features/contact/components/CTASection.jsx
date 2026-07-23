import {
    ArrowRight,
    Phone,
    Mail,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function CTASection() {

    return (

        <section className="py-24 bg-gradient-to-r from-green-700 via-green-800 to-green-900">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    data-aos="zoom-in"
                    className="text-center text-white"
                >

                    {/* Badge */}

                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full font-semibold">

                        Hubungi Kami

                    </span>

                    {/* Title */}

                    <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">

                        Kami Siap Membantu
                        <br />

                        Kebutuhan Informasi Anda

                    </h2>

                    {/* Description */}

                    <p className="mt-8 max-w-3xl mx-auto text-green-100 leading-8 text-lg">

                        Jangan ragu untuk menghubungi Pemerintah Desa
                        Panca Tunggal apabila membutuhkan informasi,
                        pelayanan administrasi, maupun ingin
                        menyampaikan aspirasi demi kemajuan desa.

                    </p>

                    {/* Contact Shortcut */}

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <a
                            href="tel:+6281234567890"
                            className="inline-flex items-center gap-3 bg-white text-green-700 px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
                        >

                            <Phone size={20} />

                            Telepon Desa

                        </a>

                        <a
                            href="mailto:desapancatunggal@gmail.com"
                            className="inline-flex items-center gap-3 bg-green-600 border border-green-400 text-white px-7 py-4 rounded-2xl font-semibold hover:bg-green-500 transition duration-300"
                        >

                            <Mail size={20} />

                            Kirim Email

                        </a>

                    </div>

                    {/* Button */}

                    <div className="mt-12">

                        <NavLink
                            to="/"
                            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-2xl transition duration-300 shadow-xl"
                        >

                            Kembali ke Beranda

                            <ArrowRight size={20} />

                        </NavLink>

                    </div>

                </div>

            </div>

        </section>

    );

}