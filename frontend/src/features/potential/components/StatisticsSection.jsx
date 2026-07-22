import {
    Sprout,
    Users,
    Store,
    Beef,
    Map,
    Landmark,
} from "lucide-react";

const statistics = [
    {
        icon: Sprout,
        value: "320 Ha",
        title: "Luas Lahan Pertanian",
    },
    {
        icon: Users,
        value: "500+",
        title: "Petani Aktif",
    },
    {
        icon: Store,
        value: "80+",
        title: "UMKM Aktif",
    },
    {
        icon: Beef,
        value: "250+",
        title: "Peternak",
    },
    {
        icon: Map,
        value: "12",
        title: "Komoditas Unggulan",
    },
    {
        icon: Landmark,
        value: "6",
        title: "Dusun",
    },
];

export default function StatisticsSection() {

    return (

        <section className="py-24 bg-gradient-to-br from-green-700 via-green-800 to-green-900">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <span className="uppercase tracking-[4px] text-green-200 font-semibold">

                        Statistik Potensi

                    </span>

                    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">

                        Potensi Desa Dalam Angka

                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-green-100 leading-8">

                        Berbagai data potensi Desa Panca Tunggal yang
                        menggambarkan kekuatan sektor pertanian,
                        peternakan, UMKM, dan pembangunan ekonomi desa.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {statistics.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                className="
                                    bg-white/10
                                    backdrop-blur-lg
                                    rounded-3xl
                                    border
                                    border-white/20
                                    p-8
                                    hover:bg-white/15
                                    transition-all
                                    duration-300
                                "
                            >

                                <div
                                    className="
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-white/20
                                        flex
                                        items-center
                                        justify-center
                                        mb-6
                                    "
                                >

                                    <Icon
                                        size={30}
                                        className="text-green-200"
                                    />

                                </div>

                                <h3
                                    className="
                                        text-4xl
                                        font-bold
                                        text-white
                                    "
                                >

                                    {item.value}

                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-green-100
                                        text-lg
                                    "
                                >

                                    {item.title}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}