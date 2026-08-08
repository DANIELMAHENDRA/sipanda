import { Users, ShieldCheck } from "lucide-react";

export default function LatestUsers({ users = [] }) {
    return (
        <div className="
            bg-white
            rounded-2xl
            border
            border-gray-100
            shadow-sm
            overflow-hidden
        ">

            {/* Header */}
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
                        bg-blue-100
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        shrink-0
                    ">
                        <Users size={20} />
                    </div>

                    <div className="min-w-0">

                        <h2 className="
                            text-base
                            sm:text-lg
                            font-semibold
                            text-gray-800
                        ">
                            Pengguna Terbaru
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                            Akun administrator terbaru.
                        </p>

                    </div>

                </div>

            </div>

            {/* Body */}
            <div className="divide-y divide-gray-100">

                {users.length === 0 ? (
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
                            <Users
                                size={22}
                                className="text-gray-400"
                            />
                        </div>

                        <p className="text-sm text-gray-500">
                            Belum ada pengguna.
                        </p>

                    </div>
                ) : (
                    users.map((user) => (
                        <div
                            key={user.id}
                            className="
                                px-5
                                sm:px-6
                                py-4
                                flex
                                items-center
                                justify-between
                                gap-4
                                hover:bg-gray-50
                                transition
                            "
                        >

                            {/* User */}
                            <div className="
                                flex
                                items-center
                                gap-3
                                min-w-0
                            ">

                                <div className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-green-100
                                    text-green-700
                                    flex
                                    items-center
                                    justify-center
                                    font-semibold
                                    shrink-0
                                    overflow-hidden
                                ">

                                    {user.photo ? (
                                        <img
                                            src={user.photo}
                                            alt={user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        user.name
                                            ?.charAt(0)
                                            ?.toUpperCase() || "U"
                                    )}

                                </div>

                                <div className="min-w-0">

                                    <h4 className="
                                        font-semibold
                                        text-sm
                                        text-gray-800
                                        truncate
                                    ">
                                        {user.name || "-"}
                                    </h4>

                                    <p className="
                                        text-xs
                                        sm:text-sm
                                        text-gray-500
                                        truncate
                                    ">
                                        {user.email || "-"}
                                    </p>

                                </div>

                            </div>

                            {/* Role */}
                            <span className="
                                inline-flex
                                items-center
                                gap-1.5
                                px-2.5
                                py-1
                                rounded-full
                                bg-blue-50
                                text-blue-700
                                text-[10px]
                                sm:text-xs
                                font-semibold
                                whitespace-nowrap
                                shrink-0
                            ">

                                <ShieldCheck size={13} />

                                {user.role || "-"}

                            </span>

                        </div>
                    ))
                )}

            </div>

        </div>
    );
}