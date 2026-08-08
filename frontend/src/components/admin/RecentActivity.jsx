import {
    Clock3,
    User,
    CheckCircle2,
    XCircle,
    Activity,
} from "lucide-react";

export default function RecentActivity({
    activities = [],
}) {
    return (
        <div className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            border-gray-100
            overflow-hidden
        ">

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div className="
                px-5
                sm:px-6
                py-4
                border-b
                border-gray-100
            ">

                <div className="flex items-center gap-3">

                    <div className="
                        w-10
                        h-10
                        rounded-xl
                        bg-purple-100
                        text-purple-600
                        flex
                        items-center
                        justify-center
                        shrink-0
                    ">
                        <Activity size={20} />
                    </div>

                    <div>

                        <h2 className="
                            text-base
                            sm:text-lg
                            font-semibold
                            text-gray-800
                        ">
                            Aktivitas Terbaru
                        </h2>

                        <p className="
                            text-xs
                            sm:text-sm
                            text-gray-500
                            mt-0.5
                        ">
                            Riwayat aktivitas administrator.
                        </p>

                    </div>

                </div>

            </div>

            {/* =====================================================
                BODY
            ====================================================== */}

            <div className="divide-y divide-gray-100">

                {activities.length === 0 ? (
                    <div className="
                        px-5
                        sm:px-6
                        py-12
                        text-center
                    ">

                        <div className="
                            w-12
                            h-12
                            mx-auto
                            rounded-full
                            bg-gray-100
                            flex
                            items-center
                            justify-center
                            mb-3
                        ">
                            <Activity
                                size={22}
                                className="text-gray-400"
                            />
                        </div>

                        <p className="text-sm text-gray-500">
                            Belum ada aktivitas.
                        </p>

                    </div>
                ) : (
                    activities.map((activity) => {

                        const success =
                            activity.status === "success";

                        return (
                            <div
                                key={activity.id}
                                className="
                                    px-5
                                    sm:px-6
                                    py-4
                                    sm:py-5
                                    hover:bg-gray-50
                                    transition
                                "
                            >

                                <div className="
                                    flex
                                    items-start
                                    gap-3
                                    sm:gap-4
                                ">

                                    {/* Status Icon */}
                                    <div className={`
                                        w-9
                                        h-9
                                        sm:w-10
                                        sm:h-10
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                        ${
                                            success
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                        }
                                    `}>

                                        {success ? (
                                            <CheckCircle2 size={19} />
                                        ) : (
                                            <XCircle size={19} />
                                        )}

                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1">

                                        <div className="
                                            flex
                                            flex-col
                                            lg:flex-row
                                            lg:items-start
                                            lg:justify-between
                                            gap-1
                                            lg:gap-4
                                        ">

                                            <div className="min-w-0">

                                                <h3 className="
                                                    text-sm
                                                    sm:text-base
                                                    font-semibold
                                                    text-gray-800
                                                    leading-5
                                                ">
                                                    {activity.activity || "-"}
                                                </h3>

                                                <p className="
                                                    text-xs
                                                    sm:text-sm
                                                    text-gray-500
                                                    mt-1
                                                    leading-5
                                                ">
                                                    {activity.description || "-"}
                                                </p>

                                            </div>

                                            {/* Time */}
                                            <div className="
                                                flex
                                                items-center
                                                gap-1
                                                text-[10px]
                                                sm:text-xs
                                                text-gray-400
                                                whitespace-nowrap
                                                shrink-0
                                            ">

                                                <Clock3 size={13} />

                                                {activity.created_at || "-"}

                                            </div>

                                        </div>

                                        {/* Metadata */}
                                        <div className="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-x-3
                                            gap-y-2
                                            mt-3
                                        ">

                                            <span className="
                                                inline-flex
                                                items-center
                                                gap-1
                                                text-[10px]
                                                sm:text-xs
                                                text-gray-500
                                            ">

                                                <User size={13} />

                                                {activity.user?.name ?? "-"}

                                            </span>

                                            {activity.module && (
                                                <span className="
                                                    px-2
                                                    py-1
                                                    rounded-md
                                                    bg-gray-100
                                                    text-gray-600
                                                    text-[10px]
                                                    sm:text-xs
                                                ">
                                                    {activity.module}
                                                </span>
                                            )}

                                            {activity.method && (
                                                <span className="
                                                    px-2
                                                    py-1
                                                    rounded-md
                                                    bg-gray-100
                                                    text-gray-600
                                                    text-[10px]
                                                    sm:text-xs
                                                ">
                                                    {activity.method}
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                </div>

                            </div>
                        );
                    })
                )}

            </div>

        </div>
    );
}