import HeroNews from "./components/HeroNews";
import SearchSection from "./components/SearchSection";
import CategorySection from "./components/CategorySection";
import NewsGrid from "./components/NewsGrid";
import PaginationSection from "./components/PaginationSection";
import CTASection from "./components/CTASection";

import useNews from "../../hooks/useNews";

export default function News() {

    const {

        news,

        categories,

        pagination,

        keyword,

        setKeyword,

        selectedCategory,

        setSelectedCategory,

        loading,

    } = useNews();

    if (loading) {

        return (

            <div className="py-32 text-center">

                Memuat berita...

            </div>

        );

    }

    return (

        <>

            <HeroNews />

            <SearchSection
                keyword={keyword}
                setKeyword={setKeyword}
            />

            <CategorySection
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <NewsGrid
                news={news}
            />

            <PaginationSection
                pagination={pagination}
            />

            <CTASection />

        </>

    );

}