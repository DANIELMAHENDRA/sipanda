import { Plus } from "lucide-react";
import { useState } from "react";

import useGallery from "../../hooks/useGallery";
import GalleryTable from "../../components/admin/gallery/GalleryTable";
import GalleryFormModal from "../../components/admin/gallery/GalleryFormModal";
import DeleteGalleryModal from "../../components/admin/gallery/DeleteGalleryModal";

export default function GalleryManagement() {
    const {
        gallery,
        loading,
        refresh,
    } = useGallery({}, true);

    const [selectedGallery, setSelectedGallery] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleCreate = () => {
        setSelectedGallery(null);
        setOpenForm(true);
    };

    const handleEdit = (item) => {
        setSelectedGallery(item);
        setOpenForm(true);
    };

    const handleDelete = (item) => {
        setSelectedGallery(item);
        setOpenDelete(true);
    };

    return (
        <div className="space-y-5 sm:space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Gallery Management
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Kelola seluruh galeri website SIPANDA.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleCreate}
                    className="
                        w-full sm:w-auto
                        inline-flex items-center justify-center gap-2
                        rounded-xl
                        bg-green-600
                        px-4 sm:px-5
                        py-3
                        text-sm font-semibold text-white
                        shadow-sm
                        hover:bg-green-700
                        transition
                    "
                >
                    <Plus size={18} />
                    Tambah Galeri
                </button>
            </div>

            <GalleryTable
                gallery={gallery}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <GalleryFormModal
                open={openForm}
                onClose={() => setOpenForm(false)}
                gallery={selectedGallery}
                reload={refresh}
            />

            <DeleteGalleryModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                gallery={selectedGallery}
                reload={refresh}
            />
        </div>
    );
}