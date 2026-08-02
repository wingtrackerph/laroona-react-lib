import React from "react";
import { useRequestContext } from "../contexts/request-context";
import {
    Button,
    Card,
    Col,
    Pagination,
    Row,
    Space,
    Spin,
    Table,
    Tooltip,
    Typography,
    theme,
} from "antd";
import { DeleteOutlined, EditOutlined, RightOutlined } from "@ant-design/icons";
import {
    formatDate,
    formatDateTime,
    formatDecimal,
    formatIsoDate,
    formatIsoDateTime,
    formatIsoDateTimeMilli,
    formatNumber,
} from "../helpers/format-helpers";
import { TablePaginationConfig } from "antd/es/table";
import { useIsMobile } from "../hooks/use-is-mobile";

interface Properties {
    headers: string[];
    columns: string[];
    data?: any[];
    requestKey: string;
    pageSize?: number;
    customActionIcon?: any;
    customActionTooltip?: string;
    marginTop?: number;
    headerHeight?: number;
    onRenderRowColor?: (item: any) => string;
    onRowEditClick?: (item: any) => void;
    onRowClick?: (item: any) => void;
    onRowCustomClick?: (item: any) => void;
    onRowDeleteClick?: (item: any) => void;
}
const AppTable = (properties: Properties) => {
    const [pagination, setPagination] = React.useState<TablePaginationConfig>({
        pageSize: properties.pageSize || 10,
        current: 1,
        total: 0,
    });

    const { Text } = Typography;
    const isMobile = useIsMobile();
    const {
        token: { colorPrimary },
    } = theme.useToken();

    const { getRequest, fetchRequest } = useRequestContext();

    const request = getRequest(properties.requestKey);
    const isPaginated = request.isPaginated;
    const data = properties.data;
    const fromOffset = request.from - 1;

    pagination["total"] = request.total;
    pagination["current"] = request.currentPage;
    pagination["pageSize"] = request.pageSize;

    if (request.isLoading) {
        return (
            <Spin tip="Loading" size="large">
                <div
                    style={{
                        padding: 50,
                        background: "rgba(0, 0, 0, 0.05)",
                        borderRadius: 4,
                        marginTop: 100,
                    }}
                />
            </Spin>
        );
    }

    const renderActionColumn = (item: any, key: string) => {
        return (
            <Space>
                {key.includes("column-action-edit") && (
                    <Tooltip placement="top" title="Edit">
                        <Button
                            type="link"
                            shape="circle"
                            icon={<EditOutlined />}
                            onClick={() => {
                                properties.onRowEditClick &&
                                    properties.onRowEditClick(item);
                            }}
                        />
                    </Tooltip>
                )}
                {key.includes("column-action-custom") && (
                    <Tooltip
                        placement="top"
                        title={properties.customActionTooltip}
                    >
                        <Button
                            type="link"
                            shape="circle"
                            icon={properties.customActionIcon}
                            onClick={() => {
                                properties.onRowCustomClick &&
                                    properties.onRowCustomClick(item);
                            }}
                        />
                    </Tooltip>
                )}
                {key.includes("column-action-delete") && (
                    <Tooltip placement="top" title="Delete">
                        <Button
                            type="link"
                            shape="circle"
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => {
                                properties.onRowDeleteClick &&
                                    properties.onRowDeleteClick(item);
                            }}
                        />
                    </Tooltip>
                )}
                {key.includes("column-action-click") && (
                    <Tooltip placement="top" title="View">
                        <Button
                            type="link"
                            shape="circle"
                            icon={<RightOutlined />}
                            style={{ color: "#000" }}
                            onClick={() => {
                                properties.onRowClick &&
                                    properties.onRowClick(item);
                            }}
                        />
                    </Tooltip>
                )}
            </Space>
        );
    };

    const renderColumn = (item: any, key: any, index: number) => {
        let value = "";
        let isCenter = false;

        if (typeof key !== "string") {
            value = key(item) as string;
            if (typeof value === "string") {
                if (value.startsWith("column-action-")) {
                    return renderActionColumn(item, value);
                }
            }
        } else {
            if (key.endsWith("-center")) {
                key = key.replace("-center", "");
                isCenter = true;
            }

            if (key.startsWith("column-action-")) {
                return renderActionColumn(item, key);
            }

            if (key.includes(".") && key.includes("list-first")) {
                const keySplitted = key.split(".");
                if (keySplitted.length == 3) {
                    const data = item[keySplitted[0]];
                    if (data && data.length != 0) {
                        value = data[0][keySplitted[2]];
                    }
                }
            } else if (key.includes(".") && key.includes("join")) {
                const keySplitted = key.split(".");
                if (keySplitted.length == 3) {
                    const data = item[keySplitted[0]];
                    if (data && data.length != 0) {
                        const dataKey = keySplitted[2];
                        const values = Array();
                        data.map((item: any) => {
                            values.push(item[dataKey]);
                        });
                        value = values.join(", ");
                    }
                }
            } else if (key.includes(".") && key.includes("datetime")) {
                const keySplitted = key.split(".");
                if (keySplitted.length == 2) {
                    const data = item[keySplitted[0]];
                    if (data && data.length != 0) {
                        value = key.endsWith("iso")
                            ? formatIsoDateTime(data)
                            : key.endsWith("isomilli")
                              ? formatIsoDateTimeMilli(data)
                              : formatDateTime(data);
                    }
                }
            } else if (key.includes(".") && key.includes("date")) {
                const keySplitted = key.split(".");
                if (keySplitted.length == 2) {
                    const data = item[keySplitted[0]];
                    if (data && data.length != 0) {
                        value = key.endsWith("iso")
                            ? formatIsoDate(data)
                            : formatDate(data);
                    }
                }
            } else if (key.includes(".") && key.includes("decimal")) {
                const keySplitted = key.split(".");
                if (keySplitted.length == 2) {
                    const data = item[keySplitted[0]];
                    const decimalPlace = keySplitted[1].replace("decimal", "");
                    value = formatDecimal(
                        data,
                        decimalPlace ? decimalPlace : 6,
                    );
                }
            } else if (key.includes(".") && key.includes("number")) {
                const keySplitted = key.split(".");
                if (keySplitted.length == 2) {
                    const data = item[keySplitted[0]];
                    value = formatNumber(data);
                }
            } else if (key.includes(".")) {
                const keySplitted = key.split(".");
                if (keySplitted.length == 2) {
                    value = item[keySplitted[0]][keySplitted[1]];
                }
            } else if (key === "i") {
                if ("index" in item) {
                    value = item["index"] + 1;
                } else {
                    value = (index + 1 + fromOffset).toString();
                }
            } else {
                value = item[key];
            }

            if (value === null || value === "" || value === undefined) {
                value = "-";
            }
        }

        return (
            <Text
                style={{
                    display: "block",
                    textAlign: isMobile
                        ? "right"
                        : isCenter
                          ? "center"
                          : "left",
                }}
            >
                {value}
            </Text>
        );
    };

    const onPaginationChanged = (pagination: any) => {
        const request = getRequest(properties.requestKey);
        request.pageSize = pagination["pageSize"];
        request.currentPage = pagination["current"];
        fetchRequest(request);
    };

    const renderMobileCard = (item: any, index: number) => {
        const cardData: any[] = [];
        const actions: any[] = [];

        properties.columns.forEach((column, colIndex) => {
            const header = properties.headers[colIndex];
            let key = column;

            if (typeof key === "string" && key.includes("column-action-")) {
                // Collect action buttons
                if (
                    key.includes("column-action-edit") &&
                    properties.onRowEditClick
                ) {
                    actions.push(
                        <Button
                            key="edit"
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={() => properties.onRowEditClick!(item)}
                        >
                            Edit
                        </Button>,
                    );
                }
                if (
                    key.includes("column-action-custom") &&
                    properties.onRowCustomClick
                ) {
                    actions.push(
                        <Button
                            key="custom"
                            icon={properties.customActionIcon}
                            onClick={() => properties.onRowCustomClick!(item)}
                        >
                            {properties.customActionTooltip}
                        </Button>,
                    );
                }
                if (
                    key.includes("column-action-delete") &&
                    properties.onRowDeleteClick
                ) {
                    actions.push(
                        <Button
                            key="delete"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => properties.onRowDeleteClick!(item)}
                        >
                            Delete
                        </Button>,
                    );
                }
                if (
                    key.includes("column-action-click") &&
                    properties.onRowClick
                ) {
                    actions.push(
                        <Button
                            key="view"
                            icon={<RightOutlined />}
                            onClick={() => properties.onRowClick!(item)}
                        >
                            View
                        </Button>,
                    );
                }
            } else {
                // Regular data fields
                const value = renderColumn(item, column, index);
                cardData.push({ label: header, value });
            }
        });

        return (
            <Card
                key={item.id || index}
                style={{
                    marginBottom: 12,
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
            >
                {cardData.map((field, idx) => (
                    <Row key={idx} style={{ marginBottom: 8 }}>
                        <Col span={10}>
                            <Text strong style={{ color: colorPrimary }}>
                                {field.label}:
                            </Text>
                        </Col>
                        <Col span={14}>{field.value}</Col>
                    </Row>
                ))}
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

    const columns: any[] = [];
    if (properties.headers) {
        properties.headers.forEach((header, index) => {
            const column = properties.columns[index];
            let key = column;
            if (typeof key !== "string") {
                key = header;
            }

            columns.push({
                title: (
                    <Text
                        style={{
                            display: "block",
                            textAlign: "center",
                            color: "#fff",
                            fontWeight: 600,
                        }}
                    >
                        {header}
                    </Text>
                ),
                dataIndex: key,
                key: key,
                align: "center",
                render: (value: any, item: any, index: number) => (
                    <>{renderColumn(item, column, index)}</>
                ),
            });
        });
    }

    if (isMobile) {
        return (
            <div style={{ marginTop: properties.marginTop || 10 }}>
                {data &&
                    data.map((item, index) => renderMobileCard(item, index))}
                {isPaginated && (
                    <div style={{ textAlign: "center", marginTop: 16 }}>
                        <Pagination
                            current={pagination.current}
                            pageSize={pagination.pageSize}
                            total={pagination.total}
                            onChange={(page, pageSize) => {
                                const newPagination = {
                                    ...pagination,
                                    current: page,
                                    pageSize,
                                };
                                setPagination(newPagination);
                                onPaginationChanged(newPagination);
                            }}
                            showSizeChanger={false}
                            showTotal={(total, range) =>
                                `${range[0]}-${range[1]} of ${total} items`
                            }
                        />
                    </div>
                )}
            </div>
        );
    }

    return (
        <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={
                isPaginated
                    ? {
                          ...pagination,
                          showTotal: (total, range) =>
                              `${range[0]}-${range[1]} of ${total} items`,
                      }
                    : false
            }
            scroll={{ y: `calc(100vh - ${properties.headerHeight || 340}px)` }}
            style={{
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(82, 196, 26, 0.08)",
                border: "1px solid rgba(82, 196, 26, 0.06)",
                marginTop: properties.marginTop || 10,
            }}
            className="custom-table-header"
            rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
            }
            components={{
                header: {
                    row: (props: any) => (
                        <tr
                            {...props}
                            style={{
                                background: colorPrimary,
                                borderRadius: "8px 8px 0 0",
                                padding: "12px 16px",
                            }}
                        />
                    ),
                    cell: (props: any) => (
                        <th
                            {...props}
                            style={{
                                background: colorPrimary,
                                borderBottom:
                                    "1px solid rgba(255, 255, 255, 0.2)",
                                padding: "12px 16px",
                                color: "#fff",
                                fontWeight: 600,
                            }}
                        />
                    ),
                },
            }}
            onChange={(pagination) => {
                setPagination(pagination);
                onPaginationChanged(pagination);
            }}
        />
    );
};
export default AppTable;
