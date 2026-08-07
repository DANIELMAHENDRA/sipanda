import { AuthProvider } from "../contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

import ScrollToTop from "../components/common/ScrollToTop";

// PUBLIC
import Home from "../pages/public/Home";
import Profile from "../pages/public/Profile";
import Government from "../features/government/Government";
import News from "../pages/public/News";
import DetailNews from "../pages/public/DetailNews";
import Gallery from "../pages/public/Gallery";
import Potential from "../pages/public/Potential";
import DetailPotential from "../pages/public/DetailPotential";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import NotFound from "../pages/error/NotFound";

// ADMIN
import Dashboard from "../pages/admin/Dashboard";
import UserManagement from "../pages/admin/UserManagement";
import NewsManagement from "../pages/admin/NewsManagement";
import GalleryManagement from "../pages/admin/GalleryManagement";
import PotentialManagement from "../pages/admin/PotentialManagement";
import GovernmentManagement from "../pages/admin/GovernmentManagement";
import ServiceManagement from "../pages/admin/ServiceManagement";
import ContactManagement from "../pages/admin/ContactManagement";
import ActivityLog from "../pages/admin/ActivityLog";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <AuthProvider>

                <ScrollToTop />

                <Routes>

                    {/* PUBLIC */}

                    <Route element={<PublicLayout />}>

                        <Route path="/" element={<Home />} />
                        <Route path="/profil" element={<Profile />} />
                        <Route path="/pemerintahan" element={<Government />} />
                        <Route path="/berita" element={<News />} />
                        <Route path="/berita/:id" element={<DetailNews />} />
                        <Route path="/galeri" element={<Gallery />} />
                        <Route path="/potensi" element={<Potential />} />
                        <Route path="/potensi/:id"element={<DetailPotential />}/>
                        <Route path="/kontak" element={<Contact />} />
                        <Route path="/login" element={<Login />} />

                    </Route>

                    {/* ADMIN */}

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute roles={["super_admin", "admin"]}>
                                <AdminLayout />
                            </ProtectedRoute>
                        }
                    >

                        {/* Redirect /admin -> /admin/dashboard */}
                        <Route
                            index
                            element={<Navigate to="dashboard" replace />}
                        />

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
                            path="gallery"
                            element={<GalleryManagement />}
                        />

                        <Route
                            path="potential"
                            element={<PotentialManagement />}
                        />

                        <Route
                            path="government"
                            element={<GovernmentManagement />}
                        />

                        <Route
                            path="service"
                            element={<ServiceManagement />}
                        />

                        <Route
                            path="contact"
                            element={<ContactManagement />}
                        />

                        <Route
                            path="activity-log"
                            element={<ActivityLog />}
                        />

                    </Route>

                    <Route

                        path="*"

                        element={<NotFound />}

                    />

                </Routes>

            </AuthProvider>

        </BrowserRouter>

    );

}