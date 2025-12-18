import React from 'react';
import { usePortfolio } from '../../hooks/usePortfolio';

export const HoldingsTable: React.FC = () => {
    const { holdings, totalValue } = usePortfolio();

    return (
        <div className="p-4 glass rounded-xl overflow-auto animate-fade-in">
            <h2 className="text-xl font-bold mb-2 text-primary">Holdings</h2>
            <table className="w-full text-left table-auto">
                <thead className="border-b border-muted/30">
                    <tr>
                        <th className="pb-2">Asset</th>
                        <th className="pb-2">Qty</th>
                        <th className="pb-2">Price (₹)</th>
                        <th className="pb-2">Value (₹)</th>
                        <th className="pb-2">% of Portfolio</th>
                    </tr>
                </thead>
                <tbody>
                    {holdings.map((h) => {
                        const value = h.quantity * h.price;
                        const percent = ((value / totalValue) * 100).toFixed(1);
                        return (
                            <tr key={h.symbol} className="border-b border-muted/10 hover:bg-muted/20 transition-colors">
                                <td className="py-2 font-medium">{h.name} ({h.symbol})</td>
                                <td className="py-2">{h.quantity}</td>
                                <td className="py-2">{h.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                <td className="py-2 font-semibold">{value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                <td className="py-2 text-sm text-muted-foreground">{percent}%</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
