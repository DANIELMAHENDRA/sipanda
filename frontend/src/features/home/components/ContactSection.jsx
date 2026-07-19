import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";

import {
    MapPinned,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

export default function ContactSection() {

    return (

        <section
            className="py-24 bg-gray-50"
            data-aos="fade-up"
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Hubungi Kami"
                    title="Kontak Desa"
                    description="Silakan menghubungi Pemerintah Desa Panca Tunggal apabila membutuhkan informasi maupun pelayanan."
                />

                <div className="grid lg:grid-cols-2 gap-12 mt-16">

                    {/* Informasi Kontak */}

                    <div
                        data-aos="fade-right"
                    >

                        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl">

                                    <MapPinned
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">

                                        Alamat

                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-7">

                                        Desa Panca Tunggal,
                                        Kecamatan Merbau Mataram,
                                        Kabupaten Lampung Selatan,
                                        Provinsi Lampung.

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl">

                                    <Phone
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">

                                        Telepon

                                    </h3>

                                    <p className="text-gray-600 mt-2">

                                        (0721) 123456

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl">

                                    <Mail
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">

                                        Email

                                    </h3>

                                    <p className="text-gray-600 mt-2">

                                        desapancatunggal@gmail.com

                                    </p>

                                </div>

                            </div>

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 p-4 rounded-xl">

                                    <Clock
                                        className="text-green-700"
                                        size={28}
                                    />

                                </div>

                                <div>

                                    <h3 className="font-bold text-xl">

                                        Jam Pelayanan

                                    </h3>

                                    <p className="text-gray-600 mt-2">

                                        Senin - Jumat

                                        <br />

                                        08.00 - 15.00 WIB

                                    </p>

                                </div>

                            </div>

                            <div className="pt-4">

                                <Button to="/kontak">

                                    Hubungi Kami

                                </Button>

                            </div>

                        </div>

                    </div>

                    {/* Maps */}

                    <div
                        data-aos="fade-left"
                    >

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">

                            <iframe
                                title="Lokasi Desa"
                                src="https://www.google.com/maps?q=Merbau+Mataram+Lampung&output=embed"
                                className="w-full h-[500px] border-0"
                                loading="lazy"
                                allowFullScreen
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}