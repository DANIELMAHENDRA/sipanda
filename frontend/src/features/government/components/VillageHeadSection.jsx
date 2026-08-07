import {
    User,
    BadgeCheck,
    Phone,
    Mail,
} from "lucide-react";

export default function VillageHeadSection({
    government,
}) {

    const villageHead = government.find(
        (item) => item.is_head
    );

    if (!villageHead) return null;

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">

                        <BadgeCheck size={18} />

                        Kepala Desa

                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-gray-900">

                        Pimpinan Pemerintah Desa

                    </h2>

                    <p className="mt-5 text-lg text-gray-600 leading-8">

                        Kepala Desa merupakan pemimpin penyelenggaraan
                        pemerintahan desa yang bertanggung jawab
                        dalam pembangunan, pelayanan masyarakat,
                        serta pemberdayaan seluruh warga desa.

                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* FOTO */}

                    <div className="relative">

                        <div className="absolute -top-6 -left-6 w-full h-full rounded-[32px] bg-green-100"></div>

                        <img
                            src={villageHead.photo}
                            alt={villageHead.name}
                            className="relative rounded-[32px] shadow-2xl w-full h-[620px] object-cover"
                        />

                    </div>

                    {/* CONTENT */}

                    <div>

                        <span className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold mb-5">

                            Kepala Desa Aktif

                        </span>

                        <h3 className="text-5xl font-bold text-gray-900">

                            {villageHead.name}

                        </h3>

                        <p className="mt-3 text-xl text-green-700 font-semibold">

                            {villageHead.position}

                        </p>

                        <div className="w-24 h-1 bg-green-600 rounded-full my-8"></div>

                        <div className="prose prose-lg max-w-none text-gray-600 leading-9">

                            {villageHead.description}

                        </div>

                        {/* Info Card */}

                        <div className="mt-10 grid sm:grid-cols-2 gap-5">

                            <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">

                                <User
                                    className="text-green-700 mb-4"
                                    size={30}
                                />

                                <h4 className="font-bold text-gray-800">

                                    Jabatan

                                </h4>

                                <p className="text-gray-600 mt-2">

                                    {villageHead.position}

                                </p>

                            </div>

                            <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">

                                <BadgeCheck
                                    className="text-green-700 mb-4"
                                    size={30}
                                />

                                <h4 className="font-bold text-gray-800">

                                    Status

                                </h4>

                                <p className="text-gray-600 mt-2">

                                    Aktif Melayani

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );

}