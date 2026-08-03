import { useEffect, useState } from "react";
import heroService from "../services/heroService";

export default function useHero(page) {

    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchHero = async () => {

        try {

            const response = await heroService.get(page);

            setHero(response.data.data);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchHero();

    }, [page]);

    return {

        hero,

        loading,

        refresh: fetchHero,

    };

}