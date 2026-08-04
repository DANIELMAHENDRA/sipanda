import {
    UserRound,
    Quote,
    BadgeCheck,
} from "lucide-react";

import SectionTitle from "../../../components/common/SectionTitle";
import useGovernment from "../../../hooks/useGovernment";

export default function VillageHeadSection() {

    const { government, loading } = useGovernment();

    if (loading) {
        return (
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    const villageHead = government.find((item) => item.is_head);

    if (!villageHead) {
        return null;
    }

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Kepala Desa"
                    title="Sambutan Kepala Desa"
                    description="Komitmen Pemerintah Desa dalam memberikan pelayanan terbaik kepada seluruh masyarakat."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Foto */}

                    <div
                        data-aos="fade-right"
                        className="relative"
                    >

                        <div className="absolute -top-5 -left-5 w-full h-full rounded-3xl border-4 border-green-700"></div>

                        {villageHead.photo ? (

                            <img
                                src={villageHead.photo}
                                alt={villageHead.name}
                                className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px]"
                            />

                        ) : (

                            <div className="relative rounded-3xl shadow-2xl w-full h-[600px] bg-gray-100 flex items-center justify-center">

                                <UserRound
                                    size={140}
                                    className="text-gray-400"
                                />

                            </div>

                        )}

                    </div>

                    {/* Isi */}

                    <div data-aos="fade-left">

                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">

                            <BadgeCheck size={18} />

                            {villageHead.position}

                        </div>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900">

                            {villageHead.name}

                        </h2>

                        <p className="mt-2 text-green-700 font-semibold">

                            {villageHead.position}

                        </p>

                        <div className="mt-8 relative">

                            <Quote
                                size={60}
                                className="absolute -top-4 -left-2 text-green-100"
                            />

                            <p className="relative text-gray-600 leading-9 text-lg">

                                {villageHead.description}

                            </p>

                        </div>

                        <div className="mt-10">

                            <div className="bg-gray-50 rounded-2xl p-5">

                                <div className="flex items-center gap-3">

                                    <UserRound className="text-green-700" />

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Nama

                                        </p>

                                        <h4 className="font-semibold">

                                            {villageHead.name}

                                        </h4>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}