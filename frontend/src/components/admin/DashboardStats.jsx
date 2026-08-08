import {
    Newspaper,
    Images,
    Landmark,
    Users,
} from "lucide-react";

export default function DashboardStats({ statistics }) {
    if (!statistics) return null;

    const cards = [
        {
            title: "Total Berita",
            value: statistics.news?.total ?? 0,
            icon: Newspaper,
            color: "blue",
        },
        {
            title: "Total Galeri",
            value: statistics.gallery ?? 0,
            icon: Images,
            color: "green",
        },
        {
            title: "Total Potensi",
            value: statistics.potential ?? 0,
            icon: Landmark,
            color: "orange",
        },
        {
            title: "Total Pengguna",
            value: statistics.users?.total ?? 0,
            icon: Users,
            color: "purple",
        },
    ];

    const colorClasses = {
        blue: {
            icon: "bg-blue-100 text-blue-600",
        },
        green: {
            icon: "bg-green-100 text-green-600",
        },
        orange: {
            icon: "bg-orange-100 text-orange-600",
        },
        purple: {
            icon: "bg-purple-100 text-purple-600",
        },
    };

    return (
        <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-4
            lg:gap-5
        ">

            {cards.map((card) => {
                const Icon = card.icon;
                const colors = colorClasses[card.color];

                return (
                    <div
                        key={card.title}
                        className="
                            bg-white
                            rounded-2xl
                            border
                            border-gray-100
                            shadow-sm
                            p-5
                            sm:p-6
                            hover:shadow-md
                            transition
                        "
                    >

                        <div className="
                            flex
                            items-center
                            justify-between
                            gap-4
                        ">

                            <div className="min-w-0">

                                <p className="
                                    text-xs
                                    sm:text-sm
                                    font-medium
                                    text-gray-500
                                ">
                                    {card.title}
                                </p>

                                <h2 className="
                                    mt-2
                                    text-2xl
                                    sm:text-3xl
                                    font-bold
                                    text-gray-800
                                    tracking-tight
                                ">
                                    {card.value}
                                </h2>

                            </div>

                            <div className={`
                                w-11
                                h-11
                                sm:w-12
                                sm:h-12
                                lg:w-14
                                lg:h-14
                                rounded-xl
                                flex
                                items-center
                                justify-center
                                shrink-0
                                ${colors.icon}
                            `}>

                                <Icon
                                    size={24}
                                    className="sm:w-7 sm:h-7"
                                />

                            </div>

                        </div>

                    </div>
                );
            })}

        </div>
    );
}