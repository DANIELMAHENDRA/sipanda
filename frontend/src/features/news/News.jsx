import HeroNews from "./components/HeroNews";
import SearchSection from "./components/SearchSection";
import CategorySection from "./components/CategorySection";
import NewsGrid from "./components/NewsGrid";
import PaginationSection from "./components/PaginationSection";
import CTASection from "./components/CTASection";

import useNews from "../../hooks/useNews";

export default function News() {

    const {

        // ===========================
        // BERITA
        // ===========================

        news,

        // ===========================
        // KATEGORI
        // ===========================

        categories,

        selectedCategory,
        setSelectedCategory,

        // ===========================
        // PAGINATION
        // ===========================

        pagination,

        // ===========================
        // SEARCH
        // ===========================

        keyword,
        setKeyword,
        handleSearch,

        // ===========================
        // STATUS
        // ===========================

        loading,

    } = useNews();


    // ===========================
    // LOADING
    // ===========================

    if (loading) {

        return (

            <div className="py-32 text-center">

                Memuat berita...

            </div>

        );

    }


    // ===========================
    // PAGE
    // ===========================

    return (

        <>

            {/* ===========================
                HERO
            =========================== */}

            <HeroNews />


            {/* ===========================
                SEARCH
            =========================== */}

            <SearchSection

                keyword={keyword}

                setKeyword={setKeyword}

                // PENTING:
                // Pencarian hanya dilakukan
                // ketika tombol Cari diklik
                onSearch={handleSearch}

            />


            {/* ===========================
                CATEGORY
            =========================== */}

            <CategorySection

                categories={categories}

                selectedCategory={selectedCategory}

                setSelectedCategory={
                    setSelectedCategory
                }

            />


            {/* ===========================
                NEWS
            =========================== */}

            <NewsGrid

                news={news}

            />


            {/* ===========================
                PAGINATION
            =========================== */}

            <PaginationSection

                pagination={pagination}

            />


            {/* ===========================
                CTA
            =========================== */}

            <CTASection />

        </>

    );

}