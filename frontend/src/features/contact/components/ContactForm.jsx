import {
    User,
    MessageSquare,
    MapPin,
    Clock,
    Landmark,
    Info,
} from "lucide-react";

export default function ContactForm() {

    return (

        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* =========================
                    HEADING
                ========================= */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >

                    <span
                        className="
                            inline-block
                            bg-green-100
                            text-green-700
                            px-4
                            sm:px-5
                            py-2
                            rounded-full
                            font-semibold
                            text-sm
                            sm:text-base
                        "
                    >
                        Informasi Desa
                    </span>

                    <h2
                        className="
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            font-bold
                            text-gray-900
                            mt-5
                            sm:mt-6
                        "
                    >
                        Informasi dan Aspirasi Masyarakat
                    </h2>

                    <p
                        className="
                            mt-4
                            sm:mt-5
                            max-w-3xl
                            mx-auto
                            text-sm
                            sm:text-base
                            text-gray-600
                            leading-7
                            sm:leading-8
                        "
                    >
                        Pemerintah Desa Panca Tunggal terbuka terhadap
                        pertanyaan, saran, kritik, dan aspirasi masyarakat
                        untuk mendukung peningkatan pelayanan serta
                        pembangunan desa.
                    </p>

                </div>


                {/* =========================
                    CONTENT
                ========================= */}

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-10
                        lg:gap-16
                        items-stretch
                    "
                >

                    {/* =========================
                        LEFT - INFORMASI
                    ========================= */}

                    <div
                        data-aos="fade-right"
                        className="
                            bg-white
                            rounded-2xl
                            sm:rounded-3xl
                            shadow-lg
                            p-6
                            sm:p-8
                            lg:p-10
                        "
                    >

                        <div>

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    bg-green-100
                                    text-green-700
                                    px-4
                                    py-2
                                    rounded-full
                                    text-sm
                                    font-semibold
                                "
                            >

                                <Info size={16} />

                                Informasi Pelayanan

                            </span>

                            <h3
                                className="
                                    mt-5
                                    text-2xl
                                    sm:text-3xl
                                    font-bold
                                    text-gray-900
                                "
                            >
                                Mari Terhubung dengan Pemerintah Desa
                            </h3>

                            <p
                                className="
                                    mt-4
                                    sm:mt-6
                                    text-sm
                                    sm:text-base
                                    text-gray-600
                                    leading-7
                                    sm:leading-8
                                "
                            >
                                Masyarakat Desa Panca Tunggal dapat
                                memperoleh informasi pelayanan,
                                menyampaikan pertanyaan, serta memberikan
                                kritik dan saran secara langsung kepada
                                Pemerintah Desa.
                            </p>

                        </div>


                        {/* =========================
                            INFORMATION ITEMS
                        ========================= */}

                        <div className="mt-8 space-y-6">

                            {/* Pelayanan */}

                            <div className="flex items-start gap-3 sm:gap-4">

                                <div
                                    className="
                                        shrink-0
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-xl
                                        sm:rounded-2xl
                                        bg-green-600
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    "
                                >
                                    <User size={22} />
                                </div>

                                <div>

                                    <h4 className="font-bold text-base sm:text-lg">
                                        Pelayanan Ramah
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            sm:text-base
                                            text-gray-600
                                            leading-6
                                            sm:leading-7
                                        "
                                    >
                                        Pemerintah Desa berkomitmen
                                        memberikan pelayanan yang ramah,
                                        mudah, dan profesional kepada
                                        seluruh masyarakat.
                                    </p>

                                </div>

                            </div>


                            {/* Respon */}

                            <div className="flex items-start gap-3 sm:gap-4">

                                <div
                                    className="
                                        shrink-0
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-xl
                                        sm:rounded-2xl
                                        bg-green-600
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    "
                                >
                                    <MessageSquare size={22} />
                                </div>

                                <div>

                                    <h4 className="font-bold text-base sm:text-lg">
                                        Respon dan Pelayanan
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            sm:text-base
                                            text-gray-600
                                            leading-6
                                            sm:leading-7
                                        "
                                    >
                                        Setiap kebutuhan masyarakat akan
                                        dilayani sesuai dengan prosedur
                                        dan ketentuan yang berlaku.
                                    </p>

                                </div>

                            </div>


                            {/* Aspirasi */}

                            <div className="flex items-start gap-3 sm:gap-4">

                                <div
                                    className="
                                        shrink-0
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-xl
                                        sm:rounded-2xl
                                        bg-green-600
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    "
                                >
                                    <Landmark size={22} />
                                </div>

                                <div>

                                    <h4 className="font-bold text-base sm:text-lg">
                                        Aspirasi Masyarakat
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            sm:text-base
                                            text-gray-600
                                            leading-6
                                            sm:leading-7
                                        "
                                    >
                                        Kritik, saran, dan aspirasi
                                        masyarakat menjadi bagian penting
                                        dalam mendukung kemajuan Desa
                                        Panca Tunggal.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        RIGHT - INFO CARD
                    ========================= */}

                    <div
                        data-aos="fade-left"
                        className="
                            bg-green-700
                            rounded-2xl
                            sm:rounded-3xl
                            shadow-xl
                            p-6
                            sm:p-8
                            lg:p-10
                            text-white
                            flex
                            flex-col
                            justify-center
                        "
                    >

                        <div
                            className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-white/10
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <MapPin size={32} />

                        </div>

                        <h3
                            className="
                                mt-6
                                text-2xl
                                sm:text-3xl
                                font-bold
                            "
                        >
                            Kunjungi Kantor Desa
                        </h3>

                        <p
                            className="
                                mt-4
                                text-green-100
                                text-sm
                                sm:text-base
                                leading-7
                                sm:leading-8
                            "
                        >
                            Untuk mendapatkan informasi lebih lanjut,
                            mengurus pelayanan administrasi, atau
                            menyampaikan aspirasi secara langsung,
                            masyarakat dapat mengunjungi Kantor Desa
                            Panca Tunggal pada jam pelayanan.
                        </p>


                        {/* Lokasi */}

                        <div
                            className="
                                mt-8
                                bg-white/10
                                rounded-2xl
                                p-5
                                sm:p-6
                            "
                        >

                            <div className="flex items-start gap-4">

                                <MapPin
                                    size={24}
                                    className="shrink-0 mt-1 text-green-200"
                                />

                                <div>

                                    <p className="text-green-200 text-sm">
                                        Lokasi
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Desa Panca Tunggal
                                    </p>

                                    <p className="text-green-100 text-sm mt-1">
                                        Kecamatan Merbau Mataram,
                                        Kabupaten Lampung Selatan,
                                        Provinsi Lampung
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Jam Pelayanan */}

                        <div
                            className="
                                mt-4
                                bg-white/10
                                rounded-2xl
                                p-5
                                sm:p-6
                            "
                        >

                            <div className="flex items-start gap-4">

                                <Clock
                                    size={24}
                                    className="shrink-0 mt-1 text-green-200"
                                />

                                <div>

                                    <p className="text-green-200 text-sm">
                                        Jam Pelayanan
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        Senin - Jumat
                                    </p>

                                    <p className="text-green-100 text-sm mt-1">
                                        08.00 WIB - 15.00 WIB
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Information */}

                        <div
                            className="
                                mt-6
                                flex
                                items-start
                                gap-3
                                text-sm
                                text-green-100
                                leading-6
                            "
                        >

                            <Info
                                size={18}
                                className="shrink-0 mt-1"
                            />

                            <p>
                               Silakan datang langsung ke
                                kantor desa untuk mendapatkan pelayanan
                                dan informasi lebih lanjut.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}