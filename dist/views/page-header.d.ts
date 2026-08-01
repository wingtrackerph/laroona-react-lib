import { default as React } from 'react';
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
declare const PageHeader: (properties: Properties) => React.JSX.Element;
export default PageHeader;
//# sourceMappingURL=page-header.d.ts.map