import HeroPotential from "./components/HeroPotential";
import CategorySection from "./components/CategorySection";
import PotentialGrid from "./components/PotentialGrid";
import FeaturedPotential from "./components/FeaturedPotential";
import StatisticsSection from "./components/StatisticsSection";
import CTASection from "./components/CTASection";

export default function Potential() {
    return (
        <>
            <HeroPotential />

            <CategorySection />

            <PotentialGrid />

            <FeaturedPotential />

            <StatisticsSection />

            <CTASection />
        </>
    );
}