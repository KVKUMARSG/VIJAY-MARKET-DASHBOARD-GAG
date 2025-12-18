// Summary statistics cards for the portfolio (total invested, profit/loss, today gain)
import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

export const SummaryStats: React.FC = () => {
    const { totalValue } = usePortfolio();
    // For demo purposes, static values for profit/loss and today gain
    const profitLoss = 12500; // INR
    const todayGain = 350; // INR

    const fmt = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });

    const cards = [
        { title: "Invested", value: `₹${fmt(totalValue)}`, change: "" },
        { title: "Profit/Loss", value: `₹${fmt(profitLoss)}`, change: profitLoss >= 0 ? "positive" : "negative" },
        { title: "Today's Gain", value: `₹${fmt(todayGain)}`, change: todayGain >= 0 ? "positive" : "negative" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {cards.map((c) => (
                <div key={c.title} className="p-4 glass rounded-xl text-center animate-fade-in">
                    <h3 className="text-sm text-muted-foreground mb-1">{c.title}</h3>
                    <p className="text-xl font-bold text-primary">{c.value}</p>
                    {c.change && (
                        <p className={`text-sm ${c.change === "positive" ? "text-success" : "text-danger"}`}>
                            {c.change === "positive" ? "+" : "-"}{c.value.replace(/[^0-9.]/g, "")}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};
