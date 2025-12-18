import React from 'react';
import { useCurrencyPairs } from '../hooks/useCurrencyPairs';
import { CurrencyCard } from '../components/currencies/CurrencyCard';
import { ArrowRightLeft } from 'lucide-react';

const Currencies = () => {
    const { data: currencies, isLoading } = useCurrencyPairs();

    return (
        <div className="p-6 space-y-6 animate-slide-up">
            <h1 className="text-3xl font-bold text-primary mb-6">Currency Exchange</h1>

            {/* Converter Placeholder */}
            <div className="p-6 glass rounded-xl mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ArrowRightLeft className="w-5 h-5 text-primary" />
                    Quick Converter
                </h2>
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm text-muted-foreground">Amount</label>
                        <input type="number" defaultValue="1000" className="w-full p-2 rounded bg-muted/50 border border-border" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm text-muted-foreground">From</label>
                        <select className="w-full p-2 rounded bg-muted/50 border border-border">
                            <option>USD - US Dollar</option>
                            <option>EUR - Euro</option>
                        </select>
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm text-muted-foreground">To</label>
                        <select className="w-full p-2 rounded bg-muted/50 border border-border">
                            <option>INR - Indian Rupee</option>
                            <option>GBP - British Pound</option>
                        </select>
                    </div>
                    <div className="flex-1 p-2 bg-primary/10 rounded text-center">
                        <div className="text-xs text-muted-foreground">Result</div>
                        <div className="text-xl font-bold text-primary">₹83,120.00</div>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Live Rates</h2>
            {isLoading ? (
                <div className="text-center py-20 text-muted-foreground">Loading rates...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {currencies?.map(pair => (
                        <CurrencyCard key={pair.symbol} pair={pair} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Currencies;
