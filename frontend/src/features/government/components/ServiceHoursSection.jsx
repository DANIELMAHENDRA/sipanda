import SectionTitle from "../../../components/common/SectionTitle";

import {
    Clock3,
    CalendarDays,
    PhoneCall,
    CircleCheckBig,
} from "lucide-react";

export default function ServiceHoursSection() {

    const schedules = [

        {
            day: "Senin - Jumat",
            time: "08.00 - 16.00 WIB",
            status: "Pelayanan Aktif",
        },

        {
            day: "Sabtu",
            time: "08.00 - 12.00 WIB",
            status: "Pelayanan Terbatas",
        },

        {
            day: "Minggu & Hari Libur",
            time: "Tutup",
            status: "Libur",
        },

    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Jam Pelayanan"
                    title="Waktu Pelayanan Kantor Desa"
                    description="Pemerintah Desa Panca Tunggal berkomitmen memberikan pelayanan yang cepat, ramah, dan profesional sesuai dengan jadwal pelayanan yang telah ditetapkan."
                />

                <div className="grid lg:grid-cols-2 gap-14 mt-16">

                    {/* Jadwal */}

                    <div
                        data-aos="fade-right"
                        className="space-y-6"
                    >

                        {schedules.map((item, index) => (

                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >

                                <div className="flex items-center justify-between flex-wrap gap-4">

                                    <div className="flex items-center gap-4">

                                        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                            <CalendarDays
                                                className="text-green-700"
                                                size={28}
                                            />

                                        </div>

                                        <div>

                                            <h3 className="font-bold text-xl text-gray-900">

                                                {item.day}

                                            </h3>

                                            <p className="text-gray-600 mt-1">

                                                {item.time}

                                            </p>

                                        </div>

                                    </div>

                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                            item.status === "Libur"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {item.status}
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Informasi */}

                    <div
                        data-aos="fade-left"
                        className="bg-gradient-to-br from-green-700 to-green-600 rounded-3xl p-10 text-white shadow-xl"
                    >

                        <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-8">

                            <Clock3 size={40} />

                        </div>

                        <h3 className="text-3xl font-bold">

                            Pelayanan Prima

                        </h3>

                        <p className="mt-6 leading-8 text-green-100">

                            Pemerintah Desa Panca Tunggal senantiasa memberikan
                            pelayanan administrasi kepada masyarakat secara
                            profesional, cepat, transparan, serta sesuai
                            dengan standar pelayanan publik.

                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-4">

                                <CircleCheckBig />

                                <span>Pelayanan Administrasi Desa</span>

                            </div>

                            <div className="flex items-center gap-4">

                                <CircleCheckBig />

                                <span>Pembuatan Surat Keterangan</span>

                            </div>

                            <div className="flex items-center gap-4">

                                <CircleCheckBig />

                                <span>Informasi Pemerintahan Desa</span>

                            </div>

                            <div className="flex items-center gap-4">

                                <CircleCheckBig />

                                <span>Pelayanan Kependudukan</span>

                            </div>

                        </div>

                        <div className="mt-10 flex items-center gap-4 bg-white/10 rounded-2xl p-5">

                            <PhoneCall />

                            <div>

                                <p className="text-sm text-green-100">

                                    Hubungi Kami

                                </p>

                                <h4 className="font-semibold">

                                    +62 812-3456-7890

                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}