import { useState } from "react";

import useActivityLog from "../../hooks/useActivityLog";

import ActivityLogTable from "../../components/admin/activity-log/ActivityLogTable";
import ActivityLogDetailModal from "../../components/admin/activity-log/ActivityLogDetailModal";

export default function ActivityLog() {

    const {

        logs,

        loading,

        reload,

    } = useActivityLog();

    const [selectedLog, setSelectedLog] = useState(null);

    const [openDetail, setOpenDetail] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Detail Activity
    |--------------------------------------------------------------------------
    */

    const handleDetail = (log) => {

        setSelectedLog(log);

        setOpenDetail(true);

    };

    return (

        <div className="space-y-6">

            {/* ==========================================================
                Header
            ========================================================== */}

            <div>

                <h1 className="text-3xl font-bold">

                    Activity Log

                </h1>

                <p className="text-gray-500 mt-1">

                    Riwayat seluruh aktivitas administrator SIPANDA.

                </p>

            </div>

            {/* ==========================================================
                Table
            ========================================================== */}

            <ActivityLogTable

                logs={logs}

                loading={loading}

                onDetail={handleDetail}

            />

            {/* ==========================================================
                Detail Modal
            ========================================================== */}

            <ActivityLogDetailModal

                open={openDetail}

                onClose={() => setOpenDetail(false)}

                activity={selectedLog}

                reload={reload}

            />

        </div>

    );

}