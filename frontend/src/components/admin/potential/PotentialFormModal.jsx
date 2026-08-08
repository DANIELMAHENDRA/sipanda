import { useEffect, useState } from "react";
import {
    X,
    FileText,
    ImagePlus,
    BarChart3,
    Quote,
    Settings,
    Save,
    FolderOpen,
    CalendarDays,
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

                published_at: potential.published_at
                    ? potential.published_at
                          .replace(" ", "T")
                          .slice(0, 16)
                    : "",
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
                if (value !== null && value !== "") {
                    if (typeof value === "boolean") {
                        formData.append(
                            key,
                            value ? 1 : 0
                        );
                    } else {
                        formData.append(key, value);
                    }
                }
            });

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

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]">

            <div className="flex w-full max-w-4xl max-h-[92vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                            <FileText size={19} />
                        </div>

                        <div>
                            <h2 className="text-base font-semibold text-gray-800 sm:text-lg">
                                {potential
                                    ? "Edit Potensi"
                                    : "Tambah Potensi"}
                            </h2>

                            <p className="mt-0.5 text-xs text-gray-400">
                                Kelola informasi potensi Desa Panca Tunggal
                            </p>
                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                    >
                        <X size={19} />
                    </button>

                </div>


                {/* =====================================================
                    FORM CONTENT
                ====================================================== */}

                <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto px-5 py-5 sm:px-6"
                >

                    {/* =================================================
                        INFORMASI UTAMA
                    ================================================== */}

                    <section>

                        <div className="mb-4 flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                <FolderOpen size={16} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">
                                    Informasi Utama
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Informasi dasar mengenai potensi desa
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            {/* Judul */}

                            <div className="sm:col-span-2">

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
                                    className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
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
                                    className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>


                            {/* Status */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                >
                                    <option value="draft">
                                        Draft
                                    </option>

                                    <option value="published">
                                        Published
                                    </option>
                                </select>

                            </div>


                            {/* Ringkasan */}

                            <div className="sm:col-span-2">

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Ringkasan
                                </label>

                                <textarea
                                    name="excerpt"
                                    value={form.excerpt}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Tuliskan ringkasan singkat mengenai potensi..."
                                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>


                            {/* Isi */}

                            <div className="sm:col-span-2">

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Isi Potensi
                                </label>

                                <textarea
                                    name="content"
                                    value={form.content}
                                    onChange={handleChange}
                                    rows={7}
                                    required
                                    placeholder="Tuliskan informasi lengkap mengenai potensi desa..."
                                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                        </div>

                    </section>


                    <div className="my-6 border-t border-gray-100" />


                    {/* =================================================
                        GAMBAR
                    ================================================== */}

                    <section>

                        <div className="mb-4 flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                                <ImagePlus size={16} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">
                                    Media Potensi
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Kelola thumbnail dan gambar cover
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            {/* =================================================
                                THUMBNAIL
                            ================================================== */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Thumbnail
                                </label>

                                <label className="group flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 text-center transition hover:border-green-400 hover:bg-green-50">

                                    <ImagePlus
                                        size={25}
                                        className="text-gray-400 transition group-hover:text-green-500"
                                    />

                                    <p className="mt-2 text-sm font-medium text-gray-600">
                                        Pilih thumbnail
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
                                        File dipilih:{" "}
                                        {form.thumbnail.name}
                                    </p>
                                )}

                                {potential?.thumbnail && !form.thumbnail && (
                                    <div className="mt-3">

                                        <p className="mb-2 text-xs text-gray-400">
                                            Thumbnail saat ini
                                        </p>

                                        <img
                                            src={potential.thumbnail}
                                            alt={potential.title}
                                            className="h-24 w-full rounded-lg object-cover"
                                        />

                                    </div>
                                )}

                            </div>


                            {/* =================================================
                                COVER
                            ================================================== */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Cover Image
                                </label>

                                <label className="group flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 text-center transition hover:border-green-400 hover:bg-green-50">

                                    <ImagePlus
                                        size={25}
                                        className="text-gray-400 transition group-hover:text-green-500"
                                    />

                                    <p className="mt-2 text-sm font-medium text-gray-600">
                                        Pilih cover image
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
                                        File dipilih:{" "}
                                        {form.cover_image.name}
                                    </p>
                                )}

                                {potential?.cover_image && !form.cover_image && (
                                    <div className="mt-3">

                                        <p className="mb-2 text-xs text-gray-400">
                                            Cover saat ini
                                        </p>

                                        <img
                                            src={potential.cover_image}
                                            alt={potential.title}
                                            className="h-24 w-full rounded-lg object-cover"
                                        />

                                    </div>
                                )}

                            </div>

                        </div>

                    </section>


                    <div className="my-6 border-t border-gray-100" />


                    {/* =================================================
                        STATISTIK
                    ================================================== */}

                    <section>

                        <div className="mb-4 flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <BarChart3 size={16} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">
                                    Statistik Potensi
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Masukkan data statistik yang ingin ditampilkan
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                            {/* Statistik 1 */}

                            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">

                                <div className="mb-3 flex items-center gap-2">

                                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100 text-xs font-semibold text-blue-600">
                                        1
                                    </span>

                                    <span className="text-xs font-semibold text-gray-600">
                                        Statistik 1
                                    </span>

                                </div>

                                <div className="space-y-3">

                                    <input
                                        name="statistic_1_title"
                                        value={form.statistic_1_title}
                                        onChange={handleChange}
                                        placeholder="Judul"
                                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                    />

                                    <input
                                        name="statistic_1_value"
                                        value={form.statistic_1_value}
                                        onChange={handleChange}
                                        placeholder="Nilai"
                                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                    />

                                </div>

                            </div>


                            {/* Statistik 2 */}

                            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">

                                <div className="mb-3 flex items-center gap-2">

                                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100 text-xs font-semibold text-blue-600">
                                        2
                                    </span>

                                    <span className="text-xs font-semibold text-gray-600">
                                        Statistik 2
                                    </span>

                                </div>

                                <div className="space-y-3">

                                    <input
                                        name="statistic_2_title"
                                        value={form.statistic_2_title}
                                        onChange={handleChange}
                                        placeholder="Judul"
                                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                    />

                                    <input
                                        name="statistic_2_value"
                                        value={form.statistic_2_value}
                                        onChange={handleChange}
                                        placeholder="Nilai"
                                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                    />

                                </div>

                            </div>


                            {/* Statistik 3 */}

                            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">

                                <div className="mb-3 flex items-center gap-2">

                                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100 text-xs font-semibold text-blue-600">
                                        3
                                    </span>

                                    <span className="text-xs font-semibold text-gray-600">
                                        Statistik 3
                                    </span>

                                </div>

                                <div className="space-y-3">

                                    <input
                                        name="statistic_3_title"
                                        value={form.statistic_3_title}
                                        onChange={handleChange}
                                        placeholder="Judul"
                                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                    />

                                    <input
                                        name="statistic_3_value"
                                        value={form.statistic_3_value}
                                        onChange={handleChange}
                                        placeholder="Nilai"
                                        className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                    />

                                </div>

                            </div>

                        </div>

                    </section>


                    <div className="my-6 border-t border-gray-100" />


                    {/* =================================================
                        QUOTE
                    ================================================== */}

                    <section>

                        <div className="mb-4 flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                                <Quote size={16} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">
                                    Quote
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Kutipan yang berkaitan dengan potensi
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Quote
                                </label>

                                <textarea
                                    rows={4}
                                    name="quote"
                                    value={form.quote}
                                    onChange={handleChange}
                                    placeholder="Tuliskan quote..."
                                    className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>


                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Penulis Quote
                                </label>

                                <input
                                    type="text"
                                    name="quote_author"
                                    value={form.quote_author}
                                    onChange={handleChange}
                                    placeholder="Nama penulis quote"
                                    className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                        </div>

                    </section>


                    <div className="my-6 border-t border-gray-100" />


                    {/* =================================================
                        PUBLISHING
                    ================================================== */}

                    <section>

                        <div className="mb-4 flex items-center gap-2.5">

                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                                <Settings size={16} />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">
                                    Pengaturan Publikasi
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Atur status dan waktu publikasi
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                            {/* Status */}

                            <div>

                                <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                >
                                    <option value="draft">
                                        Draft
                                    </option>

                                    <option value="published">
                                        Published
                                    </option>
                                </select>

                            </div>


                            {/* Published At */}

                            <div>

                                <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                    <CalendarDays size={13} />
                                    Tanggal Publikasi
                                </label>

                                <input
                                    type="datetime-local"
                                    name="published_at"
                                    value={form.published_at}
                                    onChange={handleChange}
                                    className="h-10 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                />

                            </div>

                        </div>


                        {/* Featured */}

                    <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">

                        <input
                            type="checkbox"
                            name="is_featured"
                            checked={form.is_featured}
                            onChange={handleChange}
                            className="mt-0.5 h-4 w-4 accent-green-600"
                        />

                        <p className="text-sm text-gray-700">
                            Jadikan potensi ini sebagai potensi unggulan yang akan
                            ditampilkan sebagai konten utama di website desa.
                        </p>

                    </label>

                    </section>


                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div className="mt-6 flex flex-col-reverse gap-2 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="h-10 w-full rounded-lg border border-gray-200 bg-white px-5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-50 sm:w-auto"
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