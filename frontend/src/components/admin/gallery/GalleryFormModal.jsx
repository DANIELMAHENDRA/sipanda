import { useEffect, useState } from "react";
import galleryService from "../../../services/galleryService";

export default function GalleryFormModal({

    open,

    onClose,

    gallery,

    reload,

}) {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        title: "",

        image: null,

        category: "",

        description: "",

        location: "",

        photographer: "",

        taken_at: "",

        order_number: 0,

        is_featured: false,

        status: "draft",

    });

    useEffect(() => {

        if (gallery) {

            setForm({

                title: gallery.title || "",

                image: null,

                category: gallery.category || "",

                description: gallery.description || "",

                location: gallery.location || "",

                photographer: gallery.photographer || "",

                taken_at: gallery.taken_at || "",

                order_number: gallery.order_number || 0,

                is_featured: gallery.is_featured,

                status: gallery.status || "draft",

            });

        } else {

            setForm({

                title: "",

                image: null,

                category: "",

                description: "",

                location: "",

                photographer: "",

                taken_at: "",

                order_number: 0,

                is_featured: false,

                status: "draft",

            });

        }

    }, [gallery]);

    const handleChange = (e) => {

        const {

            name,

            value,

            type,

            checked,

            files,

        } = e.target;

        setForm({

            ...form,

            [name]:

                type === "checkbox"

                    ? checked

                    : type === "file"

                    ? files[0]

                    : value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const formData = new FormData();

            Object.keys(form).forEach((key) => {

                if (

                    form[key] !== null &&

                    form[key] !== ""

                ) {

                    formData.append(

                        key,

                        form[key]

                    );

                }

            });

            if (gallery) {

                formData.append("_method", "PUT");

                await galleryService.update(

                    gallery.id,

                    formData

                );

            } else {

                await galleryService.create(

                    formData

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

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl my-10">

                <div className="border-b p-6">

                    <h2 className="text-xl font-bold">

                        {

                            gallery

                                ? "Edit Galeri"

                                : "Tambah Galeri"

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

                        placeholder="Judul"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="category"

                        value={form.category}

                        onChange={handleChange}

                        placeholder="Kategori"

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

                        name="location"

                        value={form.location}

                        onChange={handleChange}

                        placeholder="Lokasi"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="photographer"

                        value={form.photographer}

                        onChange={handleChange}

                        placeholder="Fotografer"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        type="date"

                        name="taken_at"

                        value={form.taken_at}

                        onChange={handleChange}

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

                    <input

                        type="file"

                        name="image"

                        onChange={handleChange}

                    />

                    <select

                        name="status"

                        value={form.status}

                        onChange={handleChange}

                        className="w-full border rounded-lg p-3"

                    >

                        <option value="draft">

                            Draft

                        </option>

                        <option value="published">

                            Published

                        </option>

                    </select>

                    <label className="flex items-center gap-3">

                        <input

                            type="checkbox"

                            name="is_featured"

                            checked={form.is_featured}

                            onChange={handleChange}

                        />

                        Jadikan Featured Gallery

                    </label>

                    <div className="flex justify-end gap-3">

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