import { ArrowRight, Newspaper } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CTASection() {

    return (

        <section className="py-24 bg-gradient-to-r from-green-700 via-green-800 to-green-900">

            <div className="max-w-6xl mx-auto px-6">

                <div
                    data-aos="zoom-in"
                    className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16"
                >

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* Left */}

                        <div>

                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">

                                <Newspaper size={18} />

                                Tetap Ikuti Informasi Terbaru

                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 leading-tight">

                                Jangan Lewatkan
                                <span className="text-green-700">
                                    {" "}Berita Terbaru
                                </span>
                                <br />

                                dari Desa Panca Tunggal

                            </h2>

                            <p className="mt-6 text-lg text-gray-600 leading-8">

                                Website SIPANDA selalu menghadirkan informasi
                                terbaru mengenai kegiatan pemerintahan,
                                pembangunan desa, pelayanan masyarakat,
                                serta berbagai potensi Desa Panca Tunggal.

                            </p>

                        </div>

                        {/* Right */}

                        <div className="flex flex-col gap-5 lg:items-end">

                            <NavLink
                                to="/berita"
                                className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
                            >

                                Lihat Semua Berita

                                <ArrowRight size={20} />

                            </NavLink>

                            <NavLink
                                to="/kontak"
                                className="inline-flex items-center justify-center gap-3 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
                            >

                                Hubungi Kami

                            </NavLink>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}