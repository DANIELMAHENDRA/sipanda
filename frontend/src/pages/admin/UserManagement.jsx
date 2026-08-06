import { useState } from "react";
import { Plus } from "lucide-react";

import useUsers from "../../hooks/useUsers";
import userService from "../../services/userService";

import UserTable from "../../components/admin/users/UserTable";
import UserFormModal from "../../components/admin/users/UserFormModal";
import DeleteUserModal from "../../components/admin/users/DeleteUserModal";
import ResetPasswordModal from "../../components/admin/users/ResetPasswordModal";

export default function UserManagement() {

    const {

        users,

        loading,

        reload,

    } = useUsers();

    /*
    |--------------------------------------------------------------------------
    | State
    |--------------------------------------------------------------------------
    */

    const [selectedUser, setSelectedUser] = useState(null);

    const [openForm, setOpenForm] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    const [openResetPassword, setOpenResetPassword] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Tambah User
    |--------------------------------------------------------------------------
    */

    const handleCreate = () => {

        setSelectedUser(null);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Edit User
    |--------------------------------------------------------------------------
    */

    const handleEdit = (user) => {

        setSelectedUser(user);

        setOpenForm(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Delete User
    |--------------------------------------------------------------------------
    */

    const handleDelete = (user) => {

        setSelectedUser(user);

        setOpenDelete(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Reset Password
    |--------------------------------------------------------------------------
    */

    const handleResetPassword = (user) => {

        setSelectedUser(user);

        setOpenResetPassword(true);

    };

    /*
    |--------------------------------------------------------------------------
    | Toggle Status
    |--------------------------------------------------------------------------
    */

    const handleToggleStatus = async (user) => {

        try {

            await userService.toggleStatus(user.id);

            reload();

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <div className="space-y-6">

            {/* ==========================================================
                Header
            ========================================================== */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-gray-800">

                        User Management

                    </h1>

                    <p className="text-gray-500 mt-1">

                        Kelola akun administrator SIPANDA.

                    </p>

                </div>

                <button

                    onClick={handleCreate}

                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700 transition"

                >

                    <Plus size={18} />

                    Tambah User

                </button>

            </div>

            {/* ==========================================================
                Table
            ========================================================== */}

            <UserTable

                users={users}

                loading={loading}

                onEdit={handleEdit}

                onDelete={handleDelete}

                onResetPassword={handleResetPassword}

                onToggleStatus={handleToggleStatus}

            />

            {/* ==========================================================
                Form Modal
            ========================================================== */}

            <UserFormModal

                open={openForm}

                onClose={() => setOpenForm(false)}

                user={selectedUser}

                reload={reload}

            />

            {/* ==========================================================
                Delete Modal
            ========================================================== */}

            <DeleteUserModal

                open={openDelete}

                onClose={() => setOpenDelete(false)}

                user={selectedUser}

                reload={reload}

            />

            {/* ==========================================================
                Reset Password Modal
            ========================================================== */}

            <ResetPasswordModal

                open={openResetPassword}

                onClose={() => setOpenResetPassword(false)}

                user={selectedUser}

                reload={reload}

            />

        </div>

    );

}