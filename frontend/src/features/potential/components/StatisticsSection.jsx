import {
    Sprout,
    Users,
    Store,
    Beef,
    Map,
    Landmark,
    ArrowUpRight,
} from "lucide-react";


const statistics = [
    {
        icon: Sprout,
        value: "320 Ha",
        title: "Luas Lahan Pertanian",
    },
    {
        icon: Users,
        value: "150+",
        title: "Petani Aktif",
    },
    {
        icon: Store,
        value: "5+",
        title: "UMKM Aktif",
    },
    {
        icon: Beef,
        value: "100+",
        title: "Peternak",
    },
    {
        icon: Map,
        value: "12",
        title: "Komoditas Unggulan",
    },
    {
        icon: Landmark,
        value: "11",
        title: "Dusun",
    },
];


export default function StatisticsSection() {

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-emerald-950
                via-emerald-900
                to-green-800
                py-20
                sm:py-24
                lg:py-28
            "
        >

            {/* =====================================================
                BACKGROUND DECORATION
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    -left-40
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-white/5
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -right-40
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-green-300/10
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    top-1/2
                    left-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-emerald-400/5
                    blur-3xl
                "
            />


            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                {/* =================================================
                    HEADING
                ================================================== */}

                <div
                    data-aos="fade-up"
                    className="
                        max-w-3xl
                        mx-auto
                        text-center
                        mb-14
                        sm:mb-16
                    "
                >

                    {/* Badge */}

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/15
                            bg-white/10
                            px-5
                            py-2.5
                            text-sm
                            font-bold
                            uppercase
                            tracking-widest
                            text-green-200
                            backdrop-blur-md
                        "
                    >

                        <Sprout size={17} />

                        Statistik Potensi

                    </div>


                    {/* Title */}

                    <h2
                        className="
                            mt-5
                            text-3xl
                            sm:text-4xl
                            lg:text-5xl
                            font-black
                            leading-tight
                            text-white
                        "
                    >

                        Potensi Desa Dalam Angka

                    </h2>


                    {/* Description */}

                    <p
                        className="
                            mt-5
                            text-base
                            sm:text-lg
                            leading-8
                            text-slate-200
                        "
                    >

                        Gambaran data potensi Desa Panca Tunggal
                        yang menunjukkan kekuatan sektor pertanian,
                        peternakan, UMKM, serta sumber daya masyarakat
                        yang terus berkembang.

                    </p>

                </div>


                {/* =================================================
                    STATISTICS GRID
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-5
                        sm:gap-6
                        lg:gap-7
                    "
                >

                    {statistics.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/10
                                    p-6
                                    sm:p-7
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-white/20
                                    hover:bg-white/15
                                    hover:shadow-2xl
                                "
                            >

                                {/* Card glow */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-10
                                        -top-10
                                        h-28
                                        w-28
                                        rounded-full
                                        bg-green-300/10
                                        blur-2xl
                                        opacity-0
                                        transition
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                />


                                {/* Top */}

                                <div
                                    className="
                                        relative
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >

                                    {/* Icon */}

                                    <div
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/10
                                            transition-all
                                            duration-500
                                            group-hover:bg-white/20
                                            group-hover:scale-105
                                        "
                                    >

                                        <Icon
                                            size={27}
                                            strokeWidth={1.8}
                                            className="
                                                text-green-300
                                                transition
                                                duration-300
                                                group-hover:text-white
                                            "
                                        />

                                    </div>


                                    {/* Arrow */}

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/5
                                            text-white/40
                                            opacity-0
                                            translate-y-2
                                            transition-all
                                            duration-300
                                            group-hover:opacity-100
                                            group-hover:translate-y-0
                                        "
                                    >

                                        <ArrowUpRight size={17} />

                                    </div>

                                </div>


                                {/* Value */}

                                <div className="relative mt-7">

                                    <h3
                                        className="
                                            text-3xl
                                            sm:text-4xl
                                            lg:text-[2.65rem]
                                            font-black
                                            tracking-tight
                                            text-white
                                        "
                                    >

                                        {item.value}

                                    </h3>


                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            sm:text-base
                                            font-medium
                                            leading-6
                                            text-green-100
                                        "
                                    >

                                        {item.title}

                                    </p>

                                </div>


                                {/* Bottom line */}

                                <div
                                    className="
                                        relative
                                        mt-6
                                        h-px
                                        w-full
                                        bg-white/10
                                    "
                                >

                                    <div
                                        className="
                                            h-full
                                            w-0
                                            bg-green-300
                                            transition-all
                                            duration-500
                                            group-hover:w-1/3
                                        "
                                    />

                                </div>

                            </div>

                        );

                    })}

                </div>


                {/* =================================================
                    BOTTOM MESSAGE
                ================================================== */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        mt-10
                        sm:mt-12
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        justify-center
                        gap-3
                        text-center
                        text-sm
                        sm:text-base
                        text-green-100
                    "
                >

                    <Sprout
                        size={19}
                        className="shrink-0 text-green-300"
                    />

                    <p>

                        Data potensi menjadi dasar pengembangan
                        ekonomi lokal dan pembangunan desa
                        yang berkelanjutan.

                    </p>

                </div>

            </div>

        </section>

    );
}