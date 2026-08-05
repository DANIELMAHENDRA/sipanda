import {
    Building2,
    User,
    MapPinned,
} from "lucide-react";

import SectionTitle from "../../../components/common/SectionTitle";

export default function AboutVillage({ profile }) {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Tentang Desa"
                    title={profile?.village_name || "Profil Desa"}
                />

                <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">

                    {/* Logo Desa */}

                    <div
                        data-aos="fade-right"
                        className="flex justify-center"
                    >

                        {profile?.logo ? (

                            <img
                                src={profile.logo}
                                alt={profile.village_name}
                                className="
                                    w-80
                                    h-80
                                    object-contain
                                    rounded-3xl
                                    shadow-xl
                                    bg-white
                                    p-8
                                    border
                                "
                            />

                        ) : (

                            <div
                                className="
                                    w-80
                                    h-80
                                    rounded-3xl
                                    bg-green-50
                                    flex
                                    items-center
                                    justify-center
                                    border
                                "
                            >

                                <Building2
                                    size={100}
                                    className="text-green-700"
                                />

                            </div>

                        )}

                    </div>

                    {/* Konten */}

                    <div
                        data-aos="fade-left"
                    >

                        <div
                            className="
                                prose
                                prose-lg
                                max-w-none
                                text-gray-700
                                leading-9
                            "
                            dangerouslySetInnerHTML={{
                                __html:
                                    profile?.about ||
                                    "<p>Belum ada informasi mengenai desa.</p>",
                            }}
                        />

                        <div className="grid md:grid-cols-2 gap-6 mt-12">

                            {/* Kepala Desa */}

                            <div
                                className="
                                    bg-green-50
                                    rounded-2xl
                                    p-6
                                "
                            >

                                <div className="flex items-center gap-3 mb-4">

                                    <User
                                        className="text-green-700"
                                    />

                                    <h3
                                        className="
                                            font-semibold
                                            text-green-700
                                        "
                                    >

                                        Kepala Desa

                                    </h3>

                                </div>

                                <p className="text-gray-700">

                                    {profile?.village_head || "-"}

                                </p>

                            </div>

                            {/* Wilayah */}

                            <div
                                className="
                                    bg-green-50
                                    rounded-2xl
                                    p-6
                                "
                            >

                                <div className="flex items-center gap-3 mb-4">

                                    <MapPinned
                                        className="text-green-700"
                                    />

                                    <h3
                                        className="
                                            font-semibold
                                            text-green-700
                                        "
                                    >

                                        Wilayah Administratif

                                    </h3>

                                </div>

                                <p className="text-gray-700 leading-8">

                                    Kecamatan {profile?.district || "-"}

                                    <br />

                                    Kabupaten {profile?.regency || "-"}

                                    <br />

                                    Provinsi {profile?.province || "-"}

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}