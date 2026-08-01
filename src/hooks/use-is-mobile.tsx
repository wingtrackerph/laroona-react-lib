import React from "react";

/**
 * Custom hook to detect if the current viewport is mobile-sized (< 768px)
 * @returns {boolean} true if viewport width is less than 768px
 */
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};
