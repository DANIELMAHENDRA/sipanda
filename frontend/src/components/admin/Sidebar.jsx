import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
    LayoutDashboard,
    Users,
    Newspaper,
    Image,
    Landmark,
    Briefcase,
    Map,
    Activity,
    Phone,
    LogOut,
    Menu,
    X,
} from "lucide-react";

import MenuItem from "./MenuItem";
import { useAuth } from "../../contexts/AuthContext";

export default function Sidebar() {
    const location = useLocation();
    const { user, logout } = useAuth();

    const [open, setOpen] = useState(false);

    const menus = [
        {
            title: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin/dashboard",
            roles: ["super_admin", "admin"],
        },
        {
            title: "User Management",
            icon: Users,
            path: "/admin/users",
            roles: ["super_admin"],
        },
        {
            title: "Berita",
            icon: Newspaper,
            path: "/admin/news",
            roles: ["super_admin", "admin"],
        },
        {
            title: "Galeri",
            icon: Image,
            path: "/admin/gallery",
            roles: ["super_admin", "admin"],
        },
        {
            title: "Potensi",
            icon: Map,
            path: "/admin/potential",
            roles: ["super_admin", "admin"],
        },
        {
            title: "Pemerintahan",
            icon: Landmark,
            path: "/admin/government",
            roles: ["super_admin", "admin"],
        },
        {
            title: "Layanan",
            icon: Briefcase,
            path: "/admin/service",
            roles: ["super_admin", "admin"],
        },
        {
            title: "Kontak",
            icon: Phone,
            path: "/admin/contact",
            roles: ["super_admin", "admin"],
        },
        {
            title: "Activity Log",
            icon: Activity,
            path: "/admin/activity-log",
            roles: ["super_admin"],
        },
    ];

    const closeSidebar = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        closeSidebar();
        logout();
    };

    return (
        <>
            {/* =====================================================
                MOBILE MENU BUTTON
            ====================================================== */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Buka menu"
                className="
                    lg:hidden
                    fixed
                    top-4
                    left-4
                    z-[60]
                    w-11
                    h-11
                    rounded-xl
                    bg-green-700
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    hover:bg-green-800
                    active:scale-95
                    transition
                "
            >
                <Menu size={22} />
            </button>

            {/* =====================================================
                MOBILE OVERLAY
            ====================================================== */}
            <div
                onClick={closeSidebar}
                aria-hidden={!open}
                className={`
                    lg:hidden
                    fixed
                    inset-0
                    bg-black/50
                    backdrop-blur-[2px]
                    z-40
                    transition-all
                    duration-300
                    ${
                        open
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }
                `}
            />

            {/* =====================================================
                SIDEBAR
            ====================================================== */}
            <aside
                className={`
                    fixed
                    lg:sticky
                    lg:top-0
                    inset-y-0
                    left-0
                    z-50
                    w-[280px]
                    lg:w-72
                    bg-white
                    border-r
                    border-gray-100
                    shadow-xl
                    lg:shadow-sm
                    h-screen
                    flex
                    flex-col
                    transition-transform
                    duration-300
                    ease-in-out
                    ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >

                {/* =================================================
                    BRAND
                ================================================== */}
                <div className="px-5 sm:px-6 py-5 border-b border-gray-100 shrink-0">

                    <div className="flex items-center justify-between gap-3">

                        <Link
                            to="/admin/dashboard"
                            onClick={closeSidebar}
                            className="group min-w-0"
                        >

                            <div className="text-2xl font-extrabold tracking-tight text-green-700 group-hover:text-green-800 transition">
                                SIPANDA
                            </div>

                            <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                                Sistem Informasi Pelayanan dan Administrasi Desa
                            </p>

                        </Link>

                        {/* Mobile Close */}
                        <button
                            type="button"
                            onClick={closeSidebar}
                            aria-label="Tutup menu"
                            className="
                                lg:hidden
                                shrink-0
                                w-9
                                h-9
                                rounded-lg
                                flex
                                items-center
                                justify-center
                                text-gray-500
                                hover:text-red-600
                                hover:bg-red-50
                                transition
                            "
                        >
                            <X size={20} />
                        </button>

                    </div>

                </div>

                {/* =================================================
                    USER INFO MOBILE
                ================================================== */}
                <div className="px-4 pt-4 lg:hidden">

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-100">

                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center overflow-hidden shrink-0">

                            {user?.photo ? (
                                <img
                                    src={user.photo}
                                    alt={user?.name || "User"}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-sm font-bold text-green-700">
                                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                                </span>
                            )}

                        </div>

                        <div className="min-w-0">

                            <p className="text-sm font-semibold text-gray-800 truncate">
                                {user?.name || "-"}
                            </p>

                            <p className="text-xs text-gray-500 capitalize truncate">
                                {user?.role?.replace("_", " ") || "-"}
                            </p>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    MENU
                ================================================== */}
                <nav className="flex-1 px-3 sm:px-4 py-4 overflow-y-auto">

                    <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Menu Utama
                    </p>

                    <div className="space-y-1.5">

                        {menus
                            .filter((menu) =>
                                menu.roles.includes(user?.role)
                            )
                            .map((menu) => (
                                <div
                                    key={menu.path}
                                    onClick={closeSidebar}
                                >
                                    <MenuItem
                                        icon={menu.icon}
                                        title={menu.title}
                                        path={menu.path}
                                        active={location.pathname.startsWith(
                                            menu.path
                                        )}
                                    />
                                </div>
                            ))}

                    </div>

                </nav>

                {/* =================================================
                    LOGOUT
                ================================================== */}
                <div className="border-t border-gray-100 p-3 sm:p-4 shrink-0">

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="
                            w-full
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            rounded-xl
                            text-red-600
                            hover:bg-red-50
                            hover:text-red-700
                            transition
                            font-medium
                        "
                    >
                        <LogOut size={18} />

                        <span>
                            Logout
                        </span>
                    </button>

                </div>

            </aside>
        </>
    );
}