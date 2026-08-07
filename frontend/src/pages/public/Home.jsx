import useHome from "../../hooks/useHome";

import HeroSection from "../../features/home/components/HeroSection";
import StatisticsSection from "../../features/home/components/StatisticsSection";
import AboutSection from "../../features/home/components/AboutSection";
import ServiceSection from "../../features/home/components/ServiceSection";
import NewsSection from "../../features/home/components/NewsSection";
import GallerySection from "../../features/home/components/GallerySection";
import ContactSection from "../../features/home/components/ContactSection";

export default function Home() {

    const {
        profile,
        news,
        gallery,
        contact,
        loading,
    } = useHome();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="mt-4 text-gray-600">
                        Memuat Beranda...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeroSection profile={profile} />

            <StatisticsSection profile={profile} />

            <AboutSection profile={profile} />

            <ServiceSection />

            <NewsSection news={news} />

            <GallerySection gallery={gallery} />

            <ContactSection
                profile={profile}
                contact={contact}
            />
        </>
    );
}