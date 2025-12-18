import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Crypto } from '../../utils/cryptoData';

interface CryptoCardProps {
    crypto: Crypto;
}

export const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
    const isPositive = crypto.change24h >= 0;

    return (
        <div className="p-4 glass card-hover-effect">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">#{crypto.rank}</span>
                    <span className="font-bold">{crypto.symbol}</span>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full font-medium ${isPositive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                    {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <div className="text-sm text-muted-foreground">{crypto.name}</div>
                    <div className="text-xl font-bold mt-1">${crypto.price.toLocaleString()}</div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] text-muted-foreground uppercase">M.Cap</div>
                    <div className="text-xs font-medium">${(crypto.marketCap / 1e9).toFixed(2)}B</div>
                </div>
            </div>
        </div>
    );
};
