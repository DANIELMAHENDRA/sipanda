import { KeyRound } from "lucide-react";

import userService from "../../../services/userService";

export default function ResetPasswordModal({

    open,

    onClose,

    user,

    reload,

}) {

    if (!open || !user) return null;

    /*
    |--------------------------------------------------------------------------
    | Reset Password
    |--------------------------------------------------------------------------
    */

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

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-md">

                {/* Header */}

                <div className="border-b px-6 py-5 flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">

                        <KeyRound
                            size={24}
                            className="text-blue-600"
                        />

                    </div>

                    <div>

                        <h2 className="text-xl font-bold">

                            Reset Password

                        </h2>

                        <p className="text-sm text-gray-500">

                            Reset password user menjadi password default.

                        </p>

                    </div>

                </div>

                {/* Body */}

                <div className="px-6 py-6">

                    <p className="text-gray-700">

                        Password untuk user

                        <span className="font-semibold">

                            {" "} {user.name}

                        </span>

                        akan direset.

                    </p>

                    <p className="mt-2 text-sm text-gray-500">

                        Setelah direset, user harus segera mengganti passwordnya.

                    </p>

                </div>

                {/* Footer */}

                <div className="border-t px-6 py-4 flex justify-end gap-3">

                    <button

                        onClick={onClose}

                        className="px-5 py-2 rounded-lg border hover:bg-gray-100"

                    >

                        Batal

                    </button>

                    <button

                        onClick={handleReset}

                        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"

                    >

                        Reset Password

                    </button>

                </div>

            </div>

        </div>

    );

}