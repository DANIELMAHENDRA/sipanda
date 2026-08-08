import { useEffect, useState } from "react";
import {
    X,
    Save,
    User,
    BriefcaseBusiness,
    FileText,
    ImagePlus,
    ListOrdered,
    Settings,
} from "lucide-react";

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
            files,
        } = e.target;

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
            formData.append(
                "order_number",
                Number(form.order_number)
            );
            formData.append("status", form.status);

            /*
            |--------------------------------------------------------------------------
            | Upload Foto
            |--------------------------------------------------------------------------
            */

            if (form.photo instanceof File) {
                formData.append("photo", form.photo);
            }

            /*
            |--------------------------------------------------------------------------
            | Create / Update
            |--------------------------------------------------------------------------
            */

            if (government) {
                formData.append("_method", "PUT");

                await governmentService.update(
                    government.id,
                    formData
                );
            } else {
                await governmentService.create(formData);
            }

            reload();
            onClose();
        } catch (err) {
            console.error(
                "Gagal menyimpan data pemerintahan:",
                err
            );

            console.error(
                err.response?.data
            );
        } finally {
            setLoading(false);
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Modal
    |--------------------------------------------------------------------------
    */

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]">

            <div className="
                flex
                w-full
                max-w-3xl
                max-h-[92vh]
                flex-col
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-2xl
            ">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="
                    flex
                    shrink-0
                    items-center
                    justify-between
                    border-b
                    border-gray-100
                    px-5
                    py-4
                    sm:px-6
                ">

                    <div className="flex items-center gap-3">

                        <div className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-green-50
                            text-green-600
                        ">
                            <User size={19} />
                        </div>

                        <div>

                            <h2 className="
                                text-base
                                font-semibold
                                text-gray-800
                                sm:text-lg
                            ">
                                {government
                                    ? "Edit Aparatur Pemerintahan"
                                    : "Tambah Aparatur Pemerintahan"}
                            </h2>

                            <p className="
                                mt-0.5
                                text-xs
                                text-gray-400
                            ">
                                Kelola informasi aparatur Desa Panca Tunggal
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            text-gray-400
                            transition
                            hover:bg-gray-100
                            hover:text-gray-700
                            disabled:opacity-50
                        "
                    >
                        <X size={19} />
                    </button>

                </div>


                {/* =====================================================
                    FORM
                ====================================================== */}

                <form
                    onSubmit={handleSubmit}
                    className="
                        flex-1
                        overflow-y-auto
                        px-5
                        py-5
                        sm:px-6
                    "
                >

                    {/* =================================================
                        INFORMASI APARATUR
                    ================================================== */}

                    <section>

                        <div className="
                            mb-4
                            flex
                            items-center
                            gap-2.5
                        ">

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
                                <BriefcaseBusiness size={16} />
                            </div>

                            <div>

                                <h3 className="
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                ">
                                    Informasi Aparatur
                                </h3>

                                <p className="
                                    text-xs
                                    text-gray-400
                                ">
                                    Informasi dasar perangkat pemerintahan desa
                                </p>

                            </div>

                        </div>


                        <div className="
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                        ">

                            {/* NAMA */}

                            <div>

                                <label className="
                                    mb-1.5
                                    block
                                    text-xs
                                    font-medium
                                    text-gray-600
                                ">
                                    Nama Lengkap
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Masukkan nama lengkap"
                                    required
                                    className="
                                        h-10
                                        w-full
                                        rounded-lg
                                        border
                                        border-gray-200
                                        px-3
                                        text-sm
                                        text-gray-700
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-green-500
                                        focus:ring-2
                                        focus:ring-green-100
                                    "
                                />

                            </div>


                            {/* JABATAN */}

                            <div>

                                <label className="
                                    mb-1.5
                                    block
                                    text-xs
                                    font-medium
                                    text-gray-600
                                ">
                                    Jabatan
                                </label>

                                <input
                                    type="text"
                                    name="position"
                                    value={form.position}
                                    onChange={handleChange}
                                    placeholder="Contoh: Sekretaris Desa"
                                    required
                                    className="
                                        h-10
                                        w-full
                                        rounded-lg
                                        border
                                        border-gray-200
                                        px-3
                                        text-sm
                                        text-gray-700
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-green-500
                                        focus:ring-2
                                        focus:ring-green-100
                                    "
                                />

                            </div>


                            {/* DESKRIPSI */}

                            <div className="sm:col-span-2">

                                <label className="
                                    mb-1.5
                                    block
                                    text-xs
                                    font-medium
                                    text-gray-600
                                ">
                                    Deskripsi
                                </label>

                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tuliskan informasi atau deskripsi mengenai aparatur..."
                                    className="
                                        w-full
                                        resize-none
                                        rounded-lg
                                        border
                                        border-gray-200
                                        px-3
                                        py-2.5
                                        text-sm
                                        text-gray-700
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-green-500
                                        focus:ring-2
                                        focus:ring-green-100
                                    "
                                />

                            </div>

                        </div>

                    </section>


                    <div className="my-6 border-t border-gray-100" />


                    {/* =================================================
                        FOTO
                    ================================================== */}

                    <section>

                        <div className="
                            mb-4
                            flex
                            items-center
                            gap-2.5
                        ">

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

                                <h3 className="
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                ">
                                    Foto Aparatur
                                </h3>

                                <p className="
                                    text-xs
                                    text-gray-400
                                ">
                                    Upload foto perangkat pemerintahan
                                </p>

                            </div>

                        </div>


                        <label className="
                            group
                            flex
                            min-h-36
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
                                size={27}
                                className="
                                    text-gray-400
                                    transition
                                    group-hover:text-green-500
                                "
                            />

                            <p className="
                                mt-2
                                text-sm
                                font-medium
                                text-gray-600
                            ">
                                Klik untuk memilih foto
                            </p>

                            <p className="
                                mt-1
                                text-xs
                                text-gray-400
                            ">
                                JPG, JPEG, PNG, atau WEBP
                            </p>

                            <input
                                type="file"
                                name="photo"
                                accept=".jpg,.jpeg,.png,.webp"
                                onChange={handleChange}
                                className="hidden"
                            />

                        </label>


                        {/* FILE BARU */}

                        {form.photo && (
                            <p className="
                                mt-2
                                truncate
                                text-xs
                                text-green-600
                            ">
                                File dipilih: {form.photo.name}
                            </p>
                        )}


                        {/* FOTO LAMA */}

                        {government?.photo && !form.photo && (
                            <div className="mt-4">

                                <p className="
                                    mb-2
                                    text-xs
                                    text-gray-400
                                ">
                                    Foto saat ini
                                </p>

                                <img
                                    src={government.photo}
                                    alt={government.name}
                                    className="
                                        h-32
                                        w-32
                                        rounded-xl
                                        border
                                        border-gray-100
                                        object-cover
                                    "
                                />

                            </div>
                        )}

                    </section>


                    <div className="my-6 border-t border-gray-100" />


                    {/* =================================================
                        PENGATURAN
                    ================================================== */}

                    <section>

                        <div className="
                            mb-4
                            flex
                            items-center
                            gap-2.5
                        ">

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
                                <Settings size={16} />
                            </div>

                            <div>

                                <h3 className="
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                ">
                                    Pengaturan Tampilan
                                </h3>

                                <p className="
                                    text-xs
                                    text-gray-400
                                ">
                                    Atur urutan dan status aparatur
                                </p>

                            </div>

                        </div>


                        <div className="
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                        ">

                            {/* URUTAN */}

                            <div>

                                <label className="
                                    mb-1.5
                                    flex
                                    items-center
                                    gap-1
                                    text-xs
                                    font-medium
                                    text-gray-600
                                ">
                                    <ListOrdered size={13} />
                                    Nomor Urutan
                                </label>

                                <input
                                    type="number"
                                    name="order_number"
                                    value={form.order_number}
                                    onChange={handleChange}
                                    min="1"
                                    required
                                    className="
                                        h-10
                                        w-full
                                        rounded-lg
                                        border
                                        border-gray-200
                                        px-3
                                        text-sm
                                        text-gray-700
                                        outline-none
                                        transition
                                        focus:border-green-500
                                        focus:ring-2
                                        focus:ring-green-100
                                    "
                                />

                                <p className="
                                    mt-1.5
                                    text-[11px]
                                    text-gray-400
                                ">
                                    Menentukan posisi aparatur pada daftar.
                                </p>

                            </div>


                            {/* STATUS */}

                            <div>

                                <label className="
                                    mb-1.5
                                    block
                                    text-xs
                                    font-medium
                                    text-gray-600
                                ">
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
                                        text-gray-700
                                        outline-none
                                        transition
                                        focus:border-green-500
                                        focus:ring-2
                                        focus:ring-green-100
                                    "
                                >

                                    <option value="published">
                                        Published
                                    </option>

                                    <option value="draft">
                                        Draft
                                    </option>

                                </select>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <div className="
                        mt-6
                        flex
                        flex-col-reverse
                        gap-2
                        border-t
                        border-gray-100
                        pt-5
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
                                : government
                                ? "Simpan Perubahan"
                                : "Simpan Aparatur"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}