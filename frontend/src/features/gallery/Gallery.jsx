import useGallery from "../../hooks/useGallery";

import HeroGallery from "./components/HeroGallery";
import GalleryFilter from "./components/GalleryFilter";
import GalleryGrid from "./components/GalleryGrid";
import GalleryStatistics from "./components/GalleryStatistics";
import GalleryPagination from "./components/GalleryPagination";
import CTASection from "./components/CTASection";

export default function Gallery() {

    const {

        gallery,

        loading,

        error,

    } = useGallery();

    return (

        <>

            <HeroGallery />

            <GalleryFilter />

            <GalleryGrid

                galleries={gallery}

                loading={loading}

                error={error}

            />

            <GalleryStatistics />

            <GalleryPagination />

            <CTASection />

        </>

    );

}