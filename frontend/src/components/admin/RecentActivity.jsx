import {
    Clock3,
    User,
    CheckCircle2,
    XCircle,
} from "lucide-react";

export default function RecentActivity({

    activities = [],

}) {

    return (

        <div className="bg-white rounded-xl shadow border border-gray-100">

            {/* Header */}

            <div className="px-6 py-4 border-b">

                <h2 className="text-lg font-semibold text-gray-800">

                    Aktivitas Terbaru

                </h2>

                <p className="text-sm text-gray-500 mt-1">

                    Riwayat aktivitas administrator.

                </p>

            </div>

            {/* Body */}

            <div className="divide-y">

                {

                    activities.length === 0 ? (

                        <div className="p-6 text-center text-gray-500">

                            Belum ada aktivitas.

                        </div>

                    ) : (

                        activities.map((activity) => (

                            <div
                                key={activity.id}
                                className="p-5 hover:bg-gray-50 transition"
                            >

                                <div className="flex items-start justify-between">

                                    <div className="flex gap-3">

                                        <div
                                            className={`
                                                w-10
                                                h-10
                                                rounded-full
                                                flex
                                                items-center
                                                justify-center
                                                ${
                                                    activity.status === "success"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-red-100 text-red-600"
                                                }
                                            `}
                                        >

                                            {

                                                activity.status === "success"

                                                    ? <CheckCircle2 size={20} />

                                                    : <XCircle size={20} />

                                            }

                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-gray-800">

                                                {activity.activity}

                                            </h3>

                                            <p className="text-sm text-gray-500">

                                                {activity.description}

                                            </p>

                                            <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-400">

                                                <span className="flex items-center gap-1">

                                                    <User size={14} />

                                                    {activity.user?.name ?? "-"}

                                                </span>

                                                <span>

                                                    {activity.module}

                                                </span>

                                                <span>

                                                    {activity.method}

                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="flex items-center gap-1 text-xs text-gray-400">

                                        <Clock3 size={14} />

                                        {activity.created_at}

                                    </div>

                                </div>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}