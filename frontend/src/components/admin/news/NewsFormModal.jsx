import { useEffect, useState } from "react";

import newsService from "../../../services/newsService";

export default function NewsFormModal({

    open,

    onClose,

    news,

    reload,

}) {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        title: "",

        category: "",

        excerpt: "",

        content: "",

        thumbnail: null,

        status: "draft",

    });

    /*
    |--------------------------------------------------------------------------
    | Load Edit Data
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (news) {

            setForm({

                title: news.title || "",

                category: news.category || "",

                excerpt: news.excerpt || "",

                content: news.content || "",

                thumbnail: null,

                status: news.status || "draft",

            });

        } else {

            setForm({

                title: "",

                category: "",

                excerpt: "",

                content: "",

                thumbnail: null,

                status: "draft",

            });

        }

    }, [news]);

    /*
    |--------------------------------------------------------------------------
    | Handle Input
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {

        const {

            name,

            value,

            files,

            type,

        } = e.target;

        setForm({

            ...form,

            [name]:

                type === "file"

                    ? files[0]

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

            if (news) {

                formData.append(

                    "_method",

                    "PUT"

                );

                await newsService.update(

                    news.id,

                    formData

                );

            } else {

                await newsService.create(

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

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl">

                {/* Header */}

                <div className="border-b p-6">

                    <h2 className="text-2xl font-bold">

                        {

                            news

                                ? "Edit Berita"

                                : "Tambah Berita"

                        }

                    </h2>

                </div>

                {/* Body */}

                <form

                    onSubmit={handleSubmit}

                    className="p-6 space-y-5"

                >

                    {/* Judul */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Judul

                        </label>

                        <input

                            type="text"

                            name="title"

                            value={form.title}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3"

                            required

                        />

                    </div>

                    {/* Kategori */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Kategori

                        </label>

                        <input

                            type="text"

                            name="category"

                            value={form.category}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3"

                            required

                        />

                    </div>

                    {/* Excerpt */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Ringkasan

                        </label>

                        <textarea

                            rows="3"

                            name="excerpt"

                            value={form.excerpt}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3"

                        />

                    </div>

                    {/* Content */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Isi Berita

                        </label>

                        <textarea

                            rows="8"

                            name="content"

                            value={form.content}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3"

                            required

                        />

                    </div>

                    {/* Thumbnail */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Thumbnail

                        </label>

                        <input

                            type="file"

                            name="thumbnail"

                            accept="image/*"

                            onChange={handleChange}

                        />

                    </div>

                    {/* Status */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Status

                        </label>

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

                    </div>

                    {/* Footer */}

                    <div className="flex justify-end gap-3 pt-4">

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

                            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"

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