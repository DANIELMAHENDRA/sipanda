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
} from "lucide-react";

import MenuItem from "./MenuItem";
import { useAuth } from "../../contexts/AuthContext";

export default function Sidebar() {

    const location = useLocation();

    const { user, logout } = useAuth();

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

    return (

        <aside className="w-72 bg-white border-r shadow-sm min-h-screen flex flex-col">

            <div className="p-6 border-b">

            <Link
                to="/admin/dashboard"
                className="text-2xl font-bold text-green-700"
            >
                SIPANDA
            </Link>

            <p className="text-xs text-gray-500 mt-1 leading-relaxed">

                Sistem Informasi Pelayanan dan Administrasi Desa

            </p>

            </div>

            <nav className="flex-1 p-4 space-y-2">

                {

                    menus
                        .filter(menu =>
                            menu.roles.includes(user?.role)
                        )
                        .map(menu => (

                            <MenuItem
                                key={menu.path}
                                icon={menu.icon}
                                title={menu.title}
                                path={menu.path}
                                active={location.pathname.startsWith(menu.path)}
                            />

                        ))

                }

            </nav>

            <div className="border-t p-4">

                <button

                    onClick={logout}

                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50"

                >

                    <LogOut size={18} />

                    Logout

                </button>

            </div>

        </aside>

    );

}