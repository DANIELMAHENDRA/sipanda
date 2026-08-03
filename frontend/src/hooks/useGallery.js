import { useEffect, useState } from "react";
import galleryService from "../services/galleryService";

export default function useGallery(params = {}) {

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGallery = async () => {

        try {

            const response = await galleryService.getAll(params);

            setGallery(response.data.data);

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

        refresh: fetchGallery,

    };

}