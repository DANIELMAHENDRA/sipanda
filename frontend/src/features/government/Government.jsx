import HeroGovernment from "./components/HeroGovernment";
import VillageHeadSection from "./components/VillageHeadSection";
import OrganizationSection from "./components/OrganizationSection";
import OfficialsSection from "./components/OfficialsSection";
import DutiesSection from "./components/DutiesSection";
import ServiceHoursSection from "./components/ServiceHoursSection";
import GovernmentServiceSection from "./components/GovernmentServiceSection";
import CTASection from "./components/CTASection";

import useProfile from "../../hooks/useProfile";
import useGovernment from "../../hooks/useGovernment";

export default function Government() {

    const { profile, loading: profileLoading } = useProfile();

    const { government, loading: governmentLoading } = useGovernment();

    if (profileLoading || governmentLoading) {

        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );

    }

    return (
        <>

            <HeroGovernment
                profile={profile}
            />

            <VillageHeadSection
                government={government}
            />

            <OrganizationSection />

            <OfficialsSection
                government={government}
            />

            <DutiesSection />

            <ServiceHoursSection />

            <GovernmentServiceSection />

            <CTASection />

        </>
    );

}