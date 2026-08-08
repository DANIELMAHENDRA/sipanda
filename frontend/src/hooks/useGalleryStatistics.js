import { useEffect, useState } from "react";

import galleryService from "../services/galleryService";

export default function useGalleryStatistics() {

    /*
    |--------------------------------------------------------------------------
    | State Statistik
    |--------------------------------------------------------------------------
    */

    const [statistics, setStatistics] = useState({
        photos: 0,
        featured: 0,
        categories: 0,
        this_year: 0,
    });


    /*
    |--------------------------------------------------------------------------
    | State Loading
    |--------------------------------------------------------------------------
    */

    const [loading, setLoading] = useState(true);


    /*
    |--------------------------------------------------------------------------
    | State Error
    |--------------------------------------------------------------------------
    */

    const [error, setError] = useState(null);


    /*
    |--------------------------------------------------------------------------
    | Mengambil Statistik Galeri
    |--------------------------------------------------------------------------
    */

    const fetchStatistics = async () => {

        try {

            setLoading(true);

            setError(null);


            /*
            |--------------------------------------------------------------------------
            | Request ke API
            |--------------------------------------------------------------------------
            */

            const response =
                await galleryService.getStatistics();


            /*
            |--------------------------------------------------------------------------
            | Data dari Backend
            |--------------------------------------------------------------------------
            |
            | Backend mengirim:
            |
            | {
            |     total_gallery: 7,
            |     total_categories: 7,
            |     total_featured: 5,
            |     total_this_year: 7
            | }
            |
            |--------------------------------------------------------------------------
            */

            const data = response.data?.data;


            console.log(
                "Gallery Statistics Response:",
                response
            );

            console.log(
                "Gallery Statistics Data:",
                data
            );


            /*
            |--------------------------------------------------------------------------
            | Mapping Data Backend ke Format Frontend
            |--------------------------------------------------------------------------
            */

            setStatistics({

                photos:
                    data?.total_gallery ?? 0,

                featured:
                    data?.total_featured ?? 0,

                categories:
                    data?.total_categories ?? 0,

                this_year:
                    data?.total_this_year ?? 0,

            });


        } catch (err) {

            console.error(
                "Gagal mengambil statistik galeri:",
                err
            );

            setError(err);


            /*
            |--------------------------------------------------------------------------
            | Reset Statistik Jika Error
            |--------------------------------------------------------------------------
            */

            setStatistics({
                photos: 0,
                featured: 0,
                categories: 0,
                this_year: 0,
            });


        } finally {

            setLoading(false);

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Jalankan Saat Component Pertama Kali Dibuka
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        fetchStatistics();

    }, []);


    /*
    |--------------------------------------------------------------------------
    | Return
    |--------------------------------------------------------------------------
    */

    return {

        statistics,

        loading,

        error,

        refresh: fetchStatistics,

    };

}