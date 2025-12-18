import React from 'react';
import { useCryptoData } from '../hooks/useCryptoData';
import { CryptoCard } from '../components/crypto/CryptoCard';
import { StatsCard } from '../components/ui/StatsCard';
import { Bitcoin, Activity, Layers } from 'lucide-react';

const Crypto = () => {
    const { data: crypto, isLoading } = useCryptoData();

    return (
        <div className="p-6 space-y-6 animate-slide-up">
            <h1 className="text-3xl font-bold text-primary mb-6">Cryptocurrency Market</h1>

            {/* Market Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatsCard
                    title="Total Market Cap"
                    value="$2.45T"
                    change="+1.2%"
                    changeType="positive"
                    icon={<Layers className="w-5 h-5" />}
                />
                <StatsCard
                    title="24h Volume"
                    value="$89.5B"
                    change="-5.4%"
                    changeType="negative"
                    icon={<Activity className="w-5 h-5" />}
                />
                <StatsCard
                    title="BTC Dominance"
                    value="52.3%"
                    change="+0.1%"
                    changeType="positive"
                    icon={<Bitcoin className="w-5 h-5" />}
                />
            </div>

            <h2 className="text-xl font-bold mb-4">Top Coins</h2>
            {isLoading ? (
                <div className="text-center py-20 text-muted-foreground">Loading crypto data...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {crypto?.map(coin => (
                        <CryptoCard key={coin.symbol} crypto={coin} />
                    ))}
                    {/* Duplicate for demo */}
                    {crypto?.map(coin => (
                        <CryptoCard key={`${coin.symbol}-2`} crypto={{ ...coin, rank: coin.rank + 5, symbol: `${coin.symbol}2` }} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Crypto;
