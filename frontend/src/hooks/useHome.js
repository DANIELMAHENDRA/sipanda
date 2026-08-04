import { useEffect, useState } from "react";
import homeService from "../services/homeService";

export default function useHome() {

    const [profile, setProfile] = useState(null);
    const [news, setNews] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [contact, setContact] = useState(null);

    const [loading, setLoading] = useState(true);

    const fetchData = async () => {

        try {

            const [
                profileRes,
                newsRes,
                galleryRes,
                contactRes,
            ] = await Promise.all([

                homeService.getProfile(),
                homeService.getNews(),
                homeService.getGallery(),
                homeService.getContact(),

            ]);

            setProfile(profileRes.data.data);

            setNews(newsRes.data.data);

            setGallery(galleryRes.data.data);

            setContact(contactRes.data.data);

        } catch (error) {

            console.error(error);

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

        loading,

    };

}