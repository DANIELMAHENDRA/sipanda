import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({

    children,

    roles = [],

}) {

    const {

        user,

        loading,

    } = useAuth();

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <div className="flex items-center justify-center h-screen">

                <h2 className="text-lg font-medium text-gray-600">

                    Memuat...

                </h2>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | Belum Login
    |--------------------------------------------------------------------------
    */

    if (!user) {

        return <Navigate to="/login" replace />;

    }

    /*
    |--------------------------------------------------------------------------
    | Cek Role
    |--------------------------------------------------------------------------
    */

    if (

        roles.length > 0 &&

        !roles.includes(user.role)

    ) {

        return <Navigate to="/" replace />;

    }

    /*
    |--------------------------------------------------------------------------
    | Lolos
    |--------------------------------------------------------------------------
    */

    return children;

}