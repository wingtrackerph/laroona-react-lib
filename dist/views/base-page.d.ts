import { default as React } from 'react';
import { MenuProps } from 'antd';
export type BasePageMenuItem = Required<MenuProps>["items"][number];
interface BasePageProperties {
    content?: React.ReactNode;
    children?: React.ReactNode;
    menuItems?: BasePageMenuItem[];
    onLogout?: () => void;
    accountLabel?: string;
    appTitle?: string;
    appSubtitle?: string;
    disableDefaultAccountMenu?: boolean;
}
declare const BasePage: (properties: BasePageProperties) => React.JSX.Element;
export default BasePage;
//# sourceMappingURL=base-page.d.ts.map