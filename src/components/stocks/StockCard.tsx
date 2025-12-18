import React from 'react';
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import { Stock } from '../../utils/niftyStocks';

interface StockCardProps {
    stock: Stock;
}

export const StockCard: React.FC<StockCardProps> = ({ stock }) => {
    const isPositive = stock.change >= 0;

    return (
        <div className="p-4 glass card-hover-effect group cursor-pointer">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-bold text-lg">{stock.symbol}</h3>
                    <p className="text-xs text-muted-foreground truncate max-w-[120px]">{stock.name}</p>
                </div>
                <div className={`p-2 rounded-full ${isPositive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                    {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                </div>
            </div>

            <div className="mt-4">
                <div className="text-2xl font-bold">₹{stock.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
                <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-success' : 'text-danger'}`}>
                    <span>{isPositive ? '+' : ''}{stock.change.toFixed(2)}</span>
                    <span className="mx-1">•</span>
                    <span>{isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%</span>
                </div>
            </div>

            {/* Mini sparkline placeholder */}
            <div className="mt-3 h-1 w-full bg-muted/30 rounded-full overflow-hidden">
                <div
                    className={`h-full ${isPositive ? 'bg-success' : 'bg-danger'} opacity-50`}
                    style={{ width: `${Math.random() * 40 + 30}%` }}
                />
            </div>
        </div>
    );
};
