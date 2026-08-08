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
    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {
        return (
            <div className="rounded-xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <p className="text-sm text-gray-500">
                    Memuat data layanan...
                </p>
            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Empty
    |--------------------------------------------------------------------------
    */

    if (!services.length) {
        return (
            <div className="rounded-xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <div className="flex flex-col items-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                        <CheckCircle size={21} />
                    </div>

                    <p className="text-sm font-medium text-gray-600">
                        Belum ada data layanan
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                        Data layanan akan ditampilkan di sini.
                    </p>
                </div>
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
                    <table className="min-w-[850px] w-full">
                        {/* HEADER */}
                        <thead className="border-b border-gray-100 bg-gray-50">
                            <tr>
                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    No
                                </th>

                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Judul
                                </th>

                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Icon
                                </th>

                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Penanggung Jawab
                                </th>

                                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Biaya
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
                            {services.map((service, index) => (
                                <tr
                                    key={service.id}
                                    className="transition hover:bg-gray-50/70"
                                >
                                    {/* NO */}
                                    <td className="px-5 py-4">
                                        <span className="text-sm font-medium text-gray-500">
                                            {index + 1}
                                        </span>
                                    </td>

                                    {/* JUDUL */}
                                    <td className="px-5 py-4">
                                        <p className="max-w-[220px] truncate text-sm font-semibold text-gray-800">
                                            {service.title}
                                        </p>
                                    </td>

                                    {/* ICON */}
                                    <td className="px-5 py-4">
                                        <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                                            {service.icon || "-"}
                                        </span>
                                    </td>

                                    {/* PENANGGUNG JAWAB */}
                                    <td className="px-5 py-4">
                                        <p className="max-w-[200px] truncate text-sm text-gray-600">
                                            {service.person_in_charge || "-"}
                                        </p>
                                    </td>

                                    {/* BIAYA */}
                                    <td className="px-5 py-4">
                                        <span className="text-sm font-medium text-gray-700">
                                            {service.cost || "-"}
                                        </span>
                                    </td>

                                    {/* STATUS */}
                                    <td className="px-5 py-4 text-center">
                                        {service.is_active ? (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                                                <CheckCircle size={13} />
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700">
                                                <XCircle size={13} />
                                                Nonaktif
                                            </span>
                                        )}
                                    </td>

                                    {/* AKSI */}
                                    <td className="px-5 py-4">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onEdit(service)
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
                                                    onDelete(service)
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
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* SCROLL HINT */}
                <div className="border-t border-gray-100 bg-gray-50 px-4 py-2 text-center text-[11px] text-gray-400">
                    Geser ke samping untuk melihat kolom lainnya
                </div>
            </div>

            {/* ==========================================================
                MOBILE
            ========================================================== */}

            <div className="space-y-3 sm:hidden">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className="
                            overflow-hidden
                            rounded-xl
                            border
                            border-gray-100
                            bg-white
                            shadow-sm
                        "
                    >
                        {/* CARD HEADER */}
                        <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-4 py-4">
                            <div className="min-w-0 flex-1">
                                <div className="mb-1 flex items-center gap-2">
                                    <span className="text-[11px] font-medium text-gray-400">
                                        #{index + 1}
                                    </span>

                                    {service.is_active ? (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700">
                                            <CheckCircle size={11} />
                                            Aktif
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-700">
                                            <XCircle size={11} />
                                            Nonaktif
                                        </span>
                                    )}
                                </div>

                                <h3 className="truncate text-sm font-semibold text-gray-800">
                                    {service.title}
                                </h3>
                            </div>

                            <span className="shrink-0 rounded-md bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                                {service.icon || "-"}
                            </span>
                        </div>

                        {/* CARD CONTENT */}
                        <div className="space-y-3 px-4 py-4">
                            <div>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                                    Penanggung Jawab
                                </p>

                                <p className="mt-1 text-sm text-gray-700">
                                    {service.person_in_charge || "-"}
                                </p>
                            </div>

                            <div>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                                    Biaya
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-700">
                                    {service.cost || "-"}
                                </p>
                            </div>
                        </div>

                        {/* CARD ACTION */}
                        <div className="grid grid-cols-2 gap-2 border-t border-gray-100 bg-gray-50 px-4 py-3">
                            <button
                                type="button"
                                onClick={() => onEdit(service)}
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
                                onClick={() => onDelete(service)}
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
                ))}
            </div>
        </>
    );
}