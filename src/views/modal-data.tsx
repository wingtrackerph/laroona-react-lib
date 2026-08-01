import React from "react";
import AppModal from "./app-modal";
import { useRequestContext, useModalContext } from "@wingtrackerph/laroona-react-lib";

interface Properties {
    id: string;
    title?: string;
    titleLabel?: string;
    body: any;
    saveText?: string;
    cancelText?: string;
    isSaveButtonHidden?: boolean;
    isSaveButtonDisabled?: boolean;
    savePath: string;
    tableRequestKey?: string;
    isSubModal?: boolean;
    dontCloseAfterSave?: boolean;
    showToastAfterSave?: boolean;
    width?: number;
    onSaveClick?: () => void;
    onPreSaveClick?: () => void;
    onDataSaved?: (responseData: any, savedData: any) => void;
    onCancelClick?: () => void;
}

const ModalData = (properties: Properties) => {
    const {
        fetchRequest,
        getRequest,
        getPostRequest,
        submitPostRequest,
        isForCreation,
    } = useRequestContext();

    const { closeModal, isModalOpen } = useModalContext();

    const onSaveClick = () => {
        if (properties.onSaveClick) {
            properties.onSaveClick();
            return;
        }

        if (properties.onPreSaveClick) {
            properties.onPreSaveClick();
        }

        onSave();
    };

    const onSave = () => {
        const callback = (responseData: any, savedData: any) => {
            let tableRequestKey = properties.tableRequestKey;
            if (!tableRequestKey) {
                tableRequestKey = properties.savePath.split("?")[0];
            }
            fetchRequest(getRequest(tableRequestKey));

            if (!properties.dontCloseAfterSave) {
                closeModal(properties.id);
            }

            if (properties.onDataSaved) {
                properties.onDataSaved(responseData, savedData);
            }
        };

        submitPostRequest({
            key: properties.id,
            path: properties.savePath,
            showToast: properties.showToastAfterSave,
            onSuccess: (responseData: any, savedData: any) => {
                callback && callback(responseData, savedData);
            },
            onError: (errors: any) => {
                if (errors && errors instanceof Object) {
                    const errorFields = Object.keys(errors);
                    for (let i = 0; i < errorFields.length; i++) {
                        const key = errorFields[i];
                        const inputRef = getPostRequest(properties.id)
                            .inputRefs[key];
                        if (inputRef && inputRef.current) {
                            let node = inputRef.current;
                            if (node && node.input) node = node.input; // For AntD Input
                            if (node && node.scrollIntoView) {
                                node.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                });
                            } else if (node && node.focus) {
                                node.focus();
                            }
                            break; // Stop after the first found input ref
                        }
                    }
                }
            },
        });
    };

    return (
        <AppModal
            id={properties.id}
            title={
                properties.title
                    ? properties.title
                    : properties.titleLabel &&
                      (isForCreation(properties.id)
                          ? "Add " + properties.titleLabel
                          : "Edit " + properties.titleLabel)
            }
            isOpen={isModalOpen(properties.id)}
            isSaving={getPostRequest(properties.id).isLoading}
            isSubModal={properties.isSubModal}
            onCancelClick={() => {
                if (properties.onCancelClick) {
                    properties.onCancelClick();
                }
                closeModal(properties.id);
            }}
            saveText={properties.saveText}
            cancelText={properties.cancelText}
            isSaveButtonHidden={properties.isSaveButtonHidden}
            isSaveButtonDisabled={properties.isSaveButtonDisabled}
            onSaveClick={onSaveClick}
            body={properties.body}
            width={properties.width}
        />
    );
};

export default ModalData;
