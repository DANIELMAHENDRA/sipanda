import { useState } from "react";

import governmentService from "../../../services/governmentService";

export default function DeleteGovernmentModal({

    open,

    onClose,

    government,

    reload,

}) {

    const [loading, setLoading] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Close
    |--------------------------------------------------------------------------
    */

    if (!open || !government) return null;

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = async () => {

        setLoading(true);

        try {

            await governmentService.delete(

                government.id

            );

            reload();

            onClose();

        } catch (error) {

            console.error(

                "Gagal menghapus aparatur:",

                error

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">

                {/* Header */}

                <h2 className="text-xl font-bold">

                    Hapus Aparatur

                </h2>

                {/* Content */}

                <p className="mt-3 text-gray-600">

                    Apakah Anda yakin ingin menghapus

                    <span className="font-semibold">

                        {" "}

                        {government.name}

                    </span>

                    ?

                </p>

                <p className="mt-2 text-sm text-red-500">

                    Data yang sudah dihapus tidak dapat dikembalikan.

                </p>

                {/* Footer */}

                <div className="mt-6 flex justify-end gap-3">

                    <button

                        type="button"

                        onClick={onClose}

                        disabled={loading}

                        className="px-4 py-2 rounded-lg border hover:bg-gray-50"

                    >

                        Batal

                    </button>

                    <button

                        type="button"

                        onClick={handleDelete}

                        disabled={loading}

                        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"

                    >

                        {

                            loading

                                ? "Menghapus..."

                                : "Hapus"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}