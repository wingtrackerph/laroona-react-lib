import React from "react";
import { Button, Form, Modal } from "antd";

interface Properties {
    id: string;
    title?: string;
    body: any;
    isSaving: boolean;
    saveText?: string;
    cancelText?: string;
    isSaveButtonHidden?: boolean;
    isSaveButtonDisabled?: boolean;
    isOpen?: boolean;
    isSubModal?: boolean;
    width?: number;
    onCancelClick?: () => void;
    onSaveClick?: () => void;
}

const AppModal = (properties: Properties) => {
    return (
        <Modal
            title={properties.title ? properties.title : ""}
            width={properties.width}
            open={properties.isOpen}
            maskClosable={false}
            zIndex={properties.isSubModal ? 1010 : 1000}
            okText={properties.saveText ? properties.saveText : "Save"}
            cancelText={
                properties.cancelText ? properties.cancelText : "Cancel"
            }
            onOk={() => {
                properties.onSaveClick && properties.onSaveClick();
            }}
            confirmLoading={properties.isSaving}
            okButtonProps={{ disabled: properties.isSaveButtonDisabled }}
            onCancel={() => {
                properties.onCancelClick && properties.onCancelClick();
            }}
            footer={
                properties.isSaveButtonHidden ? (
                    <Button
                        type="primary"
                        onClick={() => {
                            properties.onCancelClick &&
                                properties.onCancelClick();
                        }}
                    >
                        {properties.cancelText
                            ? properties.cancelText
                            : "Cancel"}
                    </Button>
                ) : undefined
            }
        >
            <Form layout="vertical" autoComplete="off">
                {properties.body}
            </Form>
        </Modal>
    );
};

export default AppModal;
