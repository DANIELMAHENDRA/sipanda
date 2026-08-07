import { useEffect, useState } from "react";
import serviceService from "../../../services/serviceService";

export default function ServiceFormModal({

    open,

    onClose,

    service,

    reload,

}) {

    const [loading, setLoading] = useState(false);

    const initialState = {

        title: "",

        icon: "",

        description: "",

        requirements: "",

        procedure: "",

        processing_time: "",

        cost: "",

        person_in_charge: "",

        order_number: 1,

        is_active: true,

    };

    const [form, setForm] = useState(initialState);

    /*
    |--------------------------------------------------------------------------
    | Load Edit
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (service) {

            setForm({

                title: service.title || "",

                icon: service.icon || "",

                description: service.description || "",

                requirements: service.requirements || "",

                procedure: service.procedure || "",

                processing_time: service.processing_time || "",

                cost: service.cost || "",

                person_in_charge: service.person_in_charge || "",

                order_number: service.order_number || 1,

                is_active: service.is_active,

            });

        } else {

            setForm(initialState);

        }

    }, [service]);

    /*
    |--------------------------------------------------------------------------
    | Input
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {

        const {

            name,

            value,

            type,

            checked,

        } = e.target;

        setForm({

            ...form,

            [name]:

                type === "checkbox"

                    ? checked

                    : value,

        });

    };

    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            if (service) {

                await serviceService.update(

                    service.id,

                    form

                );

            } else {

                await serviceService.create(

                    form

                );

            }

            reload();

            onClose();

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    if (!open) return null;

        return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl">

                <div className="border-b p-6">

                    <h2 className="text-xl font-bold">

                        {

                            service

                                ? "Edit Layanan"

                                : "Tambah Layanan"

                        }

                    </h2>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="p-6 space-y-5"

                >

                    <input

                        name="title"

                        value={form.title}

                        onChange={handleChange}

                        placeholder="Judul Layanan"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="icon"

                        value={form.icon}

                        onChange={handleChange}

                        placeholder="Icon (contoh: FileText)"

                        className="w-full border rounded-lg p-3"

                    />

                    <textarea

                        rows={3}

                        name="description"

                        value={form.description}

                        onChange={handleChange}

                        placeholder="Deskripsi"

                        className="w-full border rounded-lg p-3"

                    />

                    <textarea

                        rows={3}

                        name="requirements"

                        value={form.requirements}

                        onChange={handleChange}

                        placeholder="Persyaratan"

                        className="w-full border rounded-lg p-3"

                    />

                    <textarea

                        rows={3}

                        name="procedure"

                        value={form.procedure}

                        onChange={handleChange}

                        placeholder="Prosedur"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="processing_time"

                        value={form.processing_time}

                        onChange={handleChange}

                        placeholder="Waktu Proses"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="cost"

                        value={form.cost}

                        onChange={handleChange}

                        placeholder="Biaya"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="person_in_charge"

                        value={form.person_in_charge}

                        onChange={handleChange}

                        placeholder="Penanggung Jawab"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        type="number"

                        name="order_number"

                        value={form.order_number}

                        onChange={handleChange}

                        placeholder="Urutan"

                        className="w-full border rounded-lg p-3"

                    />

                    <label className="flex items-center gap-3">

                        <input

                            type="checkbox"

                            name="is_active"

                            checked={form.is_active}

                            onChange={handleChange}

                        />

                        Aktif

                    </label>

                    <div className="flex justify-end gap-3 pt-5">

                        <button

                            type="button"

                            onClick={onClose}

                            className="px-5 py-2 rounded-lg border"

                        >

                            Batal

                        </button>

                        <button

                            type="submit"

                            disabled={loading}

                            className="px-5 py-2 rounded-lg bg-green-600 text-white"

                        >

                            {

                                loading

                                    ? "Menyimpan..."

                                    : "Simpan"

                            }

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}