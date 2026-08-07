import { Pencil, Trash2 } from "lucide-react";

export default function GovernmentTable({

    government,

    loading,

    onEdit,

    onDelete,

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

    /*
    |--------------------------------------------------------------------------
    | Empty
    |--------------------------------------------------------------------------
    */

    if (!government.length) {

        return (

            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">

                Belum ada data pemerintahan.

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="min-w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="px-5 py-3 text-left">

                            Foto

                        </th>

                        <th className="px-5 py-3 text-left">

                            Nama

                        </th>

                        <th className="px-5 py-3 text-left">

                            Jabatan

                        </th>

                        <th className="px-5 py-3 text-center">

                            Kepala Desa

                        </th>

                        <th className="px-5 py-3 text-center">

                            Urutan

                        </th>

                        <th className="px-5 py-3 text-center">

                            Status

                        </th>

                        <th className="px-5 py-3 text-center">

                            Aksi

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        government.map((item) => (

                            <tr

                                key={item.id}

                                className="border-t"

                            >

                                {/* Foto */}

                                <td className="px-5 py-3">

                                    {

                                        item.photo ? (

                                            <img

                                                src={item.photo}

                                                alt={item.name}

                                                className="w-14 h-14 rounded-lg object-cover"

                                            />

                                        ) : (

                                            <div className="w-14 h-14 rounded-lg bg-gray-200" />

                                        )

                                    }

                                </td>

                                {/* Nama */}

                                <td className="px-5 py-3 font-medium">

                                    {item.name}

                                </td>

                                {/* Jabatan */}

                                <td className="px-5 py-3">

                                    {item.position}

                                </td>

                                {/* Kepala */}

                                <td className="px-5 py-3 text-center">

                                    {

                                        item.is_head

                                            ? "Ya"

                                            : "Tidak"

                                    }

                                </td>

                                {/* Order */}

                                <td className="px-5 py-3 text-center">

                                    {item.order_number}

                                </td>

                                {/* Status */}

                                <td className="px-5 py-3 text-center">

                                    <span

                                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            item.status === "published"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}

                                    >

                                        {item.status}

                                    </span>

                                </td>

                                {/* Action */}

                                <td className="px-5 py-3">

                                    <div className="flex justify-center gap-2">

                                        <button

                                            onClick={() => onEdit(item)}

                                            className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200"

                                        >

                                            <Pencil

                                                size={18}

                                                className="text-yellow-700"

                                            />

                                        </button>

                                        <button

                                            onClick={() => onDelete(item)}

                                            className="p-2 rounded-lg bg-red-100 hover:bg-red-200"

                                        >

                                            <Trash2

                                                size={18}

                                                className="text-red-700"

                                            />

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}