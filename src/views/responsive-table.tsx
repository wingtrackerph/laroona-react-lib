import React from "react";
import {
    Table,
    Card,
    Row,
    Col,
    Space,
    Typography,
    Button,
    Tooltip,
} from "antd";
import { DeleteOutlined, EditOutlined, RightOutlined } from "@ant-design/icons";
import { useIsMobile } from "../hooks/use-is-mobile";

const { Text } = Typography;

interface ResponsiveTableColumn {
    title: string;
    dataIndex?: string;
    key: string;
    render?: (value: any, record: any, index: number) => React.ReactNode;
    align?: "left" | "right" | "center";
    width?: number | string;
    hideOnMobile?: boolean; // Option to hide certain columns on mobile cards
}

interface ResponsiveTableProps {
    columns: ResponsiveTableColumn[];
    dataSource: any[];
    rowKey?: string | ((record: any) => string);
    pagination?: any;
    loading?: boolean;
    scroll?: { x?: number | string; y?: number | string };
    size?: "small" | "middle" | "large";
    bordered?: boolean;
    onChange?: (pagination: any, filters: any, sorter: any) => void;
    onRowEdit?: (record: any) => void;
    onRowDelete?: (record: any) => void;
    onRowClick?: (record: any) => void;
    customActionIcon?: React.ReactNode;
    customActionTooltip?: string;
    onRowCustomClick?: (record: any) => void;
    mobileCardStyle?: React.CSSProperties;
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
    columns,
    dataSource,
    rowKey = "id",
    pagination = false,
    loading = false,
    scroll,
    size = "small",
    bordered = false,
    onChange,
    onRowEdit,
    onRowDelete,
    onRowClick,
    customActionIcon,
    customActionTooltip,
    onRowCustomClick,
    mobileCardStyle,
}) => {
    const isMobile = useIsMobile();

    const renderActionButtons = (record: any) => {
        const actions: React.ReactNode[] = [];

        if (onRowEdit) {
            actions.push(
                <Button
                    key="edit"
                    type={isMobile ? "primary" : "link"}
                    icon={<EditOutlined />}
                    onClick={() => onRowEdit(record)}
                    {...(isMobile ? {} : { shape: "circle" })}
                >
                    {isMobile ? "Edit" : ""}
                </Button>,
            );
        }

        if (onRowCustomClick) {
            actions.push(
                <Button
                    key="custom"
                    type={isMobile ? "default" : "link"}
                    icon={customActionIcon}
                    onClick={() => onRowCustomClick(record)}
                    {...(isMobile ? {} : { shape: "circle" })}
                >
                    {isMobile ? customActionTooltip : ""}
                </Button>,
            );
        }

        if (onRowDelete) {
            actions.push(
                <Button
                    key="delete"
                    danger
                    type={isMobile ? "default" : "link"}
                    icon={<DeleteOutlined />}
                    onClick={() => onRowDelete(record)}
                    {...(isMobile ? {} : { shape: "circle" })}
                >
                    {isMobile ? "Delete" : ""}
                </Button>,
            );
        }

        if (onRowClick) {
            actions.push(
                <Button
                    key="view"
                    type={isMobile ? "default" : "link"}
                    icon={<RightOutlined />}
                    onClick={() => onRowClick(record)}
                    {...(isMobile
                        ? {}
                        : { shape: "circle", style: { color: "#000" } })}
                >
                    {isMobile ? "View" : ""}
                </Button>,
            );
        }

        return actions;
    };

    // Add action column if any action handlers are provided
    const tableColumns = [...columns];
    const hasActions =
        onRowEdit || onRowDelete || onRowClick || onRowCustomClick;

    if (hasActions && !isMobile) {
        tableColumns.push({
            title: "Actions",
            key: "actions",
            align: "center" as const,
            render: (_: any, record: any) => (
                <Space>
                    {onRowEdit && (
                        <Tooltip title="Edit">
                            <Button
                                type="link"
                                shape="circle"
                                icon={<EditOutlined />}
                                onClick={() => onRowEdit(record)}
                            />
                        </Tooltip>
                    )}
                    {onRowCustomClick && (
                        <Tooltip title={customActionTooltip}>
                            <Button
                                type="link"
                                shape="circle"
                                icon={customActionIcon}
                                onClick={() => onRowCustomClick(record)}
                            />
                        </Tooltip>
                    )}
                    {onRowDelete && (
                        <Tooltip title="Delete">
                            <Button
                                type="link"
                                shape="circle"
                                icon={<DeleteOutlined />}
                                danger
                                onClick={() => onRowDelete(record)}
                            />
                        </Tooltip>
                    )}
                    {onRowClick && (
                        <Tooltip title="View">
                            <Button
                                type="link"
                                shape="circle"
                                icon={<RightOutlined />}
                                style={{ color: "#000" }}
                                onClick={() => onRowClick(record)}
                            />
                        </Tooltip>
                    )}
                </Space>
            ),
        });
    }

    const renderMobileCard = (record: any, index: number) => {
        const actions = renderActionButtons(record);

        return (
            <Card
                key={
                    typeof rowKey === "function"
                        ? rowKey(record)
                        : record[rowKey]
                }
                style={{
                    marginBottom: 12,
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    ...mobileCardStyle,
                }}
            >
                {columns
                    .filter((col) => !col.hideOnMobile && col.dataIndex)
                    .map((column, idx) => {
                        const value = record[column.dataIndex!];
                        const displayValue = column.render
                            ? column.render(value, record, index)
                            : (value ?? "-");

                        return (
                            <Row key={idx} style={{ marginBottom: 8 }}>
                                <Col span={10}>
                                    <Text strong style={{ color: "#1885FE" }}>
                                        {column.title}:
                                    </Text>
                                </Col>
                                <Col span={14}>
                                    {typeof displayValue === "string" ||
                                    typeof displayValue === "number" ? (
                                        <Text>{displayValue}</Text>
                                    ) : (
                                        displayValue
                                    )}
                                </Col>
                            </Row>
                        );
                    })}
                {actions.length > 0 && (
                    <Row
                        style={{
                            marginTop: 12,
                            paddingTop: 12,
                            borderTop: "1px solid #f0f0f0",
                        }}
                    >
                        <Col span={24}>
                            <Space wrap>{actions}</Space>
                        </Col>
                    </Row>
                )}
            </Card>
        );
    };

    if (isMobile) {
        return (
            <div
                style={{
                    maxHeight: scroll?.y || "400px",
                    overflowY: "auto",
                }}
            >
                {loading ? (
                    <div style={{ textAlign: "center", padding: 20 }}>
                        <Text>Loading...</Text>
                    </div>
                ) : dataSource.length === 0 ? (
                    <div style={{ textAlign: "center", padding: 20 }}>
                        <Text type="secondary">No data available</Text>
                    </div>
                ) : (
                    dataSource.map((record, index) =>
                        renderMobileCard(record, index),
                    )
                )}
            </div>
        );
    }

    return (
        <Table
            columns={tableColumns}
            dataSource={dataSource}
            rowKey={rowKey}
            pagination={pagination}
            loading={loading}
            scroll={scroll}
            size={size}
            bordered={bordered}
            onChange={onChange}
        />
    );
};

export default ResponsiveTable;
