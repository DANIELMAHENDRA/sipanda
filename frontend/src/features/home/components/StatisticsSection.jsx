import SectionTitle from "../../../components/common/SectionTitle";

export default function StatisticsSection({ profile }) {

    const stats = [

        {
            value: profile?.population ?? "-",
            label: "Penduduk",
            icon: "👨‍👩‍👧‍👦",
        },

        {
            value: profile?.family_count ?? "-",
            label: "Kepala Keluarga",
            icon: "🏠",
        },

        {
            value: profile?.hamlet_count ?? "-",
            label: "Dusun",
            icon: "📍",
        },

        {
            value: profile?.area
                ? `${profile.area} Ha`
                : "-",
            label: "Luas Wilayah",
            icon: "🌾",
        },

    ];

    return (

        <section
            className="py-20 bg-white"
            data-aos="fade-up"
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Data Desa"
                    title="Statistik Desa"
                    description="Gambaran singkat mengenai kondisi Desa Panca Tunggal berdasarkan data terbaru."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            className="bg-green-700 rounded-xl p-8 text-center text-white shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >

                            <div className="text-5xl mb-4">

                                {item.icon}

                            </div>

                            <h3 className="text-3xl font-bold">

                                {item.value}

                            </h3>

                            <p className="mt-2 text-green-100">

                                {item.label}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}