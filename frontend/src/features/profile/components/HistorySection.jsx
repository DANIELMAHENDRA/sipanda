import SectionTitle from "../../../components/common/SectionTitle";
import historyImage from "../../../assets/images/profile/history.jpg";
import { Landmark } from "lucide-react";

export default function HistorySection({ profile }) {

    const timeline = [
        {
            year: "1982",
            title: "Pembukaan Wilayah",
            description:
                "Wilayah mulai dibuka oleh masyarakat sebagai kawasan permukiman dan pertanian."
        },
        {
            year: "1990",
            title: "Menjadi Desa Definitif",
            description:
                "Desa Panca Tunggal resmi menjadi desa definitif dalam wilayah Kecamatan Merbau Mataram."
        },
        {
            year: "2026",
            title: "Transformasi Digital",
            description:
                "Pemerintah desa mulai mengembangkan SIPANDA sebagai sistem informasi desa berbasis digital."
        }
    ];

    return (

        <section className="py-28 bg-gradient-to-b from-white to-green-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Profil Desa"
                    title="Sejarah Desa"
                    description="Perjalanan panjang Desa Panca Tunggal dari awal berdiri hingga menjadi desa yang terus berkembang."
                />

                <div className="grid lg:grid-cols-2 gap-20 items-start mt-16">

                    {/* ===========================
                        IMAGE
                    =========================== */}

                    <div
                        data-aos="fade-right"
                        className="relative"
                    >

                        <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

                        <img
                            src={profile?.hero_image || historyImage}
                            alt="Sejarah Desa"
                            className="rounded-3xl shadow-2xl object-cover h-[620px] w-full"
                        />

                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-lg flex gap-4 items-center">

                            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                <Landmark className="text-green-700" />

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Sejarah Desa

                                </p>

                                <h4 className="font-bold text-lg">

                                    {profile?.village_name}

                                </h4>

                            </div>

                        </div>

                    </div>

                    {/* ===========================
                        CONTENT
                    =========================== */}

                    <div>

                        <div
                            data-aos="fade-up"
                            className="bg-white rounded-3xl shadow-xl p-8 mb-10"
                        >

                            <h3 className="text-3xl font-bold text-gray-900 mb-6">

                                Awal Berdirinya Desa

                            </h3>

                            <p className="text-gray-600 leading-9 whitespace-pre-line">

                                {profile?.history}

                            </p>

                        </div>

                        {/* ===========================
                            TIMELINE
                        =========================== */}

                        <div className="relative pl-8">

                            <div className="absolute left-6 top-0 bottom-0 w-1 bg-green-200 rounded-full"></div>

                            {timeline.map((item, index) => (

                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="relative mb-10"
                                >

                                    <div className="absolute -left-[18px] top-4 w-9 h-9 rounded-full bg-green-700 border-4 border-white shadow-lg"></div>

                                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 ml-8">

                                        <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-2 rounded-full mb-4">

                                            {item.year}

                                        </span>

                                        <h4 className="text-xl font-bold text-gray-900">

                                            {item.title}

                                        </h4>

                                        <p className="text-gray-600 leading-8 mt-3">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}