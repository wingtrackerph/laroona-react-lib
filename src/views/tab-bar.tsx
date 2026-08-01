import { useIsMobile } from "../hooks/use-is-mobile";
import { Flex, Radio } from "antd";
import React from "react";

interface Properties {
    options?: any[];
    onChange?: (index: number) => void;
}
const TabBar = (properties: Properties) => {
    const isMobile = useIsMobile();
    const options =
        properties.options &&
        properties.options.map((option, index) => ({
            value: index,
            label: option["name"],
        }));

    return (
        <Flex
            justify="center"
            style={{ width: "100%", padding: isMobile ? "0 12px" : "0" }}
        >
            <Radio.Group
                block
                defaultValue={0}
                options={options}
                optionType="button"
                buttonStyle="solid"
                className={isMobile ? "mobile-tab-bar" : ""}
                style={{
                    width: isMobile
                        ? "100%"
                        : properties.options
                          ? Math.min(properties.options.length * 160, 800)
                          : "auto",
                    display: "flex",
                    flexWrap: isMobile ? "wrap" : "nowrap",
                }}
                onChange={(event) => {
                    if (properties.onChange) {
                        properties.onChange(event.target.value);
                    }
                }}
            />
            <style>{`
                .mobile-tab-bar .ant-radio-button-wrapper {
                    height: auto !important;
                    min-height: 32px !important;
                    line-height: 1.4 !important;
                    padding: 6px 12px !important;
                    white-space: normal !important;
                    text-align: center !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                .mobile-tab-bar .ant-radio-button-wrapper span {
                    display: inline-block !important;
                }
            `}</style>
        </Flex>
    );
};

export default TabBar;
