import { useEffect, useState } from "react";

import governmentService from "../services/governmentService";

export default function useGovernment(params = {}) {

    const {
        admin = false,
        ...queryParams
    } = params;

    const [government, setGovernment] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchGovernment = async () => {

        try {

            setLoading(true);

            setError(null);

            const response = admin
                ? await governmentService.getAdmin(queryParams)
                : await governmentService.getAll(queryParams);

            setGovernment(
                response.data?.data ?? []
            );

        } catch (err) {

            console.error(
                "Gagal mengambil data pemerintahan:",
                err
            );

            setError(err);

            setGovernment([]);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchGovernment();

    }, [
        admin,
        JSON.stringify(queryParams)
    ]);

    return {

        government,

        loading,

        error,

        refresh: fetchGovernment,

    };

}