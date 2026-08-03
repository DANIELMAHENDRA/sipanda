import HeroProfile from "./components/HeroProfile";
import AboutVillage from "./components/AboutVillage";
import HistorySection from "./components/HistorySection";
import VisionMission from "./components/VisionMission";
import StatisticSection from "./components/StatisticSection";
import GeographySection from "./components/GeographySection";
import BoundarySection from "./components/BoundarySection";
import CTASection from "./components/CTASection";

export default function Profile() {
    return (
        <>
            <HeroProfile />
            <AboutVillage />
            <HistorySection />
            <VisionMission />
            <StatisticSection />
            <GeographySection />
            <BoundarySection />
            <CTASection />
        </>
    );
}