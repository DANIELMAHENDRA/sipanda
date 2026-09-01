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
            <section className="py-16 sm:py-20 lg:py-24 text-center">
                <p>Memuat informasi kontak...</p>
            </section>
        );
    }
    if (!contact) {
        return null;
    }

    const contacts = [
        {
            icon: <MapPin size={28} />,
            title: "Alamat Kantor",
            value: contact.address || "-",
        },
        {
            icon: <Phone size={28} />,
            title: "Nomor Telepon",
            value: contact.phone || "-",
        },
        {
            icon: <Mail size={28} />,
            title: "Email",
            value: contact.email || "-",
        },
        {
            icon: <Globe size={28} />,
            title: "Website",
            value: contact.website || "-",
        },
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >

                    <span
                        className="
                            inline-block
                            bg-green-100
                            text-green-700
                            px-4
                            sm:px-5
                            py-2
                            rounded-full
                            font-semibold
                            text-sm
                            sm:text-base
                        "
                    >
                        Informasi Kontak
                    </span>

                    <h2
                        className="
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            font-bold
                            text-gray-900
                            mt-5
                            sm:mt-6
                        "
                    >
                        {contact.office_name || "Pemerintah Desa"}
                    </h2>

                    <p
                        className="
                            mt-4
                            sm:mt-5
                            text-sm
                            sm:text-base
                            text-gray-600
                            max-w-3xl
                            mx-auto
                            leading-7
                            sm:leading-8
                        "
                    >
                        Hubungi kami melalui berbagai media komunikasi
                        yang tersedia. Pemerintah Desa siap memberikan
                        pelayanan terbaik kepada seluruh masyarakat.
                    </p>

                </div>

                {/* Contact Cards */}

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">

                    {contacts.map((item, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="
                                flex
                                items-start
                                gap-4
                                sm:gap-5
                                lg:gap-6
                                bg-gray-50
                                rounded-2xl
                                sm:rounded-3xl
                                p-5
                                sm:p-6
                                lg:p-8
                                shadow-sm
                                hover:shadow-xl
                                transition-all
                                duration-300
                            "
                        >

                            <div
                                className="
                                    shrink-0
                                    w-12
                                    h-12
                                    sm:w-14
                                    sm:h-14
                                    lg:w-16
                                    lg:h-16
                                    rounded-xl
                                    sm:rounded-2xl
                                    bg-green-600
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                "
                            >
                                {item.icon}
                            </div>

                            <div className="min-w-0">

                                <h3
                                    className="
                                        text-lg
                                        sm:text-xl
                                        lg:text-2xl
                                        font-bold
                                        text-gray-900
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        sm:mt-3
                                        text-sm
                                        sm:text-base
                                        text-gray-600
                                        break-words
                                        leading-6
                                        sm:leading-8
                                    "
                                >
                                    {item.value}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom */}

                <div
                    data-aos="fade-up"
                    className="
                        grid
                        lg:grid-cols-2
                        gap-6
                        sm:gap-8
                        lg:gap-10
                        mt-12
                        sm:mt-16
                        lg:mt-20
                    "
                >

                    {/* Jam Pelayanan */}

                    <div
                        className="
                            bg-green-700
                            rounded-2xl
                            sm:rounded-3xl
                            p-6
                            sm:p-8
                            lg:p-10
                            text-white
                        "
                    >

                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

                            <Clock
                                size={28}
                                className="shrink-0"
                            />

                            <h3
                                className="
                                    text-2xl
                                    sm:text-3xl
                                    font-bold
                                "
                            >
                                Jam Pelayanan
                            </h3>

                        </div>

                        <div className="space-y-4">

                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:justify-between
                                    gap-1
                                    border-b
                                    border-green-500
                                    pb-3
                                "
                            >
                                <span>Senin - Jumat</span>

                                <span className="font-medium">
                                    {contact.monday_friday || "-"}
                                </span>
                            </div>

                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:justify-between
                                    gap-1
                                    border-b
                                    border-green-500
                                    pb-3
                                "
                            >
                                <span>Sabtu</span>

                                <span className="font-medium">
                                    {contact.saturday || "-"}
                                </span>
                            </div>

                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row
                                    sm:justify-between
                                    gap-1
                                "
                            >
                                <span>Minggu</span>

                                <span className="font-medium">
                                    {contact.sunday || "-"}
                                </span>
                            </div>

                        </div>

                    </div>

                    {/* Sosial Media */}

                    <div
                        className="
                            bg-gray-100
                            rounded-2xl
                            sm:rounded-3xl
                            p-6
                            sm:p-8
                            lg:p-10
                        "
                    >

                        <h3
                            className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                                text-gray-900
                            "
                        >
                            Media Sosial
                        </h3>

                        <p
                            className="
                                mt-3
                                sm:mt-4
                                text-sm
                                sm:text-base
                                text-gray-600
                                leading-7
                                sm:leading-8
                            "
                        >
                            Ikuti media sosial resmi Desa untuk
                            mendapatkan informasi terbaru mengenai
                            kegiatan desa, pelayanan publik,
                            pembangunan serta berbagai pengumuman.
                        </p>

                        <div
                            className="
                                flex
                                gap-3
                                sm:gap-4
                                mt-6
                                sm:mt-8
                                flex-wrap
                            "
                        >

                            {contact.facebook && (
                                <a
                                    href={contact.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-xl
                                        sm:rounded-2xl
                                        bg-blue-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        hover:scale-110
                                        transition
                                    "
                                >
                                    <FaFacebookF size={20} />
                                </a>
                            )}

                            {contact.instagram && (
                                <a
                                    href={contact.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-xl
                                        sm:rounded-2xl
                                        bg-pink-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        hover:scale-110
                                        transition
                                    "
                                >
                                    <FaInstagram size={20} />
                                </a>
                            )}

                            {contact.youtube && (
                                <a
                                    href={contact.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-xl
                                        sm:rounded-2xl
                                        bg-red-600
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        hover:scale-110
                                        transition
                                    "
                                >
                                    <FaYoutube size={20} />
                                </a>
                            )}

                            {contact.tiktok && (
                                <a
                                    href={contact.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="TikTok"
                                    className="
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-xl
                                        sm:rounded-2xl
                                        bg-black
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        hover:scale-110
                                        transition
                                    "
                                >
                                    <FaTiktok size={20} />
                                </a>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}