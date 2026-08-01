import React from "react";
import { useRequestContext } from "./request-context";

const ModalContext = React.createContext<any>({});

export const useModalContext = () => {
    return React.useContext(ModalContext);
};

export const ModalProvider: React.FC<any> = ({ children }) => {
    const { clearPostRequest } = useRequestContext();
    const [openedModal, setOpenedModal] = React.useState<string[]>([]);

    const isModalOpen = (modalId: string) => {
        return openedModal.indexOf(modalId) > -1;
    };

    const openModal = (modalId: string) => {
        if (isModalOpen(modalId)) {
            return;
        }
        openedModal.push(modalId);
        setOpenedModal(Object.assign([], openedModal));
    };

    const closeModal = (modalId: string) => {
        if (!isModalOpen(modalId)) {
            return;
        }

        clearPostRequest(modalId);
        openedModal.splice(openedModal.indexOf(modalId), 1);
        setOpenedModal(Object.assign([], openedModal));
    };

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
