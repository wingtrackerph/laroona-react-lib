import React from "react";
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../helpers/local-storage";

const AuthContext = createContext<any>({});

export const AuthProvider: React.FC<any> = ({ children }) => {
    const [authUser, setAuthUser] = useLocalStorage("user", null);

    // call this function when you want to authenticate the user
    const login = async (loggedUser: any) => {
        setAuthUser(loggedUser);
    };

    // call this function to sign out logged in user
    const logout = () => {
        setAuthUser(null);
        if (typeof window !== "undefined") {
            window.location.assign("/login");
        }
    };

    const updateAuthUser = (updatedUser: any) => {
        setAuthUser(updatedUser);
    };

    const value = useMemo(
        () => ({
            authUser,
            login,
            logout,
            updateAuthUser,
        }),
        [authUser]
    );
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
