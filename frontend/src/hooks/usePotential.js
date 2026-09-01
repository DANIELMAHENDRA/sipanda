import { useEffect, useState } from "react";
import potentialService from "../services/potentialService";

export default function usePotential(params = {}, isAdmin = false) {

    const [potential, setPotential] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    const fetchPotential = async () => {

        try {

            setLoading(true);

            setError(null);


            const response = isAdmin
                ? await potentialService.getAdmin(params)
                : await potentialService.getAll(params);


            setPotential(response.data?.data ?? []);

        } catch (err) {

            console.error(
                "Gagal mengambil data potential:",
                err
            );

            setError(err);

        } finally {

            setLoading(false);

        }

    };


    useEffect(() => {

        fetchPotential();

    }, [
        JSON.stringify(params),
        isAdmin
    ]);


    return {

        potential,

        loading,

        error,

        refresh: fetchPotential,

    };

}