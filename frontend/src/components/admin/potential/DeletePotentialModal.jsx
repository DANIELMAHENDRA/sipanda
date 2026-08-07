import { useState } from "react";
import potentialService from "../../../services/potentialService";

export default function DeletePotentialModal({
    open,
    onClose,
    potential,
    reload,
}) {
    const [loading, setLoading] = useState(false);

    // Jangan render modal jika tidak dibuka
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
                {/* Header */}
                <div className="border-b px-6 py-5">
                    <h2 className="text-xl font-bold text-red-600">
                        Hapus Potensi
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Konfirmasi penghapusan data potensi.
                    </p>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                    <p className="text-gray-700">
                        Apakah Anda yakin ingin menghapus potensi
                        <span className="font-semibold">
                            {" "}
                            {potential.title}
                        </span>
                        ?
                    </p>

                    <p className="mt-2 text-sm text-red-500">
                        Data yang sudah dihapus tidak dapat dikembalikan.
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t px-6 py-4">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="rounded-lg border px-5 py-2 hover:bg-gray-100"
                    >
                        Batal
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={loading}
                        className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700 disabled:opacity-50"
                    >
                        {loading ? "Menghapus..." : "Hapus"}
                    </button>
                </div>
            </div>
        </div>
    );
}