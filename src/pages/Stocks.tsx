import React from 'react';
import { useNiftyStocks } from '../hooks/useNiftyStocks';
import { StockCard } from '../components/stocks/StockCard';
import { Search } from 'lucide-react';

const Stocks = () => {
    const { data: stocks, isLoading } = useNiftyStocks();

    return (
        <div className="p-6 space-y-6 animate-slide-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary">Indian Stocks</h1>
                    <p className="text-muted-foreground">Nifty 50 and major indices</p>
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search stocks..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
            </div>

            {isLoading ? (
                <div className="text-center py-20 text-muted-foreground">Loading market data...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {stocks?.map(stock => (
                        <StockCard key={stock.symbol} stock={stock} />
                    ))}
                    {/* Duplicate for demo to fill grid */}
                    {stocks?.map(stock => (
                        <StockCard key={`${stock.symbol}-2`} stock={{ ...stock, symbol: `${stock.symbol}-B` }} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Stocks;
