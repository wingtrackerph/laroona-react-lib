import React from "react";

export enum IconColor {
    Dark = "currentColor",
    Default = "#ffffff",
    Green = "#00FF00",
}

export enum IconSize {
    XSmall = 16,
    Small = 18,
    Default = 24,
}

interface Properties {
    size?: IconSize;
    color?: IconColor;
    path: any;
    isSemiTransparent?: boolean;
}
const Icon = (properties: Properties) => {
    const size = properties.size ? properties.size : IconSize.Default;
    const color = properties.color ? properties.color : IconColor.Default;
    const viewBox = "0 0 24 24";
    const opacity = properties.isSemiTransparent ? "opacity-70" : "";
    return (
        <svg
            className={opacity}
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
        >
            {properties.path}
        </svg>
    );
};

export default Icon;
