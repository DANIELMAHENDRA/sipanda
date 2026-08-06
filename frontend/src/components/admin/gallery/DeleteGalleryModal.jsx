import { Trash2 } from "lucide-react";

import galleryService from "../../../services/galleryService";

export default function DeleteGalleryModal({

    open,

    onClose,

    gallery,

    reload,

}) {

    if (!open || !gallery) return null;

    /*
    |--------------------------------------------------------------------------
    | Delete Gallery
    |--------------------------------------------------------------------------
    */

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

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-md">

                {/* Header */}

                <div className="border-b px-6 py-5 flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">

                        <Trash2

                            size={24}

                            className="text-red-600"

                        />

                    </div>

                    <div>

                        <h2 className="text-xl font-bold">

                            Hapus Galeri

                        </h2>

                        <p className="text-gray-500 text-sm">

                            Konfirmasi penghapusan data galeri.

                        </p>

                    </div>

                </div>

                {/* Body */}

                <div className="px-6 py-6">

                    <p className="text-gray-700">

                        Apakah Anda yakin ingin menghapus galeri

                        <span className="font-semibold">

                            {" "} {gallery.title}

                        </span>

                        ?

                    </p>

                    <p className="text-sm text-red-500 mt-2">

                        Data yang sudah dihapus tidak dapat dikembalikan.

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

                        onClick={handleDelete}

                        className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"

                    >

                        Hapus

                    </button>

                </div>

            </div>

        </div>

    );

}