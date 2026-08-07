import { useEffect, useState } from "react";

import contactService from "../../services/contactService";

export default function ContactManagement() {

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState({

        address: "",

        email: "",

        phone: "",

        whatsapp: "",

        facebook: "",

        instagram: "",

        youtube: "",

        maps_embed: "",

        latitude: "",

        longitude: "",

    });

    /*
    |--------------------------------------------------------------------------
    | Load Contact
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        fetchContact();

    }, []);

    const fetchContact = async () => {

        try {

            setLoading(true);

            const response = await contactService.getContact();

            setForm({

                address: response.data.data.address || "",

                email: response.data.data.email || "",

                phone: response.data.data.phone || "",

                whatsapp: response.data.data.whatsapp || "",

                facebook: response.data.data.facebook || "",

                instagram: response.data.data.instagram || "",

                youtube: response.data.data.youtube || "",

                maps_embed: response.data.data.maps_embed || "",

                latitude: response.data.data.latitude || "",

                longitude: response.data.data.longitude || "",

            });

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Handle Change
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setSaving(true);

            await contactService.update(form);

            alert("Data kontak berhasil diperbarui.");

        } catch (error) {

            console.error(error);

        } finally {

            setSaving(false);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <div className="flex justify-center items-center h-96">

                Memuat...

            </div>

        );

    }

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold">

                    Contact Management

                </h1>

                <p className="text-gray-500 mt-1">

                    Kelola informasi kontak desa.

                </p>

            </div>

            <form

                onSubmit={handleSubmit}

                className="bg-white rounded-xl shadow p-6 space-y-5"

            >

                <div>

                    <label className="font-medium">

                        Alamat

                    </label>

                    <textarea

                        name="address"

                        value={form.address}

                        onChange={handleChange}

                        rows={3}

                        className="w-full mt-2 border rounded-lg p-3"

                    />

                </div>

                <div className="grid grid-cols-2 gap-5">

                    <div>

                        <label>Email</label>

                        <input

                            name="email"

                            value={form.email}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                    <div>

                        <label>Telepon</label>

                        <input

                            name="phone"

                            value={form.phone}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-5">

                    <div>

                        <label>Whatsapp</label>

                        <input

                            name="whatsapp"

                            value={form.whatsapp}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                    <div>

                        <label>Facebook</label>

                        <input

                            name="facebook"

                            value={form.facebook}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-5">

                    <div>

                        <label>Instagram</label>

                        <input

                            name="instagram"

                            value={form.instagram}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                    <div>

                        <label>Youtube</label>

                        <input

                            name="youtube"

                            value={form.youtube}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                </div>

                <div>

                    <label>Google Maps Embed</label>

                    <textarea

                        name="maps_embed"

                        value={form.maps_embed}

                        onChange={handleChange}

                        rows={4}

                        className="w-full border rounded-lg p-3 mt-2"

                    />

                </div>

                <div className="grid grid-cols-2 gap-5">

                    <div>

                        <label>Latitude</label>

                        <input

                            name="latitude"

                            value={form.latitude}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                    <div>

                        <label>Longitude</label>

                        <input

                            name="longitude"

                            value={form.longitude}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3 mt-2"

                        />

                    </div>

                </div>

                <div className="flex justify-end">

                    <button

                        type="submit"

                        disabled={saving}

                        className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"

                    >

                        {

                            saving

                                ? "Menyimpan..."

                                : "Simpan Perubahan"

                        }

                    </button>

                </div>

            </form>

        </div>

    );

}