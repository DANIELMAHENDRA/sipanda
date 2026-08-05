import SectionTitle from "../../../components/common/SectionTitle";
import geographyImage from "../../../assets/images/profile/geography.jpg";

import {
    MapPinned,
    Landmark,
    Trees,
    Navigation,
    Globe,
    Building2,
} from "lucide-react";

export default function GeographySection({ profile }) {

    const informations = [
        {
            icon: Building2,
            title: "Kecamatan",
            value: profile?.district ?? "-",
        },
        {
            icon: Landmark,
            title: "Kabupaten",
            value: profile?.regency ?? "-",
        },
        {
            icon: Globe,
            title: "Provinsi",
            value: profile?.province ?? "-",
        },
        {
            icon: Trees,
            title: "Luas Wilayah",
            value: `${profile?.area ?? 0} Ha`,
        },
        {
            icon: Navigation,
            title: "Latitude",
            value: profile?.latitude ?? "-",
        },
        {
            icon: MapPinned,
            title: "Longitude",
            value: profile?.longitude ?? "-",
        },
    ];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Geografis"
                    title="Kondisi Wilayah Desa"
                    description="Informasi geografis Desa berdasarkan data administrasi desa."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <img
                            src={profile?.hero_image || geographyImage}
                            alt={profile?.village_name}
                            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                        />

                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">

                        {informations.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >

                                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">

                                        <Icon
                                            size={28}
                                            className="text-green-700"
                                        />

                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        {item.value}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );

}