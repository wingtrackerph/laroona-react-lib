import { default as React } from 'react';
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
declare const AppModal: (properties: Properties) => React.JSX.Element;
export default AppModal;
//# sourceMappingURL=app-modal.d.ts.map