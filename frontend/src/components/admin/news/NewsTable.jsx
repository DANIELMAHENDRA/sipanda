import {
    Pencil,
    Trash2,
} from "lucide-react";

export default function NewsTable({

    news,

    loading,

    onEdit,

    onDelete,

}) {

    if (loading) {

        return (

            <div className="bg-white rounded-xl shadow p-8 text-center">

                Memuat data...

            </div>

        );

    }

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

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

                        <th className="px-5 py-3 text-left">
                            Status
                        </th>

                        <th className="px-5 py-3 text-left">
                            Penulis
                        </th>

                        <th className="px-5 py-3 text-center">
                            Aksi
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        news.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="py-10 text-center text-gray-500"
                                >

                                    Tidak ada data berita.

                                </td>

                            </tr>

                        ) : (

                            news.map(item => (

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
                                                    className="w-16 h-16 object-cover rounded"
                                                />

                                            ) : (

                                                "-"

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

                                    <td className="px-5 py-4">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                item.status === "published"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >

                                            {item.status}

                                        </span>

                                    </td>

                                    <td className="px-5 py-4">
                                        {item.author}
                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="flex justify-center gap-3">

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

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}