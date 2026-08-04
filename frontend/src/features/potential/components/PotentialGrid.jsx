import PotentialCard from "./PotentialCard";
import usePotential from "../../../hooks/usePotential";

export default function PotentialGrid() {

    const {
        potential,
        loading,
        error,
    } = usePotential();

    if (loading) {

        return (
            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-gray-500">
                        Memuat data potensi...
                    </p>

                </div>

            </section>
        );

    }

    if (error) {

        return (
            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-red-500">
                        Gagal memuat data potensi desa.
                    </p>

                </div>

            </section>
        );

    }

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <span className="text-green-700 font-semibold uppercase tracking-widest">

                        Daftar Potensi

                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900">

                        Potensi Unggulan Desa Panca Tunggal

                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">

                        Berbagai sektor unggulan yang dimiliki Desa Panca
                        Tunggal sebagai kekuatan ekonomi masyarakat dan
                        pendukung pembangunan desa yang berkelanjutan.

                    </p>

                </div>

                {/* Grid */}

                {potential.length === 0 ? (

                    <div className="text-center text-gray-500">

                        Belum ada data potensi desa.

                    </div>

                ) : (

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                        {potential.map((item, index) => (

                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >

                            <PotentialCard
                                id={item.id}
                                image={item.thumbnail}
                                title={item.title}
                                category={item.category}
                                description={item.excerpt}
                            />

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}