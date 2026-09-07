import {
    Sprout,
    Beef,
    Store,
    Trees,
    Landmark,
    GraduationCap,
    Sparkles,
} from "lucide-react";


const categories = [
    {
        title: "Pertanian",
        icon: Sprout,
        description:
            "Jagung, padi, singkong, cabai, dan berbagai komoditas unggulan desa.",
    },
    {
        title: "UMKM",
        icon: Store,
        description:
            "Produk olahan pangan, kerajinan, kuliner, dan usaha mikro masyarakat.",
    },
    {
        title: "Budaya",
        icon: Landmark,
        description:
            "Pelestarian adat, seni budaya, dan kegiatan masyarakat desa.",
    },
];


export default function CategorySection() {

    return (

        <section
            id="potensi"
            className="
                relative
                overflow-hidden
                bg-gradient-to-b
                from-white
                via-gray-50
                to-white
                py-20
                lg:py-28
            "
        >

            {/* =========================================================
                DECORATIVE BACKGROUND
            ========================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    -right-40
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-green-100/50
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    -left-40
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-emerald-100/40
                    blur-3xl
                "
            />


            {/* =========================================================
                CONTAINER
            ========================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >


                {/* =====================================================
                    HEADING
                ===================================================== */}

                <div
                    data-aos="fade-up"
                    className="
                        mx-auto
                        mb-16
                        max-w-3xl
                        text-center
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
                            border-green-200
                            bg-green-50
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-green-700
                        "
                    >

                        <Sparkles size={16} />

                        Kategori Potensi

                    </div>


                    {/* Heading */}

                    <h2
                        className="
                            mt-6
                            text-3xl
                            font-black
                            leading-tight
                            text-slate-900
                            md:text-4xl
                            lg:text-5xl
                        "
                    >

                        Potensi Unggulan Desa

                    </h2>


                    {/* Accent */}

                    <div
                        className="
                            mx-auto
                            mt-5
                            h-1
                            w-16
                            rounded-full
                            bg-green-600
                        "
                    />


                    {/* Description */}

                    <p
                        className="
                            mt-6
                            text-base
                            leading-8
                            text-slate-600
                            md:text-lg
                        "
                    >

                        Desa Panca Tunggal memiliki berbagai potensi
                        yang menjadi sumber kekuatan ekonomi, sosial,
                        dan budaya masyarakat. Potensi-potensi ini terus
                        dikembangkan untuk meningkatkan kesejahteraan
                        warga desa.

                    </p>

                </div>


                {/* =====================================================
                    CATEGORY GRID
                ===================================================== */}

                <div
                    className="
                        grid
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-8
                    "
                >

                    {categories.map((item, index) => {

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
                                    border-gray-200
                                    bg-white
                                    p-7
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-green-200
                                    hover:shadow-2xl
                                    sm:p-8
                                "
                            >

                                {/* Hover background */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-20
                                        -top-20
                                        h-40
                                        w-40
                                        rounded-full
                                        bg-green-50
                                        opacity-0
                                        transition-all
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                />


                                {/* =================================================
                                    ICON
                                ================================================= */}

                                <div className="relative">

                                    <div
                                        className="
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-green-100
                                            bg-green-50
                                            transition-all
                                            duration-500
                                            group-hover:border-green-700
                                            group-hover:bg-green-700
                                            group-hover:shadow-lg
                                            group-hover:shadow-green-700/20
                                        "
                                    >

                                        <Icon
                                            size={30}
                                            strokeWidth={1.8}
                                            className="
                                                text-green-700
                                                transition-all
                                                duration-500
                                                group-hover:text-white
                                            "
                                        />

                                    </div>

                                </div>


                                {/* =================================================
                                    TOTAL
                                ================================================= */}

                                <div className="relative mt-7">

                                    <span
                                        className="
                                            inline-flex
                                            rounded-full
                                            bg-green-50
                                            px-3
                                            py-1
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-wide
                                            text-green-700
                                            transition
                                            group-hover:bg-green-100
                                        "
                                    >
                                        {item.total}
                                    </span>

                                </div>


                                {/* =================================================
                                    TITLE
                                ================================================= */}

                                <h3
                                    className="
                                        relative
                                        mt-4
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                        transition-colors
                                        duration-300
                                        group-hover:text-green-700
                                    "
                                >

                                    {item.title}

                                </h3>


                                {/* =================================================
                                    DESCRIPTION
                                ================================================= */}

                                <p
                                    className="
                                        relative
                                        mt-4
                                        min-h-[84px]
                                        text-sm
                                        leading-7
                                        text-slate-600
                                        sm:text-base
                                    "
                                >

                                    {item.description}

                                </p>

                                {/* =================================================
                                    BOTTOM ACCENT
                                ================================================= */}

                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        h-1
                                        w-0
                                        bg-green-700
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />

                            </div>

                        );

                    })}

                </div>


                {/* =====================================================
                    BOTTOM INFORMATION
                ================================================= */}

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="
                        mt-12
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        text-center
                        sm:flex-row
                    "
                >

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-green-100
                        "
                    >

                        <Sprout
                            size={19}
                            className="text-green-700"
                        />

                    </div>

                    <p
                        className="
                            text-sm
                            leading-6
                            text-slate-500
                            sm:text-base
                        "
                    >

                        Potensi lokal menjadi kekuatan untuk membangun
                        Desa Panca Tunggal yang mandiri dan berdaya saing.

                    </p>

                </div>

            </div>

        </section>

    );
}