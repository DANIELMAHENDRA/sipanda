import {
    MapPinned,
    Navigation,
    LocateFixed,
} from "lucide-react";

export default function GoogleMap() {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

                        <MapPinned size={18} />

                        Lokasi Kantor Desa

                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-6">

                        Temukan Kami

                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">

                        Kantor Pemerintah Desa Panca Tunggal berlokasi
                        di Kecamatan Merbau Mataram,
                        Kabupaten Lampung Selatan.
                        Silakan datang langsung pada jam pelayanan
                        apabila membutuhkan pelayanan administrasi
                        maupun konsultasi.

                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Maps */}

                    <div
                        data-aos="fade-right"
                        className="lg:col-span-2"
                    >

                        <div className="rounded-3xl overflow-hidden shadow-xl">

                            <iframe
                                title="Lokasi Desa Panca Tunggal"
                                src="https://www.google.com/maps?q=Merbau+Mataram+Lampung+Selatan&output=embed"
                                width="100%"
                                height="550"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>

                    </div>

                    {/* Information */}

                    <div
                        data-aos="fade-left"
                        className="space-y-6"
                    >

                        <div className="bg-green-700 rounded-3xl p-8 text-white">

                            <LocateFixed
                                size={36}
                                className="mb-5"
                            />

                            <h3 className="text-2xl font-bold">

                                Alamat Kantor

                            </h3>

                            <p className="mt-5 leading-8 text-green-100">

                                Desa Panca Tunggal
                                <br />

                                Kecamatan Merbau Mataram
                                <br />

                                Kabupaten Lampung Selatan
                                <br />

                                Provinsi Lampung

                            </p>

                        </div>

                        <div className="bg-gray-50 rounded-3xl p-8">

                            <h3 className="text-2xl font-bold text-gray-900">

                                Petunjuk Arah

                            </h3>

                            <p className="mt-5 text-gray-600 leading-8">

                                Gunakan Google Maps untuk memperoleh
                                petunjuk arah tercepat menuju
                                Kantor Pemerintah Desa
                                Panca Tunggal.

                            </p>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-xl bg-green-700 text-white hover:bg-green-800 transition"
                            >

                                <Navigation size={20} />

                                Buka Google Maps

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}