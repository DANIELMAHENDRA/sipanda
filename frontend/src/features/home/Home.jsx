import HeroSection from "./components/HeroSection";
import StatisticsSection from "./components/StatisticsSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import NewsSection from "./components/NewsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

import useHome from "./hooks/useHome";

export default function Home() {

    const {

        profile,

        news,

        gallery,

        contact,

        loading,

    } = useHome();

    if (loading) {

        return <p>Loading...</p>;

    }

    return (

        <>

            <HeroSection profile={profile} />

            <StatisticsSection profile={profile} />

            <AboutSection profile={profile} />

            <ServiceSection />

            <NewsSection news={news} />

            <GallerySection gallery={gallery} />

            <ContactSection contact={contact} />

        </>

    );

}