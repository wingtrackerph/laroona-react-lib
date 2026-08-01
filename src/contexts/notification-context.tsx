import React from "react";

const NotificationContext = React.createContext<any>({});

export const useNotificationContext = () => {
    return React.useContext(NotificationContext);
};

export const NotificationProvider: React.FC<any> = ({ children }) => {
    const [notificationData, setNotificationData] = React.useState<any>({});

    return (
        <NotificationContext.Provider
            value={{
                notificationData,
                setNotificationData,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
