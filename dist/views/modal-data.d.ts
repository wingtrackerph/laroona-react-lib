import { default as React } from 'react';
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
declare const ModalData: (properties: Properties) => React.JSX.Element;
export default ModalData;
//# sourceMappingURL=modal-data.d.ts.map