import React from "react";
import { Button, Flex, Input, Tooltip } from "antd";
import {
    ArrowLeftOutlined,
    PlusOutlined,
    DownloadOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

interface Properties {
    title: string;
    hasActionAdd?: boolean;
    hasActionBack?: boolean;
    hasSearchBar?: boolean;
    hasDownloadButton?: boolean;
    hasSecondaryDownloadButton?: boolean;
    downloadText?: string;
    secondaryDownloadText?: string;
    isDownloading?: boolean;
    isSecondaryDownloading?: boolean;
    onAddClick?: () => void;
    onBackClick?: () => void;
    onSearch?: (value: string) => void;
    onDownloadClick?: () => void;
    onSecondaryDownloadClick?: () => void;
}
const PageHeader = (properties: Properties) => {
    const { Search } = Input;

    return (
        <Flex align="center" wrap="wrap" gap={12}>
            {properties.hasActionBack && (
                <Tooltip title="Back">
                    <Button
                        type="link"
                        shape="circle"
                        ghost
                        size="large"
                        icon={<ArrowLeftOutlined />}
                        onClick={properties.onBackClick}
                        style={{ color: "#000" }}
                    />
                </Tooltip>
            )}
            <Title
                level={3}
                style={{
                    marginRight: 10,
                    marginBottom: 0,
                    fontSize: "clamp(18px, 4vw, 24px)",
                }}
            >
                {properties.title}
            </Title>
            {properties.hasActionAdd && (
                <Tooltip title="Add">
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={properties.onAddClick}
                    />
                </Tooltip>
            )}
            {properties.hasSearchBar && (
                <Flex
                    justify="flex-end"
                    align="center"
                    gap={12}
                    wrap="wrap"
                    style={{ flexGrow: 1, minWidth: "min-content" }}
                >
                    {properties.hasDownloadButton && (
                        <Button
                            type="primary"
                            size="large"
                            style={{ minWidth: 140, maxWidth: 200 }}
                            onClick={properties.onDownloadClick}
                            loading={properties.isDownloading}
                            icon={<DownloadOutlined />}
                        >
                            {properties.isDownloading
                                ? "Downloading..."
                                : properties.downloadText || "Download"}
                        </Button>
                    )}
                    {properties.hasSecondaryDownloadButton && (
                        <Button
                            type="primary"
                            size="large"
                            style={{ minWidth: 140, maxWidth: 200 }}
                            onClick={properties.onSecondaryDownloadClick}
                            loading={properties.isSecondaryDownloading}
                            icon={<DownloadOutlined />}
                        >
                            {properties.isSecondaryDownloading
                                ? "Downloading..."
                                : properties.secondaryDownloadText ||
                                  "Download"}
                        </Button>
                    )}
                    <Search
                        placeholder="Search"
                        onSearch={(value) => {
                            if (properties.onSearch) {
                                properties.onSearch(value);
                            }
                        }}
                        style={{
                            width: 200,
                            marginLeft: 48,
                        }}
                    />
                </Flex>
            )}
        </Flex>
    );
};

export default PageHeader;
