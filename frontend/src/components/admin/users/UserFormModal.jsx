import { useEffect, useState } from "react";
import { X } from "lucide-react";
import userService from "../../../services/userService";

export default function UserFormModal({
    open,
    onClose,
    user,
    reload,
}) {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "admin",
        photo: null,
        is_active: true,
    });

    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                username: user.username || "",
                email: user.email || "",
                password: "",
                password_confirmation: "",
                role: user.role || "admin",
                photo: null,
                is_active: Boolean(user.is_active),
            });
        } else {
            setForm({
                name: "",
                username: "",
                email: "",
                password: "",
                password_confirmation: "",
                role: "admin",
                photo: null,
                is_active: true,
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const {
            name,
            value,
            type,
            checked,
            files,
        } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                    ? files[0]
                    : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("username", form.username);
            formData.append("email", form.email);
            formData.append("role", form.role);

            formData.append(
                "is_active",
                form.is_active ? "1" : "0"
            );

            // Password hanya dikirim jika diisi
            if (form.password) {
                formData.append(
                    "password",
                    form.password
                );

                formData.append(
                    "password_confirmation",
                    form.password_confirmation
                );
            }

            // Foto hanya dikirim jika memilih foto
            if (form.photo) {
                formData.append(
                    "photo",
                    form.photo
                );
            }

            if (user) {
                formData.append("_method", "PUT");

                await userService.update(
                    user.id,
                    formData
                );
            } else {
                await userService.create(formData);
            }

            reload();
            onClose();

        } catch (err) {
            console.error(err);

            if (err.response?.data?.errors) {
                console.error(
                    "Validation:",
                    err.response.data.errors
                );
            }

        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between border-b px-5 sm:px-6 py-4 sm:py-5">

                    <div>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                            {user ? "Edit User" : "Tambah User"}
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            {user
                                ? "Perbarui informasi akun administrator."
                                : "Tambahkan akun administrator baru."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* Form Scroll */}
                <form
                    onSubmit={handleSubmit}
                    className="p-5 sm:p-6 space-y-5 overflow-y-auto max-h-[calc(90vh-90px)]"
                >

                    {/* Nama */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama
                        </label>

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nama lengkap"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder={
                                user
                                    ? "Kosongkan jika tidak ingin mengganti password"
                                    : "Password"
                            }
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Konfirmasi Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Konfirmasi Password
                        </label>

                        <input
                            name="password_confirmation"
                            type="password"
                            value={form.password_confirmation}
                            onChange={handleChange}
                            placeholder="Ulangi password"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Role
                        </label>

                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="admin">
                                Admin
                            </option>

                            <option value="super_admin">
                                Super Admin
                            </option>
                        </select>
                    </div>

                    {/* Foto */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Foto
                        </label>

                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full text-sm border border-gray-300 rounded-lg p-2 bg-white"
                        />
                    </div>

                    {/* Status */}
                    <label className="flex items-center gap-3 cursor-pointer">

                        <input
                            type="checkbox"
                            name="is_active"
                            checked={form.is_active}
                            onChange={handleChange}
                            className="w-4 h-4 accent-green-600"
                        />

                        <span className="text-sm font-medium text-gray-700">
                            Akun Aktif
                        </span>

                    </label>

                    {/* Button */}
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t">

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
                        >
                            {loading
                                ? "Menyimpan..."
                                : "Simpan"}
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}