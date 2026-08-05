import HeroProfile from "./components/HeroProfile";
import AboutVillage from "./components/AboutVillage";
import HistorySection from "./components/HistorySection";
import VisionMission from "./components/VisionMission";
import StatisticSection from "./components/StatisticSection";
import GeographySection from "./components/GeographySection";
import BoundarySection from "./components/BoundarySection";
import CTASection from "./components/CTASection";

import useProfile from "../../hooks/useProfile";

export default function Profile() {

    const {

        profile,

        loading,

        error,

    } = useProfile();

    if (loading) {

        return (

            <section className="py-32 text-center">

                <p className="text-gray-500">

                    Memuat profil desa...

                </p>

            </section>

        );

    }

    if (error) {

        return (

            <section className="py-32 text-center">

                <p className="text-red-500">

                    Gagal memuat profil desa.

                </p>

            </section>

        );

    }

    return (

        <>

            <HeroProfile
                profile={profile}
            />

            <AboutVillage
                profile={profile}
            />

            <HistorySection
                profile={profile}
            />

            <VisionMission
                profile={profile}
            />

            <StatisticSection
                profile={profile}
            />

            <GeographySection
                profile={profile}
            />

            <BoundarySection
                profile={profile}
            />

            <CTASection
                profile={profile}
            />

        </>

    );

}