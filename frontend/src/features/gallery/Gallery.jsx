import { useState } from "react";

import useGallery from "../../hooks/useGallery";

import HeroGallery from "./components/HeroGallery";
import GalleryFilter from "./components/GalleryFilter";
import GalleryGrid from "./components/GalleryGrid";
import GalleryStatistics from "./components/GalleryStatistics";
import GalleryPagination from "./components/GalleryPagination";
import CTASection from "./components/CTASection";


export default function Gallery() {

    /*
    |--------------------------------------------------------------------------
    | Search & Category
    |--------------------------------------------------------------------------
    */

    const [keyword, setKeyword] = useState("");

    const [category, setCategory] = useState("Semua");


    /*
    |--------------------------------------------------------------------------
    | Current Page
    |--------------------------------------------------------------------------
    */

    const [currentPage, setCurrentPage] = useState(1);


    /*
    |--------------------------------------------------------------------------
    | Gallery Data
    |--------------------------------------------------------------------------
    */

    const {

        gallery,

        pagination,

        loading,

        error,

    } = useGallery({

        keyword:
            keyword.trim() || undefined,

        category:
            category !== "Semua"
                ? category
                : undefined,

        per_page: 10,

        page: currentPage,

    });


    /*
    |--------------------------------------------------------------------------
    | Search
    |--------------------------------------------------------------------------
    */

    const handleKeywordChange = (value) => {

        setKeyword(value);

        /*
        | Ketika pencarian berubah,
        | kembali ke halaman pertama.
        */

        if (currentPage !== 1) {

            setCurrentPage(1);

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Category
    |--------------------------------------------------------------------------
    */

    const handleCategoryChange = (value) => {

        setCategory(value);

        /*
        | Ketika kategori berubah,
        | kembali ke halaman pertama.
        */

        if (currentPage !== 1) {

            setCurrentPage(1);

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Page Change
    |--------------------------------------------------------------------------
    */

    const handlePageChange = (page) => {

        setCurrentPage(page);


        /*
        | Scroll kembali ke area gallery
        | supaya UX lebih nyaman.
        */

        window.scrollTo({

            top: 500,

            behavior: "smooth",

        });

    };


    return (

        <>

            {/* =========================================================
                HERO
            ========================================================= */}

            <HeroGallery />


            {/* =========================================================
                FILTER
            ========================================================= */}

            <GalleryFilter

                keyword={keyword}

                setKeyword={handleKeywordChange}

                category={category}

                setCategory={handleCategoryChange}

            />


            {/* =========================================================
                GALLERY GRID
            ========================================================= */}

            <GalleryGrid

                galleries={gallery}

                loading={loading}

                error={error}

            />


            {/* =========================================================
                STATISTICS
            ========================================================= */}

            <GalleryStatistics />


            {/* =========================================================
                PAGINATION
            ========================================================= */}

            <GalleryPagination

                currentPage={
                    pagination.currentPage
                }

                totalPages={
                    pagination.totalPages
                }

                onPageChange={
                    handlePageChange
                }

            />


            {/* =========================================================
                CTA
            ========================================================= */}

            <CTASection />

        </>

    );

}