import { useEffect, useState } from "react";

import activityLogService from "../services/activityLogService";

export default function useActivityLog(filters = {}) {

    const [logs, setLogs] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchLogs = async () => {

        try {

            setLoading(true);

            setError(null);

            const response = await activityLogService.getAll(filters);

            setLogs(response.data.data ?? []);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchLogs();

    }, [JSON.stringify(filters)]);

    return {

        logs,

        loading,

        error,

        reload: fetchLogs,

    };

}