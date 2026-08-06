import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

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
import Dashboard from "../pages/admin/Dashboard";
import UserManagement from "../pages/admin/UserManagement";
import NewsManagement from "../pages/admin/NewsManagement";
import GovernmentManagement from "../pages/admin/GovernmentManagement";

// Auth
import Login from "../pages/auth/Login";

// Admin
import Dashboard from "../pages/admin/Dashboard";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <AuthProvider>

                {/* Auto Scroll To Top */}

                <ScrollToTop />

                <Routes>

                    {/* =======================================================
                        PUBLIC
                    ======================================================= */}

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
                            path="/potensi/:slug"
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

                    </Route>

                    {/* =======================================================
                        ADMIN
                    ======================================================= */}

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute
                                roles={["super_admin", "admin"]}
                            >
                                <AdminLayout />
                            </ProtectedRoute>
                        }
                    >

                        <Route
                            path="dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="users"
                            element={<UserManagement />}
                        />

                        <Route
                            path="news"
                            element={<NewsManagement />}
                        />

                        <Route
                            path="government"
                            element={<GovernmentManagement />}
                        />

                    </Route>

                    {/* =======================================================
                        404
                    ======================================================= */}

                    <Route
                        path="*"
                        element={<NotFound />}
                    />

                </Routes>

            </AuthProvider>

        </BrowserRouter>

    );

}