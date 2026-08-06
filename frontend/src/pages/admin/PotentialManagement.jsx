import { useState } from "react";
import { Plus } from "lucide-react";

import usePotential from "../../hooks/usePotential";

import PotentialTable from "../../components/admin/potential/PotentialTable";
import PotentialFormModal from "../../components/admin/potential/PotentialFormModal";
import DeletePotentialModal from "../../components/admin/potential/DeletePotentialModal";

export default function PotentialManagement() {

    const {

        potential,

        loading,

        refresh,

    } = usePotential();

    const [selectedPotential, setSelectedPotential] = useState(null);

    const [openForm, setOpenForm] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Tambah
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {

        setSelectedPotential(null);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Edit
    |--------------------------------------------------------------------------
    */

    const handleEdit = (item) => {

        setSelectedPotential(item);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = (item) => {

        setSelectedPotential(item);

        setOpenDelete(true);

    };

    return (

        <div className="space-y-6">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Potential Management

                    </h1>

                    <p className="text-gray-500 mt-1">

                        Kelola seluruh potensi desa.

                    </p>

                </div>

                <button

                    onClick={handleCreate}

                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"

                >

                    <Plus size={18} />

                    Tambah Potensi

                </button>

            </div>

            {/* Table */}

            <PotentialTable

                potential={potential}

                loading={loading}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            {/* Modal Form */}

            <PotentialFormModal

                open={openForm}

                onClose={() => setOpenForm(false)}

                potential={selectedPotential}

                reload={refresh}

            />

            {/* Modal Delete */}

            <DeletePotentialModal

                open={openDelete}

                onClose={() => setOpenDelete(false)}

                potential={selectedPotential}

                reload={refresh}

            />

        </div>

    );

}