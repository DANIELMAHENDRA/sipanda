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

            const [

                profileResponse,

                newsResponse,

                categoryResponse,

            ] = await Promise.all([

                profileService.getProfile(),

                newsService.getAll({

                    search: keyword,

                    category: selectedCategory,

                    page,

                }),

                newsService.getCategories(),

            ]);

            setProfile(profileResponse.data.data);

            setNews(newsResponse.data.data);

            setPagination({

                current_page: newsResponse.data.current_page,

                last_page: newsResponse.data.last_page,

                next_page_url: newsResponse.data.next_page_url,

                prev_page_url: newsResponse.data.prev_page_url,

            });

            setCategories(categoryResponse.data.data);

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