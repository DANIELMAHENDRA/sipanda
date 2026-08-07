import SectionTitle from "../../../components/common/SectionTitle";

import {
    Clock3,
    CalendarDays,
    PhoneCall,
    CircleCheckBig,
    Sparkles,
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

        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Jam Pelayanan"
                    title="Waktu Pelayanan Kantor Desa"
                    description="Kami berkomitmen memberikan pelayanan yang profesional, cepat, transparan, serta berorientasi pada kepuasan masyarakat."
                />

                <div className="grid lg:grid-cols-2 gap-12 mt-16">

                    {/* ==================== Jadwal ==================== */}

                    <div
                        data-aos="fade-right"
                        className="space-y-6"
                    >

                        {schedules.map((item, index) => (

                            <div
                                key={index}
                                className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6"
                            >

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                                    <div className="flex items-center gap-5">

                                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition">

                                            <CalendarDays
                                                size={30}
                                                className="text-green-700 group-hover:text-white transition"
                                            />

                                        </div>

                                        <div>

                                            <h3 className="text-xl font-bold text-gray-900">

                                                {item.day}

                                            </h3>

                                            <p className="text-gray-500 mt-2">

                                                {item.time}

                                            </p>

                                        </div>

                                    </div>

                                    <span
                                        className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                                            item.status === "Libur"
                                                ? "bg-red-100 text-red-600"
                                                : item.status === "Pelayanan Terbatas"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {item.status}
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* ==================== Informasi ==================== */}

                    <div
                        data-aos="fade-left"
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-10 text-white shadow-2xl"
                    >

                        {/* Decoration */}

                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10"></div>

                        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5"></div>

                        <div className="relative">

                            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">

                                <Clock3 size={42} />

                            </div>

                            <h3 className="text-3xl font-bold leading-tight">

                                Pelayanan Cepat &
                                <br />
                                Profesional

                            </h3>

                            <p className="mt-6 text-green-100 leading-8">

                                Pemerintah Desa selalu berupaya memberikan
                                pelayanan terbaik melalui sistem administrasi
                                yang cepat, transparan, serta berorientasi pada
                                kebutuhan masyarakat.

                            </p>

                            <div className="mt-10 space-y-5">

                                <div className="flex items-center gap-4">

                                    <CircleCheckBig className="text-green-200" />

                                    <span>Administrasi Desa</span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <CircleCheckBig className="text-green-200" />

                                    <span>Pembuatan Surat Keterangan</span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <CircleCheckBig className="text-green-200" />

                                    <span>Pelayanan Kependudukan</span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <CircleCheckBig className="text-green-200" />

                                    <span>Informasi Pemerintahan Desa</span>

                                </div>

                            </div>

                            <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/20">

                                <div className="flex items-center gap-4">

                                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">

                                        <PhoneCall size={26} />

                                    </div>

                                    <div>

                                        <p className="text-green-100 text-sm">

                                            Kontak Pelayanan

                                        </p>

                                        <h4 className="font-bold text-xl">

                                            +62 812-3456-7890

                                        </h4>

                                    </div>

                                </div>

                            </div>

                            <div className="mt-8 flex items-center gap-3 text-green-100">

                                <Sparkles size={18} />

                                <span className="text-sm">

                                    Pelayanan dilakukan sesuai Standar Operasional Prosedur (SOP).

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}