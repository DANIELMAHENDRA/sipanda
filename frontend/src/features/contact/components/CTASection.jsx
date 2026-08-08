import {
    ArrowRight,
    Phone,
    Mail,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function CTASection() {

    return (

        <section
            className="
                py-16
                sm:py-20
                lg:py-24
                bg-gradient-to-r
                from-green-700
                via-green-800
                to-green-900
            "
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    data-aos="zoom-in"
                    className="text-center text-white"
                >

                    {/* Badge */}

                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            bg-white/10
                            backdrop-blur-md
                            border
                            border-white/20
                            px-4
                            sm:px-5
                            py-2
                            rounded-full
                            font-semibold
                            text-sm
                            sm:text-base
                        "
                    >
                        Hubungi Kami
                    </span>

                    {/* Title */}

                    <h2
                        className="
                            mt-6
                            sm:mt-8
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            font-bold
                            leading-tight
                        "
                    >
                        Kami Siap Membantu
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Kebutuhan Informasi Anda
                    </h2>

                    {/* Description */}

                    <p
                        className="
                            mt-5
                            sm:mt-8
                            max-w-3xl
                            mx-auto
                            text-sm
                            sm:text-base
                            lg:text-lg
                            text-green-100
                            leading-7
                            sm:leading-8
                        "
                    >
                        Jangan ragu untuk menghubungi Pemerintah Desa
                        Panca Tunggal apabila membutuhkan informasi,
                        pelayanan administrasi, maupun ingin
                        menyampaikan aspirasi demi kemajuan desa.
                    </p>

                    {/* Contact Shortcut */}

                    <div
                        className="
                            mt-8
                            sm:mt-12
                            flex
                            flex-col
                            sm:flex-row
                            justify-center
                            gap-3
                            sm:gap-5
                        "
                    >

                        <a
                            href="tel:+6281234567890"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                bg-white
                                text-green-700
                                px-6
                                sm:px-7
                                py-3.5
                                sm:py-4
                                rounded-2xl
                                font-semibold
                                text-sm
                                sm:text-base
                                hover:scale-105
                                transition
                                duration-300
                                shadow-lg
                            "
                        >
                            <Phone size={20} />

                            Telepon Desa
                        </a>

                        <a
                            href="mailto:desapancatunggal@gmail.com"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                bg-green-600
                                border
                                border-green-400
                                text-white
                                px-6
                                sm:px-7
                                py-3.5
                                sm:py-4
                                rounded-2xl
                                font-semibold
                                text-sm
                                sm:text-base
                                hover:bg-green-500
                                transition
                                duration-300
                            "
                        >
                            <Mail size={20} />

                            Kirim Email
                        </a>

                    </div>

                    {/* Button */}

                    <div className="mt-8 sm:mt-12">

                        <NavLink
                            to="/"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                bg-yellow-400
                                hover:bg-yellow-300
                                text-gray-900
                                font-bold
                                px-6
                                sm:px-8
                                py-3.5
                                sm:py-4
                                rounded-2xl
                                text-sm
                                sm:text-base
                                transition
                                duration-300
                                shadow-xl
                            "
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