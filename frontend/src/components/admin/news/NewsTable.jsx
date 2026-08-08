import {
    Pencil,
    Trash2,
    FileText,
    CalendarDays,
    User,
    Tag,
} from "lucide-react";

export default function NewsTable({
    news = [],
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
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-10 sm:p-12 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-4" />

                    <p className="text-sm font-medium text-gray-600">
                        Memuat data berita...
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                        Mohon tunggu sebentar
                    </p>
                </div>
            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Empty State
    |--------------------------------------------------------------------------
    */

    if (news.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Header */}
                <div className="px-5 sm:px-6 py-4 border-b border-gray-100">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                        Daftar Berita
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Kelola berita yang tersedia di SIPANDA.
                    </p>
                </div>

                {/* Empty */}
                <div className="px-5 py-14 sm:py-16 text-center">

                    <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
                        <FileText
                            size={26}
                            className="text-gray-400"
                        />
                    </div>

                    <h3 className="text-base font-semibold text-gray-700">
                        Belum ada berita
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Data berita yang ditambahkan akan muncul di sini.
                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* ==========================================================
                HEADER
            ========================================================== */}

            <div className="px-5 sm:px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                <div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                        Daftar Berita
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Kelola berita yang tersedia di SIPANDA.
                    </p>
                </div>

                <div className="text-xs sm:text-sm text-gray-500">
                    Total{" "}
                    <span className="font-semibold text-gray-700">
                        {news.length}
                    </span>{" "}
                    berita
                </div>

            </div>

            {/* ==========================================================
                DESKTOP TABLE
            ========================================================== */}

            <div className="hidden md:block overflow-x-auto">

                <table className="w-full min-w-[900px]">

                    <thead className="bg-gray-50 border-b border-gray-100">

                        <tr>

                            <th className="px-5 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-gray-700">
                                Thumbnail
                            </th>

                            <th className="px-5 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-gray-700">
                                Judul
                            </th>

                            <th className="px-5 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-gray-700">
                                Kategori
                            </th>

                            <th className="px-5 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-gray-700">
                                Status
                            </th>

                            <th className="px-5 lg:px-6 py-4 text-left text-xs lg:text-sm font-semibold text-gray-700">
                                Penulis
                            </th>

                            <th className="px-5 lg:px-6 py-4 text-center text-xs lg:text-sm font-semibold text-gray-700">
                                Aksi
                            </th>

                        </tr>

                    </thead>

                    <tbody className="divide-y divide-gray-100">

                        {news.map((item) => (

                            <tr
                                key={item.id}
                                className="hover:bg-gray-50 transition-colors"
                            >

                                {/* Thumbnail */}
                                <td className="px-5 lg:px-6 py-4">

                                    {item.thumbnail ? (
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-16 h-16 rounded-xl object-cover border border-gray-100 shadow-sm"
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                                            <FileText
                                                size={22}
                                                className="text-gray-400"
                                            />
                                        </div>
                                    )}

                                </td>

                                {/* Judul */}
                                <td className="px-5 lg:px-6 py-4 max-w-[320px]">

                                    <p
                                        className="font-semibold text-gray-800 line-clamp-2"
                                        title={item.title}
                                    >
                                        {item.title}
                                    </p>

                                </td>

                                {/* Kategori */}
                                <td className="px-5 lg:px-6 py-4">

                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium whitespace-nowrap">
                                        {item.category || "-"}
                                    </span>

                                </td>

                                {/* Status */}
                                <td className="px-5 lg:px-6 py-4">

                                    <StatusBadge status={item.status} />

                                </td>

                                {/* Penulis */}
                                <td className="px-5 lg:px-6 py-4">

                                    <div className="flex items-center gap-2">

                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <User
                                                size={15}
                                                className="text-green-700"
                                            />
                                        </div>

                                        <span className="text-sm text-gray-600 whitespace-nowrap">
                                            {item.author || "-"}
                                        </span>

                                    </div>

                                </td>

                                {/* Aksi */}
                                <td className="px-5 lg:px-6 py-4">

                                    <ActionButtons
                                        item={item}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* ==========================================================
                MOBILE CARD
            ========================================================== */}

            <div className="md:hidden divide-y divide-gray-100">

                {news.map((item) => (

                    <div
                        key={item.id}
                        className="p-4 sm:p-5"
                    >

                        <div className="flex gap-3">

                            {/* Thumbnail */}
                            {item.thumbnail ? (
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-gray-100 shadow-sm shrink-0"
                                />
                            ) : (
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                    <FileText
                                        size={24}
                                        className="text-gray-400"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="min-w-0 flex-1">

                                <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-5 line-clamp-2">
                                    {item.title}
                                </h3>

                                <div className="mt-2">

                                    <StatusBadge status={item.status} />

                                </div>

                            </div>

                        </div>

                        {/* Information */}
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">

                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">

                                <Tag
                                    size={15}
                                    className="text-gray-400 shrink-0"
                                />

                                <span className="truncate">
                                    {item.category || "-"}
                                </span>

                            </div>

                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">

                                <User
                                    size={15}
                                    className="text-gray-400 shrink-0"
                                />

                                <span className="truncate">
                                    {item.author || "-"}
                                </span>

                            </div>

                            {item.created_at && (
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">

                                    <CalendarDays
                                        size={15}
                                        className="text-gray-400 shrink-0"
                                    />

                                    <span className="truncate">
                                        {item.created_at}
                                    </span>

                                </div>
                            )}

                        </div>

                        {/* Actions */}
                        <div className="mt-4 pt-4 border-t border-gray-100">

                            <div className="flex items-center justify-end gap-2">

                                <button
                                    type="button"
                                    onClick={() => onEdit(item)}
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition text-sm font-medium"
                                >
                                    <Pencil size={16} />
                                    <span>Edit</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onDelete(item)}
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition text-sm font-medium"
                                >
                                    <Trash2 size={16} />
                                    <span>Hapus</span>
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

/*
|--------------------------------------------------------------------------
| Status Badge
|--------------------------------------------------------------------------
*/

function StatusBadge({ status }) {
    const published = status === "published";

    return (
        <span
            className={`
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                whitespace-nowrap
                ${
                    published
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                }
            `}
        >

            <span
                className={`
                    w-1.5
                    h-1.5
                    rounded-full
                    mr-2
                    ${
                        published
                            ? "bg-green-500"
                            : "bg-yellow-500"
                    }
                `}
            />

            {published
                ? "Published"
                : status || "Draft"}

        </span>
    );
}

/*
|--------------------------------------------------------------------------
| Action Buttons
|--------------------------------------------------------------------------
*/

function ActionButtons({
    item,
    onEdit,
    onDelete,
}) {
    return (
        <div className="flex items-center justify-center gap-2">

            <button
                type="button"
                onClick={() => onEdit(item)}
                title="Edit berita"
                aria-label="Edit berita"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition"
            >
                <Pencil size={17} />
            </button>

            <button
                type="button"
                onClick={() => onDelete(item)}
                title="Hapus berita"
                aria-label="Hapus berita"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition"
            >
                <Trash2 size={17} />
            </button>

        </div>
    );
}