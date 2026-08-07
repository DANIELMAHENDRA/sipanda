import SectionTitle from "../../../components/common/SectionTitle";
import { UserRound, BadgeCheck } from "lucide-react";

export default function OfficialsSection({ government }) {
    const officials = government?.filter(item => !item.is_head) || [];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Perangkat Desa"
                    title="Aparatur Pemerintah Desa"
                    description="Perangkat desa yang membantu Kepala Desa dalam menjalankan pemerintahan dan pelayanan kepada masyarakat."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                    {officials.map((item) => (

                        <div
                            key={item.id}
                            data-aos="fade-up"
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >

                            {/* FOTO */}

                            <div className="relative h-80 overflow-hidden">

                                {item.photo ? (

                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                ) : (

                                    <div className="w-full h-full bg-green-100 flex items-center justify-center">

                                        <UserRound
                                            size={70}
                                            className="text-green-700"
                                        />

                                    </div>

                                )}

                                {/* Gradient */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                                {/* Badge */}

                                <div className="absolute top-4 left-4">

                                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">

                                        Aparatur Desa

                                    </span>

                                </div>

                            </div>

                            {/* CONTENT */}

                            <div className="p-6">

                                <h3 className="text-xl font-bold text-gray-900">

                                    {item.name}

                                </h3>

                                <p className="mt-2 text-green-700 font-semibold">

                                    {item.position}

                                </p>

                                {item.description && (

                                    <p className="mt-4 text-gray-600 leading-7 text-sm line-clamp-4">

                                        {item.description}

                                    </p>

                                )}

                                <div className="mt-6 flex items-center gap-2 text-sm text-green-700">

                                    <BadgeCheck size={18} />

                                    <span>
                                        Pemerintah Desa
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}