import SectionTitle from "../../../components/common/SectionTitle";

export default function VisionMission() {
    return (
        <section className="py-20">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Visi & Misi"
                    title="Visi dan Misi Desa"
                    description="Arah pembangunan Desa Panca Tunggal."
                />

                <div className="grid md:grid-cols-2 gap-10">

                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Visi
                        </h3>

                        <p className="text-gray-600 leading-8">
                            Visi Desa Panca Tunggal akan ditampilkan di sini.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Misi
                        </h3>

                        <ul className="list-disc pl-5 space-y-3 text-gray-600">
                            <li>Misi pertama.</li>
                            <li>Misi kedua.</li>
                            <li>Misi ketiga.</li>
                        </ul>
                    </div>

                </div>

            </div>

        </section>
    );
}