import {
    Clock3,
    CheckCircle2,
    CalendarDays,
} from "lucide-react";

export default function OfficeHours() {

    const schedules = [
        {
            day: "Senin",
            time: "08.00 - 15.00 WIB",
        },
        {
            day: "Selasa",
            time: "08.00 - 15.00 WIB",
        },
        {
            day: "Rabu",
            time: "08.00 - 15.00 WIB",
        },
        {
            day: "Kamis",
            time: "08.00 - 15.00 WIB",
        },
        {
            day: "Jumat",
            time: "08.00 - 15.00 WIB",
        },
        {
            day: "Sabtu",
            time: "08.00 - 12.00 WIB",
        },
        {
            day: "Minggu",
            time: "Libur",
        },
    ];

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

                        <CalendarDays size={18} />

                        Jam Operasional

                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-6">

                        Jadwal Pelayanan Kantor Desa

                    </h2>

                    <p className="mt-5 text-gray-600 leading-8 max-w-3xl mx-auto">

                        Pemerintah Desa Panca Tunggal berkomitmen memberikan
                        pelayanan administrasi secara profesional,
                        cepat, dan transparan sesuai dengan jadwal
                        operasional berikut.

                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}

                    <div
                        data-aos="fade-right"
                        className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    >

                        <div className="bg-green-700 text-white px-8 py-6 flex items-center gap-3">

                            <Clock3 size={28} />

                            <h3 className="text-2xl font-bold">

                                Jadwal Pelayanan

                            </h3>

                        </div>

                        <div className="divide-y">

                            {schedules.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex justify-between items-center px-8 py-5 hover:bg-green-50 transition"
                                >

                                    <span className="font-semibold text-gray-800">

                                        {item.day}

                                    </span>

                                    <span
                                        className={`font-medium ${
                                            item.time === "Libur"
                                                ? "text-red-600"
                                                : "text-green-700"
                                        }`}
                                    >

                                        {item.time}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Right */}

                    <div
                        data-aos="fade-left"
                        className="space-y-8"
                    >

                        <div>

                            <h3 className="text-3xl font-bold text-gray-900">

                                Pelayanan yang Ramah dan Profesional

                            </h3>

                            <p className="mt-6 text-gray-600 leading-8">

                                Pemerintah Desa Panca Tunggal senantiasa
                                berusaha memberikan pelayanan terbaik
                                kepada masyarakat melalui sistem pelayanan
                                yang cepat, transparan, dan akuntabel.

                            </p>

                        </div>

                        <div className="space-y-5">

                            <div className="flex items-start gap-4">

                                <CheckCircle2
                                    className="text-green-600 mt-1"
                                    size={24}
                                />

                                <div>

                                    <h4 className="font-semibold text-lg">

                                        Pelayanan Administrasi

                                    </h4>

                                    <p className="text-gray-600">

                                        Surat Domisili, Surat Pengantar,
                                        KK, KTP, dan layanan administrasi lainnya.

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <CheckCircle2
                                    className="text-green-600 mt-1"
                                    size={24}
                                />

                                <div>

                                    <h4 className="font-semibold text-lg">

                                        Konsultasi Masyarakat

                                    </h4>

                                    <p className="text-gray-600">

                                        Menampung aspirasi, pengaduan,
                                        dan konsultasi terkait pelayanan desa.

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <CheckCircle2
                                    className="text-green-600 mt-1"
                                    size={24}
                                />

                                <div>

                                    <h4 className="font-semibold text-lg">

                                        Pelayanan Cepat

                                    </h4>

                                    <p className="text-gray-600">

                                        Seluruh pelayanan dilakukan sesuai
                                        standar operasional yang berlaku.

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