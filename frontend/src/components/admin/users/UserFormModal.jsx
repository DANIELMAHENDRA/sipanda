import { useEffect, useState } from "react";

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

        role: "admin",

        photo: null,

        is_active: true,

    });

    /*
    |--------------------------------------------------------------------------
    | Load Data Edit
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (user) {

            setForm({

                name: user.name,

                username: user.username,

                email: user.email,

                password: "",

                role: user.role,

                photo: null,

                is_active: user.is_active,

            });

        } else {

            setForm({

                name: "",

                username: "",

                email: "",

                password: "",

                role: "admin",

                photo: null,

                is_active: true,

            });

        }

    }, [user]);

    /*
    |--------------------------------------------------------------------------
    | Input Change
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

            Object.keys(form).forEach((key) => {

                if (

                    form[key] !== null &&

                    form[key] !== ""

                ) {

                    formData.append(key, form[key]);

                }

            });

            if (user) {

                formData.append("_method", "PUT");

                await userService.update(

                    user.id,

                    formData

                );

            } else {

                await userService.create(

                    formData

                );

            }

            reload();

            onClose();

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">

                <div className="border-b p-6">

                    <h2 className="text-xl font-bold">

                        {

                            user

                                ? "Edit User"

                                : "Tambah User"

                        }

                    </h2>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="p-6 space-y-5"

                >

                    <input

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                        placeholder="Nama"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="username"

                        value={form.username}

                        onChange={handleChange}

                        placeholder="Username"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="email"

                        type="email"

                        value={form.email}

                        onChange={handleChange}

                        placeholder="Email"

                        className="w-full border rounded-lg p-3"

                    />

                    <input

                        name="password"

                        type="password"

                        value={form.password}

                        onChange={handleChange}

                        placeholder="Password"

                        className="w-full border rounded-lg p-3"

                    />

                    <select

                        name="role"

                        value={form.role}

                        onChange={handleChange}

                        className="w-full border rounded-lg p-3"

                    >

                        <option value="admin">

                            Admin

                        </option>

                        <option value="super_admin">

                            Super Admin

                        </option>

                    </select>

                    <input

                        type="file"

                        name="photo"

                        onChange={handleChange}

                    />

                    <label className="flex items-center gap-3">

                        <input

                            type="checkbox"

                            name="is_active"

                            checked={form.is_active}

                            onChange={handleChange}

                        />

                        Aktif

                    </label>

                    <div className="flex justify-end gap-3 pt-5">

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