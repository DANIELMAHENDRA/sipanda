import { useEffect, useState } from "react";
import settingService from "../services/settingService";

export default function useSetting() {

    const [setting, setSetting] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchSetting = async () => {

        try {

            const response = await settingService.get();

            setSetting(response.data.data);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchSetting();

    }, []);

    return {

        setting,

        loading,

        refresh: fetchSetting,

    };

}