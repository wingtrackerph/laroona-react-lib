import { default as React } from 'react';
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
declare const AppTable: (properties: Properties) => React.JSX.Element;
export default AppTable;
//# sourceMappingURL=app-table.d.ts.map