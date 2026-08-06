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
            value: statistics.news.total,
            icon: Newspaper,
            color: "bg-blue-500",
        },

        {
            title: "Total Galeri",
            value: statistics.gallery,
            icon: Images,
            color: "bg-green-500",
        },

        {
            title: "Total Potensi",
            value: statistics.potential,
            icon: Landmark,
            color: "bg-orange-500",
        },

        {
            title: "Total Pengguna",
            value: statistics.users.total,
            icon: Users,
            color: "bg-purple-500",
        },

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {

                cards.map((card) => {

                    const Icon = card.icon;

                    return (

                        <div
                            key={card.title}
                            className="bg-white rounded-xl shadow p-6"
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-gray-500 text-sm">

                                        {card.title}

                                    </p>

                                    <h2 className="text-3xl font-bold mt-2">

                                        {card.value}

                                    </h2>

                                </div>

                                <div
                                    className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
                                >

                                    <Icon size={28} />

                                </div>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

}