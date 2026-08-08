import { useEffect, useState } from "react";
import {
    X,
    ImagePlus,
    Save,
    MapPin,
    User,
    CalendarDays,
    FolderOpen,
} from "lucide-react";

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

            formData.append("title", form.title);
            formData.append("category", form.category);
            formData.append("description", form.description);
            formData.append("location", form.location);
            formData.append("photographer", form.photographer);
            formData.append("taken_at", form.taken_at);
            formData.append("order_number", form.order_number);
            formData.append("status", form.status);

            formData.append(
                "is_featured",
                form.is_featured ? "1" : "0"
            );

            if (form.image instanceof File) {
                formData.append("image", form.image);
            }

            if (gallery) {
                formData.append("_method", "PUT");

                await galleryService.update(
                    gallery.id,
                    formData
                );
            } else {
                await galleryService.create(formData);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div className="
                flex
                w-full
                max-w-2xl
                max-h-[90vh]
                flex-col
                overflow-hidden
                rounded-xl
                bg-white
                shadow-xl
            ">

                {/* HEADER */}
                <div className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-100
                    px-5
                    py-4
                ">

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            {gallery
                                ? "Edit Galeri"
                                : "Tambah Galeri"}
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Kelola informasi dokumentasi galeri
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            text-gray-400
                            transition
                            hover:bg-gray-100
                            hover:text-gray-700
                        "
                    >
                        <X size={18} />
                    </button>

                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="overflow-y-auto"
                >

                    <div className="space-y-6 px-5 py-5">

                        {/* INFORMASI GALERI */}
                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-green-50
                                    text-green-600
                                ">
                                    <FolderOpen size={16} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Informasi Galeri
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Informasi utama dokumentasi
                                    </p>
                                </div>

                            </div>

                            <div className="
                                grid
                                grid-cols-1
                                gap-4
                                sm:grid-cols-2
                            ">

                                {/* Judul */}
                                <div className="sm:col-span-2">

                                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                        Judul Galeri
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Masukkan judul galeri"
                                        className="
                                            h-10
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-200
                                            px-3
                                            text-sm
                                            outline-none
                                            transition
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
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
                                        placeholder="Contoh: Kegiatan Desa"
                                        className="
                                            h-10
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-200
                                            px-3
                                            text-sm
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                                {/* Urutan */}
                                <div>

                                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                        Nomor Urutan
                                    </label>

                                    <input
                                        type="number"
                                        name="order_number"
                                        value={form.order_number}
                                        onChange={handleChange}
                                        min="0"
                                        className="
                                            h-10
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-200
                                            px-3
                                            text-sm
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                                {/* Deskripsi */}
                                <div className="sm:col-span-2">

                                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                        Deskripsi
                                    </label>

                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Masukkan deskripsi dokumentasi..."
                                        className="
                                            w-full
                                            resize-none
                                            rounded-lg
                                            border
                                            border-gray-200
                                            px-3
                                            py-2.5
                                            text-sm
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                        </section>

                        <div className="border-t border-gray-100" />

                        {/* DETAIL DOKUMENTASI */}
                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-blue-50
                                    text-blue-600
                                ">
                                    <CalendarDays size={16} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Detail Dokumentasi
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Informasi tambahan foto
                                    </p>
                                </div>

                            </div>

                            <div className="
                                grid
                                grid-cols-1
                                gap-4
                                sm:grid-cols-2
                            ">

                                {/* Lokasi */}
                                <div>

                                    <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <MapPin size={13} />
                                        Lokasi
                                    </label>

                                    <input
                                        type="text"
                                        name="location"
                                        value={form.location}
                                        onChange={handleChange}
                                        placeholder="Lokasi kegiatan"
                                        className="
                                            h-10
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-200
                                            px-3
                                            text-sm
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                                {/* Fotografer */}
                                <div>

                                    <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <User size={13} />
                                        Fotografer
                                    </label>

                                    <input
                                        type="text"
                                        name="photographer"
                                        value={form.photographer}
                                        onChange={handleChange}
                                        placeholder="Nama fotografer"
                                        className="
                                            h-10
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-200
                                            px-3
                                            text-sm
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                                {/* Tanggal */}
                                <div>

                                    <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <CalendarDays size={13} />
                                        Tanggal
                                    </label>

                                    <input
                                        type="date"
                                        name="taken_at"
                                        value={form.taken_at}
                                        onChange={handleChange}
                                        className="
                                            h-10
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-200
                                            px-3
                                            text-sm
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
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
                                        className="
                                            h-10
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-200
                                            bg-white
                                            px-3
                                            text-sm
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
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

                        </section>

                        <div className="border-t border-gray-100" />

                        {/* FOTO */}
                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-purple-50
                                    text-purple-600
                                ">
                                    <ImagePlus size={16} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Foto Galeri
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Upload foto dokumentasi
                                    </p>
                                </div>

                            </div>

                            <label className="
                                flex
                                min-h-28
                                cursor-pointer
                                flex-col
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-dashed
                                border-gray-300
                                bg-gray-50
                                px-4
                                text-center
                                transition
                                hover:border-green-400
                                hover:bg-green-50
                            ">

                                <ImagePlus
                                    size={25}
                                    className="text-gray-400"
                                />

                                <p className="mt-2 text-sm font-medium text-gray-600">
                                    Klik untuk memilih foto
                                </p>

                                <p className="mt-1 text-xs text-gray-400">
                                    JPG, JPEG, atau PNG
                                </p>

                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="hidden"
                                />

                            </label>

                            {form.image && (
                                <p className="mt-2 truncate text-xs text-green-600">
                                    File dipilih: {form.image.name}
                                </p>
                            )}

                        </section>

                        {/* FEATURED */}
                        <label className="
                            flex
                            cursor-pointer
                            items-start
                            gap-3
                            rounded-lg
                            border
                            border-yellow-100
                            bg-yellow-50
                            px-4
                            py-3
                        ">

                            <input
                                type="checkbox"
                                name="is_featured"
                                checked={form.is_featured}
                                onChange={handleChange}
                                className="
                                    mt-0.5
                                    h-4
                                    w-4
                                    shrink-0
                                    accent-yellow-500
                                "
                            />

                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    Jadikan foto unggulan
                                </p>

                                <p className="mt-0.5 text-xs text-gray-500">
                                    Foto ini akan ditampilkan sebagai dokumentasi unggulan
                                    pada halaman galeri.
                                </p>
                            </div>

                        </label>

                    </div>

                    {/* FOOTER */}
                    <div className="
                        flex
                        flex-col-reverse
                        gap-2
                        border-t
                        border-gray-100
                        bg-gray-50
                        px-5
                        py-4
                        sm:flex-row
                        sm:justify-end
                    ">

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="
                                h-10
                                w-full
                                rounded-lg
                                border
                                border-gray-200
                                bg-white
                                px-5
                                text-sm
                                font-medium
                                text-gray-600
                                transition
                                hover:bg-gray-50
                                sm:w-auto
                            "
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                flex
                                h-10
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-green-600
                                px-5
                                text-sm
                                font-medium
                                text-white
                                transition
                                hover:bg-green-700
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                sm:w-auto
                            "
                        >
                            <Save size={16} />

                            {loading
                                ? "Menyimpan..."
                                : gallery
                                ? "Simpan Perubahan"
                                : "Simpan Galeri"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}