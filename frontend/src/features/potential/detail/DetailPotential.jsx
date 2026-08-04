import { useParams } from "react-router-dom";

import HeroDetailPotential from "./components/HeroDetailPotential";
import PotentialContent from "./components/PotentialContent";
import RelatedPotential from "./components/RelatedPotential";
import ShareSection from "./components/ShareSection";
import CTASection from "./components/CTASection";

import usePotentialDetail from "../../../hooks/usePotentialDetail";

export default function DetailPotential() {

    const { id } = useParams();

    const {
        potential,
        loading,
        error,
    } = usePotentialDetail(id);

    if (loading) {
        return (
            <section className="py-24 text-center">
                <p>Memuat detail potensi...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-24 text-center">
                <p className="text-red-500">
                    Gagal memuat detail potensi.
                </p>
            </section>
        );
    }

    if (!potential) {
        return (
            <section className="py-24 text-center">
                <p>Data tidak ditemukan.</p>
            </section>
        );
    }

    return (
        <>
            <HeroDetailPotential potential={potential} />

            <PotentialContent potential={potential} />

            <RelatedPotential currentId={potential.id} />

            <ShareSection />

            <CTASection />
        </>
    );
}