import SectionTitle from "../../../components/common/SectionTitle";
import historyImage from "../../../assets/images/profile/history.jpg";

export default function HistorySection() {
    const timeline = [
        {
            year: "1982",
            title: "Pembukaan Wilayah",
            description:
                "Wilayah mulai dibuka oleh masyarakat sebagai kawasan permukiman dan pertanian."
        },
        {
            year: "1990",
            title: "Menjadi Desa Definitif",
            description:
                "Desa Panca Tunggal resmi menjadi desa definitif dalam wilayah Kecamatan Merbau Mataram."
        },
        {
            year: "2026",
            title: "Transformasi Digital",
            description:
                "Pemerintah desa mulai mengembangkan SIPANDA sebagai sistem informasi desa berbasis digital."
        }
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Profil Desa"
                    title="Sejarah Desa"
                    description="Perjalanan panjang Desa Panca Tunggal dari awal berdiri hingga menjadi desa yang terus berkembang."
                />

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Gambar */}

                    <div>

                        <img
                            src={historyImage}
                            alt="Sejarah Desa"
                            className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                        />

                    </div>

                    {/* Isi */}

                    <div>

                        <h3 className="text-3xl font-bold text-gray-800 mb-6">

                            Awal Berdirinya Desa

                        </h3>

                        <p className="text-gray-600 leading-8 mb-5">

                            Desa Panca Tunggal merupakan salah satu desa yang berada di
                            Kecamatan Merbau Mataram, Kabupaten Lampung Selatan.
                            Sejak awal berdirinya, desa ini berkembang melalui sektor
                            pertanian, perkebunan, dan semangat gotong royong masyarakat.

                        </p>

                        <p className="text-gray-600 leading-8">

                            Hingga saat ini Desa Panca Tunggal terus berbenah dalam
                            meningkatkan kualitas pelayanan publik dengan memanfaatkan
                            teknologi informasi melalui pembangunan website resmi desa
                            SIPANDA.

                        </p>

                        <div className="mt-10 space-y-8">

                            {timeline.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex gap-5"
                                >

                                    <div className="flex flex-col items-center">

                                        <div className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">

                                            {item.year}

                                        </div>

                                        {index !== timeline.length - 1 && (
                                            <div className="w-1 h-16 bg-green-300"></div>
                                        )}

                                    </div>

                                    <div>

                                        <h4 className="font-bold text-xl">

                                            {item.title}

                                        </h4>

                                        <p className="text-gray-600 mt-2 leading-7">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}