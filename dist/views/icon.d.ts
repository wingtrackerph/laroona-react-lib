import { default as React } from 'react';
export declare enum IconColor {
    Dark = "currentColor",
    Default = "#ffffff",
    Green = "#00FF00"
}
export declare enum IconSize {
    XSmall = 16,
    Small = 18,
    Default = 24
}
interface Properties {
    size?: IconSize;
    color?: IconColor;
    path: any;
    isSemiTransparent?: boolean;
}
declare const Icon: (properties: Properties) => React.JSX.Element;
export default Icon;
//# sourceMappingURL=icon.d.ts.map