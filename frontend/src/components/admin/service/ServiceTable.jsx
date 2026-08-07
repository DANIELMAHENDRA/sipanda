import {
    Pencil,
    Trash2,
    CheckCircle,
    XCircle,
} from "lucide-react";

export default function ServiceTable({

    services,

    loading,

    onEdit,

    onDelete,

}) {

    if (loading) {

        return (

            <div className="bg-white rounded-xl shadow p-8 text-center">

                Memuat data layanan...

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-4 py-3 text-left">
                                No
                            </th>

                            <th className="px-4 py-3 text-left">
                                Judul
                            </th>

                            <th className="px-4 py-3 text-left">
                                Icon
                            </th>

                            <th className="px-4 py-3 text-left">
                                Penanggung Jawab
                            </th>

                            <th className="px-4 py-3 text-left">
                                Biaya
                            </th>

                            <th className="px-4 py-3 text-center">
                                Status
                            </th>

                            <th className="px-4 py-3 text-center">
                                Aksi
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            services.length === 0 && (

                                <tr>

                                    <td
                                        colSpan={7}
                                        className="text-center py-8 text-gray-500"
                                    >

                                        Belum ada data layanan.

                                    </td>

                                </tr>

                            )

                        }

                        {

                            services.map((service, index) => (

                                <tr

                                    key={service.id}

                                    className="border-t"

                                >

                                    <td className="px-4 py-3">

                                        {index + 1}

                                    </td>

                                    <td className="px-4 py-3 font-medium">

                                        {service.title}

                                    </td>

                                    <td className="px-4 py-3">

                                        {service.icon}

                                    </td>

                                    <td className="px-4 py-3">

                                        {service.person_in_charge}

                                    </td>

                                    <td className="px-4 py-3">

                                        {service.cost}

                                    </td>

                                    <td className="px-4 py-3 text-center">

                                        {

                                            service.is_active ? (

                                                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm">

                                                    <CheckCircle size={14} />

                                                    Aktif

                                                </span>

                                            ) : (

                                                <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-red-700 text-sm">

                                                    <XCircle size={14} />

                                                    Nonaktif

                                                </span>

                                            )

                                        }

                                    </td>

                                    <td className="px-4 py-3">

                                        <div className="flex justify-center gap-2">

                                            <button

                                                onClick={() => onEdit(service)}

                                                className="rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"

                                            >

                                                <Pencil size={18} />

                                            </button>

                                            <button

                                                onClick={() => onDelete(service)}

                                                className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"

                                            >

                                                <Trash2 size={18} />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}