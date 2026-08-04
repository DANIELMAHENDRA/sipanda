import HeroPotential from "./components/HeroPotential";
import CategorySection from "./components/CategorySection";
import PotentialGrid from "./components/PotentialGrid";
import FeaturedPotential from "./components/FeaturedPotential";
import StatisticsSection from "./components/StatisticsSection";
import CTASection from "./components/CTASection";

import usePotential from "../../hooks/usePotential";

export default function Potential() {

    const { potential, loading, error } = usePotential();

    return (
        <>
            <HeroPotential />

            <CategorySection />

            <PotentialGrid
                potential={potential}
                loading={loading}
                error={error}
            />

            <FeaturedPotential
                potential={potential}
                loading={loading}
                error={error}
            />

            <StatisticsSection />

            <CTASection />
        </>
    );
}