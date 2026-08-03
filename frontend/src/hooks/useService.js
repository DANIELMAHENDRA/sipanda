import { useEffect, useState } from "react";
import serviceService from "../services/serviceService";

export default function useService() {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchServices = async () => {

        try {

            const response = await serviceService.getAll();

            setServices(response.data.data);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchServices();

    }, []);

    return {

        services,

        loading,

        refresh: fetchServices,

    };

}