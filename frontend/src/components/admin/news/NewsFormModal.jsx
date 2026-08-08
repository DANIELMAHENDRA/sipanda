import { useEffect, useState } from "react";
import { X, Newspaper, Upload } from "lucide-react";

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

    const [preview, setPreview] = useState(null);

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

            setPreview(news.thumbnail || null);
        } else {
            setForm({
                title: "",
                category: "",
                excerpt: "",
                content: "",
                thumbnail: null,
                status: "draft",
            });

            setPreview(null);
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

        if (type === "file") {
            const file = files?.[0] || null;

            setForm((prev) => ({
                ...prev,
                [name]: file,
            }));

            if (file) {
                setPreview(URL.createObjectURL(file));
            }

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
                formData.append("_method", "PUT");

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

            if (error.response?.data?.errors) {
                console.error(
                    "Validation:",
                    error.response.data.errors
                );
            }

        } finally {
            setLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Close
    |--------------------------------------------------------------------------
    */

    const handleClose = () => {
        if (loading) return;

        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">

            <div
                className="
                    bg-white
                    rounded-2xl
                    shadow-2xl
                    w-full
                    max-w-4xl
                    max-h-[95vh]
                    sm:max-h-[90vh]
                    overflow-hidden
                    flex
                    flex-col
                "
            >

                {/* ======================================================
                    Header
                ====================================================== */}

                <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 border-b border-gray-100 shrink-0">

                    <div className="flex items-center gap-3 min-w-0">

                        <div className="hidden sm:flex w-11 h-11 rounded-xl bg-green-100 items-center justify-center shrink-0">

                            <Newspaper
                                size={22}
                                className="text-green-700"
                            />

                        </div>

                        <div className="min-w-0">

                            <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate">

                                {news
                                    ? "Edit Berita"
                                    : "Tambah Berita"}

                            </h2>

                            <p className="text-xs sm:text-sm text-gray-500 mt-1">

                                {news
                                    ? "Perbarui informasi berita."
                                    : "Tambahkan berita baru ke SIPANDA."}

                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={handleClose}
                        disabled={loading}
                        className="
                            p-2
                            rounded-lg
                            text-gray-400
                            hover:bg-gray-100
                            hover:text-gray-600
                            disabled:opacity-50
                            transition
                            shrink-0
                        "
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* ======================================================
                    Form Body
                ====================================================== */}

                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        overflow-y-auto
                        px-5
                        sm:px-6
                        py-5
                        sm:py-6
                    "
                >

                    <div className="space-y-5">

                        {/* ==================================================
                            Judul + Kategori
                        ================================================== */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Judul */}
                            <div className="md:col-span-2">

                                <label
                                    htmlFor="title"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Judul Berita
                                    <span className="text-red-500 ml-1">
                                        *
                                    </span>
                                </label>

                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="Masukkan judul berita"
                                    required
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        border
                                        border-gray-300
                                        rounded-xl
                                        text-sm
                                        text-gray-800
                                        placeholder:text-gray-400
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-green-500/20
                                        focus:border-green-500
                                        transition
                                    "
                                />

                            </div>

                            {/* Kategori */}
                            <div>

                                <label
                                    htmlFor="category"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Kategori
                                    <span className="text-red-500 ml-1">
                                        *
                                    </span>
                                </label>

                                <input
                                    id="category"
                                    type="text"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    placeholder="Contoh: Pemerintahan"
                                    required
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        border
                                        border-gray-300
                                        rounded-xl
                                        text-sm
                                        text-gray-800
                                        placeholder:text-gray-400
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-green-500/20
                                        focus:border-green-500
                                        transition
                                    "
                                />

                            </div>

                            {/* Status */}
                            <div>

                                <label
                                    htmlFor="status"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    Status
                                </label>

                                <select
                                    id="status"
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        border
                                        border-gray-300
                                        rounded-xl
                                        bg-white
                                        text-sm
                                        text-gray-800
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-green-500/20
                                        focus:border-green-500
                                        transition
                                    "
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

                        {/* ==================================================
                            Ringkasan
                        ================================================== */}

                        <div>

                            <label
                                htmlFor="excerpt"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Ringkasan
                            </label>

                            <textarea
                                id="excerpt"
                                rows={4}
                                name="excerpt"
                                value={form.excerpt}
                                onChange={handleChange}
                                placeholder="Tuliskan ringkasan singkat berita..."
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    border
                                    border-gray-300
                                    rounded-xl
                                    text-sm
                                    text-gray-800
                                    placeholder:text-gray-400
                                    resize-y
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-green-500/20
                                    focus:border-green-500
                                    transition
                                "
                            />

                            <p className="text-xs text-gray-400 mt-1.5">
                                Ringkasan akan membantu pembaca memahami isi berita secara singkat.
                            </p>

                        </div>

                        {/* ==================================================
                            Isi Berita
                        ================================================== */}

                        <div>

                            <label
                                htmlFor="content"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Isi Berita
                                <span className="text-red-500 ml-1">
                                    *
                                </span>
                            </label>

                            <textarea
                                id="content"
                                rows={10}
                                name="content"
                                value={form.content}
                                onChange={handleChange}
                                placeholder="Tuliskan isi berita..."
                                required
                                className="
                                    w-full
                                    px-4
                                    py-3
                                    border
                                    border-gray-300
                                    rounded-xl
                                    text-sm
                                    text-gray-800
                                    placeholder:text-gray-400
                                    resize-y
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-green-500/20
                                    focus:border-green-500
                                    transition
                                "
                            />

                        </div>

                        {/* ==================================================
                            Thumbnail
                        ================================================== */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Thumbnail
                            </label>

                            <label
                                htmlFor="thumbnail"
                                className="
                                    relative
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    w-full
                                    min-h-[170px]
                                    sm:min-h-[190px]
                                    border-2
                                    border-dashed
                                    border-gray-300
                                    rounded-2xl
                                    cursor-pointer
                                    bg-gray-50
                                    hover:bg-green-50
                                    hover:border-green-400
                                    transition
                                    overflow-hidden
                                "
                            >

                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Preview thumbnail"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center px-5 text-center">

                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">

                                            <Upload
                                                size={22}
                                                className="text-green-700"
                                            />

                                        </div>

                                        <p className="text-sm font-semibold text-gray-700">
                                            Pilih thumbnail berita
                                        </p>

                                        <p className="text-xs text-gray-400 mt-1">
                                            JPG, PNG, WEBP
                                        </p>

                                    </div>
                                )}

                                <input
                                    id="thumbnail"
                                    type="file"
                                    name="thumbnail"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="hidden"
                                />

                            </label>

                            {preview && (
                                <p className="text-xs text-gray-400 mt-2">
                                    Klik area gambar untuk mengganti thumbnail.
                                </p>
                            )}

                        </div>

                    </div>

                    {/* ======================================================
                        Footer
                    ====================================================== */}

                    <div className="
                        sticky
                        bottom-0
                        -mx-5
                        sm:-mx-6
                        mt-6
                        px-5
                        sm:px-6
                        py-4
                        bg-white
                        border-t
                        border-gray-100
                        flex
                        flex-col-reverse
                        sm:flex-row
                        sm:justify-end
                        gap-3
                    ">

                        <button
                            type="button"
                            onClick={handleClose}
                            disabled={loading}
                            className="
                                w-full
                                sm:w-auto
                                px-5
                                py-2.5
                                rounded-xl
                                border
                                border-gray-300
                                text-gray-700
                                text-sm
                                font-medium
                                hover:bg-gray-50
                                disabled:opacity-50
                                transition
                            "
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                w-full
                                sm:w-auto
                                px-5
                                py-2.5
                                rounded-xl
                                bg-green-600
                                text-white
                                text-sm
                                font-semibold
                                hover:bg-green-700
                                disabled:opacity-60
                                disabled:cursor-not-allowed
                                transition
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                            "
                        >

                            {loading && (
                                <span className="
                                    w-4
                                    h-4
                                    border-2
                                    border-white/40
                                    border-t-white
                                    rounded-full
                                    animate-spin
                                " />
                            )}

                            {loading
                                ? "Menyimpan..."
                                : news
                                ? "Simpan Perubahan"
                                : "Simpan Berita"}

                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}