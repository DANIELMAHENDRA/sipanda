import { useEffect, useState } from "react";
import potentialService from "../services/potentialService";

export default function usePotentialDetail(id) {

    const [potential, setPotential] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPotential = async () => {

        if (!id) return;

        try {

            setLoading(true);
            setError(null);

            const response = await potentialService.getById(id);

            setPotential(response.data?.data ?? null);

        } catch (err) {

            console.error(
                "Gagal mengambil detail potensi:",
                err
            );

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchPotential();

    }, [id]);

    return {
        potential,
        loading,
        error,
        refresh: fetchPotential,
    };

}