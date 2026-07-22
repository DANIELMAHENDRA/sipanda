import HeroGallery from "./components/HeroGallery";
import GalleryFilter from "./components/GalleryFilter";
import GalleryGrid from "./components/GalleryGrid";
import GalleryStatistics from "./components/GalleryStatistics";
import GalleryPagination from "./components/GalleryPagination";
import CTASection from "./components/CTASection";

export default function Gallery() {
    return (
        <>
            <HeroGallery />

            <GalleryFilter />

            <GalleryGrid />

            <GalleryStatistics />

            <GalleryPagination />

            <CTASection />
        </>
    );
}