import {
    Pencil,
    Trash2,
    Images,
    FolderOpen,
    CalendarDays,
    Star,
} from "lucide-react";

export default function GalleryTable({
    gallery = [],
    loading,
    onEdit,
    onDelete,
}) {
    const getStatusClass = (status) => {
        if (status === "published") {
            return "bg-green-100 text-green-700";
        }

        if (status === "draft") {
            return "bg-yellow-100 text-yellow-700";
        }

        return "bg-gray-100 text-gray-600";
    };

    const getStatusLabel = (status) => {
        if (status === "published") return "Published";
        if (status === "draft") return "Draft";
        if (status === "archived") return "Archived";

        return status || "Unknown";
    };

    if (loading) {
        return (
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />

                <p className="text-sm font-medium text-gray-600">
                    Memuat data galeri...
                </p>
            </div>
        );
    }

    if (gallery.length === 0) {
        return (
            <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                    <Images size={26} className="text-gray-400" />
                </div>

                <h3 className="font-semibold text-gray-700">
                    Belum ada data galeri
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    Dokumentasi galeri akan muncul di sini.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

            {/* Header */}
            <div className="flex flex-col gap-2 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="font-semibold text-gray-800">
                        Daftar Galeri
                    </h2>

                    <p className="text-xs text-gray-500">
                        Kelola dokumentasi foto website SIPANDA.
                    </p>
                </div>

                <span className="text-sm text-gray-500">
                    Total{" "}
                    <b className="text-gray-700">
                        {gallery.length}
                    </b>{" "}
                    galeri
                </span>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600">
                                Thumbnail
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600">
                                Judul
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600">
                                Kategori
                            </th>

                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600">
                                Status
                            </th>

                            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600">
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {gallery.map((item) => (
                            <tr
                                key={item.id}
                                className="border-t border-gray-100 hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-16 w-24 rounded-xl object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-16 w-24 items-center justify-center rounded-xl bg-gray-100">
                                            <Images
                                                size={20}
                                                className="text-gray-400"
                                            />
                                        </div>
                                    )}
                                </td>

                                <td className="px-6 py-4">
                                    <p className="max-w-xs truncate font-semibold text-gray-800">
                                        {item.title || "-"}
                                    </p>

                                    {item.taken_at && (
                                        <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                                            <CalendarDays size={12} />
                                            {item.taken_at}
                                        </p>
                                    )}
                                </td>

                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                                        <FolderOpen size={13} />
                                        {item.category || "Umum"}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusClass(
                                            item.status
                                        )}`}
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                        {getStatusLabel(item.status)}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => onEdit(item)}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                                        >
                                            <Pencil size={17} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => onDelete(item)}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                                        >
                                            <Trash2 size={17} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MOBILE / TABLET */}
            <div className="divide-y divide-gray-100 lg:hidden">
                {gallery.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 sm:p-5"
                    >
                        <div className="relative overflow-hidden rounded-xl bg-gray-100">
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-48 w-full object-cover sm:h-56"
                                />
                            ) : (
                                <div className="flex h-48 items-center justify-center sm:h-56">
                                    <Images
                                        size={30}
                                        className="text-gray-400"
                                    />
                                </div>
                            )}

                            <div className="absolute right-3 top-3">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${getStatusClass(
                                        item.status
                                    )}`}
                                >
                                    {getStatusLabel(item.status)}
                                </span>
                            </div>

                            {item.is_featured && (
                                <div className="absolute left-3 top-3">
                                    <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                                        <Star
                                            size={12}
                                            fill="currentColor"
                                        />
                                        Unggulan
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold text-gray-800">
                                {item.title || "Tanpa Judul"}
                            </h3>

                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                                    <FolderOpen size={12} />
                                    {item.category || "Umum"}
                                </span>

                                {item.taken_at && (
                                    <span className="flex items-center gap-1 text-xs text-gray-400">
                                        <CalendarDays size={13} />
                                        {item.taken_at}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => onEdit(item)}
                                className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100"
                            >
                                <Pencil size={16} />
                                Edit
                            </button>

                            <button
                                type="button"
                                onClick={() => onDelete(item)}
                                className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-red-50 text-sm font-medium text-red-600 hover:bg-red-100"
                            >
                                <Trash2 size={16} />
                                Hapus
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}