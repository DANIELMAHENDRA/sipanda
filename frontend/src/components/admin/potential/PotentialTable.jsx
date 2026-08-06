import { Pencil, Trash2, Star } from "lucide-react";

export default function PotentialTable({

    potential,

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

            <div className="bg-white rounded-xl shadow p-10 text-center">

                Memuat data...

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="min-w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="px-5 py-3 text-left">

                            Thumbnail

                        </th>

                        <th className="px-5 py-3 text-left">

                            Judul

                        </th>

                        <th className="px-5 py-3 text-left">

                            Kategori

                        </th>

                        <th className="px-5 py-3 text-center">

                            Featured

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

                        potential.length === 0 ? (

                            <tr>

                                <td

                                    colSpan={6}

                                    className="text-center py-10 text-gray-500"

                                >

                                    Belum ada data potensi.

                                </td>

                            </tr>

                        ) : (

                            potential.map((item) => (

                                <tr

                                    key={item.id}

                                    className="border-t"

                                >

                                    <td className="px-5 py-4">

                                        {

                                            item.thumbnail ? (

                                                <img

                                                    src={item.thumbnail}

                                                    alt={item.title}

                                                    className="w-20 h-14 rounded object-cover"

                                                />

                                            ) : (

                                                <div className="w-20 h-14 rounded bg-gray-200 flex items-center justify-center text-xs">

                                                    No Image

                                                </div>

                                            )

                                        }

                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="font-semibold">

                                            {item.title}

                                        </div>

                                    </td>

                                    <td className="px-5 py-4">

                                        {item.category}

                                    </td>

                                    <td className="px-5 py-4 text-center">

                                        {

                                            item.is_featured ? (

                                                <Star

                                                    size={18}

                                                    className="text-yellow-500 mx-auto fill-yellow-500"

                                                />

                                            ) : (

                                                "-"

                                            )

                                        }

                                    </td>

                                    <td className="px-5 py-4 text-center">

                                        <span

                                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                item.status === "published"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}

                                        >

                                            {item.status}

                                        </span>

                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="flex justify-center gap-2">

                                            <button

                                                onClick={() => onEdit(item)}

                                                className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"

                                            >

                                                <Pencil size={18} />

                                            </button>

                                            <button

                                                onClick={() => onDelete(item)}

                                                className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"

                                            >

                                                <Trash2 size={18} />

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