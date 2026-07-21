import HeroGovernment from "./components/HeroGovernment";
import VillageHeadSection from "./components/VillageHeadSection";
import OrganizationSection from "./components/OrganizationSection";
import OfficialsSection from "./components/OfficialsSection";
import DutiesSection from "./components/DutiesSection";
import ServiceHoursSection from "./components/ServiceHoursSection";
import GovernmentServiceSection from "./components/GovernmentServiceSection";
import CTASection from "./components/CTASection";

export default function Government() {
    return (
        <>
            <HeroGovernment />

            <VillageHeadSection />

            <OrganizationSection />

            <OfficialsSection />

            <DutiesSection />

            <ServiceHoursSection />

            <GovernmentServiceSection />

            <CTASection />
        </>
    );
}