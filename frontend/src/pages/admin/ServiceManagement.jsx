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

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">

                        Service Management

                    </h1>

                    <p className="text-gray-500 mt-1">

                        Kelola layanan Desa.

                    </p>

                </div>

                <button

                    onClick={handleCreate}

                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"

                >

                    <Plus size={18} />

                    Tambah Layanan

                </button>

            </div>

            {/* Table */}

            <ServiceTable

                services={services}

                loading={loading}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            {/* Modal Form */}

            <ServiceFormModal

                open={openForm}

                onClose={() => setOpenForm(false)}

                service={selectedService}

                reload={refresh}

            />

            {/* Delete */}

            <DeleteServiceModal

                open={openDelete}

                onClose={() => setOpenDelete(false)}

                service={selectedService}

                reload={refresh}

            />

        </div>

    );

}