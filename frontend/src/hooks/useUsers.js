import { useEffect, useState } from "react";

import userService from "../services/userService";

export default function useUsers() {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const [pagination, setPagination] = useState({});

    /*
    |--------------------------------------------------------------------------
    | Load Users
    |--------------------------------------------------------------------------
    */

    const loadUsers = async (params = {}) => {

        setLoading(true);

        setError(null);

        try {

            const response = await userService.getAll(params);

            setUsers(response.data.data);

            if (response.data.meta) {

                setPagination(response.data.meta);

            }

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | Delete User
    |--------------------------------------------------------------------------
    */

    const deleteUser = async (id) => {

        await userService.delete(id);

        await loadUsers();

    };

    /*
    |--------------------------------------------------------------------------
    | Toggle Status
    |--------------------------------------------------------------------------
    */

    const toggleStatus = async (id) => {

        await userService.toggleStatus(id);

        await loadUsers();

    };

    /*
    |--------------------------------------------------------------------------
    | Reset Password
    |--------------------------------------------------------------------------
    */

    const resetPassword = async (id) => {

        await userService.resetPassword(id);

    };

    /*
    |--------------------------------------------------------------------------
    | First Load
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        loadUsers();

    }, []);

    return {

        users,

        loading,

        error,

        pagination,

        loadUsers,

        reload: loadUsers,

        deleteUser,

        toggleStatus,

        resetPassword,

    };

}