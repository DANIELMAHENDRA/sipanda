import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "../common/Button";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menus = [
        {
            name: "Beranda",
            path: "/",
        },
        {
            name: "Profil",
            path: "/profil",
        },
        {
            name: "Pemerintahan",
            path: "/pemerintahan",
        },
        {
            name: "Berita",
            path: "/berita",
        },
        {
            name: "Galeri",
            path: "/galeri",
        },
        {
            name: "Potensi",
            path: "/potensi",
        },
        {
            name: "Kontak",
            path: "/kontak",
        },
    ];

    return (
        <>
            <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-black/20 backdrop-blur-md"
    }`}
>
    <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <NavLink
            to="/"
            className="flex items-center gap-3 shrink-0 group"
        >
            <img
                src={logo}
                alt="Logo SIPANDA"
                className="w-12 h-12 object-contain transition duration-300 group-hover:scale-105"
            />

            <div className="leading-tight">

                <h1
                    className={`font-bold text-lg tracking-wide transition-colors ${
                        scrolled
                            ? "text-green-700"
                            : "text-white"
                    }`}
                >
                    SIPANDA
                </h1>

                <p
                    className={`text-xs transition-colors ${
                        scrolled
                            ? "text-gray-600"
                            : "text-gray-200"
                    }`}
                >
                    Desa Panca Tunggal
                </p>

            </div>

        </NavLink>

        {/* Menu Desktop */}

        <nav className="hidden lg:flex items-center gap-8">

            {menus.map((menu) => (

                <NavLink
                    key={menu.path}
                    to={menu.path}
                    className={({ isActive }) =>
                        `
                        relative
                        font-medium
                        transition-all
                        duration-300
                        after:absolute
                        after:left-0
                        after:-bottom-2
                        after:h-[2px]
                        after:bg-green-500
                        after:transition-all
                        after:duration-300
                        ${
                            isActive
                                ? "text-green-500 after:w-full"
                                : scrolled
                                ? "text-gray-700 hover:text-green-700 after:w-0 hover:after:w-full"
                                : "text-white hover:text-green-300 after:w-0 hover:after:w-full"
                        }
                        `
                    }
                >
                    {menu.name}
                </NavLink>

            ))}

        </nav>

        {/* Login */}

        <div className="hidden lg:block">

            <Button to="/login">

                Login

            </Button>

        </div>

        {/* Mobile */}

        <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
        >

            <Menu
                size={30}
                className={
                    scrolled
                        ? "text-green-700"
                        : "text-white"
                }
            />

        </button>

    </div>
</header>

            {/* Overlay */}

            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
                    mobileOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                }`}
            />

            {/* Sidebar */}

            <aside
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transition-transform duration-300 lg:hidden ${
                    mobileOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Header */}

                <div className="flex items-center justify-between border-b p-6">
                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-12"
                        />

                        <div>
                            <h2 className="font-bold text-lg text-green-700">
                                SIPANDA
                            </h2>

                            <p className="text-sm text-gray-500">
                                Desa Panca Tunggal
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setMobileOpen(false)}
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Menu */}

                <nav className="flex flex-col px-6 py-8 gap-2">
                    {menus.map((menu) => (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                                `rounded-xl px-4 py-3 transition duration-300
                                ${
                                    isActive
                                        ? "bg-green-700 text-white font-semibold"
                                        : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                                }`
                            }
                        >
                            {menu.name}
                        </NavLink>
                    ))}

                    <div className="mt-6">
                        <Button
                            to="/login"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </div>
                </nav>
            </aside>
        </>
    );
}