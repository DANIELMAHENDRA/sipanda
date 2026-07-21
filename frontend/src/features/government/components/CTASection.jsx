import {
    PhoneCall,
    Newspaper,
    ArrowRight,
} from "lucide-react";

import Button from "../../../components/common/Button";

export default function CTASection() {

    return (

        <section className="relative overflow-hidden py-24 bg-gradient-to-r from-green-700 via-green-600 to-green-700">

            {/* Background Decoration */}

            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10"></div>

            <div className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full bg-white/10"></div>

            <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-6">

                <div
                    data-aos="zoom-in"
                    className="text-center"
                >

                    {/* Badge */}

                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium">

                        Pemerintah Desa Panca Tunggal

                    </span>

                    {/* Title */}

                    <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white leading-tight">

                        Bersama Membangun
                        <br />

                        Desa yang Lebih Maju,
                        Transparan, dan Digital

                    </h2>

                    {/* Description */}

                    <p className="mt-8 max-w-3xl mx-auto text-lg text-green-100 leading-8">

                        Pemerintah Desa Panca Tunggal berkomitmen memberikan
                        pelayanan terbaik kepada seluruh masyarakat melalui
                        tata kelola pemerintahan yang profesional,
                        transparan, akuntabel, serta didukung oleh
                        pemanfaatan teknologi informasi.

                    </p>

                    {/* Button */}

                    <div className="mt-14 flex flex-wrap justify-center gap-5">

                        <Button
                            to="/kontak"
                            variant="white"
                            className="gap-2"
                        >

                            <PhoneCall size={20} />

                            Hubungi Kami

                        </Button>

                        <Button
                            to="/berita"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-green-700 gap-2"
                        >

                            <Newspaper size={20} />

                            Berita Desa

                            <ArrowRight size={18} />

                        </Button>

                    </div>

                </div>

            </div>

        </section>

    );

}