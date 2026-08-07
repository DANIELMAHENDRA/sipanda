import {
    MapPinned,
    Building2,
    Users,
    Landmark,
} from "lucide-react";

export default function AboutVillage({ profile }) {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* ==========================
                        Gambar Desa
                    =========================== */}

                    <div
                        data-aos="fade-right"
                        className="relative"
                    >


                        <img
                            src={
                                profile?.about_image ||
                                profile?.hero_image ||
                                "/images/default-about.jpg"
                            }
                            alt={profile?.village_name}
                            className="rounded-3xl shadow-2xl object-cover h-[550px] w-full"
                        />

                    </div>

                    {/* ==========================
                        Content
                    =========================== */}

                    <div>

                        <span
                            data-aos="fade-up"
                            className="text-green-700 font-semibold tracking-widest uppercase"
                        >
                            Tentang Desa
                        </span>

                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="mt-3 text-4xl font-bold text-gray-900 leading-tight"
                        >
                            Mengenal Lebih Dekat
                            <br />

                            {profile?.village_name}
                        </h2>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="mt-8 text-gray-600 leading-8 text-lg"
                        >
                            {profile?.about ??
                                "Belum terdapat informasi mengenai desa."}
                        </p>

                        {/* Informasi */}

                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="grid sm:grid-cols-2 gap-5 mt-10"
                        >

                            <div className="rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <MapPinned className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Kecamatan
                                    </p>

                                    <h4 className="font-semibold text-gray-900">
                                        {profile?.district || "-"}
                                    </h4>

                                </div>

                            </div>

                            <div className="rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <Landmark className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Kabupaten
                                    </p>

                                    <h4 className="font-semibold text-gray-900">
                                        {profile?.regency || "-"}
                                    </h4>

                                </div>

                            </div>

                            <div className="rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <Building2 className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Provinsi
                                    </p>

                                    <h4 className="font-semibold text-gray-900">
                                        {profile?.province || "-"}
                                    </h4>

                                </div>

                            </div>

                            <div className="rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4">

                                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">

                                    <Users className="text-green-700" />

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">
                                        Penduduk
                                    </p>

                                    <h4 className="font-semibold text-gray-900">
                                        {profile?.population || "-"}
                                    </h4>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}