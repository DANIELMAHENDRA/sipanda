import { Outlet } from "react-router-dom";

import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* =====================================================
                SIDEBAR
            ====================================================== */}

            <Sidebar />

            {/* =====================================================
                MAIN AREA
            ====================================================== */}

            <div className="
                flex-1
                min-w-0
                flex
                flex-col
                lg:ml-0
            ">

                {/* Topbar */}
                <Topbar />

                {/* =================================================
                    PAGE CONTENT
                ================================================== */}

                <main className="
                    flex-1
                    min-w-0
                    w-full
                    p-4
                    sm:p-5
                    lg:p-6
                    xl:p-8
                ">

                    <div className="
                        w-full
                        max-w-[1600px]
                        mx-auto
                    ">

                        <Outlet />

                    </div>

                </main>

            </div>

        </div>
    );
}