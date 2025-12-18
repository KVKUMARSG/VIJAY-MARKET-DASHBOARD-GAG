export interface Crypto {
    rank: number;
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    marketCap: number;
    volume24h: number;
    supply: number;
    lastUpdated: Date;
}

export const cryptoData: Crypto[] = [
    {
        rank: 1,
        symbol: "BTC",
        name: "Bitcoin",
        price: 67234.56,
        change24h: 2.34,
        marketCap: 1320000000000,
        volume24h: 28500000000,
        supply: 19500000,
        lastUpdated: new Date()
    },
    {
        rank: 2,
        symbol: "ETH",
        name: "Ethereum",
        price: 3456.78,
        change24h: -0.82,
        marketCap: 415000000000,
        volume24h: 15200000000,
        supply: 120000000,
        lastUpdated: new Date()
    },
    {
        rank: 3,
        symbol: "SOL",
        name: "Solana",
        price: 145.67,
        change24h: 5.67,
        marketCap: 63000000000,
        volume24h: 3500000000,
        supply: 443000000,
        lastUpdated: new Date()
    },
    {
        rank: 4,
        symbol: "BNB",
        name: "BNB",
        price: 567.89,
        change24h: 1.23,
        marketCap: 87000000000,
        volume24h: 1200000000,
        supply: 153000000,
        lastUpdated: new Date()
    },
    {
        rank: 5,
        symbol: "XRP",
        name: "XRP",
        price: 0.62,
        change24h: -1.45,
        marketCap: 34000000000,
        volume24h: 1500000000,
        supply: 54800000000,
        lastUpdated: new Date()
    }
];
