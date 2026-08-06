import { useState } from "react";
import { Plus } from "lucide-react";

import useGallery from "../../hooks/useGallery";

import GalleryTable from "../../components/admin/gallery/GalleryTable";
import GalleryFormModal from "../../components/admin/gallery/GalleryFormModal";
import DeleteGalleryModal from "../../components/admin/gallery/DeleteGalleryModal";

export default function GalleryManagement() {

    const {

        gallery,

        loading,

        refresh,

    } = useGallery();

    const [selectedGallery, setSelectedGallery] = useState(null);

    const [openForm, setOpenForm] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Tambah Gallery
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {

        setSelectedGallery(null);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Edit Gallery
    |--------------------------------------------------------------------------
    */

    const handleEdit = (item) => {

        setSelectedGallery(item);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Delete Gallery
    |--------------------------------------------------------------------------
    */

    const handleDelete = (item) => {

        setSelectedGallery(item);

        setOpenDelete(true);

    };

    return (

        <div className="space-y-6">

            {/* ==========================================================
                Header
            ========================================================== */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Gallery Management

                    </h1>

                    <p className="text-gray-500 mt-1">

                        Kelola seluruh galeri website SIPANDA.

                    </p>

                </div>

                <button

                    onClick={handleCreate}

                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"

                >

                    <Plus size={18} />

                    Tambah Galeri

                </button>

            </div>

            {/* ==========================================================
                Table
            ========================================================== */}

            <GalleryTable

                gallery={gallery}

                loading={loading}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            {/* ==========================================================
                Modal Form
            ========================================================== */}

            <GalleryFormModal

                open={openForm}

                onClose={() => setOpenForm(false)}

                gallery={selectedGallery}

                reload={refresh}

            />

            {/* ==========================================================
                Delete Modal
            ========================================================== */}

            <DeleteGalleryModal

                open={openDelete}

                onClose={() => setOpenDelete(false)}

                gallery={selectedGallery}

                reload={refresh}

            />

        </div>

    );

}