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

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <div className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/50
            p-4
            backdrop-blur-[2px]
        ">

            <div className="
                w-full
                max-w-md
                overflow-hidden
                rounded-xl
                bg-white
                shadow-2xl
            ">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="
                    border-b
                    border-gray-100
                    px-5
                    py-4
                    sm:px-6
                    sm:py-5
                ">

                    <h2 className="
                        text-base
                        font-semibold
                        text-gray-800
                        sm:text-lg
                    ">
                        Hapus Aparatur
                    </h2>

                    <p className="
                        mt-1
                        text-xs
                        leading-relaxed
                        text-gray-500
                        sm:text-sm
                    ">
                        Konfirmasi penghapusan data aparatur
                        pemerintahan desa.
                    </p>

                </div>


                {/* =====================================================
                    CONTENT
                ====================================================== */}

                <div className="
                    px-5
                    py-5
                    sm:px-6
                    sm:py-6
                ">

                    <p className="
                        text-sm
                        leading-relaxed
                        text-gray-700
                    ">

                        Apakah Anda yakin ingin menghapus
                        aparatur

                        <span className="
                            font-semibold
                            text-gray-800
                        ">
                            {" "}
                            {government.name}
                        </span>
                        ?

                    </p>


                    <div className="
                        mt-4
                        rounded-lg
                        border
                        border-red-100
                        bg-red-50
                        px-4
                        py-3
                    ">

                        <p className="
                            text-xs
                            leading-relaxed
                            text-red-600
                            sm:text-sm
                        ">
                            Data yang sudah dihapus tidak
                            dapat dikembalikan.
                        </p>

                    </div>

                </div>


                {/* =====================================================
                    FOOTER
                ====================================================== */}

                <div className="
                    flex
                    flex-col-reverse
                    gap-2
                    border-t
                    border-gray-100
                    bg-gray-50
                    px-5
                    py-4
                    sm:flex-row
                    sm:justify-end
                    sm:px-6
                ">

                    {/* BATAL */}

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
                            duration-200
                            hover:bg-gray-50
                            focus:outline-none
                            focus:ring-2
                            focus:ring-gray-200
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            sm:w-auto
                        "
                    >
                        Batal
                    </button>


                    {/* HAPUS */}

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
                            shadow-sm
                            transition
                            duration-200
                            hover:bg-red-700
                            hover:shadow
                            focus:outline-none
                            focus:ring-2
                            focus:ring-red-500
                            focus:ring-offset-2
                            active:scale-[0.98]
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            sm:w-auto
                        "
                    >
                        {loading
                            ? "Menghapus..."
                            : "Hapus Aparatur"}
                    </button>

                </div>

            </div>

        </div>
    );
}