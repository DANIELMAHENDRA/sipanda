import { useEffect, useState } from "react";
import contactService from "../services/contactService";

export default function useContact() {

    const [contact, setContact] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchContact = async () => {

        try {

            setLoading(true);

            setError(null);

            const response = await contactService.get();

            setContact(response.data?.data ?? null);

        } catch (err) {

            console.error("Gagal mengambil data contact:", err);

            setError(err);

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

        error,

        refresh: fetchContact,

    };

}