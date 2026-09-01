import { useEffect, useState } from "react";

import galleryService from "../services/galleryService";


export default function useGallery(
    params = {},
    isAdmin = false
) {

    const [gallery, setGallery] = useState([]);

    const [pagination, setPagination] = useState({

        currentPage: 1,

        totalPages: 1,

        perPage: 10,

        total: 0,

    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    /*
    |--------------------------------------------------------------------------
    | Fetch Gallery
    |--------------------------------------------------------------------------
    */

    const fetchGallery = async () => {

        try {

            setLoading(true);

            setError(null);


            /*
            |--------------------------------------------------------------------------
            | Public / Admin
            |--------------------------------------------------------------------------
            */

            const response = isAdmin
                ? await galleryService.getAdmin(params)
                : await galleryService.getAll(params);


            /*
            |--------------------------------------------------------------------------
            | Data Gallery
            |--------------------------------------------------------------------------
            */

            setGallery(
                response.data?.data ?? []
            );


            /*
            |--------------------------------------------------------------------------
            | Pagination
            |--------------------------------------------------------------------------
            */

            const meta =
                response.data?.meta ?? {};


            setPagination({

                currentPage:
                    meta.current_page ?? 1,

                totalPages:
                    meta.last_page ?? 1,

                perPage:
                    meta.per_page ?? 10,

                total:
                    meta.total ?? 0,

            });


        } catch (err) {

            console.error(
                "Gagal mengambil data galeri:",
                err
            );

            setError(err);

            setGallery([]);

            setPagination({

                currentPage: 1,

                totalPages: 1,

                perPage: 10,

                total: 0,

            });

        } finally {

            setLoading(false);

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Fetch ketika parameter berubah
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        fetchGallery();

    }, [

        params.keyword,

        params.category,

        params.status,

        params.per_page,

        params.page,

        isAdmin,

    ]);


    /*
    |--------------------------------------------------------------------------
    | Return
    |--------------------------------------------------------------------------
    */

    return {

        gallery,

        pagination,

        loading,

        error,

        refresh: fetchGallery,

    };

}