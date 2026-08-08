import {
    Send,
    User,
    Mail,
    Phone,
    FileText,
    MessageSquare,
} from "lucide-react";

export default function ContactForm() {

    return (

        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}

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
                        Formulir Kontak
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
                        Kirim Pesan Kepada Kami
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
                        Silakan isi formulir di bawah ini apabila Anda memiliki
                        pertanyaan, saran, kritik, maupun membutuhkan informasi
                        mengenai pelayanan Pemerintah Desa Panca Tunggal.
                    </p>

                </div>

                <div
                    className="
                        grid
                        lg:grid-cols-2
                        gap-10
                        lg:gap-16
                        items-start
                    "
                >

                    {/* Left */}

                    <div
                        data-aos="fade-right"
                        className="space-y-6 sm:space-y-8"
                    >

                        <div>

                            <h3
                                className="
                                    text-2xl
                                    sm:text-3xl
                                    font-bold
                                    text-gray-900
                                "
                            >
                                Mari Terhubung
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
                                Pemerintah Desa Panca Tunggal selalu terbuka
                                menerima masukan dari masyarakat demi
                                meningkatkan kualitas pelayanan publik.
                            </p>

                        </div>

                        <div className="space-y-5 sm:space-y-6">

                            {/* Item */}

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

                                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                                        Kami siap membantu masyarakat
                                        dengan pelayanan yang cepat
                                        dan profesional.
                                    </p>

                                </div>

                            </div>

                            {/* Item */}

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
                                        Respon Cepat
                                    </h4>

                                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                                        Pesan yang dikirim akan ditindaklanjuti
                                        oleh admin desa.
                                    </p>

                                </div>

                            </div>

                            {/* Item */}

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
                                    <Send size={22} />
                                </div>

                                <div>

                                    <h4 className="font-bold text-base sm:text-lg">
                                        Aspirasi Masyarakat
                                    </h4>

                                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                                        Kami menerima kritik dan saran
                                        sebagai bagian dari pembangunan desa.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <form
                        data-aos="fade-left"
                        className="
                            bg-white
                            rounded-2xl
                            sm:rounded-3xl
                            shadow-xl
                            p-5
                            sm:p-7
                            lg:p-10
                            space-y-5
                            sm:space-y-6
                        "
                    >

                        {/* Nama */}

                        <div>

                            <label className="font-semibold text-sm sm:text-base text-gray-700">
                                Nama Lengkap
                            </label>

                            <div className="relative mt-2">

                                <User
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                    "
                                    size={20}
                                />

                                <input
                                    type="text"
                                    placeholder="Masukkan nama lengkap"
                                    className="
                                        w-full
                                        pl-12
                                        pr-4
                                        py-3.5
                                        sm:py-4
                                        rounded-xl
                                        border
                                        border-gray-300
                                        text-sm
                                        sm:text-base
                                        focus:ring-2
                                        focus:ring-green-600
                                        focus:border-green-600
                                        outline-none
                                        transition
                                    "
                                />

                            </div>

                        </div>

                        {/* Email */}

                        <div>

                            <label className="font-semibold text-sm sm:text-base text-gray-700">
                                Email
                            </label>

                            <div className="relative mt-2">

                                <Mail
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                    "
                                    size={20}
                                />

                                <input
                                    type="email"
                                    placeholder="Masukkan email"
                                    className="
                                        w-full
                                        pl-12
                                        pr-4
                                        py-3.5
                                        sm:py-4
                                        rounded-xl
                                        border
                                        border-gray-300
                                        text-sm
                                        sm:text-base
                                        focus:ring-2
                                        focus:ring-green-600
                                        focus:border-green-600
                                        outline-none
                                        transition
                                    "
                                />

                            </div>

                        </div>

                        {/* Nomor HP */}

                        <div>

                            <label className="font-semibold text-sm sm:text-base text-gray-700">
                                Nomor Telepon
                            </label>

                            <div className="relative mt-2">

                                <Phone
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                    "
                                    size={20}
                                />

                                <input
                                    type="tel"
                                    placeholder="08xxxxxxxxxx"
                                    className="
                                        w-full
                                        pl-12
                                        pr-4
                                        py-3.5
                                        sm:py-4
                                        rounded-xl
                                        border
                                        border-gray-300
                                        text-sm
                                        sm:text-base
                                        focus:ring-2
                                        focus:ring-green-600
                                        focus:border-green-600
                                        outline-none
                                        transition
                                    "
                                />

                            </div>

                        </div>

                        {/* Subjek */}

                        <div>

                            <label className="font-semibold text-sm sm:text-base text-gray-700">
                                Subjek
                            </label>

                            <div className="relative mt-2">

                                <FileText
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                    "
                                    size={20}
                                />

                                <input
                                    type="text"
                                    placeholder="Masukkan subjek"
                                    className="
                                        w-full
                                        pl-12
                                        pr-4
                                        py-3.5
                                        sm:py-4
                                        rounded-xl
                                        border
                                        border-gray-300
                                        text-sm
                                        sm:text-base
                                        focus:ring-2
                                        focus:ring-green-600
                                        focus:border-green-600
                                        outline-none
                                        transition
                                    "
                                />

                            </div>

                        </div>

                        {/* Pesan */}

                        <div>

                            <label className="font-semibold text-sm sm:text-base text-gray-700">
                                Pesan
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Tuliskan pesan Anda..."
                                className="
                                    mt-2
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    p-4
                                    text-sm
                                    sm:text-base
                                    focus:ring-2
                                    focus:ring-green-600
                                    focus:border-green-600
                                    outline-none
                                    resize-none
                                    transition
                                "
                            />

                        </div>

                        {/* Button */}

                        <button
                            type="submit"
                            className="
                                w-full
                                bg-green-700
                                hover:bg-green-800
                                active:scale-[0.98]
                                transition
                                text-white
                                py-3.5
                                sm:py-4
                                rounded-xl
                                font-semibold
                                text-sm
                                sm:text-base
                                flex
                                items-center
                                justify-center
                                gap-3
                            "
                        >

                            <Send size={20} />

                            Kirim Pesan

                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}