import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface StatsCardProps {
    title: string;
    value: string;
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
    icon?: React.ReactNode;
    className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
    title,
    value,
    change,
    changeType = 'neutral',
    icon,
    className,
}) => {
    return (
        <div className={twMerge("p-6 glass card-hover-effect flex flex-col justify-between", className)}>
            <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-muted-foreground font-medium">{title}</span>
                {icon && <div className="text-primary opacity-80">{icon}</div>}
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold tracking-tight">{value}</span>

                {change && (
                    <div className={clsx("flex items-center text-xs font-medium", {
                        "text-success": changeType === 'positive',
                        "text-danger": changeType === 'negative',
                        "text-muted-foreground": changeType === 'neutral',
                    })}>
                        {changeType === 'positive' && <ArrowUp className="w-3 h-3 mr-1" />}
                        {changeType === 'negative' && <ArrowDown className="w-3 h-3 mr-1" />}
                        {change}
                    </div>
                )}
            </div>
        </div>
    );
};
