import SectionTitle from "../../../components/common/SectionTitle";

export default function BoundarySection() {
    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <SectionTitle
                    subtitle="Wilayah"
                    title="Batas Wilayah"
                    description="Informasi mengenai batas wilayah Desa Panca Tunggal."
                />

                <p className="text-gray-600 leading-8">
                    Sebelah Utara : ..............
                </p>

                <p className="text-gray-600 leading-8">
                    Sebelah Selatan : ..............
                </p>

                <p className="text-gray-600 leading-8">
                    Sebelah Timur : ..............
                </p>

                <p className="text-gray-600 leading-8">
                    Sebelah Barat : ..............
                </p>

            </div>

        </section>
    );
}