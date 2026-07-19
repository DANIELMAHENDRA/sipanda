import SectionTitle from "../../../components/common/SectionTitle";

export default function GeographySection() {
    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Geografis"
                    title="Letak Geografis"
                    description="Informasi mengenai kondisi geografis Desa Panca Tunggal."
                />

                <p className="text-gray-600 leading-8">
                    Informasi letak geografis desa akan ditampilkan pada bagian ini.
                </p>

            </div>

        </section>
    );
}