import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";

import village from "../../../assets/images/village.jpg";

import {
    FaMapLocationDot,
    FaBuilding,
    FaMountainCity,
    FaArrowRight,
} from "react-icons/fa6";

export default function AboutSection({ profile }) {

    return (

        <section
            className="relative py-24 bg-white overflow-hidden"
            data-aos="fade-up"
        >

            {/* Background Decoration */}

            <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-70" />

            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-70" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* ================= IMAGE ================= */}

                    <div
                        data-aos="fade-right"
                        className="relative"
                    >

                        <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-2 border-green-200" />

                        <img
                            src={profile?.hero_image || village}
                            alt={profile?.village_name}
                            className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
                        />

                    </div>

                    {/* ================= CONTENT ================= */}

                    <div
                        data-aos="fade-left"
                    >

                        <SectionTitle
                            subtitle="Tentang Desa"
                            title={profile?.village_name || "Desa Panca Tunggal"}
                            description={`Mengenal lebih dekat ${profile?.village_name || "Desa Panca Tunggal"} yang berada di Kecamatan ${profile?.district || "-"}, Kabupaten ${profile?.regency || "-"}, Provinsi ${profile?.province || "-"}.`}
                        />

                        <p className="mt-8 text-gray-600 leading-8 text-lg">

                            {profile?.about}

                        </p>

                        {/* Information Card */}

                        <div className="mt-10 rounded-3xl border border-gray-200 bg-slate-50 p-8">

                            <div className="space-y-6">

                                <div className="flex items-center gap-5">

                                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                        <FaMapLocationDot className="text-2xl text-green-700" />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Kecamatan

                                        </p>

                                        <h4 className="font-semibold text-lg">

                                            {profile?.district || "-"}

                                        </h4>

                                    </div>

                                </div>

                                <div className="flex items-center gap-5">

                                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                        <FaBuilding className="text-2xl text-green-700" />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Kabupaten

                                        </p>

                                        <h4 className="font-semibold text-lg">

                                            {profile?.regency || "-"}

                                        </h4>

                                    </div>

                                </div>

                                <div className="flex items-center gap-5">

                                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                        <FaMountainCity className="text-2xl text-green-700" />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Provinsi

                                        </p>

                                        <h4 className="font-semibold text-lg">

                                            {profile?.province || "-"}

                                        </h4>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Button */}

                        <div className="mt-10">

                            <Button to="/profil">

                                <span className="inline-flex items-center gap-3">

                                    Lihat Profil Desa

                                    <FaArrowRight />

                                </span>

                            </Button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}