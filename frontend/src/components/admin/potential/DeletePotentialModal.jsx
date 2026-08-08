import { useState } from "react";
import potentialService from "../../../services/potentialService";

export default function DeletePotentialModal({
    open,
    onClose,
    potential,
    reload,
}) {
    const [loading, setLoading] = useState(false);

    if (!open || !potential) return null;

    const handleDelete = async () => {
        try {
            setLoading(true);

            await potentialService.delete(potential.id);

            reload();
            onClose();
        } catch (error) {
            console.error("Gagal menghapus potential:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl">

                {/* HEADER */}
                <div className="border-b border-gray-100 px-6 py-5">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Hapus Potensi
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Konfirmasi penghapusan data potensi.
                    </p>
                </div>

                {/* BODY */}
                <div className="px-6 py-6">

                    <p className="text-sm text-gray-700">
                        Apakah Anda yakin ingin menghapus potensi
                        <span className="font-semibold text-gray-800">
                            {" "}{potential.title}
                        </span>
                        ?
                    </p>

                    <p className="mt-2 text-xs text-red-500">
                        Data yang sudah dihapus tidak dapat dikembalikan.
                    </p>

                </div>

                {/* FOOTER */}
                <div className="flex flex-col-reverse gap-2 border-t border-gray-100 bg-gray-50 px-6 py-4 sm:flex-row sm:justify-end">

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="
                            h-10
                            w-full
                            rounded-lg
                            border
                            border-gray-200
                            bg-white
                            px-5
                            text-sm
                            font-medium
                            text-gray-600
                            transition
                            hover:bg-gray-50
                            disabled:opacity-50
                            sm:w-auto
                        "
                    >
                        Batal
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={loading}
                        className="
                            h-10
                            w-full
                            rounded-lg
                            bg-red-600
                            px-5
                            text-sm
                            font-medium
                            text-white
                            transition
                            hover:bg-red-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            sm:w-auto
                        "
                    >
                        {loading ? "Menghapus..." : "Hapus"}
                    </button>

                </div>

            </div>
        </div>
    );
}