import { useEffect, useState } from "react";
import contactService from "../services/contactService";

export default function useContact() {

    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchContact = async () => {

        try {

            const response = await contactService.get();

            setContact(response.data.data);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchContact();

    }, []);

    return {

        contact,

        loading,

        refresh: fetchContact,

    };

}