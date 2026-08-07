import { useEffect, useState } from "react";
import homeService from "../services/homeService";

export default function useHome() {

    const [profile, setProfile] = useState(null);
    const [news, setNews] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [contact, setContact] = useState(null);

    // Tambahan
    const [government, setGovernment] = useState([]);
    const [potential, setPotential] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchData = async () => {

        try {

            setLoading(true);

            const [
                profileRes,
                newsRes,
                galleryRes,
                contactRes,
                governmentRes,
                potentialRes,
            ] = await Promise.all([

                homeService.getProfile(),
                homeService.getNews(),
                homeService.getGallery(),
                homeService.getContact(),

                // Tambahan
                homeService.getGovernment(),
                homeService.getPotential(),

            ]);

            setProfile(profileRes.data.data);

            // Berita
            if (Array.isArray(newsRes.data.data)) {
                setNews(newsRes.data.data);
            } else {
                setNews(newsRes.data.data?.data || []);
            }

            // Galeri
            if (Array.isArray(galleryRes.data.data)) {
                setGallery(galleryRes.data.data);
            } else {
                setGallery(galleryRes.data.data?.data || []);
            }

            // Kontak
            setContact(contactRes.data.data);

            // Pemerintahan
            if (Array.isArray(governmentRes.data.data)) {
                setGovernment(governmentRes.data.data);
            } else {
                setGovernment(governmentRes.data.data?.data || []);
            }

            // Potensi
            if (Array.isArray(potentialRes.data.data)) {
                setPotential(potentialRes.data.data);
            } else {
                setPotential(potentialRes.data.data?.data || []);
            }

        } catch (error) {

            console.error("Home Error :", error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchData();

    }, []);

    return {

        profile,
        news,
        gallery,
        contact,

        // Tambahan
        government,
        potential,

        loading,
        refresh: fetchData,

    };

}