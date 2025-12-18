import React from 'react';
import { useNiftyStocks } from '../hooks/useNiftyStocks';
import { useCurrencyPairs } from '../hooks/useCurrencyPairs';
import { useCryptoData } from '../hooks/useCryptoData';
import { StockCard } from '../components/stocks/StockCard';
import { CurrencyCard } from '../components/currencies/CurrencyCard';
import { CryptoCard } from '../components/crypto/CryptoCard';
import { MarketOverview } from '../components/markets/MarketOverview';
import { StatsCard } from '../components/ui/StatsCard';
import { Activity, TrendingUp, DollarSign, Bitcoin } from 'lucide-react';

const Index = () => {
    const { data: stocks, isLoading: stocksLoading } = useNiftyStocks();
    const { data: currencies, isLoading: currenciesLoading } = useCurrencyPairs();
    const { data: crypto, isLoading: cryptoLoading } = useCryptoData();

    return (
        <div className="p-6 space-y-6 animate-slide-up">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    title="Market Status"
                    value="Open"
                    change="Closes in 4h 20m"
                    changeType="positive"
                    icon={<Activity className="w-5 h-5" />}
                />
                <StatsCard
                    title="Nifty 50"
                    value="19,856.34"
                    change="+0.62%"
                    changeType="positive"
                    icon={<TrendingUp className="w-5 h-5" />}
                />
                <StatsCard
                    title="USD/INR"
                    value="83.12"
                    change="+0.05%"
                    changeType="neutral"
                    icon={<DollarSign className="w-5 h-5" />}
                />
                <StatsCard
                    title="Bitcoin"
                    value="$67,234"
                    change="+2.34%"
                    changeType="positive"
                    icon={<Bitcoin className="w-5 h-5" />}
                />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Column 1: Watchlist */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-primary">Watchlist</h2>
                        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">View All</button>
                    </div>
                    <div className="space-y-3">
                        {stocksLoading ? (
                            <div className="text-center p-4 text-muted-foreground">Loading stocks...</div>
                        ) : (
                            stocks?.slice(0, 4).map(stock => (
                                <StockCard key={stock.symbol} stock={stock} />
                            ))
                        )}
                    </div>
                </div>

                {/* Column 2: Global Markets */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-primary">Global Markets</h2>
                        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">View All</button>
                    </div>
                    <MarketOverview />
                </div>

                {/* Column 3: Currencies */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-primary">Currencies</h2>
                        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">Converter</button>
                    </div>
                    <div className="space-y-3">
                        {currenciesLoading ? (
                            <div className="text-center p-4 text-muted-foreground">Loading forex...</div>
                        ) : (
                            currencies?.slice(0, 6).map(pair => (
                                <CurrencyCard key={pair.symbol} pair={pair} />
                            ))
                        )}
                    </div>
                </div>

                {/* Column 4: Crypto */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-primary">Crypto</h2>
                        <button className="text-xs text-muted-foreground hover:text-primary transition-colors">View All</button>
                    </div>
                    <div className="space-y-3">
                        {cryptoLoading ? (
                            <div className="text-center p-4 text-muted-foreground">Loading crypto...</div>
                        ) : (
                            crypto?.slice(0, 5).map(coin => (
                                <CryptoCard key={coin.symbol} crypto={coin} />
                            ))
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;
