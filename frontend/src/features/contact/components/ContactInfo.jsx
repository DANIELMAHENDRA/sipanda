import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Clock,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa";

import useContact from "../../../hooks/useContact";

export default function ContactInfo() {

    const { contact, loading } = useContact();

    if (loading) {
        return (
            <section className="py-24 text-center">
                <p>Memuat informasi kontak...</p>
            </section>
        );
    }

    if (!contact) {
        return (
            <section className="py-24 text-center">
                <p>Data kontak belum tersedia.</p>
            </section>
        );
    }

    const contacts = [
        {
            icon: <MapPin size={32} />,
            title: "Alamat Kantor",
            value: contact.address || "-",
        },
        {
            icon: <Phone size={32} />,
            title: "Nomor Telepon",
            value: contact.phone || "-",
        },
        {
            icon: <Mail size={32} />,
            title: "Email",
            value: contact.email || "-",
        },
        {
            icon: <Globe size={32} />,
            title: "Website",
            value: contact.website || "-",
        },
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                        Informasi Kontak
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-6">
                        {contact.office_name || "Pemerintah Desa"}
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
                        Hubungi kami melalui berbagai media komunikasi
                        yang tersedia. Pemerintah Desa siap memberikan
                        pelayanan terbaik kepada seluruh masyarakat.
                    </p>

                </div>

                {/* Contact Card */}

                <div className="grid lg:grid-cols-2 gap-8">

                    {contacts.map((item, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="flex items-start gap-6 bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center text-white">
                                {item.icon}
                            </div>

                            <div>

                                <h3 className="text-2xl font-bold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-gray-600 break-words leading-8">
                                    {item.value}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom */}

                <div
                    data-aos="fade-up"
                    className="grid lg:grid-cols-2 gap-10 mt-20"
                >

                    {/* Jam Pelayanan */}

                    <div className="bg-green-700 rounded-3xl p-10 text-white">

                        <div className="flex items-center gap-4 mb-8">

                            <Clock size={34} />

                            <h3 className="text-3xl font-bold">
                                Jam Pelayanan
                            </h3>

                        </div>

                        <div className="space-y-4">

                            <div className="flex justify-between border-b border-green-500 pb-3">

                                <span>Senin - Jumat</span>

                                <span>
                                    {contact.monday_friday || "-"}
                                </span>

                            </div>

                            <div className="flex justify-between border-b border-green-500 pb-3">

                                <span>Sabtu</span>

                                <span>
                                    {contact.saturday || "-"}
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Minggu</span>

                                <span>
                                    {contact.sunday || "-"}
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Sosial Media */}

                    <div className="bg-gray-100 rounded-3xl p-10">

                        <h3 className="text-3xl font-bold text-gray-900">
                            Media Sosial
                        </h3>

                        <p className="mt-4 text-gray-600 leading-8">
                            Ikuti media sosial resmi Desa untuk
                            mendapatkan informasi terbaru mengenai
                            kegiatan desa, pelayanan publik,
                            pembangunan serta berbagai pengumuman.
                        </p>

                        <div className="flex gap-4 mt-8 flex-wrap">

                            {contact.facebook && (
                                <a
                                    href={contact.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
                                >
                                    <FaFacebookF size={22} />
                                </a>
                            )}

                            {contact.instagram && (
                                <a
                                    href={contact.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-pink-600 text-white flex items-center justify-center hover:scale-110 transition"
                                >
                                    <FaInstagram size={22} />
                                </a>
                            )}

                            {contact.youtube && (
                                <a
                                    href={contact.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"
                                >
                                    <FaYoutube size={22} />
                                </a>
                            )}

                            {contact.tiktok && (
                                <a
                                    href={contact.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:scale-110 transition"
                                >
                                    <FaTiktok size={22} />
                                </a>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}