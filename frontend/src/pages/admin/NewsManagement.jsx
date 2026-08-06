import { useState } from "react";
import { Plus } from "lucide-react";

import useNews from "../../hooks/useNews";

import NewsTable from "../../components/admin/news/NewsTable";
import NewsFormModal from "../../components/admin/news/NewsFormModal";
import DeleteNewsModal from "../../components/admin/news/DeleteNewsModal";

export default function NewsManagement() {

    const {

        news,

        loading,

        refresh,

    } = useNews();

    const [selectedNews, setSelectedNews] = useState(null);

    const [openForm, setOpenForm] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Tambah
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {

        setSelectedNews(null);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Edit
    |--------------------------------------------------------------------------
    */

    const handleEdit = (item) => {

        setSelectedNews(item);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = (item) => {

        setSelectedNews(item);

        setOpenDelete(true);

    };

    return (

        <div className="space-y-6">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Manajemen Berita

                    </h1>

                    <p className="text-gray-500 mt-1">

                        Kelola seluruh berita desa.

                    </p>

                </div>

                <button

                    onClick={handleCreate}

                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"

                >

                    <Plus size={18} />

                    Tambah Berita

                </button>

            </div>

            {/* Table */}

            <NewsTable

                news={news}

                loading={loading}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            {/* Form */}

            <NewsFormModal

                open={openForm}

                onClose={() => setOpenForm(false)}

                news={selectedNews}

                reload={refresh}

            />

            {/* Delete */}

            <DeleteNewsModal

                open={openDelete}

                onClose={() => setOpenDelete(false)}

                news={selectedNews}

                reload={refresh}

            />

        </div>

    );

}