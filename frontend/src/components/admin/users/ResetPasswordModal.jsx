import { KeyRound, X } from "lucide-react";

import userService from "../../../services/userService";

export default function ResetPasswordModal({
    open,
    onClose,
    user,
    reload,
}) {
    if (!open || !user) return null;

    const handleReset = async () => {
        try {
            await userService.resetPassword(user.id);

            reload();
            onClose();

            alert("Password berhasil direset.");
        } catch (error) {
            console.error(error);

            alert("Gagal mereset password.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">

                {/* Header */}
                <div className="border-b px-5 sm:px-6 py-5 flex items-center justify-between">

                    <div className="flex items-center gap-3 min-w-0">

                        <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">

                            <KeyRound
                                size={22}
                                className="text-blue-600"
                            />

                        </div>

                        <div className="min-w-0">

                            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                                Reset Password
                            </h2>

                            <p className="text-xs sm:text-sm text-gray-500">
                                Reset password ke password default.
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition shrink-0"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* Body */}
                <div className="px-5 sm:px-6 py-6">

                    <p className="text-gray-700 leading-7">

                        Password untuk user{" "}

                        <span className="font-semibold text-gray-900 break-words">
                            {user.name}
                        </span>{" "}

                        akan direset.

                    </p>

                    <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">

                        <p className="text-sm text-blue-700 leading-6">

                            Setelah password direset, user harus segera
                            mengganti password demi keamanan akun.

                        </p>

                    </div>

                </div>

                {/* Footer */}
                <div className="border-t px-5 sm:px-6 py-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                    >
                        Batal
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Reset Password
                    </button>

                </div>

            </div>

        </div>
    );
}