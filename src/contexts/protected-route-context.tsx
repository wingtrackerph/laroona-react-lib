import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

export const ProtectedRoute: React.FC<any> = (properties) => {
    const { authUser } = useAuthContext();
    if (!authUser) {
        // user is not authenticated
        return <Navigate to="/" />;
    }

    if (
        properties.authorizedRole != undefined &&
        properties.authorizedRole != authUser.role_id
    ) {
        return <Navigate to="/not-authorized" />;
    }

    if (properties.authorizedRoles != undefined) {
        let isAuthorized = false;
        properties.authorizedRoles.forEach((authorizedRole: any) => {
            if (authorizedRole == authUser.role_id) {
                isAuthorized = true;
                return true;
            }
        });
        if (!isAuthorized) {
            return <Navigate to="/not-authorized" />;
        }
    }

    return properties.children;
};
