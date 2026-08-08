import { useState } from "react";
import { Plus } from "lucide-react";

import useGovernment from "../../hooks/useGovernment";

import GovernmentTable from "../../components/admin/government/GovernmentTable";
import GovernmentFormModal from "../../components/admin/government/GovernmentFormModal";
import DeleteGovernmentModal from "../../components/admin/government/DeleteGovernmentModal";

export default function GovernmentManagement() {

    /*
    |--------------------------------------------------------------------------
    | Government Data
    |--------------------------------------------------------------------------
    */

    const {
        government,
        loading,
        refresh,
    } = useGovernment();

    /*
    |--------------------------------------------------------------------------
    | Modal State
    |--------------------------------------------------------------------------
    */

    const [selectedGovernment, setSelectedGovernment] = useState(null);

    const [openForm, setOpenForm] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Tambah Aparatur
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {

        setSelectedGovernment(null);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Edit Aparatur
    |--------------------------------------------------------------------------
    */

    const handleEdit = (item) => {

        setSelectedGovernment(item);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Hapus Aparatur
    |--------------------------------------------------------------------------
    */

    const handleDelete = (item) => {

        setSelectedGovernment(item);

        setOpenDelete(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Close Form
    |--------------------------------------------------------------------------
    */

    const handleCloseForm = () => {

        if (!openForm) return;

        setOpenForm(false);

        setSelectedGovernment(null);

    };

    /*
    |--------------------------------------------------------------------------
    | Close Delete
    |--------------------------------------------------------------------------
    */

    const handleCloseDelete = () => {

        if (!openDelete) return;

        setOpenDelete(false);

        setSelectedGovernment(null);

    };

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (

        <div className="space-y-5 sm:space-y-6">

            {/* ==========================================================
                HEADER
            =========================================================== */}

            <div className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
            ">

                {/* TITLE */}

                <div>

                    <h1 className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-gray-800
                        sm:text-3xl
                    ">
                        Pemerintahan Desa
                    </h1>

                    <p className="
                        mt-1
                        max-w-2xl
                        text-sm
                        leading-relaxed
                        text-gray-500
                    ">
                        Kelola struktur dan data aparatur
                        Pemerintahan Desa Panca Tunggal.
                    </p>

                </div>


                {/* ADD BUTTON */}

                <button
                    type="button"
                    onClick={handleCreate}
                    className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-green-600
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-white
                        shadow-sm
                        transition
                        duration-200
                        hover:bg-green-700
                        hover:shadow
                        focus:outline-none
                        focus:ring-2
                        focus:ring-green-500
                        focus:ring-offset-2
                        active:scale-[0.98]
                        sm:w-auto
                    "
                >

                    <Plus
                        size={17}
                        strokeWidth={2}
                    />

                    <span>
                        Tambah Aparatur
                    </span>

                </button>

            </div>


            {/* ==========================================================
                TABLE
            =========================================================== */}

            <GovernmentTable
                government={government}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />


            {/* ==========================================================
                FORM MODAL
            =========================================================== */}

            <GovernmentFormModal
                open={openForm}
                onClose={handleCloseForm}
                government={selectedGovernment}
                reload={refresh}
            />


            {/* ==========================================================
                DELETE MODAL
            =========================================================== */}

            <DeleteGovernmentModal
                open={openDelete}
                onClose={handleCloseDelete}
                government={selectedGovernment}
                reload={refresh}
            />

        </div>

    );

}