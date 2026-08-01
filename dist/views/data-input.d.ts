import { default as React } from 'react';
interface Properties {
    requestKey: string;
    type: string;
    title?: string;
    dataKey: string;
    options?: any[];
    optionsKey?: string;
    placeholder?: string;
    disabled?: boolean;
    horizontalStyle?: boolean;
    wrapContent?: boolean;
    isInitialValueDisabled?: boolean;
    disablePastDates?: boolean;
    hidden?: boolean;
    minValue?: any;
    maxValue?: any;
    step?: any;
    style?: any;
    maxLength?: number;
    description?: string;
    inputWidth?: string;
    errorKey?: string;
    allCaps?: boolean;
    capitalize?: boolean;
    capitalizeFirst?: boolean;
    showPasswordToggle?: boolean;
    onSetValue?: (value: any) => void;
    onEnterKeyPress?: () => void;
}
declare const DataInput: (properties: Properties) => React.JSX.Element;
export default DataInput;
//# sourceMappingURL=data-input.d.ts.map