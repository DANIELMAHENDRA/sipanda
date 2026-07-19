import HeroSection from "../../features/home/components/HeroSection";
import StatisticsSection from "../../features/home/components/StatisticsSection";
import AboutSection from "../../features/home/components/AboutSection";
import ServiceSection from "../../features/home/components/ServiceSection";
import NewsSection from "../../features/home/components/NewsSection";
import GallerySection from "../../features/home/components/GallerySection";
import ContactSection from "../../features/home/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <StatisticsSection />

      <AboutSection />

      <ServiceSection />

      <NewsSection />

      <GallerySection />

      <ContactSection />
    </>
  );
}