import { useEffect, useState } from "react";
import {
    X,
    FileText,
    ImagePlus,
    FolderOpen,
    Save,
    Sprout,
} from "lucide-react";

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
        category: "",
        excerpt: "",
        content: "",
        thumbnail: null,
        cover_image: null,
        status: "draft",
    };

    const [form, setForm] = useState(initialState);

    /*
    |--------------------------------------------------------------------------
    | Load Data
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (potential) {
            setForm({
            title: potential.title || "",
            category: potential.category || "",
            excerpt: potential.excerpt || "",
            content: potential.content || "",
            thumbnail: null,
            cover_image: null,
            status: potential.status || "draft",
        });
        } else {
            setForm(initialState);
        }
    }, [potential, open]);

    /*
    |--------------------------------------------------------------------------
    | Handle Change
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
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

            formData.append("title", form.title);
            formData.append("category", form.category);
            formData.append("excerpt", form.excerpt);
            formData.append("content", form.content);
            formData.append("status", form.status);

            if (form.thumbnail) {
                formData.append(
                    "thumbnail",
                    form.thumbnail
                );
            }

            if (form.cover_image) {
                formData.append(
                    "cover_image",
                    form.cover_image
                );
            }

            if (potential) {
                formData.append("_method", "PUT");

                await potentialService.update(
                    potential.id,
                    formData
                );
            } else {
                await potentialService.create(
                    formData
                );
            }

            await reload();

            onClose();
        } catch (error) {

            console.error(
                "Gagal menyimpan data potensi:",
                error
            );

            console.log(
                "Response Error:",
                error.response?.data
            );

        } finally {
            setLoading(false);
        }
    };

    if (!open) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

            <div className="flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                            <Sprout size={20} />
                        </div>

                        <div>

                            <h2 className="text-base font-semibold text-gray-800 sm:text-lg">
                                {potential
                                    ? "Edit Potensi"
                                    : "Tambah Potensi"}
                            </h2>

                            <p className="text-xs text-gray-400">
                                Kelola informasi potensi Desa Panca Tunggal
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                    >
                        <X size={19} />
                    </button>

                </div>

                {/* =====================================================
                    FORM
                ====================================================== */}

                <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto px-5 py-5 sm:px-6"
                >

                    {/* =================================================
                        INFORMASI POTENSI
                    ================================================== */}

                    <section>

                        <div className="mb-5 flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                <FolderOpen size={16} />
                            </div>

                            <div>

                                <h3 className="text-sm font-semibold text-gray-800">
                                    Informasi Potensi
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Informasi dasar mengenai potensi desa
                                </p>

                            </div>

                        </div>

                        <div className="space-y-4">

                            {/* Judul */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Judul Potensi
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="Contoh: Potensi Perkebunan Desa"
                                    required
                                    className="h-11 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                            {/* Kategori */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Kategori
                                </label>

                                <input
                                    type="text"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    placeholder="Contoh: Pertanian"
                                    required
                                    className="h-11 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                            {/* Deskripsi */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Deskripsi
                                </label>

                                <textarea
                                    name="excerpt"
                                    value={form.excerpt}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tuliskan deskripsi mengenai potensi desa..."
                                    required
                                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                            {/* Isi Potensi */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Isi Potensi
                                </label>

                                <textarea
                                    name="content"
                                    value={form.content}
                                    onChange={handleChange}
                                    rows={8}
                                    placeholder="Tuliskan informasi lengkap mengenai potensi desa..."
                                    required
                                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                            {/* Status */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Status Publikasi
                                </label>

                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                >

                                    <option value="draft">
                                        Draft
                                    </option>

                                    <option value="published">
                                        Published
                                    </option>

                                </select>

                            </div>

                        </div>

                    </section>

                    <div className="my-6 border-t border-gray-100" />

                    {/* =================================================
                        FOTO
                    ================================================== */}

                    <section>

                        <div className="mb-5 flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                                <ImagePlus size={16} />
                            </div>

                            <div>

                                <h3 className="text-sm font-semibold text-gray-800">
                                    Foto Potensi
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Upload foto asli dan foto cover
                                </p>

                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* =================================================
                                FOTO ASLI / THUMBNAIL
                            ================================================== */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Foto Asli
                                </label>

                                <label className="group flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 text-center transition hover:border-green-400 hover:bg-green-50">

                                    <ImagePlus
                                        size={28}
                                        className="text-gray-400 group-hover:text-green-500"
                                    />

                                    <p className="mt-2 text-sm font-medium text-gray-600">
                                        Pilih foto asli
                                    </p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        JPG, JPEG, PNG
                                    </p>

                                    <input
                                        type="file"
                                        name="thumbnail"
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="hidden"
                                    />

                                </label>

                                {form.thumbnail && (
                                    <p className="mt-2 truncate text-xs text-green-600">
                                        {form.thumbnail.name}
                                    </p>
                                )}

                                {potential?.thumbnail &&
                                    !form.thumbnail && (
                                        <img
                                            src={potential.thumbnail}
                                            alt={potential.title}
                                            className="mt-3 h-28 w-full rounded-lg object-cover"
                                        />
                                    )}

                            </div>

                            {/* =================================================
                                FOTO COVER
                            ================================================== */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Foto Cover
                                </label>

                                <label className="group flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 text-center transition hover:border-green-400 hover:bg-green-50">

                                    <ImagePlus
                                        size={28}
                                        className="text-gray-400 group-hover:text-green-500"
                                    />

                                    <p className="mt-2 text-sm font-medium text-gray-600">
                                        Pilih foto cover
                                    </p>

                                    <p className="mt-1 text-xs text-gray-400">
                                        JPG, JPEG, PNG
                                    </p>

                                    <input
                                        type="file"
                                        name="cover_image"
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="hidden"
                                    />

                                </label>

                                {form.cover_image && (
                                    <p className="mt-2 truncate text-xs text-green-600">
                                        {form.cover_image.name}
                                    </p>
                                )}

                                {potential?.cover_image &&
                                    !form.cover_image && (
                                        <img
                                            src={potential.cover_image}
                                            alt={potential.title}
                                            className="mt-3 h-28 w-full rounded-lg object-cover"
                                        />
                                    )}

                            </div>

                        </div>

                    </section>

                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div className="mt-6 flex flex-col-reverse gap-2 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="h-10 w-full rounded-lg border border-gray-200 bg-white px-5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 sm:w-auto"
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                        >

                            <Save size={16} />

                            {loading
                                ? "Menyimpan..."
                                : potential
                                ? "Simpan Perubahan"
                                : "Simpan Potensi"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}