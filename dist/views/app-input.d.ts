import { default as React } from 'react';
interface Properties {
    ref?: string;
    type: string;
    name?: string;
    title?: string;
    value?: any;
    minValue?: any;
    maxValue?: any;
    step?: any;
    options?: any[];
    optionsKey?: string;
    disabledValues?: any[];
    errorMessage?: string;
    placeholder?: string;
    disabled?: boolean;
    horizontalStyle?: boolean;
    wrapContent?: boolean;
    disablePastDates?: boolean;
    hidden?: boolean;
    style?: any;
    maxLength?: number;
    description?: string;
    inputWidth?: string;
    allCaps?: boolean;
    capitalize?: boolean;
    capitalizeFirst?: boolean;
    showPasswordToggle?: boolean;
    onChange: (value: string | boolean) => void;
    onEnterKeyPress?: () => void;
}
declare const AppInput: React.ForwardRefExoticComponent<Omit<Properties, "ref"> & React.RefAttributes<any>>;
export default AppInput;
//# sourceMappingURL=app-input.d.ts.map