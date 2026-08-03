import { useEffect, useState } from "react";
import potentialService from "../services/potentialService";

export default function usePotential() {

    const [potential, setPotential] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPotential = async () => {

        try {

            const response = await potentialService.getAll();

            setPotential(response.data.data);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchPotential();

    }, []);

    return {

        potential,

        loading,

        refresh: fetchPotential,

    };

}