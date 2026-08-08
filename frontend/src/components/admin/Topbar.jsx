import { useEffect, useState } from "react";
import { UserCircle, CalendarDays } from "lucide-react";

import { useAuth } from "../../contexts/AuthContext";

export default function Topbar() {
    const { user } = useAuth();

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            setCurrentTime(
                now.toLocaleString("id-ID", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        };

        updateTime();

        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">

            <div className="px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">

                <div className="flex items-center justify-between gap-3 sm:gap-5">

                    {/* =================================================
                        LEFT
                    ================================================== */}
                    <div className="min-w-0 pl-12 lg:pl-0">

                        <h1 className="
                            text-base
                            sm:text-lg
                            lg:text-xl
                            font-bold
                            text-gray-800
                            truncate
                        ">
                            Dashboard Administrator
                        </h1>

                        <div className="
                            flex
                            items-center
                            gap-1.5
                            sm:gap-2
                            mt-1
                            text-[11px]
                            sm:text-xs
                            lg:text-sm
                            text-gray-500
                        ">

                            <CalendarDays
                                size={14}
                                className="shrink-0"
                            />

                            <span className="truncate">
                                {currentTime}
                            </span>

                        </div>

                    </div>

                    {/* =================================================
                        RIGHT
                    ================================================== */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">

                        {/* User Info */}
                        <div className="hidden md:block text-right min-w-0">

                            <p className="
                                font-semibold
                                text-gray-800
                                text-sm
                                lg:text-base
                                truncate
                                max-w-[180px]
                                lg:max-w-[240px]
                            ">
                                {user?.name ?? "-"}
                            </p>

                            <p className="text-xs text-gray-500 capitalize">
                                {user?.role?.replace("_", " ") ?? "-"}
                            </p>

                        </div>

                        {/* Avatar */}
                        <div className="
                            w-9
                            h-9
                            sm:w-10
                            sm:h-10
                            lg:w-11
                            lg:h-11
                            rounded-full
                            bg-green-100
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            shrink-0
                            border
                            border-green-200
                        ">

                            {user?.photo ? (
                                <img
                                    src={user.photo}
                                    alt={user?.name || "User"}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <UserCircle
                                    size={26}
                                    className="text-green-700"
                                />
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </header>
    );
}