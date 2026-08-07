import {
    PhoneCall,
    Newspaper,
    ArrowRight,
    CheckCircle2,
    Landmark,
    Users,
    Clock3,
} from "lucide-react";

import Button from "../../../components/common/Button";

export default function CTASection() {

    return (

        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-green-800 via-green-700 to-green-600">

            {/* Background Decoration */}

            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>

            <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl"></div>

            <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}

                    <div
                        data-aos="fade-right"
                    >

                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md text-white font-medium">

                            <Landmark size={18} />

                            Pemerintah Desa Panca Tunggal

                        </span>

                        <h2 className="mt-8 text-4xl lg:text-5xl font-bold text-white leading-tight">

                            Bersama Membangun
                            <br />

                            Desa yang Modern
                            <br />

                            Transparan & Digital

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-green-100 max-w-xl">

                            Pemerintah Desa Panca Tunggal berkomitmen
                            memberikan pelayanan terbaik kepada seluruh
                            masyarakat melalui tata kelola pemerintahan
                            yang profesional, transparan, akuntabel,
                            serta didukung pemanfaatan teknologi
                            informasi.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button
                                to="/kontak"
                                variant="white"
                            >

                                <PhoneCall size={20} />

                                Hubungi Kami

                            </Button>

                            <Button
                                to="/berita"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-green-700"
                            >

                                <Newspaper size={20} />

                                Berita Desa

                                <ArrowRight size={18} />

                            </Button>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div
                        data-aos="fade-left"
                        className="space-y-6"
                    >

                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

                            <h3 className="text-2xl font-bold text-white mb-6">

                                Komitmen Pelayanan

                            </h3>

                            <div className="space-y-5">

                                <div className="flex gap-4">

                                    <CheckCircle2
                                        className="text-green-300 mt-1 flex-shrink-0"
                                    />

                                    <span className="text-green-100 leading-7">

                                        Pelayanan administrasi yang cepat,
                                        mudah, dan transparan.

                                    </span>

                                </div>

                                <div className="flex gap-4">

                                    <CheckCircle2
                                        className="text-green-300 mt-1 flex-shrink-0"
                                    />

                                    <span className="text-green-100 leading-7">

                                        Pemerintahan berbasis digital
                                        melalui SIPANDA.

                                    </span>

                                </div>

                                <div className="flex gap-4">

                                    <CheckCircle2
                                        className="text-green-300 mt-1 flex-shrink-0"
                                    />

                                    <span className="text-green-100 leading-7">

                                        Informasi desa yang terbuka dan
                                        mudah diakses masyarakat.

                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="grid grid-cols-3 gap-5">

                            <div className="bg-white/10 rounded-2xl backdrop-blur p-6 text-center">

                                <Users
                                    className="mx-auto mb-4 text-white"
                                    size={28}
                                />

                                <h4 className="text-2xl font-bold text-white">

                                    24/7

                                </h4>

                                <p className="text-green-100 text-sm mt-2">

                                    Informasi Online

                                </p>

                            </div>

                            <div className="bg-white/10 rounded-2xl backdrop-blur p-6 text-center">

                                <Clock3
                                    className="mx-auto mb-4 text-white"
                                    size={28}
                                />

                                <h4 className="text-2xl font-bold text-white">

                                    Cepat

                                </h4>

                                <p className="text-green-100 text-sm mt-2">

                                    Pelayanan

                                </p>

                            </div>

                            <div className="bg-white/10 rounded-2xl backdrop-blur p-6 text-center">

                                <Landmark
                                    className="mx-auto mb-4 text-white"
                                    size={28}
                                />

                                <h4 className="text-2xl font-bold text-white">

                                    100%

                                </h4>

                                <p className="text-green-100 text-sm mt-2">

                                    Transparan

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}