import { useCallback, useEffect, useState } from "react";

import newsService from "../services/newsService";
import profileService from "../services/profileService";

export default function useNews({
    admin = false,
} = {}) {

    // ============================================================
    // DATA
    // ============================================================

    const [profile, setProfile] = useState(null);

    const [news, setNews] = useState([]);

    const [categories, setCategories] = useState([]);

    const [pagination, setPagination] = useState(null);


    // ============================================================
    // SEARCH
    // ============================================================

    const [keyword, setKeyword] = useState("");

    const [searchKeyword, setSearchKeyword] = useState("");


    // ============================================================
    // FILTER
    // ============================================================

    const [selectedCategory, setSelectedCategory] =
        useState(null);

    const [page, setPage] = useState(1);


    // ============================================================
    // STATUS
    // ============================================================

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    // ============================================================
    // FETCH DATA
    // ============================================================

    const fetchData = useCallback(async () => {

        try {

            setLoading(true);

            setError(null);


            // ====================================================
            // PROFILE
            // ====================================================

            /*
            | Profile hanya diperlukan untuk halaman public.
            | Admin tidak perlu mengambil profile setiap kali
            | berita di-refresh.
            */

            if (!admin) {

                try {

                    const profileResponse =
                        await profileService.get();

                    setProfile(
                        profileResponse.data?.data ?? null
                    );

                } catch (profileError) {

                    console.error(
                        "PROFILE ERROR:",
                        profileError
                    );

                }

            }


            // ====================================================
            // PARAMETER
            // ====================================================

            const params = {
                page,
            };


            /*
            | Search hanya dikirim jika ada isinya.
            */

            if (searchKeyword.trim()) {

                params.search =
                    searchKeyword.trim();

            }


            /*
            | Category hanya dikirim jika dipilih.
            */

            if (selectedCategory) {

                params.category =
                    selectedCategory;

            }


            // ====================================================
            // REQUEST BERITA
            // ====================================================

            let newsResponse;


            if (admin) {

                /*
                |--------------------------------------------------------------------------
                | ADMIN
                |--------------------------------------------------------------------------
                | GET /api/admin/news
                */

                newsResponse =
                    await newsService.getAdminAll(
                        params
                    );

            } else {

                /*
                |--------------------------------------------------------------------------
                | PUBLIC
                |--------------------------------------------------------------------------
                | GET /api/news
                */

                newsResponse =
                    await newsService.getAll(
                        params
                    );

            }


            console.log(
                admin
                    ? "ADMIN NEWS RESPONSE:"
                    : "NEWS RESPONSE:",
                newsResponse.data
            );


            // ====================================================
            // RESPONSE API
            // ====================================================

            const response =
                newsResponse.data?.data;


            // ====================================================
            // PAGINATION
            // ====================================================

            if (
                response &&
                !Array.isArray(response) &&
                Array.isArray(response.data)
            ) {

                setNews(
                    response.data
                );

                setPagination({

                    current_page:
                        response.current_page,

                    last_page:
                        response.last_page,

                    per_page:
                        response.per_page,

                    total:
                        response.total,

                    next_page_url:
                        response.next_page_url,

                    prev_page_url:
                        response.prev_page_url,

                });

            } else {

                /*
                | API mengembalikan array biasa.
                */

                setNews(
                    Array.isArray(response)
                        ? response
                        : []
                );

                setPagination(null);

            }


            // ====================================================
            // CATEGORY
            // ====================================================

            /*
            | Untuk sementara kategori diambil dari data berita.
            | Tidak mengubah backend.
            */

            const newsData =
                Array.isArray(response)
                    ? response
                    : response?.data ?? [];

            const uniqueCategories =
                [
                    ...new Set(
                        newsData
                            .map(
                                (item) =>
                                    item.category
                            )
                            .filter(Boolean)
                    ),
                ];

            setCategories(
                uniqueCategories
            );


        } catch (err) {

            console.error(
                admin
                    ? "ADMIN NEWS ERROR:"
                    : "NEWS ERROR:",
                err
            );

            setError(err);

            setNews([]);

        } finally {

            setLoading(false);

        }

    }, [
        admin,
        searchKeyword,
        selectedCategory,
        page,
    ]);


    // ============================================================
    // SEARCH
    // ============================================================

    const handleSearch = () => {

        setPage(1);

        setSearchKeyword(
            keyword.trim()
        );

    };


    // ============================================================
    // FILTER CATEGORY
    // ============================================================

    const handleCategoryChange = (
        category
    ) => {

        setPage(1);

        setSelectedCategory(
            category
        );

    };


    // ============================================================
    // FETCH
    // ============================================================

    useEffect(() => {

        fetchData();

    }, [
        fetchData,
    ]);


    // ============================================================
    // RETURN
    // ============================================================

    return {

        // DATA

        profile,

        news,

        categories,

        pagination,


        // SEARCH

        keyword,

        setKeyword,

        searchKeyword,

        handleSearch,


        // CATEGORY

        selectedCategory,

        setSelectedCategory,

        handleCategoryChange,


        // PAGINATION

        page,

        setPage,


        // STATUS

        loading,

        error,


        // REFRESH

        refresh:
            fetchData,

    };

}