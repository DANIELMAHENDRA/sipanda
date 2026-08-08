import { Trash2, X } from "lucide-react";

import newsService from "../../../services/newsService";

export default function DeleteNewsModal({
    open,
    onClose,
    news,
    reload,
}) {
    if (!open || !news) return null;

    const handleDelete = async () => {
        try {
            await newsService.delete(news.id);

            reload();
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

            <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-start justify-between border-b px-5 py-5 sm:px-6">

                    <div className="flex min-w-0 items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 sm:h-12 sm:w-12">
                            <Trash2
                                size={22}
                                className="text-red-600 sm:h-6 sm:w-6"
                            />
                        </div>

                        <div className="min-w-0">

                            <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
                                Hapus Berita
                            </h2>

                            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                Konfirmasi penghapusan berita.
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="ml-3 shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                        aria-label="Tutup"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* Body */}
                <div className="px-5 py-6 sm:px-6">

                    <p className="text-sm leading-6 text-gray-700 sm:text-base">

                        Apakah Anda yakin ingin menghapus berita{" "}

                        <span className="font-semibold text-gray-900">
                            "{news.title}"
                        </span>
                        ?

                    </p>

                    <div className="mt-4 rounded-lg border border-red-100 bg-red-50 px-4 py-3">

                        <p className="text-xs leading-5 text-red-600 sm:text-sm">

                            Data berita yang sudah dihapus tidak dapat
                            dikembalikan.

                        </p>

                    </div>

                </div>

                {/* Footer */}
                <div className="flex flex-col-reverse gap-3 border-t bg-gray-50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:w-auto"
                    >
                        Batal
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="w-full rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Hapus Berita
                    </button>

                </div>

            </div>

        </div>
    );
}