import PotentialCard from "./PotentialCard";

import agriculture from "../../../assets/images/potential/agriculture.jpg";
import livestock from "../../../assets/images/potential/livestock.jpg";
import umkm from "../../../assets/images/potential/umkm.jpg";
import tourism from "../../../assets/images/potential/tourism.jpg";
import plantation from "../../../assets/images/potential/plantation.jpg";
import fishery from "../../../assets/images/potential/fishery.jpg";

export default function PotentialGrid() {

    const potentials = [

        {
            id: 1,
            image: agriculture,
            title: "Pertanian Jagung",
            category: "Pertanian",
            location: "Dusun I",
            description:
                "Jagung merupakan komoditas unggulan Desa Panca Tunggal dengan hasil panen yang tinggi setiap tahunnya.",
        },

        {
            id: 2,
            image: plantation,
            title: "Perkebunan Singkong",
            category: "Perkebunan",
            location: "Dusun II",
            description:
                "Perkebunan singkong menjadi salah satu sumber pendapatan utama masyarakat desa.",
        },

        {
            id: 3,
            image: livestock,
            title: "Peternakan Sapi",
            category: "Peternakan",
            location: "Dusun III",
            description:
                "Peternakan sapi dikelola secara mandiri oleh kelompok peternak untuk memenuhi kebutuhan pasar lokal.",
        },

        {
            id: 4,
            image: fishery,
            title: "Budidaya Ikan Air Tawar",
            category: "Perikanan",
            location: "Dusun IV",
            description:
                "Budidaya ikan lele dan nila berkembang pesat sebagai usaha ekonomi masyarakat desa.",
        },

        {
            id: 5,
            image: umkm,
            title: "UMKM Keripik Singkong",
            category: "UMKM",
            location: "Desa Panca Tunggal",
            description:
                "Produk olahan singkong menjadi salah satu UMKM unggulan yang dipasarkan hingga luar daerah.",
        },

        {
            id: 6,
            image: tourism,
            title: "Wisata Alam Desa",
            category: "Wisata",
            location: "Desa Panca Tunggal",
            description:
                "Potensi wisata alam desa menawarkan suasana pedesaan yang asri dan cocok sebagai destinasi edukasi.",
        },

    ];

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

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                    {potentials.map((item, index) => (

                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            <PotentialCard

                                id={item.id}
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                location={item.location}
                                description={item.description}

                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}