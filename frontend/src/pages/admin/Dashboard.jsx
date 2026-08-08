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
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">

                    <div className="
                        w-10
                        h-10
                        mx-auto
                        border-4
                        border-green-200
                        border-t-green-600
                        rounded-full
                        animate-spin
                    " />

                    <p className="mt-4 text-sm font-medium text-gray-600">
                        Memuat dashboard...
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                        Mohon tunggu sebentar
                    </p>

                </div>
            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Error
    |--------------------------------------------------------------------------
    */

    if (error) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">

                <div className="
                    w-full
                    max-w-md
                    bg-white
                    rounded-2xl
                    border
                    border-red-100
                    shadow-sm
                    p-6
                    sm:p-8
                    text-center
                ">

                    <div className="
                        w-12
                        h-12
                        mx-auto
                        rounded-full
                        bg-red-100
                        flex
                        items-center
                        justify-center
                        text-red-600
                        font-bold
                    ">
                        !
                    </div>

                    <h2 className="mt-4 text-lg font-semibold text-gray-800">
                        Gagal memuat dashboard
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Data dashboard tidak dapat dimuat saat ini.
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

    if (!dashboard) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">

                <div className="text-center">

                    <p className="text-sm font-medium text-gray-600">
                        Data dashboard tidak tersedia.
                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="space-y-6 sm:space-y-7 lg:space-y-8">

            {/* ==========================================================
                HEADER
            =========================================================== */}

            <section>

                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                    gap-3
                ">

                    <div className="min-w-0">

                        <h1 className="
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            font-bold
                            tracking-tight
                            text-gray-800
                        ">
                            Dashboard
                        </h1>

                        <p className="
                            mt-1.5
                            sm:mt-2
                            text-sm
                            sm:text-base
                            text-gray-500
                            leading-relaxed
                        ">
                            Selamat datang di Sistem Informasi Pemerintah Desa
                            (SIPANDA).
                        </p>

                    </div>

                </div>

            </section>

            {/* ==========================================================
                STATISTICS
            =========================================================== */}

            <section>
                <DashboardStats
                    statistics={dashboard.statistics}
                />
            </section>

            {/* ==========================================================
                LATEST DATA
            =========================================================== */}

            <section className="
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-5
                lg:gap-6
            ">

                <LatestUsers
                    users={dashboard.latest_users || []}
                />

                <LatestNews
                    news={dashboard.latest_news || []}
                />

            </section>

            {/* ==========================================================
                RECENT ACTIVITY
            =========================================================== */}

            <section>
                <RecentActivity
                    activities={dashboard.recent_activity || []}
                />
            </section>

        </div>
    );
}