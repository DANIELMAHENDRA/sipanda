import {
    Newspaper,
    PhoneCall,
    ArrowRight,
} from "lucide-react";

import Button from "../../../components/common/Button";

export default function CTASection() {

    return (

        <section className="relative overflow-hidden py-24 bg-gradient-to-r from-green-700 via-green-600 to-green-700">

            {/* Decoration */}

            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-sm"></div>

            <div className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-white/10 blur-sm"></div>

            <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>

            <div
                data-aos="zoom-in"
                className="relative max-w-6xl mx-auto px-6 text-center"
            >

                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur text-white font-semibold">

                    <Newspaper size={16} />

                    Portal Informasi SIPANDA

                </span>

                <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white leading-tight">

                    Tetap Terhubung Dengan
                    <br />

                    Informasi Terbaru Desa

                </h2>

                <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-green-100">

                    Dapatkan berbagai informasi mengenai pembangunan desa,
                    pelayanan masyarakat, kegiatan pemerintahan,
                    UMKM, pendidikan, hingga berbagai kegiatan
                    masyarakat Desa Panca Tunggal secara cepat
                    melalui SIPANDA.

                </p>

                <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

                    <Button
                        to="/berita"
                        variant="white"
                        className="gap-3"
                    >

                        <Newspaper size={20} />

                        Semua Berita

                        <ArrowRight size={18} />

                    </Button>

                    <Button
                        to="/kontak"
                        variant="outline"
                        className="gap-3 border-white text-white hover:bg-white hover:text-green-700"
                    >

                        <PhoneCall size={20} />

                        Hubungi Pemerintah Desa

                    </Button>

                </div>

            </div>

        </section>

    );

}