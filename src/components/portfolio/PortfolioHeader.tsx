// Portfolio Header displaying total value and change (static for now)
import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

export const PortfolioHeader: React.FC = () => {
    const { totalValue } = usePortfolio();
    const formatted = totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 });
    return (
        <div className="p-6 glass rounded-xl mb-6 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary mb-2">Portfolio</h1>
            <p className="text-xl text-foreground">Total Value: <span className="font-mono">₹{formatted}</span></p>
        </div>
    );
};
