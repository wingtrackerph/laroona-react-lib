import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/auth-context";
import { useNotificationContext } from "../contexts/notification-context";
import { useRequestContext } from "../contexts/request-context";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Button,
    Layout,
    Menu,
    MenuProps,
    notification,
    theme,
    Typography,
} from "antd";
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    QrcodeOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useIsMobile } from "../hooks/use-is-mobile";

export type BasePageMenuItem = Required<MenuProps>["items"][number];

interface BasePageProperties {
    content?: React.ReactNode;
    children?: React.ReactNode;
    menuItems?: BasePageMenuItem[];
    onLogout?: () => void;
    accountLabel?: string;
    appTitleLogo?: React.ReactNode;
    appTitle?: string;
    appSubtitle?: string;
    disableDefaultAccountMenu?: boolean;
    siderBackground?: string;
    siderHeaderBackground?: string;
    isSiderLight?: boolean;
}

const BasePage = (properties: BasePageProperties) => {
    const isMobile = useIsMobile();
    const [api, contextHolder] = notification.useNotification();
    const [collapsed, setCollapsed] = useState(() => {
        if (typeof window === "undefined") {
            return false;
        }
        return window.innerWidth < 992;
    });
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();
    const { authUser, logout } = useAuthContext();
    const { submitPostRequest, clearRequests } = useRequestContext();
    const { notificationData } = useNotificationContext();

    const location = useLocation();

    function getMenuItem(
        key: React.Key,
        label: React.ReactNode,
        icon?: React.ReactNode,
        children?: BasePageMenuItem[],
        onClick?: () => void,
    ): BasePageMenuItem {
        return {
            key,
            icon,
            children,
            label,
            style: properties.isSiderLight ? { color: "#000" } : {},
            onClick,
        } as BasePageMenuItem;
    }

    const handleLogout = () => {
        if (properties.onLogout) {
            properties.onLogout();
            return;
        }

        submitPostRequest({
            key: "logout",
            path: "logout",
            showToast: false,
            onSuccess: () => {
                clearRequests();
                logout();
            },
        });
    };

    const resolvedMenuItems = React.useMemo(() => {
        return Object.assign([], properties.menuItems ?? []);
    }, [properties.menuItems]);

    const menuItems = React.useMemo(() => {
        const items = Object.assign([], resolvedMenuItems);

        if (!properties.disableDefaultAccountMenu) {
            items.push({
                type: "divider",
                style: { margin: 20, backgroundColor: "#3a3b3c" },
            });

            items.push(
                getMenuItem(
                    "account-group",
                    properties.accountLabel ?? authUser?.full_name ?? "Account",
                    <UserOutlined />,
                    [
                        getMenuItem(
                            "logout",
                            "Logout",
                            <LogoutOutlined />,
                            undefined,
                            () => handleLogout(),
                        ),
                    ],
                ),
            );
        }

        return items;
    }, [
        resolvedMenuItems,
        properties.disableDefaultAccountMenu,
        properties.accountLabel,
        authUser,
    ]);

    const content = properties.content ?? properties.children;

    const onClick: MenuProps["onClick"] = (e) => {
        const path = e.key;
        if (path === "logout") return;
        navigate(path);
        if (location.pathname !== path) {
            clearRequests();
            // setTimeout(() => clearRequests(), 0);
        }
    };


    const findParentKey = (
        items: BasePageMenuItem[],
        path: string,
    ): string | null => {
        for (const item of items) {
            if (!item || !("children" in item) || !item.children) {
                continue;
            }

            const hasPath = item.children.some((child: any) => {
                return child && child.key === path;
            });

            if (hasPath) return String(item.key);
        }
        return null;
    };

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth >= 992) {
            const parentKey = findParentKey(menuItems, location.pathname);
            if (parentKey) setOpenKeys([parentKey]);
        }
    }, [location.pathname, menuItems]);

    const onOpenChange = (keys: string[]) => {
        setOpenKeys(keys);
    };

    React.useEffect(() => {
        if (notificationData && notificationData["show_notification"]) {
            if (
                notificationData["success_title"] ||
                notificationData["success_message"]
            ) {
                api.success({
                    message: notificationData["success_title"],
                    description: notificationData["success_message"],
                    showProgress: true,
                    pauseOnHover: true,
                    placement: "bottomRight",
                });
            } else if (notificationData["error_message"]) {
                api.error({
                    message: notificationData["error_title"] ?? "Error!",
                    description: notificationData["error_message"],
                    showProgress: true,
                    pauseOnHover: true,
                    placement: "bottomRight",
                });
            }
            notificationData["show_notification"] = false;
        }
    }, [notificationData]);

    return (
        <>
            {contextHolder}
            <Layout style={{ display: 'flex', flexDirection: 'row' }}>
                <Sider
                    width={isMobile ? "180px" : "280px"}
                    collapsedWidth={isMobile ? 40 : 50}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    breakpoint="lg"
                    style={{
                        background: properties.siderBackground,
                        height: "100vh",
                        zIndex: 2,
                        overflow: "auto",
                        left: 0,
                        boxShadow: "4px 0 20px rgba(0,0,0,0.3)",
                        borderRight: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    {/* Header: DTS Brand + Toggle */}
                    <div
                        style={{
                            padding: isMobile ? "12px 8px" : "20px 16px",
                            borderBottom: "1px solid rgba(255,255,255,0.15)",
                            background: properties.siderHeaderBackground,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        {properties.appTitleLogo ?? (
                           properties.appTitleLogo
                        )}
                        {!collapsed && (
                            <Typography.Text
                                style={{
                                    color: properties.isSiderLight ? "#000" : "#fff",
                                    fontWeight: 800,
                                    fontSize: 18,
                                    letterSpacing: 1,
                                }}
                            >
                                {properties.appTitle ?? "App"}
                            </Typography.Text>
                        )}
                        <Button
                            type="text"
                            icon={
                                collapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: isMobile ? 30 : 40,
                                height: isMobile ? 30 : 40,
                                marginLeft: "auto",
                                color: properties.isSiderLight ? "#000" : "#fff",
                                borderRadius: "10px",
                                backgroundColor: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.2)",
                            }}
                        />
                    </div>

                    {/* Menu Section */}
                    <div
                        style={{
                            padding: isMobile ? "16px 0" : "16px 0",
                            flex: 1,
                        }}
                    >
                        <Menu
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                fontSize: "15px",
                                color: properties.isSiderLight ? "#000" : "#fff",
                                padding: 0,
                                margin: 0,
                            }}
                            theme="dark"
                            mode="inline"
                            selectedKeys={[location.pathname]}
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            items={menuItems}
                            onClick={onClick}
                            className="custom-dark-menu"
                        />
                    </div>

                    {/* Footer brand */}
                    <div
                        style={{
                            padding: isMobile ? "12px 4px" : "16px 8px",
                            textAlign: "center",
                            borderTop: "1px solid rgba(255,255,255,0.15)",
                        }}
                    >
                        <div
                            style={{
                                padding: collapsed ? "10px 6px" : "10px 14px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255,255,255,0.1)",
                                border: "1px solid rgba(255,255,255,0.15)",
                            }}
                        >
                            <Typography.Text
                                style={{
                                    color: properties.isSiderLight ? "#000" : "#fff",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    display: "block",
                                }}
                            >
                                {properties.appTitle ?? "App"}
                            </Typography.Text>
                            {!collapsed && (
                                <Typography.Text
                                    style={{
                                        color: properties.isSiderLight ? "#000" : "#e0e7ff",
                                        fontSize: "11px",
                                        display: "block",
                                    }}
                                >
                                    {properties.appSubtitle ?? "Workspace"}
                                </Typography.Text>
                            )}
                        </div>
                    </div>
                </Sider>
                <Layout style={{ height: "100vh" }}>
                    <Content
                        style={{
                            margin: isMobile ? "8px" : "16px",
                            padding: isMobile ? "8px" : "16px",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            overflow: "auto",
                        }}
                    >
                        {content}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default BasePage;
