import { useEffect, useState } from "react";

import governmentService from "../../../services/governmentService";

export default function GovernmentFormModal({

    open,

    onClose,

    government,

    reload,

}) {

    const [loading, setLoading] = useState(false);

    const initialState = {

        name: "",

        position: "",

        photo: null,

        description: "",

        order_number: 1,

        is_head: false,

        status: "published",

    };

    const [form, setForm] = useState(initialState);

    /*
    |--------------------------------------------------------------------------
    | Load Data Edit
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (government) {

            setForm({

                name: government.name || "",

                position: government.position || "",

                photo: null,

                description: government.description || "",

                order_number: government.order_number || 1,

                is_head: government.is_head,

                status: government.status || "published",

            });

        } else {

            setForm(initialState);

        }

    }, [government]);

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
            files,
        } = e.target;

        if (type === "checkbox") {

            setForm((prev) => ({
                ...prev,
                [name]: checked,
            }));

            return;
        }

        if (type === "file") {

            setForm((prev) => ({
                ...prev,
                [name]: files[0] || null,
            }));

            return;
        }

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

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

            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("position", form.position);
            formData.append("description", form.description);
            formData.append("order_number", Number(form.order_number));
            formData.append("status", form.status);

            // Laravel boolean
            formData.append(
                "is_head",
                form.is_head ? 1 : 0
            );

            // Upload foto
            if (form.photo instanceof File) {

                formData.append(
                    "photo",
                    form.photo
                );

            }

            // Debug
            console.log("===== FORM DATA =====");

            for (const pair of formData.entries()) {

                console.log(pair[0], pair[1]);

            }

            if (government) {

                formData.append("_method", "PUT");

                await governmentService.update(
                    government.id,
                    formData
                );

            } else {

                await governmentService.create(
                    formData
                );

            }

            reload();

            onClose();

        } catch (err) {

            console.error(err);

            console.log(err.response?.data);

        } finally {

            setLoading(false);

        }

    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl">

                <div className="border-b p-6">

                    <h2 className="text-xl font-bold">

                        {

                            government

                                ? "Edit Aparatur"

                                : "Tambah Aparatur"

                        }

                    </h2>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="p-6 space-y-5"

                >

                    <input

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                        placeholder="Nama"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="position"

                        value={form.position}

                        onChange={handleChange}

                        placeholder="Jabatan"

                        className="w-full border rounded-lg p-3"

                    />

                    <textarea

                        rows="4"

                        name="description"

                        value={form.description}

                        onChange={handleChange}

                        placeholder="Deskripsi"

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

                    <select

                        name="status"

                        value={form.status}

                        onChange={handleChange}

                        className="w-full border rounded-lg p-3"

                    >

                        <option value="published">

                            Published

                        </option>

                        <option value="draft">

                            Draft

                        </option>

                    </select>

                    <input
                        type="file"
                        name="photo"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                    <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="is_head"
                        checked={Boolean(form.is_head)}
                        onChange={handleChange}
                    />

                        Kepala Desa

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