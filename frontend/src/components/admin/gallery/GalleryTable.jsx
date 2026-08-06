import { Pencil, Trash2 } from "lucide-react";

export default function GalleryTable({

    gallery,

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

                <p className="text-gray-500">

                    Memuat data galeri...

                </p>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Empty
    |--------------------------------------------------------------------------
    */

    if (!gallery.length) {

        return (

            <div className="bg-white rounded-xl shadow p-10 text-center">

                <p className="text-gray-500">

                    Belum ada data galeri.

                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="min-w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="px-5 py-4 text-left">

                            Thumbnail

                        </th>

                        <th className="px-5 py-4 text-left">

                            Judul

                        </th>

                        <th className="px-5 py-4 text-left">

                            Kategori

                        </th>

                        <th className="px-5 py-4 text-left">

                            Status

                        </th>

                        <th className="px-5 py-4 text-center">

                            Aksi

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        gallery.map((item) => (

                            <tr

                                key={item.id}

                                className="border-t"

                            >

                                {/* Thumbnail */}

                                <td className="px-5 py-4">

                                    {

                                        item.image ? (

                                            <img

                                                src={item.image}

                                                alt={item.title}

                                                className="w-24 h-16 rounded-lg object-cover"

                                            />

                                        ) : (

                                            <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">

                                                No Image

                                            </div>

                                        )

                                    }

                                </td>

                                {/* Title */}

                                <td className="px-5 py-4 font-medium">

                                    {item.title}

                                </td>

                                {/* Category */}

                                <td className="px-5 py-4">

                                    {item.category}

                                </td>

                                {/* Status */}

                                <td className="px-5 py-4">

                                    <span

                                        className={`px-3 py-1 rounded-full text-sm ${

                                            item.status === "published"

                                                ? "bg-green-100 text-green-700"

                                                : "bg-yellow-100 text-yellow-700"

                                        }`}

                                    >

                                        {item.status}

                                    </span>

                                </td>

                                {/* Action */}

                                <td className="px-5 py-4">

                                    <div className="flex items-center justify-center gap-3">

                                        <button

                                            onClick={() => onEdit(item)}

                                            className="text-blue-600 hover:text-blue-800"

                                        >

                                            <Pencil size={18} />

                                        </button>

                                        <button

                                            onClick={() => onDelete(item)}

                                            className="text-red-600 hover:text-red-800"

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

    );

}