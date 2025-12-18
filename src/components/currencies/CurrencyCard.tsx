import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { CurrencyPair } from '../../utils/currencyData';

interface CurrencyCardProps {
    pair: CurrencyPair;
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({ pair }) => {
    const isPositive = pair.change >= 0;

    return (
        <div className="p-4 glass card-hover-effect flex items-center justify-between">
            <div>
                <div className="text-sm text-muted-foreground font-medium">{pair.symbol}</div>
                <div className="text-xl font-bold mt-1">{pair.rate.toFixed(4)}</div>
            </div>

            <div className={`text-right ${isPositive ? 'text-success' : 'text-danger'}`}>
                <div className="flex items-center justify-end text-sm font-bold">
                    {isPositive ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                    {Math.abs(pair.changePercent).toFixed(2)}%
                </div>
                <div className="text-xs opacity-80">
                    {isPositive ? '+' : ''}{pair.change.toFixed(4)}
                </div>
            </div>
        </div>
    );
};
