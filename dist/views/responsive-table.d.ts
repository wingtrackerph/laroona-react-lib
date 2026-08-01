import { default as React } from 'react';
interface ResponsiveTableColumn {
    title: string;
    dataIndex?: string;
    key: string;
    render?: (value: any, record: any, index: number) => React.ReactNode;
    align?: "left" | "right" | "center";
    width?: number | string;
    hideOnMobile?: boolean;
}
interface ResponsiveTableProps {
    columns: ResponsiveTableColumn[];
    dataSource: any[];
    rowKey?: string | ((record: any) => string);
    pagination?: any;
    loading?: boolean;
    scroll?: {
        x?: number | string;
        y?: number | string;
    };
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
declare const ResponsiveTable: React.FC<ResponsiveTableProps>;
export default ResponsiveTable;
//# sourceMappingURL=responsive-table.d.ts.map