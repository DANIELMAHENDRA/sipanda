import {
    Pencil,
    Trash2,
    RefreshCcw,
    Users,
    Power,
} from "lucide-react";

export default function UserTable({
    users = [],
    loading,
    onEdit,
    onDelete,
    onResetPassword,
    onToggleStatus,
}) {

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {
        return (
            <div className="
                bg-white
                rounded-2xl
                border
                border-gray-100
                shadow-sm
                overflow-hidden
            ">
                <div className="
                    p-10
                    sm:p-12
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                ">

                    <div className="
                        w-10
                        h-10
                        border-4
                        border-green-200
                        border-t-green-600
                        rounded-full
                        animate-spin
                        mb-4
                    " />

                    <p className="
                        text-sm
                        font-medium
                        text-gray-600
                    ">
                        Memuat data pengguna...
                    </p>

                    <p className="
                        text-xs
                        text-gray-400
                        mt-1
                    ">
                        Mohon tunggu sebentar
                    </p>

                </div>
            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Empty
    |--------------------------------------------------------------------------
    */

    if (users.length === 0) {
        return (
            <div className="
                bg-white
                rounded-2xl
                border
                border-gray-100
                shadow-sm
            ">

                <div className="
                    px-5
                    py-14
                    sm:py-16
                    text-center
                ">

                    <div className="
                        w-14
                        h-14
                        mx-auto
                        rounded-full
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        mb-4
                    ">
                        <Users
                            size={26}
                            className="text-gray-400"
                        />
                    </div>

                    <h3 className="
                        text-base
                        font-semibold
                        text-gray-700
                    ">
                        Belum ada pengguna
                    </h3>

                    <p className="
                        text-sm
                        text-gray-500
                        mt-1
                    ">
                        Data administrator yang ditambahkan
                        akan muncul di sini.
                    </p>

                </div>

            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Avatar
    |--------------------------------------------------------------------------
    */

    const getAvatar = (user) => {
        if (user.photo) {
            return user.photo;
        }

        return `https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.name || "User"
        )}&background=dcfce7&color=15803d&bold=true`;
    };

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <div className="
            bg-white
            rounded-2xl
            border
            border-gray-100
            shadow-sm
            overflow-hidden
        ">

            {/* ======================================================
                HEADER
            ======================================================= */}

            <div className="
                px-5
                sm:px-6
                py-4
                border-b
                border-gray-100
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2
            ">

                <div>

                    <h2 className="
                        text-base
                        sm:text-lg
                        font-semibold
                        text-gray-800
                    ">
                        Daftar Pengguna
                    </h2>

                    <p className="
                        text-xs
                        sm:text-sm
                        text-gray-500
                        mt-1
                    ">
                        Kelola akun administrator SIPANDA.
                    </p>

                </div>

                <div className="
                    text-xs
                    sm:text-sm
                    text-gray-500
                ">
                    Total{" "}
                    <span className="
                        font-semibold
                        text-gray-700
                    ">
                        {users.length}
                    </span>{" "}
                    pengguna
                </div>

            </div>

            {/* ======================================================
                DESKTOP TABLE
            ======================================================= */}

            <div className="hidden lg:block overflow-x-auto">

                <table className="w-full">

                    <thead className="
                        bg-gray-50
                        border-b
                        border-gray-100
                    ">

                        <tr>

                            <th className="
                                px-5
                                xl:px-6
                                py-4
                                text-left
                                text-xs
                                xl:text-sm
                                font-semibold
                                text-gray-700
                            ">
                                Pengguna
                            </th>

                            <th className="
                                px-5
                                xl:px-6
                                py-4
                                text-left
                                text-xs
                                xl:text-sm
                                font-semibold
                                text-gray-700
                            ">
                                Username
                            </th>

                            <th className="
                                px-5
                                xl:px-6
                                py-4
                                text-left
                                text-xs
                                xl:text-sm
                                font-semibold
                                text-gray-700
                            ">
                                Email
                            </th>

                            <th className="
                                px-5
                                xl:px-6
                                py-4
                                text-left
                                text-xs
                                xl:text-sm
                                font-semibold
                                text-gray-700
                            ">
                                Role
                            </th>

                            <th className="
                                px-5
                                xl:px-6
                                py-4
                                text-left
                                text-xs
                                xl:text-sm
                                font-semibold
                                text-gray-700
                            ">
                                Status
                            </th>

                            <th className="
                                px-5
                                xl:px-6
                                py-4
                                text-center
                                text-xs
                                xl:text-sm
                                font-semibold
                                text-gray-700
                            ">
                                Aksi
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {users.map((user) => (

                            <tr
                                key={user.id}
                                className="
                                    border-b
                                    border-gray-100
                                    last:border-b-0
                                    hover:bg-gray-50
                                    transition-colors
                                "
                            >

                                {/* User */}
                                <td className="
                                    px-5
                                    xl:px-6
                                    py-4
                                ">

                                    <div className="
                                        flex
                                        items-center
                                        gap-3
                                    ">

                                        <img
                                            src={getAvatar(user)}
                                            alt={user.name}
                                            className="
                                                w-10
                                                h-10
                                                rounded-full
                                                object-cover
                                                shrink-0
                                                border
                                                border-gray-100
                                            "
                                        />

                                        <div className="min-w-0">

                                            <p className="
                                                font-semibold
                                                text-gray-800
                                                truncate
                                                max-w-[180px]
                                            ">
                                                {user.name}
                                            </p>

                                            <p className="
                                                text-xs
                                                text-gray-400
                                                mt-0.5
                                            ">
                                                Administrator
                                            </p>

                                        </div>

                                    </div>

                                </td>

                                {/* Username */}
                                <td className="
                                    px-5
                                    xl:px-6
                                    py-4
                                    text-sm
                                    text-gray-600
                                ">
                                    {user.username || "-"}
                                </td>

                                {/* Email */}
                                <td className="
                                    px-5
                                    xl:px-6
                                    py-4
                                    text-sm
                                    text-gray-600
                                ">

                                    <span className="
                                        block
                                        max-w-[220px]
                                        truncate
                                    ">
                                        {user.email || "-"}
                                    </span>

                                </td>

                                {/* Role */}
                                <td className="
                                    px-5
                                    xl:px-6
                                    py-4
                                ">

                                    <span className={`
                                        inline-flex
                                        items-center
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        font-semibold
                                        whitespace-nowrap
                                        ${
                                            user.role === "super_admin"
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-green-100 text-green-700"
                                        }
                                    `}>
                                        {user.role === "super_admin"
                                            ? "Super Admin"
                                            : "Admin"}
                                    </span>

                                </td>

                                {/* Status */}
                                <td className="
                                    px-5
                                    xl:px-6
                                    py-4
                                ">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            onToggleStatus(user)
                                        }
                                        title={
                                            user.is_active
                                                ? "Nonaktifkan akun"
                                                : "Aktifkan akun"
                                        }
                                        className={`
                                            inline-flex
                                            items-center
                                            gap-1.5
                                            px-3
                                            py-1.5
                                            rounded-full
                                            text-xs
                                            font-semibold
                                            transition
                                            ${
                                                user.is_active
                                                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                                                    : "bg-red-100 text-red-700 hover:bg-red-200"
                                            }
                                        `}
                                    >

                                        <span className={`
                                            w-1.5
                                            h-1.5
                                            rounded-full
                                            ${
                                                user.is_active
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            }
                                        `} />

                                        {user.is_active
                                            ? "Aktif"
                                            : "Nonaktif"}

                                    </button>

                                </td>

                                {/* Actions */}
                                <td className="
                                    px-5
                                    xl:px-6
                                    py-4
                                ">

                                    <div className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                    ">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                onEdit(user)
                                            }
                                            title="Edit user"
                                            className="
                                                w-9
                                                h-9
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                bg-blue-50
                                                text-blue-600
                                                hover:bg-blue-100
                                                hover:text-blue-700
                                                transition
                                            "
                                        >
                                            <Pencil size={17} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                onResetPassword(user)
                                            }
                                            title="Reset password"
                                            className="
                                                w-9
                                                h-9
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                bg-indigo-50
                                                text-indigo-600
                                                hover:bg-indigo-100
                                                hover:text-indigo-700
                                                transition
                                            "
                                        >
                                            <RefreshCcw size={17} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                onDelete(user)
                                            }
                                            title="Hapus user"
                                            className="
                                                w-9
                                                h-9
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                bg-red-50
                                                text-red-600
                                                hover:bg-red-100
                                                hover:text-red-700
                                                transition
                                            "
                                        >
                                            <Trash2 size={17} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* ======================================================
                MOBILE / TABLET CARDS
            ======================================================= */}

            <div className="
                lg:hidden
                divide-y
                divide-gray-100
            ">

                {users.map((user) => (

                    <div
                        key={user.id}
                        className="
                            p-4
                            sm:p-5
                            hover:bg-gray-50
                            transition-colors
                        "
                    >

                        {/* User Header */}
                        <div className="
                            flex
                            items-start
                            justify-between
                            gap-3
                        ">

                            <div className="
                                flex
                                items-center
                                gap-3
                                min-w-0
                            ">

                                <img
                                    src={getAvatar(user)}
                                    alt={user.name}
                                    className="
                                        w-11
                                        h-11
                                        sm:w-12
                                        sm:h-12
                                        rounded-full
                                        object-cover
                                        shrink-0
                                        border
                                        border-gray-100
                                    "
                                />

                                <div className="min-w-0">

                                    <h3 className="
                                        font-semibold
                                        text-gray-800
                                        truncate
                                    ">
                                        {user.name}
                                    </h3>

                                    <p className="
                                        text-xs
                                        sm:text-sm
                                        text-gray-500
                                        truncate
                                    ">
                                        @{user.username}
                                    </p>

                                </div>

                            </div>

                            {/* Status */}
                            <span className={`
                                shrink-0
                                inline-flex
                                items-center
                                gap-1.5
                                px-2.5
                                py-1
                                rounded-full
                                text-[11px]
                                sm:text-xs
                                font-semibold
                                ${
                                    user.is_active
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }
                            `}>

                                <span className={`
                                    w-1.5
                                    h-1.5
                                    rounded-full
                                    ${
                                        user.is_active
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    }
                                `} />

                                {user.is_active
                                    ? "Aktif"
                                    : "Nonaktif"}

                            </span>

                        </div>

                        {/* User Info */}
                        <div className="
                            mt-4
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-3
                        ">

                            <div className="
                                rounded-xl
                                bg-gray-50
                                px-3
                                py-2.5
                            ">

                                <p className="
                                    text-[11px]
                                    text-gray-400
                                    mb-0.5
                                ">
                                    Email
                                </p>

                                <p className="
                                    text-sm
                                    text-gray-700
                                    truncate
                                ">
                                    {user.email || "-"}
                                </p>

                            </div>

                            <div className="
                                rounded-xl
                                bg-gray-50
                                px-3
                                py-2.5
                            ">

                                <p className="
                                    text-[11px]
                                    text-gray-400
                                    mb-0.5
                                ">
                                    Role
                                </p>

                                <span className={`
                                    inline-flex
                                    px-2.5
                                    py-1
                                    rounded-full
                                    text-xs
                                    font-semibold
                                    ${
                                        user.role === "super_admin"
                                            ? "bg-purple-100 text-purple-700"
                                            : "bg-green-100 text-green-700"
                                    }
                                `}>
                                    {user.role === "super_admin"
                                        ? "Super Admin"
                                        : "Admin"}
                                </span>

                            </div>

                        </div>

                        {/* Actions */}
                        <div className="
                            grid
                            grid-cols-3
                            gap-2
                            mt-4
                        ">

                            <button
                                type="button"
                                onClick={() => onEdit(user)}
                                className="
                                    min-h-10
                                    rounded-lg
                                    bg-blue-50
                                    text-blue-600
                                    hover:bg-blue-100
                                    transition
                                    flex
                                    items-center
                                    justify-center
                                    gap-1.5
                                    text-xs
                                    sm:text-sm
                                    font-medium
                                "
                            >
                                <Pencil size={16} />
                                Edit
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    onResetPassword(user)
                                }
                                className="
                                    min-h-10
                                    rounded-lg
                                    bg-indigo-50
                                    text-indigo-600
                                    hover:bg-indigo-100
                                    transition
                                    flex
                                    items-center
                                    justify-center
                                    gap-1.5
                                    text-xs
                                    sm:text-sm
                                    font-medium
                                "
                            >
                                <RefreshCcw size={16} />
                                Reset
                            </button>

                            <button
                                type="button"
                                onClick={() => onDelete(user)}
                                className="
                                    min-h-10
                                    rounded-lg
                                    bg-red-50
                                    text-red-600
                                    hover:bg-red-100
                                    transition
                                    flex
                                    items-center
                                    justify-center
                                    gap-1.5
                                    text-xs
                                    sm:text-sm
                                    font-medium
                                "
                            >
                                <Trash2 size={16} />
                                Hapus
                            </button>

                        </div>

                        {/* Toggle */}
                        <button
                            type="button"
                            onClick={() =>
                                onToggleStatus(user)
                            }
                            className={`
                                w-full
                                mt-2
                                min-h-10
                                rounded-lg
                                flex
                                items-center
                                justify-center
                                gap-2
                                text-xs
                                sm:text-sm
                                font-medium
                                transition
                                ${
                                    user.is_active
                                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        : "bg-green-50 text-green-700 hover:bg-green-100"
                                }
                            `}
                        >

                            <Power size={16} />

                            {user.is_active
                                ? "Nonaktifkan Akun"
                                : "Aktifkan Akun"}

                        </button>

                    </div>

                ))}

            </div>

            {/* Mobile hint */}
            <div className="
                lg:hidden
                px-4
                py-3
                border-t
                border-gray-100
                bg-gray-50
            ">

                <p className="
                    text-[11px]
                    sm:text-xs
                    text-gray-400
                    text-center
                ">
                    Tampilan otomatis menyesuaikan ukuran layar.
                </p>

            </div>

        </div>
    );
}