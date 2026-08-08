import { useEffect, useState } from "react";
import {
    X,
    Save,
    FileText,
    ClipboardList,
    User,
    Clock,
    Banknote,
    ListOrdered,
    CheckCircle,
} from "lucide-react";

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
    | Load Data Edit
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
                is_active: Boolean(service.is_active),
            });
        } else {
            setForm(initialState);
        }
    }, [service]);

    /*
    |--------------------------------------------------------------------------
    | Input Handler
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {
        const {
            name,
            value,
            type,
            checked,
        } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
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
            if (service) {
                await serviceService.update(
                    service.id,
                    form
                );
            } else {
                await serviceService.create(form);
            }

            reload();
            onClose();
        } catch (error) {
            console.error(
                "Gagal menyimpan layanan:",
                error
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div
                className="
                    flex
                    w-full
                    max-w-3xl
                    max-h-[90vh]
                    flex-col
                    overflow-hidden
                    rounded-xl
                    bg-white
                    shadow-xl
                "
            >

                {/* ======================================================
                    HEADER
                ====================================================== */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-100
                        px-5
                        py-4
                    "
                >

                    <div>

                        <h2 className="text-lg font-semibold text-gray-800">
                            {service
                                ? "Edit Layanan"
                                : "Tambah Layanan"}
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Kelola informasi layanan publik desa
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
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        <X size={18} />
                    </button>

                </div>

                {/* ======================================================
                    FORM
                ====================================================== */}

                <form
                    onSubmit={handleSubmit}
                    className="overflow-y-auto"
                >

                    <div className="space-y-6 px-5 py-5">

                        {/* ==================================================
                            INFORMASI LAYANAN
                        ================================================== */}

                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-green-50
                                        text-green-600
                                    "
                                >
                                    <FileText size={16} />
                                </div>

                                <div>

                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Informasi Layanan
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Informasi utama mengenai layanan
                                    </p>

                                </div>

                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {/* Judul */}

                                <div className="sm:col-span-2">

                                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                        Judul Layanan
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        placeholder="Masukkan judul layanan"
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

                                {/* Icon */}

                                <div>

                                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                        Icon
                                    </label>

                                    <input
                                        type="text"
                                        name="icon"
                                        value={form.icon}
                                        onChange={handleChange}
                                        placeholder="Contoh: FileText"
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

                                {/* Urutan */}

                                <div>

                                    <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <ListOrdered size={13} />
                                        Nomor Urutan
                                    </label>

                                    <input
                                        type="number"
                                        name="order_number"
                                        value={form.order_number}
                                        onChange={handleChange}
                                        min="1"
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
                                        placeholder="Masukkan deskripsi layanan..."
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
                                            transition
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                        </section>

                        <div className="border-t border-gray-100" />

                        {/* ==================================================
                            DETAIL LAYANAN
                        ================================================== */}

                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-blue-50
                                        text-blue-600
                                    "
                                >
                                    <ClipboardList size={16} />
                                </div>

                                <div>

                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Detail Layanan
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Persyaratan dan prosedur pelayanan
                                    </p>

                                </div>

                            </div>

                            <div className="space-y-4">

                                {/* Persyaratan */}

                                <div>

                                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                        Persyaratan
                                    </label>

                                    <textarea
                                        name="requirements"
                                        value={form.requirements}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Masukkan persyaratan layanan..."
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
                                            transition
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                    <p className="mt-1 text-[11px] text-gray-400">
                                        Tuliskan dokumen atau persyaratan
                                        yang perlu disiapkan masyarakat.
                                    </p>

                                </div>

                                {/* Prosedur */}

                                <div>

                                    <label className="mb-1.5 block text-xs font-medium text-gray-600">
                                        Prosedur
                                    </label>

                                    <textarea
                                        name="procedure"
                                        value={form.procedure}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Masukkan prosedur atau langkah pelayanan..."
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
                                            transition
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-100
                                        "
                                    />

                                    <p className="mt-1 text-[11px] text-gray-400">
                                        Jelaskan langkah-langkah yang harus
                                        dilakukan untuk mendapatkan layanan.
                                    </p>

                                </div>

                            </div>

                        </section>

                        <div className="border-t border-gray-100" />

                        {/* ==================================================
                            INFORMASI PELAYANAN
                        ================================================== */}

                        <section>

                            <div className="mb-4 flex items-center gap-2">

                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-purple-50
                                        text-purple-600
                                    "
                                >
                                    <Clock size={16} />
                                </div>

                                <div>

                                    <h3 className="text-sm font-semibold text-gray-800">
                                        Informasi Pelayanan
                                    </h3>

                                    <p className="text-xs text-gray-400">
                                        Informasi waktu, biaya, dan petugas
                                    </p>

                                </div>

                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-4
                                    sm:grid-cols-2
                                "
                            >

                                {/* Waktu Proses */}

                                <div>

                                    <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <Clock size={13} />
                                        Waktu Proses
                                    </label>

                                    <input
                                        type="text"
                                        name="processing_time"
                                        value={form.processing_time}
                                        onChange={handleChange}
                                        placeholder="Contoh: 1-3 hari kerja"
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

                                {/* Biaya */}

                                <div>

                                    <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <Banknote size={13} />
                                        Biaya
                                    </label>

                                    <input
                                        type="text"
                                        name="cost"
                                        value={form.cost}
                                        onChange={handleChange}
                                        placeholder="Contoh: Gratis / Rp10.000"
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

                                {/* Penanggung Jawab */}

                                <div className="sm:col-span-2">

                                    <label className="mb-1.5 flex items-center gap-1 text-xs font-medium text-gray-600">
                                        <User size={13} />
                                        Penanggung Jawab
                                    </label>

                                    <input
                                        type="text"
                                        name="person_in_charge"
                                        value={form.person_in_charge}
                                        onChange={handleChange}
                                        placeholder="Nama atau jabatan penanggung jawab"
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

                            </div>

                        </section>

                        {/* ==================================================
                            STATUS
                        ================================================== */}

                        <label
                            className="
                                flex
                                cursor-pointer
                                items-center
                                gap-3
                                rounded-lg
                                border
                                border-green-100
                                bg-green-50
                                px-4
                                py-3
                            "
                        >

                            <input
                                type="checkbox"
                                name="is_active"
                                checked={Boolean(form.is_active)}
                                onChange={handleChange}
                                className="
                                    h-4
                                    w-4
                                    accent-green-600
                                "
                            />

                            <CheckCircle
                                size={17}
                                className="text-green-600"
                            />

                            <div>

                                <p className="text-sm font-medium text-gray-800">
                                    Aktifkan layanan
                                </p>

                                <p className="text-xs text-gray-500">
                                    Layanan akan ditampilkan kepada masyarakat
                                    jika status aktif.
                                </p>

                            </div>

                        </label>

                    </div>

                    {/* ======================================================
                        FOOTER
                    ====================================================== */}

                    <div
                        className="
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
                        "
                    >

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
                                disabled:cursor-not-allowed
                                disabled:opacity-50
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
                                : service
                                ? "Simpan Perubahan"
                                : "Simpan Layanan"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}