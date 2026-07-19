import HeroProfile from "../../features/profile/components/HeroProfile";
import AboutVillage from "../../features/profile/components/AboutVillage";
import HistorySection from "../../features/profile/components/HistorySection";
import VisionMission from "../../features/profile/components/VisionMission";
import GeographySection from "../../features/profile/components/GeographySection";
import DemographySection from "../../features/profile/components/DemographySection";
import BoundarySection from "../../features/profile/components/BoundarySection";
import CTASection from "../../features/profile/components/CTASection";

export default function Profile() {

    return (
        <>

            <HeroProfile />

            <AboutVillage />

            <HistorySection />

            <VisionMission />

            <GeographySection />

            <DemographySection />

            <BoundarySection />

            <CTASection />

        </>
    );

}