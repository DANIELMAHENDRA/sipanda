import { useState } from "react";
import { Plus, Newspaper } from "lucide-react";

import useNews from "../../hooks/useNews";

import NewsTable from "../../components/admin/news/NewsTable";
import NewsFormModal from "../../components/admin/news/NewsFormModal";
import DeleteNewsModal from "../../components/admin/news/DeleteNewsModal";

export default function NewsManagement() {
    const {
        news = [],
        loading,
        refresh,
    } = useNews();

    const [selectedNews, setSelectedNews] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Tambah Berita
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {
        setSelectedNews(null);
        setOpenForm(true);
    };

    /*
    |--------------------------------------------------------------------------
    | Edit Berita
    |--------------------------------------------------------------------------
    */

    const handleEdit = (item) => {
        setSelectedNews(item);
        setOpenForm(true);
    };

    /*
    |--------------------------------------------------------------------------
    | Delete Berita
    |--------------------------------------------------------------------------
    */

    const handleDelete = (item) => {
        setSelectedNews(item);
        setOpenDelete(true);
    };

    return (
        <div className="space-y-5 sm:space-y-6">

            {/* ==========================================================
                Page Header
            ========================================================== */}

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    {/* Left */}
                    <div className="flex items-start gap-4 min-w-0">

                        <div className="hidden sm:flex w-12 h-12 shrink-0 rounded-xl bg-green-100 items-center justify-center">
                            <Newspaper
                                size={24}
                                className="text-green-700"
                            />
                        </div>

                        <div className="min-w-0">

                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                Manajemen Berita
                            </h1>

                            <p className="text-sm sm:text-base text-gray-500 mt-1">
                                Kelola seluruh berita desa melalui panel administrator SIPANDA.
                            </p>

                        </div>

                    </div>

                    {/* Button */}
                    <button
                        type="button"
                        onClick={handleCreate}
                        className="
                            w-full
                            lg:w-auto
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-green-600
                            px-5
                            py-3
                            text-sm
                            sm:text-base
                            font-medium
                            text-white
                            shadow-sm
                            hover:bg-green-700
                            hover:shadow
                            active:scale-[0.98]
                            transition-all
                            duration-200
                            shrink-0
                        "
                    >
                        <Plus size={18} />

                        Tambah Berita
                    </button>

                </div>

            </div>

            {/* ==========================================================
                Summary
            ========================================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">

                    <p className="text-xs sm:text-sm text-gray-500">
                        Total Berita
                    </p>

                    <div className="flex items-end gap-2 mt-1">

                        <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                            {news.length}
                        </span>

                        <span className="text-xs sm:text-sm text-gray-400 mb-1">
                            data
                        </span>

                    </div>

                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">

                    <p className="text-xs sm:text-sm text-gray-500">
                        Status Publikasi
                    </p>

                    <div className="flex items-end gap-2 mt-1">

                        <span className="text-2xl sm:text-3xl font-bold text-green-600">
                            {
                                news.filter(
                                    (item) =>
                                        item.status === "published"
                                ).length
                            }
                        </span>

                        <span className="text-xs sm:text-sm text-gray-400 mb-1">
                            published
                        </span>

                    </div>

                </div>

            </div>

            {/* ==========================================================
                Table
            ========================================================== */}

            <NewsTable
                news={news}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {/* ==========================================================
                Form Modal
            ========================================================== */}

            <NewsFormModal
                open={openForm}
                onClose={() => setOpenForm(false)}
                news={selectedNews}
                reload={refresh}
            />

            {/* ==========================================================
                Delete Modal
            ========================================================== */}

            <DeleteNewsModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                news={selectedNews}
                reload={refresh}
            />

        </div>
    );
}