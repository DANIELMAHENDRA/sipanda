import { BrowserRouter, Routes, Route } from "react-router-dom";


import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";


import ScrollToTop from "../components/common/ScrollToTop";


import Home from "../pages/public/Home";
import Profile from "../pages/public/Profile";
import Government from "../features/government/Government";
import News from "../pages/public/News";
import DetailNews from "../pages/public/DetailNews";
import Gallery from "../pages/public/Gallery";
import Potential from "../pages/public/Potential";
import DetailPotential from "../pages/public/DetailPotential";
import Contact from "../pages/public/Contact";
import NotFound from "../pages/error/NotFound";

// Auth
import Login from "../pages/auth/Login";

// Admin
import Dashboard from "../pages/admin/Dashboard";

export default function AppRoutes() {
    return (
        <BrowserRouter>

            {/* Auto Scroll To Top */}
            <ScrollToTop />

            <Routes>

                {/* ================= PUBLIC ================= */}

                <Route element={<PublicLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/profil"
                        element={<Profile />}
                    />

                    <Route
                        path="/pemerintahan"
                        element={<Government />}
                    />

                    <Route
                        path="/berita"
                        element={<News />}
                    />

                    <Route
                        path="/berita/:id"
                        element={<DetailNews />}
                    />

                    <Route
                        path="/galeri"
                        element={<Gallery />}
                    />

                    <Route
                        path="/potensi"
                        element={<Potential />}
                    />

                    <Route
                        path="/potensi/:id"
                        element={<DetailPotential />}
                    />

                    <Route
                        path="/kontak"
                        element={<Contact />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route path="*" element={<NotFound />} />

                </Route>

                {/* ================= ADMIN ================= */}

                <Route element={<AdminLayout />}>

                    <Route
                        path="/admin/dashboard"
                        element={<Dashboard />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}