import { Trash2, X } from "lucide-react";

import galleryService from "../../../services/galleryService";

export default function DeleteGalleryModal({
    open,
    onClose,
    gallery,
    reload,
}) {
    if (!open || !gallery) return null;

    const handleDelete = async () => {
        try {
            await galleryService.delete(gallery.id);

            reload();
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            p-4
        ">

            <div className="
                w-full
                max-w-md
                overflow-hidden
                rounded-xl
                bg-white
                shadow-xl
            ">

                {/* HEADER */}
                <div className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-100
                    px-5
                    py-4
                ">

                    <div className="flex items-center gap-3">

                        <div className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-red-50
                            text-red-600
                        ">
                            <Trash2 size={20} />
                        </div>

                        <div>
                            <h2 className="
                                text-base
                                font-semibold
                                text-gray-800
                            ">
                                Hapus Galeri
                            </h2>

                            <p className="
                                mt-0.5
                                text-xs
                                text-gray-500
                            ">
                                Konfirmasi penghapusan data
                            </p>
                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
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
                        "
                    >
                        <X size={18} />
                    </button>

                </div>

                {/* BODY */}
                <div className="px-5 py-5">

                    <p className="
                        text-sm
                        leading-6
                        text-gray-600
                    ">
                        Apakah Anda yakin ingin menghapus galeri
                        <span className="
                            font-semibold
                            text-gray-800
                        ">
                            {" "}{gallery.title}
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
                            leading-5
                            text-red-600
                        ">
                            Data yang sudah dihapus tidak dapat
                            dikembalikan.
                        </p>

                    </div>

                </div>

                {/* FOOTER */}
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
                ">

                    <button
                        type="button"
                        onClick={onClose}
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
                            sm:w-auto
                        "
                    >
                        Batal
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
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
                            sm:w-auto
                        "
                    >
                        <Trash2 size={16} />
                        Hapus
                    </button>

                </div>

            </div>

        </div>
    );
}