import { useMemo, useState } from "react";
import {
    Eye,
    Pencil,
    Trash2,
    UserCheck,
    KeyRound,
    Plus,
} from "lucide-react";

import useUsers from "../../hooks/useUsers";

import DataTable from "../../components/common/DataTable";
import SearchInput from "../../components/common/SearchInput";
import Pagination from "../../components/common/Pagination";
import EmptyState from "../../components/common/EmptyState";
import ConfirmModal from "../../components/common/ConfirmModal";

export default function Users() {

    const { users, loading } = useUsers();

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const [openDelete, setOpenDelete] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);

    const perPage = 10;

    /*
    |--------------------------------------------------------------------------
    | Filter User
    |--------------------------------------------------------------------------
    */

    const filteredUsers = useMemo(() => {

        return users.filter((user) =>

            user.name.toLowerCase().includes(search.toLowerCase()) ||

            user.username.toLowerCase().includes(search.toLowerCase()) ||

            user.email.toLowerCase().includes(search.toLowerCase())

        );

    }, [users, search]);

    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    */

    const totalPages = Math.ceil(filteredUsers.length / perPage);

    const paginatedUsers = filteredUsers.slice(

        (currentPage - 1) * perPage,

        currentPage * perPage

    );

    /*
    |--------------------------------------------------------------------------
    | Delete
    |--------------------------------------------------------------------------
    */

    const handleDelete = () => {

        console.log(selectedUser);

        setOpenDelete(false);

    };

    if (loading) {

        return (

            <div className="text-center py-20">

                Memuat data user...

            </div>

        );

    }

    return (

        <div className="space-y-6">

            {/* Header */}

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-3xl font-bold">

                        User Management

                    </h1>

                    <p className="text-gray-500">

                        Kelola seluruh akun administrator.

                    </p>

                </div>

                <button
                    className="
                        flex
                        items-center
                        gap-2
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        px-5
                        py-3
                        rounded-lg
                    "
                >

                    <Plus size={18} />

                    Tambah User

                </button>

            </div>

            {/* Search */}

            <SearchInput

                value={search}

                onChange={(e) => {

                    setSearch(e.target.value);

                    setCurrentPage(1);

                }}

            />

            {/* Empty */}

            {

                filteredUsers.length === 0

                    ? (

                        <EmptyState

                            title="User tidak ditemukan"

                        />

                    )

                    : (

                        <>

                            <DataTable

                                columns={[

                                    "Nama",

                                    "Username",

                                    "Email",

                                    "Role",

                                    "Status",

                                    "Aksi",

                                ]}

                                data={paginatedUsers}

                                renderRow={(user) => (

                                    <tr
                                        key={user.id}
                                        className="border-t"
                                    >

                                        <td className="px-6 py-4">

                                            {user.name}

                                        </td>

                                        <td className="px-6 py-4">

                                            {user.username}

                                        </td>

                                        <td className="px-6 py-4">

                                            {user.email}

                                        </td>

                                        <td className="px-6 py-4 capitalize">

                                            {user.role.replace("_", " ")}

                                        </td>

                                        <td className="px-6 py-4">

                                            {

                                                user.is_active

                                                    ? (

                                                        <span className="text-green-600 font-semibold">

                                                            Aktif

                                                        </span>

                                                    )

                                                    : (

                                                        <span className="text-red-600 font-semibold">

                                                            Nonaktif

                                                        </span>

                                                    )

                                            }

                                        </td>

                                        <td className="px-6 py-4">

                                            <div className="flex gap-3">

                                                <button>

                                                    <Eye size={18} />

                                                </button>

                                                <button>

                                                    <Pencil size={18} />

                                                </button>

                                                <button>

                                                    <UserCheck size={18} />

                                                </button>

                                                <button>

                                                    <KeyRound size={18} />

                                                </button>

                                                <button

                                                    onClick={() => {

                                                        setSelectedUser(user);

                                                        setOpenDelete(true);

                                                    }}

                                                    className="text-red-600"

                                                >

                                                    <Trash2 size={18} />

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                )}

                            />

                            <Pagination

                                currentPage={currentPage}

                                totalPages={totalPages}

                                onPageChange={setCurrentPage}

                            />

                        </>

                    )

            }

            <ConfirmModal

                open={openDelete}

                title="Hapus User"

                message={`Yakin ingin menghapus ${selectedUser?.name}?`}

                onCancel={() => setOpenDelete(false)}

                onConfirm={handleDelete}

            />

        </div>

    );

}