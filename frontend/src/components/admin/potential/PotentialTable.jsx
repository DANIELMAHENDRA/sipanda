import { Pencil, Trash2 } from "lucide-react";

export default function PotentialTable({
    potential,
    loading,
    onEdit,
    onDelete,
}) {
    if (loading) {
        return (
            <div className="rounded-xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <p className="text-sm text-gray-500">
                    Memuat data potensi...
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

            {/* TABLE */}
            <div className="w-full overflow-x-auto">
                <table className="min-w-[850px] w-full">

                    {/* HEADER */}
                    <thead className="border-b border-gray-100 bg-gray-50">
                        <tr>

                            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Thumbnail
                            </th>

                            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Judul
                            </th>

                            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Kategori
                            </th>

                            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Featured
                            </th>

                            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Status
                            </th>

                            <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                                Aksi
                            </th>

                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="divide-y divide-gray-100">

                        {potential.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-5 py-12 text-center"
                                >
                                    <div className="flex flex-col items-center">

                                        <p className="text-sm font-medium text-gray-600">
                                            Belum ada data potensi
                                        </p>

                                        <p className="mt-1 text-xs text-gray-400">
                                            Data potensi akan ditampilkan di sini.
                                        </p>

                                    </div>
                                </td>
                            </tr>
                        ) : (
                            potential.map((item) => (
                                <tr
                                    key={item.id}
                                    className="transition hover:bg-gray-50/70"
                                >

                                    {/* THUMBNAIL */}
                                    <td className="px-5 py-4">
                                        {item.thumbnail ? (
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="
                                                    h-14
                                                    w-20
                                                    rounded-lg
                                                    border
                                                    border-gray-100
                                                    object-cover
                                                "
                                            />
                                        ) : (
                                            <div className="
                                                flex
                                                h-14
                                                w-20
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-gray-100
                                                text-xs
                                                text-gray-400
                                            ">
                                                Tidak ada gambar
                                            </div>
                                        )}
                                    </td>

                                    {/* TITLE */}
                                    <td className="px-5 py-4">
                                        <p className="
                                            max-w-[260px]
                                            truncate
                                            text-sm
                                            font-semibold
                                            text-gray-800
                                        ">
                                            {item.title}
                                        </p>
                                    </td>

                                    {/* CATEGORY */}
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
                                            {item.category}
                                        </span>
                                    </td>

                                    {/* FEATURED */}
                                    <td className="px-5 py-4 text-center">

                                        {item.is_featured ? (
                                            <span className="
                                                inline-flex
                                                rounded-full
                                                bg-yellow-50
                                                px-3
                                                py-1
                                                text-xs
                                                font-medium
                                                text-yellow-700
                                            ">
                                                Unggulan
                                            </span>
                                        ) : (
                                            <span className="
                                                inline-flex
                                                rounded-full
                                                bg-gray-100
                                                px-3
                                                py-1
                                                text-xs
                                                font-medium
                                                text-gray-500
                                            ">
                                                Tidak Unggulan
                                            </span>
                                        )}

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
                                                    item.status === "published"
                                                        ? "bg-green-50 text-green-700"
                                                        : "bg-yellow-50 text-yellow-700"
                                                }
                                            `}
                                        >
                                            {item.status === "published"
                                                ? "Published"
                                                : "Draft"}
                                        </span>

                                    </td>

                                    {/* ACTION */}
                                    <td className="px-5 py-4">

                                        <div className="flex justify-center gap-2">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onEdit(item)
                                                }
                                                title="Edit"
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
                                                <Pencil size={15} />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onDelete(item)
                                                }
                                                title="Hapus"
                                                className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    items-center
                                                    justify-center
                                                    rounded-lg
                                                    border
                                                    border-red-100
                                                    bg-red-50
                                                    text-red-600
                                                    transition
                                                    hover:bg-red-100
                                                "
                                            >
                                                <Trash2 size={15} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>
                            ))
                        )}

                    </tbody>

                </table>
            </div>

            {/* MOBILE SCROLL HINT */}
            {potential.length > 0 && (
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
            )}

        </div>
    );
}