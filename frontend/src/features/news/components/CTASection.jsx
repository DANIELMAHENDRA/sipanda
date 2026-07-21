import { Newspaper, PhoneCall } from "lucide-react";
import Button from "../../../components/common/Button";

export default function CTASection() {

    return (

        <section className="relative overflow-hidden py-24 bg-gradient-to-r from-green-700 to-green-600">

            {/* Background Decoration */}

            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full"></div>

            <div className="absolute -bottom-28 -right-20 w-96 h-96 bg-white/10 rounded-full"></div>

            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            <div
                className="relative max-w-5xl mx-auto px-6 text-center"
                data-aos="zoom-in"
            >

                {/* Badge */}

                <span className="inline-block px-5 py-2 rounded-full bg-white/20 text-white font-medium mb-6">

                    Portal Informasi Desa Panca Tunggal

                </span>

                {/* Title */}

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">

                    Jangan Lewatkan
                    <br />

                    Informasi Terbaru Desa

                </h2>

                {/* Description */}

                <p className="mt-8 text-lg text-green-100 leading-8 max-w-3xl mx-auto">

                    Ikuti berbagai informasi mengenai kegiatan pemerintahan,
                    pembangunan desa, UMKM, pelayanan publik, dan berbagai
                    aktivitas masyarakat Desa Panca Tunggal melalui Website
                    SIPANDA.

                </p>

                {/* Button */}

                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

                    <Button
                        to="/berita"
                        variant="white"
                        className="gap-3"
                    >

                        <Newspaper size={22} />

                        Lihat Semua Berita

                    </Button>

                    <Button
                        to="/kontak"
                        variant="outline"
                        className="gap-3 border-white text-white hover:bg-white hover:text-green-700"
                    >

                        <PhoneCall size={22} />

                        Hubungi Kami

                    </Button>

                </div>

            </div>

        </section>

    );

}