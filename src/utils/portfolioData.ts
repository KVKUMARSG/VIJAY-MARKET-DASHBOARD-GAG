// Mock portfolio data used by the Portfolio page
export interface Holding {
    symbol: string;
    name: string;
    quantity: number;
    price: number; // current price per unit
    assetClass: 'stock' | 'crypto' | 'forex';
}

export const portfolioHoldings: Holding[] = [
    {
        symbol: 'RELIANCE.NS',
        name: 'Reliance Industries Ltd.',
        quantity: 12,
        price: 2600,
        assetClass: 'stock',
    },
    {
        symbol: 'BTC',
        name: 'Bitcoin',
        quantity: 0.025,
        price: 67000,
        assetClass: 'crypto',
    },
    {
        symbol: 'USD/INR',
        name: 'US Dollar / Indian Rupee',
        quantity: 1500,
        price: 83.12,
        assetClass: 'forex',
    },
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        quantity: 8,
        price: 190,
        assetClass: 'stock',
    },
];
