import { useEffect, useState } from "react";
import governmentService from "../services/governmentService";

export default function useGovernment() {

    const [government, setGovernment] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGovernment = async () => {

        try {

            const response = await governmentService.getAll();

            setGovernment(response.data.data);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchGovernment();

    }, []);

    return {

        government,

        loading,

        refresh: fetchGovernment,

    };

}