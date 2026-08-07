import {
    Building2,
    Users,
    GitBranchPlus,
    ShieldCheck,
} from "lucide-react";

import SectionTitle from "../../../components/common/SectionTitle";
import organizationImage from "../../../assets/images/government/organization.png";

export default function OrganizationSection() {

    const features = [
        {
            icon: GitBranchPlus,
            title: "Struktur Organisasi",
            description:
                "Setiap perangkat desa memiliki tugas, fungsi, dan kewenangan yang jelas sesuai bidangnya."
        },
        {
            icon: Users,
            title: "Kolaborasi Tim",
            description:
                "Seluruh aparatur desa bekerja secara terpadu dalam memberikan pelayanan kepada masyarakat."
        },
        {
            icon: ShieldCheck,
            title: "Pemerintahan Transparan",
            description:
                "Penyelenggaraan pemerintahan dilakukan secara profesional, akuntabel, dan transparan."
        }
    ];

    return (

        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Struktur Organisasi"
                    title="Pemerintah Desa Panca Tunggal"
                    description="Susunan organisasi Pemerintah Desa sebagai bentuk tata kelola pemerintahan yang profesional, transparan, dan akuntabel."
                />

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* =========================
                        Gambar Organisasi
                    ========================== */}

                    <div
                        data-aos="fade-right"
                        className="relative"
                    >

                        {/* Decoration */}

                        <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-green-100 blur-3xl"></div>

                        <div className="absolute -bottom-10 right-0 w-60 h-60 rounded-full bg-green-200/40 blur-3xl"></div>

                        <div className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-200">

                            <img
                                src={organizationImage}
                                alt="Struktur Organisasi Desa"
                                className="w-full object-cover transition duration-500 hover:scale-105"
                            />

                        </div>

                    </div>

                    {/* =========================
                        Content
                    ========================== */}

                    <div
                        data-aos="fade-left"
                    >

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

                            <Building2 size={18} />

                            Organisasi Pemerintah Desa

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900 leading-tight">

                            Tata Kelola Pemerintahan yang Modern
                        </h2>

                        <p className="mt-6 text-gray-600 leading-8">

                            Struktur organisasi Pemerintah Desa disusun
                            berdasarkan peraturan yang berlaku sehingga
                            setiap perangkat desa memiliki peran yang jelas
                            dalam penyelenggaraan pemerintahan,
                            pembangunan, pelayanan publik, dan
                            pemberdayaan masyarakat.

                        </p>

                        {/* Feature Cards */}

                        <div className="mt-10 space-y-6">

                            {features.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={index}
                                        className="group flex gap-5 p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    >

                                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

                                            <Icon
                                                size={30}
                                                className="text-green-700 group-hover:text-white transition"
                                            />

                                        </div>

                                        <div>

                                            <h3 className="text-xl font-bold text-gray-900">

                                                {item.title}

                                            </h3>

                                            <p className="mt-2 text-gray-600 leading-7">

                                                {item.description}

                                            </p>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                        {/* Bottom Card */}

                        <div className="mt-10 rounded-3xl bg-gradient-to-r from-green-700 to-green-600 text-white p-8 shadow-xl">

                            <h3 className="text-2xl font-bold">

                                Pemerintahan Desa yang Melayani

                            </h3>

                            <p className="mt-4 text-green-100 leading-8">

                                Pemerintah Desa berkomitmen memberikan
                                pelayanan yang cepat, transparan, dan
                                berorientasi pada kebutuhan masyarakat
                                melalui koordinasi seluruh perangkat desa
                                secara profesional.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}