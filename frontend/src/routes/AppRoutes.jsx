import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public Pages
import Home from "../pages/public/Home";
import Profile from "../pages/public/Profile";
import Government from "../pages/public/Government";
import News from "../pages/public/News";
import Gallery from "../pages/public/Gallery";
import Potential from "../pages/public/Potential";
import Contact from "../pages/public/Contact";

// Auth
import Login from "../pages/auth/Login";

// Admin
import Dashboard from "../pages/admin/Dashboard";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profil" element={<Profile />} />
                    <Route path="/pemerintahan" element={<Government />} />
                    <Route path="/berita" element={<News />} />
                    <Route path="/galeri" element={<Gallery />} />
                    <Route path="/potensi" element={<Potential />} />
                    <Route path="/kontak" element={<Contact />} />

                    {/* Login */}
                    <Route path="/login" element={<Login />} />
                </Route>

                {/* Admin */}
                <Route element={<AdminLayout />}>
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}