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

            <div className="bg-white rounded-xl shadow p-8 text-center">

                Memuat data...

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="min-w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="px-6 py-4 text-left text-sm font-semibold">

                            Aktivitas

                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">

                            Module

                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">

                            User

                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">

                            Status

                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">

                            Method

                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold">

                            Waktu

                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold">

                            Aksi

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        logs.length === 0 ? (

                            <tr>

                                <td

                                    colSpan="7"

                                    className="text-center py-8 text-gray-500"

                                >

                                    Belum ada data Activity Log.

                                </td>

                            </tr>

                        ) : (

                            logs.map((log) => (

                                <tr

                                    key={log.id}

                                    className="border-t hover:bg-gray-50"

                                >

                                    <td className="px-6 py-4">

                                        {log.activity}

                                    </td>

                                    <td className="px-6 py-4">

                                        {log.module}

                                    </td>

                                    <td className="px-6 py-4">

                                        {log.user?.name ?? "-"}

                                    </td>

                                    <td className="px-6 py-4">

                                        <span

                                            className={`px-3 py-1 rounded-full text-xs font-semibold
                                            ${
                                                log.status === "success"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}

                                        >

                                            {log.status}

                                        </span>

                                    </td>

                                    <td className="px-6 py-4">

                                        <span

                                            className={`px-3 py-1 rounded-full text-xs font-semibold
                                            ${
                                                log.method === "GET"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : log.method === "POST"
                                                    ? "bg-green-100 text-green-700"
                                                    : log.method === "PUT"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : log.method === "PATCH"
                                                    ? "bg-orange-100 text-orange-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}

                                        >

                                            {log.method}

                                        </span>

                                    </td>

                                    <td className="px-6 py-4">

                                        {log.created_at}

                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-center">

                                            <button

                                                onClick={() => onDetail(log)}

                                                className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"

                                            >

                                                <Eye size={18} />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}