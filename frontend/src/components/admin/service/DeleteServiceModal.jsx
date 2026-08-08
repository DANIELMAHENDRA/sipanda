import { useState } from "react";
import {
    X,
    Trash2,
    AlertTriangle,
} from "lucide-react";

import serviceService from "../../../services/serviceService";

export default function DeleteServiceModal({
    open,
    onClose,
    service,
    reload,
}) {
    const [loading, setLoading] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Close
    |--------------------------------------------------------------------------
    */

    if (!open || !service) return null;

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = async () => {
        try {
            setLoading(true);

            await serviceService.delete(service.id);

            reload();
            onClose();
        } catch (error) {
            console.error(
                "Gagal menghapus layanan:",
                error
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/40
                p-4
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    overflow-hidden
                    rounded-xl
                    bg-white
                    shadow-xl
                "
            >

                {/* ======================================================
                    HEADER
                ====================================================== */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-100
                        px-5
                        py-4
                    "
                >

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                bg-red-50
                                text-red-600
                            "
                        >
                            <Trash2 size={17} />
                        </div>

                        <div>

                            <h2 className="text-base font-semibold text-gray-800">
                                Hapus Layanan
                            </h2>

                            <p className="mt-0.5 text-xs text-gray-500">
                                Konfirmasi penghapusan data
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            text-gray-400
                            transition
                            hover:bg-gray-100
                            hover:text-gray-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        <X size={18} />
                    </button>

                </div>

                {/* ======================================================
                    BODY
                ====================================================== */}

                <div className="px-5 py-5">

                    <div
                        className="
                            mb-4
                            flex
                            items-start
                            gap-3
                            rounded-lg
                            border
                            border-red-100
                            bg-red-50
                            p-3
                        "
                    >

                        <AlertTriangle
                            size={18}
                            className="
                                mt-0.5
                                shrink-0
                                text-red-500
                            "
                        />

                        <div>

                            <p className="text-sm font-medium text-red-700">
                                Perhatian
                            </p>

                            <p className="mt-0.5 text-xs leading-5 text-red-600">
                                Data yang sudah dihapus tidak dapat
                                dikembalikan.
                            </p>

                        </div>

                    </div>

                    <p className="text-sm leading-6 text-gray-600">

                        Apakah Anda yakin ingin menghapus layanan

                        <span className="font-semibold text-gray-800">
                            {" "}
                            {service.title}
                        </span>
                        ?

                    </p>

                </div>

                {/* ======================================================
                    FOOTER
                ====================================================== */}

                <div
                    className="
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
                    "
                >

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
                            disabled:cursor-not-allowed
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
                            flex
                            h-10
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-red-600
                            px-5
                            text-sm
                            font-medium
                            text-white
                            transition
                            hover:bg-red-700
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            sm:w-auto
                        "
                    >

                        <Trash2 size={15} />

                        {loading
                            ? "Menghapus..."
                            : "Hapus Layanan"}

                    </button>

                </div>

            </div>

        </div>
    );
}