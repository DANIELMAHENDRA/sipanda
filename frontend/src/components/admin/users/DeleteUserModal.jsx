import { Trash2, X } from "lucide-react";
import userService from "../../../services/userService";

export default function DeleteUserModal({
    open,
    onClose,
    user,
    reload,
}) {
    if (!open || !user) return null;

    const handleDelete = async () => {
        try {
            await userService.delete(user.id);

            reload();
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">

                {/* Header */}
                <div className="border-b px-5 sm:px-6 py-5 flex items-center justify-between">

                    <div className="flex items-center gap-3 min-w-0">

                        <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                            <Trash2
                                size={22}
                                className="text-red-600"
                            />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                                Hapus User
                            </h2>

                            <p className="text-gray-500 text-xs sm:text-sm">
                                Konfirmasi penghapusan akun.
                            </p>
                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition shrink-0"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* Body */}
                <div className="px-5 sm:px-6 py-6">

                    <p className="text-gray-700 leading-7">
                        Apakah Anda yakin ingin menghapus user{" "}
                        <span className="font-semibold text-gray-900 break-words">
                            {user.name}
                        </span>
                        ?
                    </p>

                    <div className="mt-4 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                        <p className="text-sm text-red-600 leading-6">
                            Data yang sudah dihapus tidak dapat dikembalikan.
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <div className="border-t px-5 sm:px-6 py-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">

                    <button
                        onClick={onClose}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                    >
                        Batal
                    </button>

                    <button
                        onClick={handleDelete}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
                    >
                        Hapus User
                    </button>

                </div>

            </div>

        </div>
    );
}