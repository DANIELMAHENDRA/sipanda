import { useEffect, useState } from "react";

import dashboardService from "../services/dashboardService";

export default function useDashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchDashboard = async () => {

        try {

            setLoading(true);

            const response = await dashboardService.getDashboard();

            setDashboard(response.data.data);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchDashboard();

    }, []);

    return {

        dashboard,

        loading,

        error,

        refresh: fetchDashboard,

    };

}