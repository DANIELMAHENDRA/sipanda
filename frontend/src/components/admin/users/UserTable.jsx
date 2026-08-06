import {
    Pencil,
    Trash2,
    RefreshCcw,
} from "lucide-react";

export default function UserTable({

    users,

    onEdit,

    onDelete,

    onResetPassword,

    onToggleStatus,

}) {

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="px-6 py-4 text-left text-sm font-semibold">

                                Nama

                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold">

                                Username

                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold">

                                Email

                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold">

                                Role

                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold">

                                Status

                            </th>

                            <th className="px-6 py-4 text-center text-sm font-semibold">

                                Aksi

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            users.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan={6}
                                        className="text-center py-10 text-gray-500"
                                    >

                                        Tidak ada data user.

                                    </td>

                                </tr>

                            ) : (

                                users.map(user => (

                                    <tr
                                        key={user.id}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        {/* Nama */}

                                        <td className="px-6 py-4">

                                            <div className="flex items-center gap-3">

                                                <img

                                                    src={
                                                        user.photo ??
                                                        "https://ui-avatars.com/api/?name=" +
                                                        user.name
                                                    }

                                                    alt={user.name}

                                                    className="w-10 h-10 rounded-full object-cover"

                                                />

                                                <span className="font-medium">

                                                    {user.name}

                                                </span>

                                            </div>

                                        </td>

                                        {/* Username */}

                                        <td className="px-6 py-4">

                                            {user.username}

                                        </td>

                                        {/* Email */}

                                        <td className="px-6 py-4">

                                            {user.email}

                                        </td>

                                        {/* Role */}

                                        <td className="px-6 py-4">

                                            <span
                                                className={`
                                                    px-3 py-1 rounded-full text-xs font-semibold
                                                    ${
                                                        user.role === "super_admin"
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-green-100 text-green-700"
                                                    }
                                                `}
                                            >

                                                {

                                                    user.role === "super_admin"

                                                        ? "Super Admin"

                                                        : "Admin"

                                                }

                                            </span>

                                        </td>

                                        {/* Status */}

                                        <td className="px-6 py-4">

                                            <button

                                                onClick={() =>
                                                    onToggleStatus(user)
                                                }

                                                className={`
                                                    px-3 py-1 rounded-full text-xs font-semibold

                                                    ${
                                                        user.is_active
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-700"
                                                    }
                                                `}

                                            >

                                                {

                                                    user.is_active
                                                        ? "Aktif"
                                                        : "Nonaktif"

                                                }

                                            </button>

                                        </td>

                                        {/* Aksi */}

                                        <td className="px-6 py-4">

                                            <div className="flex justify-center gap-2">

                                                <button

                                                    onClick={() =>
                                                        onEdit(user)
                                                    }

                                                    className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200"

                                                >

                                                    <Pencil size={18} />

                                                </button>

                                                <button

                                                    onClick={() =>
                                                        onResetPassword(user)
                                                    }

                                                    className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"

                                                >

                                                    <RefreshCcw size={18} />

                                                </button>

                                                <button

                                                    onClick={() =>
                                                        onDelete(user)
                                                    }

                                                    className="p-2 rounded-lg bg-red-100 hover:bg-red-200"

                                                >

                                                    <Trash2 size={18} />

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}