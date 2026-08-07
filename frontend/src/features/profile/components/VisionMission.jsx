import SectionTitle from "../../../components/common/SectionTitle";
import {
    Eye,
    Target,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function VisionMission({ profile }) {

    const missions = profile?.mission
        ? profile.mission
              .split("\n")
              .filter((item) => item.trim() !== "")
              .map((item) => item.replace(/^\d+\.\s*/, ""))
        : [];

    return (
        <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-40"></div>

            <div className="relative max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Arah Pembangunan"
                    title="Visi & Misi Desa"
                    description="Landasan utama Pemerintah Desa dalam mewujudkan pembangunan yang berkelanjutan, transparan, dan berorientasi pada kesejahteraan masyarakat."
                />

                <div className="grid lg:grid-cols-2 gap-10 mt-16">

                    {/* ===========================
                        VISI
                    ============================ */}

                    <div
                        data-aos="fade-right"
                        className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                    >

                        {/* Header */}
                        <div className="bg-gradient-to-r from-green-700 to-green-600 p-8">

                            <div className="flex items-center gap-5">

                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">

                                    <Eye
                                        size={34}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-green-100 text-sm uppercase tracking-widest">

                                        Vision

                                    </p>

                                    <h3 className="text-3xl font-bold text-white">

                                        Visi Desa

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* Content */}

                        <div className="p-10">

                            <div className="flex items-start gap-4">

                                <Sparkles
                                    className="text-green-600 mt-1"
                                    size={24}
                                />

                                <p className="text-gray-700 leading-9 text-justify text-lg">

                                    {profile?.vision}

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* ===========================
                        MISI
                    ============================ */}

                    <div
                        data-aos="fade-left"
                        className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                    >

                        {/* Header */}

                        <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-8">

                            <div className="flex items-center gap-5">

                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">

                                    <Target
                                        size={34}
                                        className="text-white"
                                    />

                                </div>

                                <div>

                                    <p className="text-green-100 text-sm uppercase tracking-widest">

                                        Mission

                                    </p>

                                    <h3 className="text-3xl font-bold text-white">

                                        Misi Desa

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* Content */}

                        <div className="p-10">

                            <div className="space-y-6">

                                {missions.map((mission, index) => (

                                    <div
                                        key={index}
                                        className="flex gap-5 items-start p-4 rounded-2xl hover:bg-green-50 transition"
                                    >

                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">

                                            <CheckCircle2
                                                size={22}
                                                className="text-green-700"
                                            />

                                        </div>

                                        <p className="text-gray-700 leading-8">

                                            {mission}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}