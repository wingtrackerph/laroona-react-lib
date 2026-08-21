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
    /**
     * Show a time input on a 12-hour clock ("8:00 AM") instead of the 24-hour
     * default. DISPLAY ONLY: the value handed back is always "HH:mm:ss", so an
     * API contract never changes because a screen changed how it reads.
     */
    use12Hours?: boolean;
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