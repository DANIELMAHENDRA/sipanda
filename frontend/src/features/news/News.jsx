import HeroNews from "./components/HeroNews";
import SearchSection from "./components/SearchSection";
import CategorySection from "./components/CategorySection";
import NewsGrid from "./components/NewsGrid";
import PaginationSection from "./components/PaginationSection";
import CTASection from "./components/CTASection";

export default function News() {

    return (
        <>

            <HeroNews />

            <SearchSection />

            <CategorySection />

            <NewsGrid />

            <PaginationSection />

            <CTASection />

        </>
    );

}