import SectionTitle from "../../../components/common/SectionTitle";

export default function DemographySection() {
    return (
        <section className="py-20">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Demografi"
                    title="Data Penduduk"
                    description="Informasi mengenai jumlah penduduk Desa Panca Tunggal."
                />

                <p className="text-gray-600 leading-8">
                    Data demografi desa akan ditampilkan pada bagian ini.
                </p>

            </div>

        </section>
    );
}