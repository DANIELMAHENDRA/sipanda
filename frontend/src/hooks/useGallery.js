import { useEffect, useState } from "react";
import galleryService from "../services/galleryService";

export default function useGallery(params = {}) {

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchGallery = async () => {

        try {

            setLoading(true);

            const response = await galleryService.getAll(params);

            setGallery(response.data.data);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchGallery();

    }, []);

    return {

        gallery,

        loading,

        error,

        refresh: fetchGallery,

    };

}