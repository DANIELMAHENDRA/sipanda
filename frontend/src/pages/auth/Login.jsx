import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    User,
    Lock,
    LogIn,
} from "lucide-react";

import { useAuth } from "../../contexts/AuthContext";

export default function Login() {

    const {
        login,
        user,
    } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [form, setForm] = useState({

        login: "",

        password: "",

    });

    /*
    |--------------------------------------------------------------------------
    | Jika sudah login
    |--------------------------------------------------------------------------
    */

    if (user) {

        return <Navigate to="/admin/dashboard" replace />;

    }

    /*
    |--------------------------------------------------------------------------
    | Handle Input
    |--------------------------------------------------------------------------
    */

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

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

        setError("");

        try {

            await login(form);

        } catch (err) {

            console.error(err);

            setError(

                err.response?.data?.message ??

                "Login gagal."

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

            <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

                <div className="text-center mb-8">

                    <h1 className="text-3xl font-bold text-green-700">

                        SIPANDA

                    </h1>

                    <p className="mt-2 text-gray-500">

                        Login Admin Panel

                    </p>

                </div>

                {

                    error && (

                        <div className="mb-5 bg-red-100 text-red-700 p-3 rounded-lg">

                            {error}

                        </div>

                    )

                }

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="block mb-2 font-medium">

                            Username / Email

                        </label>

                        <div className="relative">

                            <User
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input

                                type="text"

                                name="login"

                                value={form.login}

                                onChange={handleChange}

                                className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:border-green-600"

                                placeholder="Masukkan username"

                            />

                        </div>

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">

                            Password

                        </label>

                        <div className="relative">

                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input

                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }

                                name="password"

                                value={form.password}

                                onChange={handleChange}

                                className="w-full border rounded-xl py-3 pl-11 pr-11 outline-none focus:border-green-600"

                                placeholder="Masukkan password"

                            />

                            <button

                                type="button"

                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }

                                className="absolute right-4 top-1/2 -translate-y-1/2"

                            >

                                {

                                    showPassword

                                        ? <EyeOff size={18} />

                                        : <Eye size={18} />

                                }

                            </button>

                        </div>

                    </div>

                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl flex items-center justify-center gap-2"

                    >

                        <LogIn size={18} />

                        {

                            loading

                                ? "Memproses..."

                                : "Login"

                        }

                    </button>

                </form>

            </div>

        </div>

    );

}