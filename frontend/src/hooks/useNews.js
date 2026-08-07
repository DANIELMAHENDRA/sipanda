import { useEffect, useState } from "react";

import newsService from "../services/newsService";
import profileService from "../services/profileService";

export default function useNews() {

    const [profile, setProfile] = useState(null);
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState(null);

    const [keyword, setKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        try {

            setLoading(true);
            setError(null);

            // ===========================
            // Ambil Profile
            // ===========================
            const profileResponse = await profileService.get();

            setProfile(profileResponse.data.data);

            // ===========================
            // Ambil Data Berita
            // ===========================
            const newsResponse = await newsService.getAll({
                search: keyword,
                category: selectedCategory,
                page,
            });

            console.log("NEWS RESPONSE", newsResponse.data);

            /**
             * Sesuaikan dengan response API
             */
            const response = newsResponse.data.data;

            /**
             * Jika backend menggunakan paginate()
             */
            if (response.data) {

                setNews(response.data);

                setPagination({
                    current_page: response.current_page,
                    last_page: response.last_page,
                    next_page_url: response.next_page_url,
                    prev_page_url: response.prev_page_url,
                });

            } else {

                /**
                 * Jika backend mengembalikan array biasa
                 */
                setNews(response);

                setPagination(null);

            }

            /**
             * sementara kategori dikosongkan
             */
            setCategories([]);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchData();

    }, [
        keyword,
        selectedCategory,
        page,
    ]);

    return {

        profile,

        news,

        categories,

        pagination,

        keyword,

        setKeyword,

        selectedCategory,

        setSelectedCategory,

        page,

        setPage,

        loading,

        error,

        refresh: fetchData,

    };

}