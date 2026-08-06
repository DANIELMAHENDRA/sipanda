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

        const interval = setInterval(updateTime, 1000 * 60);

        return () => clearInterval(interval);

    }, []);

    return (

        <header className="bg-white shadow-sm border-b px-8 py-5 flex items-center justify-between">

            {/* Left */}

            <div>

                <h1 className="text-2xl font-bold text-gray-800">

                    Dashboard Administrator

                </h1>

                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">

                    <CalendarDays size={16} />

                    <span>{currentTime}</span>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

                <div className="text-right">

                    <p className="font-semibold text-gray-800">

                        {user?.name ?? "-"}

                    </p>

                    <span className="text-sm text-gray-500 capitalize">

                        {user?.role?.replace("_", " ")}

                    </span>

                </div>

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">

                    {

                        user?.photo ? (

                            <img

                                src={user.photo}

                                alt={user.name}

                                className="w-12 h-12 rounded-full object-cover"

                            />

                        ) : (

                            <UserCircle

                                size={34}

                                className="text-green-700"

                            />

                        )

                    }

                </div>

            </div>

        </header>

    );

}