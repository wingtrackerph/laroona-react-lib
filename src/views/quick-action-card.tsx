import React from "react";
import { Card, Space, Typography } from "antd";
import { ReactNode } from "react";

const { Text } = Typography;

interface QuickActionCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    color: string;
    gradientFrom: string;
    gradientTo: string;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
    icon,
    title,
    description,
    onClick,
    color,
    gradientFrom,
    gradientTo,
}) => {
    return (
        <Card
            style={{
                borderRadius: "12px",
                boxShadow: `0 4px 12px ${color}15`,
                border: `1px solid ${color}1a`,
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                cursor: "pointer",
                transition: "all 0.3s ease",
            }}
            hoverable
            onClick={onClick}
            styles={{ body: { padding: "24px", textAlign: "center" } }}
        >
            <Space
                direction="vertical"
                align="center"
                style={{ width: "100%" }}
            >
                <div
                    style={{
                        fontSize: "32px",
                        color: color,
                    }}
                >
                    {icon}
                </div>
                <Text
                    style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: color,
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        fontSize: "12px",
                        color: "#8c8c8c",
                    }}
                >
                    {description}
                </Text>
            </Space>
        </Card>
    );
};

export default QuickActionCard;
