import SectionTitle from "../../../components/common/SectionTitle";

export default function StatisticsSection() {

    const stats = [
        {
            value: "4.250",
            label: "Penduduk",
            icon: "👨‍👩‍👧‍👦",
        },
        {
            value: "1.120",
            label: "Kepala Keluarga",
            icon: "🏠",
        },
        {
            value: "12",
            label: "Dusun",
            icon: "📍",
        },
        {
            value: "850 Ha",
            label: "Luas Wilayah",
            icon: "🌾",
        },
    ];

    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Data Desa"
                    title="Statistik Desa"
                    description="Gambaran singkat mengenai kondisi Desa Panca Tunggal."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="bg-green-700 rounded-xl p-8 text-center text-white shadow-lg hover:-translate-y-2 transition duration-300"
                        >

                            <div className="text-5xl mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-3xl font-bold">
                                {item.value}
                            </h3>

                            <p className="mt-2">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );

}