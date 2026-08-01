import React from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../helpers/local-storage";

const AuthContext = createContext<any>({});

export const AuthProvider: React.FC<any> = ({ children }) => {
    const [authUser, setAuthUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (loggedUser: any) => {
        setAuthUser(loggedUser);
    };

    // call this function to sign out logged in user
    const logout = () => {
        setAuthUser(null);
        navigate("/login");
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
