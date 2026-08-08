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
            <div className="rounded-xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <p className="text-sm text-gray-500">
                    Memuat data pemerintahan...
                </p>
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
            <div className="rounded-xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-medium text-gray-600">
                    Belum ada data pemerintahan
                </p>

                <p className="mt-1 text-xs text-gray-400">
                    Data pemerintahan akan ditampilkan di sini.
                </p>
            </div>
        );
    }

    return (
        <>
            {/* ==========================================================
                DESKTOP / TABLET
            ========================================================== */}

            <div className="hidden overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm sm:block">
                <div className="w-full overflow-x-auto">
                    <table className="w-full min-w-[750px]">
                        {/* HEADER */}
                        <thead className="border-b border-gray-100 bg-gray-50">
                            <tr>
                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Foto
                                </th>

                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Nama
                                </th>

                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Jabatan
                                </th>

                                <th className="px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Urutan
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
                            {government.map((item) => (
                                <tr
                                    key={item.id}
                                    className="transition hover:bg-gray-50/70"
                                >
                                    {/* FOTO */}
                                    <td className="px-5 py-4">
                                        {item.photo ? (
                                            <img
                                                src={item.photo}
                                                alt={item.name}
                                                className="h-14 w-14 rounded-lg border border-gray-100 object-cover"
                                            />
                                        ) : (
                                            <div
                                                className="
                                                    flex
                                                    h-14
                                                    w-14
                                                    items-center
                                                    justify-center
                                                    rounded-lg
                                                    bg-gray-100
                                                    text-[11px]
                                                    text-gray-400
                                                "
                                            >
                                                No Image
                                            </div>
                                        )}
                                    </td>

                                    {/* NAMA */}
                                    <td className="px-5 py-4">
                                        <p
                                            className="
                                                max-w-[220px]
                                                truncate
                                                text-sm
                                                font-semibold
                                                text-gray-800
                                            "
                                        >
                                            {item.name}
                                        </p>
                                    </td>

                                    {/* JABATAN */}
                                    <td className="px-5 py-4">
                                        <span
                                            className="
                                                inline-flex
                                                rounded-md
                                                bg-gray-100
                                                px-2.5
                                                py-1
                                                text-xs
                                                font-medium
                                                text-gray-600
                                            "
                                        >
                                            {item.position}
                                        </span>
                                    </td>

                                    {/* URUTAN */}
                                    <td className="px-5 py-4 text-center">
                                        <span className="text-sm font-medium text-gray-600">
                                            {item.order_number}
                                        </span>
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
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* AKSI */}
                                    <td className="px-5 py-4">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => onEdit(item)}
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
                                                onClick={() => onDelete(item)}
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
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* SCROLL HINT */}
                <div
                    className="
                        border-t
                        border-gray-100
                        bg-gray-50
                        px-4
                        py-2
                        text-center
                        text-[11px]
                        text-gray-400
                    "
                >
                    Geser ke samping untuk melihat kolom lainnya
                </div>
            </div>

            {/* ==========================================================
                MOBILE / CARD
            ========================================================== */}

            <div className="space-y-3 sm:hidden">
                {government.map((item) => (
                    <div
                        key={item.id}
                        className="
                            overflow-hidden
                            rounded-xl
                            border
                            border-gray-100
                            bg-white
                            shadow-sm
                        "
                    >
                        {/* CARD CONTENT */}
                        <div className="p-4">
                            <div className="flex gap-3">
                                {/* FOTO */}
                                <div className="shrink-0">
                                    {item.photo ? (
                                        <img
                                            src={item.photo}
                                            alt={item.name}
                                            className="
                                                h-16
                                                w-16
                                                rounded-xl
                                                border
                                                border-gray-100
                                                object-cover
                                            "
                                        />
                                    ) : (
                                        <div
                                            className="
                                                flex
                                                h-16
                                                w-16
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-gray-100
                                                text-[10px]
                                                text-gray-400
                                            "
                                        >
                                            No Image
                                        </div>
                                    )}
                                </div>

                                {/* INFORMASI */}
                                <div className="min-w-0 flex-1">
                                    <p
                                        className="
                                            truncate
                                            text-sm
                                            font-semibold
                                            text-gray-800
                                        "
                                    >
                                        {item.name}
                                    </p>

                                    <div className="mt-1.5">
                                        <span
                                            className="
                                                inline-flex
                                                max-w-full
                                                rounded-md
                                                bg-gray-100
                                                px-2
                                                py-1
                                                text-[11px]
                                                font-medium
                                                text-gray-600
                                            "
                                        >
                                            <span className="truncate">
                                                {item.position}
                                            </span>
                                        </span>
                                    </div>

                                    {/* STATUS */}
                                    <div className="mt-2">
                                        <span
                                            className={`
                                                inline-flex
                                                rounded-full
                                                px-2
                                                py-1
                                                text-[10px]
                                                font-medium
                                                ${
                                                    item.status === "published"
                                                        ? "bg-green-50 text-green-700"
                                                        : "bg-yellow-50 text-yellow-700"
                                                }
                                            `}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* DETAIL */}
                            <div
                                className="
                                    mt-4
                                    grid
                                    grid-cols-2
                                    gap-3
                                    border-t
                                    border-gray-100
                                    pt-3
                                "
                            >
                                <div>
                                    <p className="text-[10px] uppercase tracking-wide text-gray-400">
                                        Jabatan
                                    </p>

                                    <p className="mt-1 truncate text-xs font-medium text-gray-700">
                                        {item.position || "-"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-wide text-gray-400">
                                        Urutan
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-gray-700">
                                        {item.order_number ?? "-"}
                                    </p>
                                </div>
                            </div>

                            {/* ACTION */}
                            <div
                                className="
                                    mt-4
                                    grid
                                    grid-cols-2
                                    gap-2
                                    border-t
                                    border-gray-100
                                    pt-3
                                "
                            >
                                <button
                                    type="button"
                                    onClick={() => onEdit(item)}
                                    className="
                                        flex
                                        h-9
                                        items-center
                                        justify-center
                                        gap-1.5
                                        rounded-lg
                                        border
                                        border-blue-100
                                        bg-blue-50
                                        text-xs
                                        font-medium
                                        text-blue-600
                                        transition
                                        hover:bg-blue-100
                                    "
                                >
                                    <Pencil size={14} />
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onDelete(item)}
                                    className="
                                        flex
                                        h-9
                                        items-center
                                        justify-center
                                        gap-1.5
                                        rounded-lg
                                        border
                                        border-red-100
                                        bg-red-50
                                        text-xs
                                        font-medium
                                        text-red-600
                                        transition
                                        hover:bg-red-100
                                    "
                                >
                                    <Trash2 size={14} />
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}