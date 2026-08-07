import { useEffect, useState } from "react";

import governmentService from "../services/governmentService";

export default function useGovernment(params = {}) {

    const [government, setGovernment] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchGovernment = async () => {

        try {

            setLoading(true);

            setError(null);

            const response = await governmentService.getAll(params);

            setGovernment(response.data.data ?? []);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchGovernment();

    }, [JSON.stringify(params)]);

    return {

        government,

        loading,

        error,

        refresh: fetchGovernment,

    };

}