import {
    Building2,
    Users,
    GitBranchPlus,
} from "lucide-react";

import SectionTitle from "../../../components/common/SectionTitle";
import organizationImage from "../../../assets/images/government/organization.png";

export default function OrganizationSection() {

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Struktur Organisasi"
                    title="Pemerintah Desa Panca Tunggal"
                    description="Susunan organisasi Pemerintah Desa Panca Tunggal sebagai bentuk tata kelola pemerintahan yang transparan, profesional, dan akuntabel."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Gambar Struktur */}

                    <div
                        data-aos="fade-right"
                        className="relative"
                    >

                        <img
                            src={organizationImage}
                            alt="Struktur Organisasi Desa"
                            className="rounded-3xl shadow-2xl w-full border border-gray-200"
                        />

                    </div>

                    {/* Penjelasan */}

                    <div
                        data-aos="fade-left"
                    >

                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">

                            <Building2 size={18} />

                            Organisasi Pemerintah Desa

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900">

                            Struktur Pemerintahan yang Profesional

                        </h2>

                        <p className="mt-6 text-gray-600 leading-8">

                            Pemerintah Desa Panca Tunggal memiliki struktur
                            organisasi yang tersusun secara sistematis sesuai
                            dengan ketentuan peraturan perundang-undangan.
                            Setiap perangkat desa memiliki tugas dan tanggung
                            jawab masing-masing dalam memberikan pelayanan
                            kepada masyarakat.

                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                    <GitBranchPlus
                                        className="text-green-700"
                                        size={26}
                                    />

                                </div>

                                <div>

                                    <h4 className="font-bold text-xl">

                                        Struktur Jelas

                                    </h4>

                                    <p className="text-gray-600 mt-2 leading-7">

                                        Setiap perangkat desa memiliki posisi,
                                        wewenang, serta tanggung jawab yang
                                        jelas sesuai bidangnya.

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                    <Users
                                        className="text-green-700"
                                        size={26}
                                    />

                                </div>

                                <div>

                                    <h4 className="font-bold text-xl">

                                        Pelayanan Maksimal

                                    </h4>

                                    <p className="text-gray-600 mt-2 leading-7">

                                        Seluruh perangkat desa bekerja sama
                                        memberikan pelayanan yang cepat,
                                        transparan, dan ramah kepada masyarakat.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}