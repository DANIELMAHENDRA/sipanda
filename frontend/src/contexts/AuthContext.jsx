import { createContext, useContext, useEffect, useState } from "react";

import authService from "../services/authService";
import { getToken, saveToken, removeToken } from "../utils/token";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const loadUser = async () => {

        const token = getToken();

        if (!token) {

            setLoading(false);

            return;

        }

        try {

            const response = await authService.me();

            setUser(response.data.data);

        } catch (error) {

            console.error(error);

            removeToken();

            setUser(null);

        } finally {

            setLoading(false);

        }

    };

    const login = async (credentials) => {

        const response = await authService.login(credentials);

        const token = response.data.data.token;

        const authUser = response.data.data.user;

        saveToken(token);

        setUser(authUser);

        return response;

    };

    const logout = async () => {

        try {

            await authService.logout();

        } catch (error) {

            console.error(error);

        }

        removeToken();

        setUser(null);

    };

    useEffect(() => {

        loadUser();

    }, []);

    return (

        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                loadUser,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}