import { useState } from "react";
import { Plus } from "lucide-react";

import useService from "../../hooks/useService";

import ServiceTable from "../../components/admin/service/ServiceTable";
import ServiceFormModal from "../../components/admin/service/ServiceFormModal";
import DeleteServiceModal from "../../components/admin/service/DeleteServiceModal";

export default function ServiceManagement() {
    const {
        services,
        loading,
        refresh,
    } = useService();

    const [selectedService, setSelectedService] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Tambah
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {
        setSelectedService(null);
        setOpenForm(true);
    };

    /*
    |--------------------------------------------------------------------------
    | Edit
    |--------------------------------------------------------------------------
    */

    const handleEdit = (service) => {
        setSelectedService(service);
        setOpenForm(true);
    };

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = (service) => {
        setSelectedService(service);
        setOpenDelete(true);
    };

    return (
        <div className="space-y-6">

            {/* ==========================================================
                HEADER
            ========================================================== */}

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >

                {/* TITLE */}

                <div className="min-w-0">

                    <h1
                        className="
                            text-2xl
                            font-semibold
                            text-gray-800
                            sm:text-3xl
                        "
                    >
                        Layanan Desa
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Kelola informasi layanan yang tersedia di desa.
                    </p>

                </div>

                {/* ADD BUTTON */}

                <button
                    type="button"
                    onClick={handleCreate}
                    className="
                        inline-flex
                        h-10
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-green-600
                        px-5
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:bg-green-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-green-200
                        sm:w-auto
                    "
                >
                    <Plus size={17} />

                    Tambah Layanan
                </button>

            </div>

            {/* ==========================================================
                TABLE
            ========================================================== */}

            <ServiceTable
                services={services}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {/* ==========================================================
                FORM MODAL
            ========================================================== */}

            <ServiceFormModal
                open={openForm}
                onClose={() => setOpenForm(false)}
                service={selectedService}
                reload={refresh}
            />

            {/* ==========================================================
                DELETE MODAL
            ========================================================== */}

            <DeleteServiceModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                service={selectedService}
                reload={refresh}
            />

        </div>
    );
}