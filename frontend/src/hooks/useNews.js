import { useEffect, useState } from "react";

import newsService from "../services/newsService";
import profileService from "../services/profileService";

export default function useNews() {

    // ===========================
    // DATA
    // ===========================

    const [profile, setProfile] = useState(null);
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState(null);

    // ===========================
    // SEARCH
    // ===========================

    // Isi yang sedang diketik di input
    const [keyword, setKeyword] = useState("");

    // Keyword yang benar-benar digunakan untuk pencarian
    const [searchKeyword, setSearchKeyword] = useState("");

    // ===========================
    // FILTER
    // ===========================

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [page, setPage] = useState(1);

    // ===========================
    // STATUS
    // ===========================

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // ===========================
    // FETCH DATA
    // ===========================

    const fetchData = async () => {

        try {

            setLoading(true);
            setError(null);

            // ===========================
            // PROFILE
            // ===========================

            const profileResponse =
                await profileService.get();

            setProfile(
                profileResponse.data.data
            );


            // ===========================
            // BERITA
            // ===========================

            const newsResponse =
                await newsService.getAll({

                    // PENTING:
                    // gunakan searchKeyword,
                    // bukan keyword
                    search: searchKeyword,

                    category: selectedCategory,

                    page: page,

                });


            console.log(
                "NEWS RESPONSE",
                newsResponse.data
            );


            // ===========================
            // RESPONSE API
            // ===========================

            const response =
                newsResponse.data.data;


            // ===========================
            // JIKA MENGGUNAKAN PAGINATION
            // ===========================

            if (
                response &&
                response.data
            ) {

                setNews(
                    response.data
                );

                setPagination({

                    current_page:
                        response.current_page,

                    last_page:
                        response.last_page,

                    next_page_url:
                        response.next_page_url,

                    prev_page_url:
                        response.prev_page_url,

                });

            } else {

                // ===========================
                // JIKA ARRAY BIASA
                // ===========================

                setNews(
                    Array.isArray(response)
                        ? response
                        : []
                );

                setPagination(null);

            }


            // ===========================
            // KATEGORI
            // ===========================

            setCategories([]);

        } catch (err) {

            console.error(
                "NEWS ERROR:",
                err
            );

            setError(err);

        } finally {

            setLoading(false);

        }

    };


    // ===========================
    // SEARCH
    // ===========================

    const handleSearch = () => {

        // Kembali ke halaman pertama
        setPage(1);

        // BARU di sini keyword input
        // dijadikan keyword pencarian
        setSearchKeyword(
            keyword.trim()
        );

    };


    // ===========================
    // FETCH SAAT FILTER BERUBAH
    // ===========================

    useEffect(() => {

        fetchData();

    }, [
        searchKeyword,
        selectedCategory,
        page,
    ]);


    // ===========================
    // RETURN
    // ===========================

    return {

        profile,

        news,

        categories,

        pagination,


        // ===========================
        // SEARCH
        // ===========================

        keyword,

        setKeyword,

        searchKeyword,

        handleSearch,


        // ===========================
        // CATEGORY
        // ===========================

        selectedCategory,

        setSelectedCategory,


        // ===========================
        // PAGINATION
        // ===========================

        page,

        setPage,


        // ===========================
        // STATUS
        // ===========================

        loading,

        error,


        // ===========================
        // REFRESH
        // ===========================

        refresh: fetchData,

    };

}