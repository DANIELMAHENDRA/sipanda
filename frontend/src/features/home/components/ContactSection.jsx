import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";

import {
    MapPinned,
    Users,
    Landmark,
    Clock,
} from "lucide-react";

export default function ContactSection() {
    return (
        <section
            className="py-24 bg-gray-50"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* ==========================================================
                    TITLE
                ========================================================== */}

                <SectionTitle
                    subtitle="Informasi Desa"
                    title="Panca Tunggal"
                    description="Informasi umum mengenai Desa Panca Tunggal, Kecamatan Merbau Mataram, Kabupaten Lampung Selatan."
                />

                <div className="grid lg:grid-cols-2 gap-12 mt-16">

                    {/* ======================================================
                        INFORMASI DESA
                    ====================================================== */}

                    <div data-aos="fade-right">

                        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

                            {/* ==================================================
                                ALAMAT
                            ================================================== */}

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl shrink-0">

                                    <MapPinned
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">
                                        Alamat Desa
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-7">
                                        Desa Panca Tunggal,
                                        Kecamatan Merbau Mataram,
                                        Kabupaten Lampung Selatan,
                                        Provinsi Lampung.
                                    </p>

                                </div>

                            </div>

                            {/* ==================================================
                                WILAYAH ADMINISTRATIF
                            ================================================== */}

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl shrink-0">

                                    <Landmark
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">
                                        Wilayah Administratif
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-7">
                                        Kecamatan Merbau Mataram,
                                        Kabupaten Lampung Selatan,
                                        Provinsi Lampung.
                                    </p>

                                </div>

                            </div>

                            {/* ==================================================
                                JUMLAH PENDUDUK
                            ================================================== */}

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl shrink-0">

                                    <Users
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">
                                        Jumlah Penduduk
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-7">
                                        Desa Panca Tunggal memiliki
                                        <span className="font-semibold text-gray-800">
                                            {" "}5.051 jiwa
                                        </span>
                                        {" "}penduduk berdasarkan Profil Desa
                                        Tahun 2025.
                                    </p>

                                </div>

                            </div>

                            {/* ==================================================
                                JAM PELAYANAN
                            ================================================== */}

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl shrink-0">

                                    <Clock
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">
                                        Jam Pelayanan
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-7">
                                        Senin - Jumat
                                        <br />
                                        08.00 - 15.00 WIB
                                    </p>

                                </div>

                            </div>

                            {/* ==================================================
                                BUTTON
                            ================================================== */}

                            <div className="pt-4">

                                <Button to="/kontak">
                                    Lihat Informasi Desa
                                </Button>

                            </div>

                        </div>

                    </div>

                    {/* ======================================================
                        MAPS
                    ====================================================== */}

                    <div data-aos="fade-left">

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">

                            <iframe
                                title="Lokasi Desa Panca Tunggal"
                                src="https://www.google.com/maps?q=Merbau+Mataram+Lampung&output=embed"
                                className="w-full h-[500px] border-0"
                                loading="lazy"
                                allowFullScreen
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}