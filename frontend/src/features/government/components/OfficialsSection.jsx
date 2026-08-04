import SectionTitle from "../../../components/common/SectionTitle";
import useGovernment from "../../../hooks/useGovernment";

import {
    BadgeCheck,
    UserRound,
} from "lucide-react";

export default function OfficialsSection() {

    const { government, loading } = useGovernment();

    if (loading) {
        return (
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Perangkat Desa"
                    title="Aparatur Pemerintah Desa"
                    description="Seluruh aparatur Pemerintah Desa Panca Tunggal yang berperan dalam memberikan pelayanan terbaik kepada masyarakat."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

                    {government
                    .filter((official) => !official.is_head)
                    .map((official) => (

                        <div
                            key={official.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
                        >

                            {/* Foto */}

                            <div className="relative">

                            {official.photo ? (

                                <img
                                    src={official.photo}
                                    alt={official.name}
                                    className="w-full h-[350px] object-cover"
                                />

                            ) : (

                                <div className="w-full h-[350px] bg-gray-100 flex items-center justify-center">

                                    <UserRound
                                        size={120}
                                        className="text-gray-400"
                                    />

                                </div>

                            )}

                                <div className="absolute top-5 left-5 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">

                                    <BadgeCheck size={16} />

                                    {official.position}

                                </div>

                            </div>

                            {/* Isi */}

                            <div className="p-8">

                                <div className="flex items-center gap-3 mb-5">

                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">

                                        <UserRound
                                            className="text-green-700"
                                            size={22}
                                        />

                                    </div>

                                    <div>

                                        <h3 className="font-bold text-xl">

                                            {official.name}

                                        </h3>

                                        <p className="text-green-700 font-medium">

                                            {official.position}

                                        </p>

                                    </div>

                                </div>

                                <div className="border-t pt-5">

                                    <p className="text-gray-600 leading-7">

                                        {official.description}

                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}