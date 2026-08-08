import {
    X,
    ClipboardList,
    User,
    Globe,
    Clock,
    ShieldCheck,
} from "lucide-react";

export default function ActivityLogDetailModal({
    open,
    onClose,
    activity,
}) {
    if (!open || !activity) return null;

    /*
    |--------------------------------------------------------------------------
    | Method Color
    |--------------------------------------------------------------------------
    */

    const getMethodClass = (method) => {
        switch (method) {
            case "GET":
                return "bg-blue-50 text-blue-700";

            case "POST":
                return "bg-green-50 text-green-700";

            case "PUT":
                return "bg-yellow-50 text-yellow-700";

            case "PATCH":
                return "bg-orange-50 text-orange-700";

            default:
                return "bg-red-50 text-red-700";
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div
                className="
                    flex
                    w-full
                    max-w-2xl
                    max-h-[90vh]
                    flex-col
                    overflow-hidden
                    rounded-xl
                    bg-white
                    shadow-xl
                "
            >

                {/* HEADER */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-100
                        px-5
                        py-4
                    "
                >
                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-blue-50
                                text-blue-600
                            "
                        >
                            <ClipboardList size={17} />
                        </div>

                        <div>
                            <h2 className="text-base font-semibold text-gray-800">
                                Detail Activity Log
                            </h2>

                            <p className="mt-0.5 text-xs text-gray-400">
                                Informasi aktivitas sistem
                            </p>
                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            text-gray-400
                            transition
                            hover:bg-gray-100
                            hover:text-gray-700
                        "
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* BODY */}

                <div className="overflow-y-auto">

                    <div className="space-y-6 px-5 py-5">

                        {/* INFORMASI AKTIVITAS */}

                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-blue-50
                                        text-blue-600
                                    "
                                >
                                    <ClipboardList size={16} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Informasi Aktivitas
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Detail aktivitas yang dilakukan
                                    </p>
                                </div>

                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {/* Activity */}

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        Activity
                                    </p>

                                    <p className="text-sm font-semibold text-gray-800">
                                        {activity.activity || "-"}
                                    </p>
                                </div>

                                {/* Module */}

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        Module
                                    </p>

                                    <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                                        {activity.module || "-"}
                                    </span>
                                </div>

                                {/* Status */}

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        Status
                                    </p>

                                    <span
                                        className={`
                                            inline-flex
                                            rounded-full
                                            px-2.5
                                            py-1
                                            text-xs
                                            font-medium
                                            ${
                                                activity.status === "success"
                                                    ? "bg-green-50 text-green-700"
                                                    : "bg-red-50 text-red-700"
                                            }
                                        `}
                                    >
                                        {activity.status || "-"}
                                    </span>
                                </div>

                                {/* Method */}

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        HTTP Method
                                    </p>

                                    <span
                                        className={`
                                            inline-flex
                                            rounded-full
                                            px-2.5
                                            py-1
                                            text-xs
                                            font-medium
                                            ${getMethodClass(
                                                activity.method
                                            )}
                                        `}
                                    >
                                        {activity.method || "-"}
                                    </span>
                                </div>

                            </div>

                        </section>

                        <div className="border-t border-gray-100" />

                        {/* USER */}

                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-green-50
                                        text-green-600
                                    "
                                >
                                    <User size={16} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Informasi Pengguna
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Pengguna yang melakukan aktivitas
                                    </p>
                                </div>

                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        Nama
                                    </p>

                                    <p className="text-sm text-gray-700">
                                        {activity.user?.name ?? "-"}
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        Role
                                    </p>

                                    <p className="text-sm text-gray-700">
                                        {activity.user?.role ?? "-"}
                                    </p>
                                </div>

                            </div>

                        </section>

                        <div className="border-t border-gray-100" />

                        {/* DETAIL REQUEST */}

                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-purple-50
                                        text-purple-600
                                    "
                                >
                                    <Globe size={16} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Detail Request
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Informasi request yang diterima sistem
                                    </p>
                                </div>

                            </div>

                            <div className="space-y-4">

                                {/* Description */}

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        Description
                                    </p>

                                    <div
                                        className="
                                            rounded-lg
                                            border
                                            border-gray-200
                                            bg-gray-50
                                            px-3
                                            py-2.5
                                            text-sm
                                            leading-relaxed
                                            text-gray-700
                                        "
                                    >
                                        {activity.description ?? "-"}
                                    </div>
                                </div>

                                {/* URL */}

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        URL
                                    </p>

                                    <div
                                        className="
                                            break-all
                                            rounded-lg
                                            border
                                            border-gray-200
                                            bg-gray-50
                                            px-3
                                            py-2.5
                                            text-xs
                                            text-gray-600
                                        "
                                    >
                                        {activity.url || "-"}
                                    </div>
                                </div>

                            </div>

                        </section>

                        <div className="border-t border-gray-100" />

                        {/* INFORMASI TEKNIS */}

                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-yellow-50
                                        text-yellow-600
                                    "
                                >
                                    <ShieldCheck size={16} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Informasi Teknis
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Informasi teknis aktivitas
                                    </p>
                                </div>

                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {/* IP */}

                                <div>
                                    <p className="mb-1 text-xs font-medium text-gray-500">
                                        IP Address
                                    </p>

                                    <div
                                        className="
                                            rounded-lg
                                            border
                                            border-gray-200
                                            bg-gray-50
                                            px-3
                                            py-2.5
                                            text-sm
                                            text-gray-700
                                        "
                                    >
                                        {activity.ip_address || "-"}
                                    </div>
                                </div>

                                {/* Created */}

                                <div>
                                    <p className="mb-1 flex items-center gap-1 text-xs font-medium text-gray-500">
                                        <Clock size={12} />
                                        Created At
                                    </p>

                                    <div
                                        className="
                                            rounded-lg
                                            border
                                            border-gray-200
                                            bg-gray-50
                                            px-3
                                            py-2.5
                                            text-sm
                                            text-gray-700
                                        "
                                    >
                                        {activity.created_at || "-"}
                                    </div>
                                </div>

                            </div>

                            {/* User Agent */}

                            <div className="mt-4">

                                <p className="mb-1 text-xs font-medium text-gray-500">
                                    User Agent
                                </p>

                                <div
                                    className="
                                        break-all
                                        rounded-lg
                                        border
                                        border-gray-200
                                        bg-gray-50
                                        px-3
                                        py-2.5
                                        text-xs
                                        leading-relaxed
                                        text-gray-600
                                    "
                                >
                                    {activity.user_agent || "-"}
                                </div>

                            </div>

                        </section>

                    </div>
                </div>

                {/* FOOTER */}

                <div
                    className="
                        flex
                        flex-col-reverse
                        gap-2
                        border-t
                        border-gray-100
                        bg-gray-50
                        px-5
                        py-4
                        sm:flex-row
                        sm:justify-end
                    "
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            h-10
                            w-full
                            rounded-lg
                            border
                            border-gray-200
                            bg-white
                            px-5
                            text-sm
                            font-medium
                            text-gray-600
                            transition
                            hover:bg-gray-50
                            sm:w-auto
                        "
                    >
                        Tutup
                    </button>
                </div>

            </div>
        </div>
    );
}