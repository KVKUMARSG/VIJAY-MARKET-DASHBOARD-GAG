import React from 'react';
import { ArrowUp, ArrowDown, Globe } from 'lucide-react';

const markets = [
    { name: "S&P 500", value: "4,567.89", change: "+0.45%", isUp: true },
    { name: "Nasdaq", value: "14,234.56", change: "-0.12%", isUp: false },
    { name: "Dow Jones", value: "35,456.78", change: "+0.32%", isUp: true },
    { name: "FTSE 100", value: "7,456.23", change: "+0.28%", isUp: true },
    { name: "DAX", value: "15,890.45", change: "-0.15%", isUp: false },
    { name: "Nikkei 225", value: "32,456.78", change: "+0.89%", isUp: true },
    { name: "Hang Seng", value: "17,456.23", change: "-1.23%", isUp: false },
    { name: "Nifty 50", value: "19,856.34", change: "+0.62%", isUp: true },
];

export const MarketOverview: React.FC = () => {
    return (
        <div className="space-y-3">
            {markets.map((market) => (
                <div key={market.name} className="flex items-center justify-between p-3 glass hover:bg-muted/50 transition-smooth rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-full ${market.isUp ? 'bg-success/10' : 'bg-danger/10'}`}>
                            <Globe className={`w-4 h-4 ${market.isUp ? 'text-success' : 'text-danger'}`} />
                        </div>
                        <div>
                            <div className="font-bold text-sm">{market.name}</div>
                            <div className="text-xs text-muted-foreground">Index</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-mono font-medium">{market.value}</div>
                        <div className={`text-xs flex items-center justify-end ${market.isUp ? 'text-success' : 'text-danger'}`}>
                            {market.isUp ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                            {market.change}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
