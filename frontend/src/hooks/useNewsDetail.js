import { useEffect, useState } from "react";
import newsService from "../services/newsService";

export default function useNewsDetail(id){

    const [news, setNews] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchNews = async () => {

        try {

            setLoading(true);

            setError(null);

            const response = await newsService.getById(id);

            setNews(response.data.data);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        if (id) {
            fetchNews();
        }

    }, [id]);

    return {

        news,

        loading,

        error,

        refresh: fetchNews,

    };

}