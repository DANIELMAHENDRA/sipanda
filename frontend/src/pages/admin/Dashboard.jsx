import useDashboard from "../../hooks/useDashboard";

import DashboardStats from "../../components/admin/DashboardStats";
import LatestUsers from "../../components/admin/LatestUsers";
import LatestNews from "../../components/admin/LatestNews";
import RecentActivity from "../../components/admin/RecentActivity";

export default function Dashboard() {

    const {

        dashboard,

        loading,

        error,

    } = useDashboard();

    /*
    |--------------------------------------------------------------------------
    | Loading State
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <div className="flex items-center justify-center h-96">

                <p className="text-gray-500 text-lg">

                    Memuat dashboard...

                </p>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Error State
    |--------------------------------------------------------------------------
    */

    if (error) {

        return (

            <div className="flex items-center justify-center h-96">

                <p className="text-red-500 text-lg">

                    Gagal memuat data dashboard.

                </p>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Empty State
    |--------------------------------------------------------------------------
    */

    if (!dashboard) {

        return (

            <div className="flex items-center justify-center h-96">

                <p className="text-gray-500">

                    Data dashboard tidak tersedia.

                </p>

            </div>

        );

    }

    return (

        <div className="space-y-8">

            {/* =======================================================
                Header
            ======================================================= */}

            <div>

                <h1 className="text-3xl font-bold text-gray-800">

                    Dashboard

                </h1>

                <p className="text-gray-500 mt-2">

                    Selamat datang di Sistem Informasi Pemerintah Desa (SIPANDA).

                </p>

            </div>

            {/* =======================================================
                Statistik
            ======================================================= */}

            <DashboardStats

                statistics={dashboard.statistics}

            />

            {/* =======================================================
                Latest Users & Latest News
            ======================================================= */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <LatestUsers

                    users={dashboard.latest_users}

                />

                <LatestNews

                    news={dashboard.latest_news}

                />

            </div>

            {/* =======================================================
                Recent Activity
            ======================================================= */}

            <RecentActivity

                activities={dashboard.recent_activity}

            />

        </div>

    );

}