import {
    UserRound,
    Quote,
    BadgeCheck,
} from "lucide-react";

import SectionTitle from "../../../components/common/SectionTitle";
import villageHead from "../../../assets/images/government/village-head.jpg";

export default function VillageHeadSection() {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Kepala Desa"
                    title="Sambutan Kepala Desa"
                    description="Komitmen Pemerintah Desa Panca Tunggal dalam memberikan pelayanan terbaik bagi seluruh masyarakat."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Foto Kepala Desa */}

                    <div
                        data-aos="fade-right"
                        className="relative"
                    >

                        <div className="absolute -top-5 -left-5 w-full h-full rounded-3xl border-4 border-green-700"></div>

                        <img
                            src={villageHead}
                            alt="Kepala Desa Panca Tunggal"
                            className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px]"
                        />

                    </div>

                    {/* Sambutan */}

                    <div
                        data-aos="fade-left"
                    >

                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">

                            <BadgeCheck size={18} />

                            Kepala Desa Panca Tunggal

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900">

                            Bapak Nama Kepala Desa

                        </h2>

                        <p className="mt-2 text-green-700 font-semibold">

                            Kepala Desa Periode 2021 – 2029

                        </p>

                        <div className="mt-8 relative">

                            <Quote
                                size={60}
                                className="absolute -top-4 -left-2 text-green-100"
                            />

                            <p className="relative text-gray-600 leading-9 text-lg">

                                Selamat datang di Website Resmi Desa Panca
                                Tunggal. Website ini kami hadirkan sebagai
                                bentuk keterbukaan informasi publik sekaligus
                                media komunikasi antara Pemerintah Desa dengan
                                seluruh masyarakat.

                                <br /><br />

                                Kami berkomitmen memberikan pelayanan yang
                                cepat, transparan, akuntabel, serta terus
                                mendorong pembangunan desa yang maju,
                                mandiri, dan berbasis teknologi informasi.

                                <br /><br />

                                Besar harapan kami agar website SIPANDA
                                menjadi sarana informasi yang bermanfaat
                                sekaligus meningkatkan partisipasi masyarakat
                                dalam pembangunan Desa Panca Tunggal.

                            </p>

                        </div>

                        {/* Profil Singkat */}

                        <div className="mt-10 grid sm:grid-cols-2 gap-5">

                            <div className="bg-gray-50 rounded-2xl p-5">

                                <div className="flex items-center gap-3">

                                    <UserRound className="text-green-700" />

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Nama

                                        </p>

                                        <h4 className="font-semibold">

                                            Bapak Nama Kepala Desa

                                        </h4>

                                    </div>

                                </div>

                            </div>

                            <div className="bg-gray-50 rounded-2xl p-5">

                                <div className="flex items-center gap-3">

                                    <BadgeCheck className="text-green-700" />

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Masa Jabatan

                                        </p>

                                        <h4 className="font-semibold">

                                            2021 – 2029

                                        </h4>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}