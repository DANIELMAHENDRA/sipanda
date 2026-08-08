import { Eye } from "lucide-react";

export default function ActivityLogTable({
    logs,
    loading,
    onDetail,
}) {
    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {
        return (
            <div className="rounded-xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <p className="text-sm text-gray-500">
                    Memuat data activity log...
                </p>
            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Empty
    |--------------------------------------------------------------------------
    */

    if (!logs.length) {
        return (
            <div className="rounded-xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-medium text-gray-600">
                    Belum ada data Activity Log
                </p>

                <p className="mt-1 text-xs text-gray-400">
                    Aktivitas sistem akan ditampilkan di sini.
                </p>
            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Table
    |--------------------------------------------------------------------------
    */

    return (
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

            {/* TABLE */}

            <div className="w-full overflow-x-auto">

                <table className="min-w-[1000px] w-full">

                    {/* HEADER */}

                    <thead className="border-b border-gray-100 bg-gray-50">

                        <tr>

                            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Aktivitas
                            </th>

                            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Module
                            </th>

                            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                User
                            </th>

                            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Status
                            </th>

                            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Method
                            </th>

                            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Waktu
                            </th>

                            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Aksi
                            </th>

                        </tr>

                    </thead>

                    {/* BODY */}

                    <tbody className="divide-y divide-gray-100">

                        {logs.map((log) => (

                            <tr
                                key={log.id}
                                className="transition hover:bg-gray-50/70"
                            >

                                {/* AKTIVITAS */}

                                <td className="px-5 py-4">

                                    <p className="
                                        max-w-[220px]
                                        truncate
                                        text-sm
                                        font-semibold
                                        text-gray-800
                                    ">
                                        {log.activity}
                                    </p>

                                </td>

                                {/* MODULE */}

                                <td className="px-5 py-4">

                                    <span className="
                                        inline-flex
                                        rounded-md
                                        bg-gray-100
                                        px-2.5
                                        py-1
                                        text-xs
                                        font-medium
                                        text-gray-600
                                    ">
                                        {log.module}
                                    </span>

                                </td>

                                {/* USER */}

                                <td className="px-5 py-4">

                                    <p className="
                                        max-w-[180px]
                                        truncate
                                        text-sm
                                        font-medium
                                        text-gray-700
                                    ">
                                        {log.user?.name ?? "-"}
                                    </p>

                                </td>

                                {/* STATUS */}

                                <td className="px-5 py-4 text-center">

                                    <span
                                        className={`
                                            inline-flex
                                            rounded-full
                                            px-2.5
                                            py-1
                                            text-xs
                                            font-medium
                                            ${
                                                log.status === "success"
                                                    ? "bg-green-50 text-green-700"
                                                    : "bg-red-50 text-red-700"
                                            }
                                        `}
                                    >
                                        {log.status}
                                    </span>

                                </td>

                                {/* METHOD */}

                                <td className="px-5 py-4 text-center">

                                    <span
                                        className={`
                                            inline-flex
                                            rounded-full
                                            px-2.5
                                            py-1
                                            text-xs
                                            font-medium
                                            ${
                                                log.method === "GET"
                                                    ? "bg-blue-50 text-blue-700"
                                                    : log.method === "POST"
                                                    ? "bg-green-50 text-green-700"
                                                    : log.method === "PUT"
                                                    ? "bg-yellow-50 text-yellow-700"
                                                    : log.method === "PATCH"
                                                    ? "bg-orange-50 text-orange-700"
                                                    : "bg-red-50 text-red-700"
                                            }
                                        `}
                                    >
                                        {log.method}
                                    </span>

                                </td>

                                {/* WAKTU */}

                                <td className="px-5 py-4">

                                    <p className="
                                        whitespace-nowrap
                                        text-sm
                                        text-gray-600
                                    ">
                                        {log.created_at}
                                    </p>

                                </td>

                                {/* AKSI */}

                                <td className="px-5 py-4">

                                    <div className="flex justify-center">

                                        <button
                                            type="button"
                                            onClick={() => onDetail(log)}
                                            title="Lihat Detail"
                                            className="
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-lg
                                                border
                                                border-blue-100
                                                bg-blue-50
                                                text-blue-600
                                                transition
                                                hover:bg-blue-100
                                            "
                                        >
                                            <Eye size={15} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* MOBILE SCROLL HINT */}

            <div className="
                border-t
                border-gray-100
                bg-gray-50
                px-4
                py-2
                text-center
                text-[11px]
                text-gray-400
                sm:hidden
            ">
                Geser ke samping untuk melihat kolom lainnya
            </div>

        </div>
    );
}