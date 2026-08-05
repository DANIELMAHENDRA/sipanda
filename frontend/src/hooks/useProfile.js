import { useEffect, useState } from "react";
import profileService from "../services/profileService";

export default function useProfile() {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {

        try {

            setLoading(true);
            setError(null);

            const response = await profileService.get();

            setProfile(response.data?.data ?? {});

        } catch (err) {

            console.error(
                "Gagal mengambil profil desa:",
                err
            );

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchProfile();

    }, []);

    return {

        profile,

        loading,

        error,

        refresh: fetchProfile,

    };

}