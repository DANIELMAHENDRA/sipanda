import SectionTitle from "../../../components/common/SectionTitle";

import {
    Compass,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

export default function BoundarySection({ profile }) {

    const boundaries = [
        {
            title: "Utara",
            value: profile?.north_boundary || "-",
            icon: ArrowUp,
            color: "bg-emerald-50 text-emerald-700",
        },
        {
            title: "Timur",
            value: profile?.east_boundary || "-",
            icon: ArrowRight,
            color: "bg-blue-50 text-blue-700",
        },
        {
            title: "Selatan",
            value: profile?.south_boundary || "-",
            icon: ArrowDown,
            color: "bg-orange-50 text-orange-700",
        },
        {
            title: "Barat",
            value: profile?.west_boundary || "-",
            icon: ArrowLeft,
            color: "bg-purple-50 text-purple-700",
        },
    ];

    return (

        <section className="py-28 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Administrasi Wilayah"
                    title="Batas Wilayah Desa"
                    description="Letak batas administratif Desa dengan wilayah di sekitarnya."
                />

                <div className="mt-16 max-w-5xl mx-auto">

                    <div className="grid grid-cols-3 gap-6 items-center">

                        {/* ==================== */}
                        {/* UTARA */}
                        {/* ==================== */}

                        <div></div>

                        <BoundaryCard
                            data={boundaries[0]}
                        />

                        <div></div>

                        {/* ==================== */}
                        {/* BARAT */}
                        {/* ==================== */}

                        <BoundaryCard
                            data={boundaries[3]}
                        />

                        {/* CENTER */}

                        <div className="flex flex-col items-center justify-center">

                            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-xl">

                                <Compass
                                    size={64}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-gray-900">

                                {profile?.village_name}

                            </h3>

                            <p className="text-gray-500 mt-2 text-center">

                                Kecamatan {profile?.district}
                            </p>

                        </div>

                        {/* TIMUR */}

                        <BoundaryCard
                            data={boundaries[1]}
                        />

                        <div></div>

                        {/* SELATAN */}

                        <BoundaryCard
                            data={boundaries[2]}
                        />

                        <div></div>

                    </div>

                </div>

            </div>

        </section>

    );

}

function BoundaryCard({ data }) {

    const Icon = data.icon;

    return (

        <div className="group rounded-3xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${data.color}`}
            >

                <Icon size={26} />

            </div>

            <p className="text-sm text-gray-500">

                Batas {data.title}

            </p>

            <h3 className="mt-2 text-xl font-bold text-gray-900 leading-8">

                {data.value}

            </h3>

        </div>

    );

}