import { useEffect, useState } from "react";
import potentialService from "../../../services/potentialService";

export default function PotentialFormModal({
    open,
    onClose,
    potential,
    reload,
}) {

    const [loading, setLoading] = useState(false);

    const initialState = {
        title: "",
        thumbnail: null,
        cover_image: null,
        category: "",
        excerpt: "",
        content: "",
        statistic_1_title: "",
        statistic_1_value: "",
        statistic_2_title: "",
        statistic_2_value: "",
        statistic_3_title: "",
        statistic_3_value: "",
        quote: "",
        quote_author: "",
        is_featured: false,
        status: "draft",
        published_at: "",
    };

    const [form, setForm] = useState(initialState);

    /*
    |--------------------------------------------------------------------------
    | Load Data Edit
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (potential) {

            setForm({

                title: potential.title || "",

                thumbnail: null,

                cover_image: null,

                category: potential.category || "",

                excerpt: potential.excerpt || "",

                content: potential.content || "",

                statistic_1_title:
                    potential.statistics?.[0]?.title || "",

                statistic_1_value:
                    potential.statistics?.[0]?.value || "",

                statistic_2_title:
                    potential.statistics?.[1]?.title || "",

                statistic_2_value:
                    potential.statistics?.[1]?.value || "",

                statistic_3_title:
                    potential.statistics?.[2]?.title || "",

                statistic_3_value:
                    potential.statistics?.[2]?.value || "",

                quote: potential.quote || "",

                quote_author:
                    potential.quote_author || "",

                is_featured:
                    potential.is_featured || false,

                status:
                    potential.status || "draft",

                published_at:
                    potential.published_at || "",

            });

        } else {

            setForm(initialState);

        }

    }, [potential]);

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

            Object.entries(form).forEach(([key, value]) => {

                if (
                    value !== null &&
                    value !== ""
                ) {

                    formData.append(
                        key,
                        value
                    );

                }

            });

            if (potential) {

                formData.append(
                    "_method",
                    "PUT"
                );

                await potentialService.update(
                    potential.id,
                    formData
                );

            } else {

                await potentialService.create(
                    formData
                );

            }

            reload();

            onClose();

        } catch (err) {

            console.error(
                "Gagal menyimpan potential:",
                err
            );

        } finally {

            setLoading(false);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Close
    |--------------------------------------------------------------------------
    */

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl my-10 max-h-[90vh] overflow-y-auto">

                {/* Header */}

                <div className="border-b p-6">

                    <h2 className="text-xl font-bold">

                        {

                            potential

                                ? "Edit Potensi"

                                : "Tambah Potensi"

                        }

                    </h2>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="p-6 space-y-5"

                >

                    {/* =====================================================
                        Informasi Utama
                    ====================================================== */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Judul Potensi

                        </label>

                        <input

                            type="text"

                            name="title"

                            value={form.title}

                            onChange={handleChange}

                            placeholder="Judul Potensi"

                            className="w-full border rounded-lg p-3"

                            required

                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">

                            Kategori

                        </label>

                        <input

                            type="text"

                            name="category"

                            value={form.category}

                            onChange={handleChange}

                            placeholder="Kategori"

                            className="w-full border rounded-lg p-3"

                            required

                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">

                            Ringkasan

                        </label>

                        <textarea

                            rows={3}

                            name="excerpt"

                            value={form.excerpt}

                            onChange={handleChange}

                            placeholder="Ringkasan potensi"

                            className="w-full border rounded-lg p-3"

                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">

                            Isi Potensi

                        </label>

                        <textarea

                            rows={8}

                            name="content"

                            value={form.content}

                            onChange={handleChange}

                            placeholder="Isi potensi"

                            className="w-full border rounded-lg p-3"

                            required

                        />

                    </div>

                    {/* =====================================================
                        Thumbnail
                    ====================================================== */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Thumbnail

                        </label>

                        <input

                            type="file"

                            name="thumbnail"

                            accept="image/*"

                            onChange={handleChange}

                            className="w-full"

                        />

                        {potential?.thumbnail && (

                            <div className="mt-3">

                                <p className="text-sm text-gray-500 mb-2">

                                    Thumbnail saat ini:

                                </p>

                                <img

                                    src={potential.thumbnail}

                                    alt={potential.title}

                                    className="w-32 h-20 object-cover rounded-lg"

                                />

                            </div>

                        )}

                    </div>

                    {/* =====================================================
                        Cover Image
                    ====================================================== */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Cover Image

                        </label>

                        <input

                            type="file"

                            name="cover_image"

                            accept="image/*"

                            onChange={handleChange}

                            className="w-full"

                        />

                        {potential?.cover_image && (

                            <div className="mt-3">

                                <p className="text-sm text-gray-500 mb-2">

                                    Cover saat ini:

                                </p>

                                <img

                                    src={potential.cover_image}

                                    alt={potential.title}

                                    className="w-full max-w-md h-40 object-cover rounded-lg"

                                />

                            </div>

                        )}

                    </div>

                    {/* =====================================================
                        Statistik
                    ====================================================== */}

                    <div>

                        <label className="block mb-3 font-medium">

                            Statistik Potensi

                        </label>

                        <div className="grid md:grid-cols-2 gap-4">

                            <input

                                name="statistic_1_title"

                                value={form.statistic_1_title}

                                onChange={handleChange}

                                placeholder="Judul Statistik 1"

                                className="border rounded-lg p-3"

                            />

                            <input

                                name="statistic_1_value"

                                value={form.statistic_1_value}

                                onChange={handleChange}

                                placeholder="Nilai Statistik 1"

                                className="border rounded-lg p-3"

                            />

                            <input

                                name="statistic_2_title"

                                value={form.statistic_2_title}

                                onChange={handleChange}

                                placeholder="Judul Statistik 2"

                                className="border rounded-lg p-3"

                            />

                            <input

                                name="statistic_2_value"

                                value={form.statistic_2_value}

                                onChange={handleChange}

                                placeholder="Nilai Statistik 2"

                                className="border rounded-lg p-3"

                            />

                            <input

                                name="statistic_3_title"

                                value={form.statistic_3_title}

                                onChange={handleChange}

                                placeholder="Judul Statistik 3"

                                className="border rounded-lg p-3"

                            />

                            <input

                                name="statistic_3_value"

                                value={form.statistic_3_value}

                                onChange={handleChange}

                                placeholder="Nilai Statistik 3"

                                className="border rounded-lg p-3"

                            />

                        </div>

                    </div>

                    {/* =====================================================
                        Quote
                    ====================================================== */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Quote

                        </label>

                        <textarea

                            rows={4}

                            name="quote"

                            value={form.quote}

                            onChange={handleChange}

                            placeholder="Quote tentang potensi desa"

                            className="w-full border rounded-lg p-3"

                        />

                    </div>

                    {/* =====================================================
                        Quote Author
                    ====================================================== */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Penulis Quote

                        </label>

                        <input

                            type="text"

                            name="quote_author"

                            value={form.quote_author}

                            onChange={handleChange}

                            placeholder="Nama penulis quote"

                            className="w-full border rounded-lg p-3"

                        />

                    </div>

                    {/* =====================================================
                        Featured
                    ====================================================== */}

                    <label className="flex items-center gap-3">

                        <input

                            type="checkbox"

                            name="is_featured"

                            checked={form.is_featured}

                            onChange={handleChange}

                            className="w-4 h-4"

                        />

                        <span className="font-medium">

                            Jadikan Featured Potential

                        </span>

                    </label>

                    {/* =====================================================
                        Status
                    ====================================================== */}

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

                    {/* =====================================================
                        Published At
                    ====================================================== */}

                    <div>

                        <label className="block mb-2 font-medium">

                            Tanggal Publikasi

                        </label>

                        <input

                            type="datetime-local"

                            name="published_at"

                            value={form.published_at}

                            onChange={handleChange}

                            className="w-full border rounded-lg p-3"

                        />

                    </div>

                    {/* =====================================================
                        Footer
                    ====================================================== */}

                    <div className="flex justify-end gap-3 pt-4 border-t">

                        <button

                            type="button"

                            onClick={onClose}

                            className="px-5 py-2 rounded-lg border hover:bg-gray-50"

                        >

                            Batal

                        </button>

                        <button

                            type="submit"

                            disabled={loading}

                            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"

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