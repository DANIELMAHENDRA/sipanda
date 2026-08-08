import { useState } from "react";
import { Plus, Users } from "lucide-react";

import useUsers from "../../hooks/useUsers";
import userService from "../../services/userService";

import UserTable from "../../components/admin/users/UserTable";
import UserFormModal from "../../components/admin/users/UserFormModal";
import DeleteUserModal from "../../components/admin/users/DeleteUserModal";
import ResetPasswordModal from "../../components/admin/users/ResetPasswordModal";

export default function UserManagement() {
    const {
        users = [],
        loading,
        reload,
    } = useUsers();

    const [selectedUser, setSelectedUser] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openResetPassword, setOpenResetPassword] = useState(false);

    const handleCreate = () => {
        setSelectedUser(null);
        setOpenForm(true);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setOpenForm(true);
    };

    const handleDelete = (user) => {
        setSelectedUser(user);
        setOpenDelete(true);
    };

    const handleResetPassword = (user) => {
        setSelectedUser(user);
        setOpenResetPassword(true);
    };

    const handleToggleStatus = async (user) => {
        try {
            await userService.toggleStatus(user.id);
            reload();
        } catch (error) {
            console.error(error);
        }
    };

    const activeUsers = users.filter(
        (user) => user.is_active
    ).length;

    const inactiveUsers = users.length - activeUsers;

    return (
        <div className="space-y-5 sm:space-y-6">

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div className="
                bg-white
                rounded-2xl
                border
                border-gray-100
                shadow-sm
                p-5
                sm:p-6
            ">

                <div className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-5
                ">

                    <div className="flex items-start gap-4 min-w-0">

                        <div className="
                            hidden
                            sm:flex
                            w-12
                            h-12
                            shrink-0
                            rounded-xl
                            bg-green-100
                            items-center
                            justify-center
                        ">
                            <Users
                                size={24}
                                className="text-green-700"
                            />
                        </div>

                        <div className="min-w-0">

                            <h1 className="
                                text-2xl
                                sm:text-3xl
                                font-bold
                                text-gray-800
                            ">
                                User Management
                            </h1>

                            <p className="
                                text-sm
                                sm:text-base
                                text-gray-500
                                mt-1
                            ">
                                Kelola akun administrator SIPANDA
                                dengan mudah dan aman.
                            </p>

                        </div>

                    </div>

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
                            font-semibold
                            text-white
                            shadow-sm
                            hover:bg-green-700
                            hover:shadow-md
                            active:scale-[0.98]
                            transition-all
                            duration-200
                            shrink-0
                        "
                    >
                        <Plus size={18} />
                        Tambah User
                    </button>

                </div>

            </div>

            {/* =====================================================
                SUMMARY
            ====================================================== */}

            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-4
            ">

                {/* Total */}
                <div className="
                    bg-white
                    rounded-xl
                    border
                    border-gray-100
                    shadow-sm
                    p-4
                    sm:p-5
                ">

                    <p className="text-xs sm:text-sm text-gray-500">
                        Total Pengguna
                    </p>

                    <div className="flex items-end gap-2 mt-1">

                        <span className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-gray-800
                        ">
                            {users.length}
                        </span>

                        <span className="
                            text-xs
                            sm:text-sm
                            text-gray-400
                            mb-1
                        ">
                            user
                        </span>

                    </div>

                </div>

                {/* Aktif */}
                <div className="
                    bg-white
                    rounded-xl
                    border
                    border-gray-100
                    shadow-sm
                    p-4
                    sm:p-5
                ">

                    <p className="text-xs sm:text-sm text-gray-500">
                        Akun Aktif
                    </p>

                    <div className="flex items-end gap-2 mt-1">

                        <span className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-green-600
                        ">
                            {activeUsers}
                        </span>

                        <span className="
                            text-xs
                            sm:text-sm
                            text-gray-400
                            mb-1
                        ">
                            aktif
                        </span>

                    </div>

                </div>

                {/* Nonaktif */}
                <div className="
                    bg-white
                    rounded-xl
                    border
                    border-gray-100
                    shadow-sm
                    p-4
                    sm:p-5
                ">

                    <p className="text-xs sm:text-sm text-gray-500">
                        Akun Nonaktif
                    </p>

                    <div className="flex items-end gap-2 mt-1">

                        <span className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-red-600
                        ">
                            {inactiveUsers}
                        </span>

                        <span className="
                            text-xs
                            sm:text-sm
                            text-gray-400
                            mb-1
                        ">
                            nonaktif
                        </span>

                    </div>

                </div>

            </div>

            {/* =====================================================
                USER TABLE / MOBILE CARDS
            ====================================================== */}

            <UserTable
                users={users}
                loading={loading}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onResetPassword={handleResetPassword}
                onToggleStatus={handleToggleStatus}
            />

            {/* =====================================================
                FORM MODAL
            ====================================================== */}

            <UserFormModal
                open={openForm}
                onClose={() => setOpenForm(false)}
                user={selectedUser}
                reload={reload}
            />

            {/* =====================================================
                DELETE MODAL
            ====================================================== */}

            <DeleteUserModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                user={selectedUser}
                reload={reload}
            />

            {/* =====================================================
                RESET PASSWORD MODAL
            ====================================================== */}

            <ResetPasswordModal
                open={openResetPassword}
                onClose={() => setOpenResetPassword(false)}
                user={selectedUser}
                reload={reload}
            />

        </div>
    );
}