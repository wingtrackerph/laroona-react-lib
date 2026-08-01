import { default as React, ReactNode } from 'react';
interface QuickActionCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    color: string;
    gradientFrom: string;
    gradientTo: string;
}
declare const QuickActionCard: React.FC<QuickActionCardProps>;
export default QuickActionCard;
//# sourceMappingURL=quick-action-card.d.ts.map