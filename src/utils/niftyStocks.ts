export interface Stock {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    volume: number;
    marketCap: number;
    high52Week: number;
    low52Week: number;
    lastUpdated: Date;
}

export const niftyStocks: Stock[] = [
    {
        symbol: "RELIANCE",
        name: "Reliance Industries Ltd",
        price: 2456.75,
        change: 56.25,
        changePercent: 2.34,
        volume: 5200000,
        marketCap: 16500000000000,
        high52Week: 2856.00,
        low52Week: 2180.00,
        lastUpdated: new Date()
    },
    {
        symbol: "TCS",
        name: "Tata Consultancy Services",
        price: 3890.50,
        change: -32.10,
        changePercent: -0.82,
        volume: 2100000,
        marketCap: 14200000000000,
        high52Week: 4100.00,
        low52Week: 3200.00,
        lastUpdated: new Date()
    },
    {
        symbol: "HDFCBANK",
        name: "HDFC Bank Ltd",
        price: 1650.25,
        change: 12.50,
        changePercent: 0.76,
        volume: 8500000,
        marketCap: 9200000000000,
        high52Week: 1750.00,
        low52Week: 1450.00,
        lastUpdated: new Date()
    },
    {
        symbol: "INFY",
        name: "Infosys Ltd",
        price: 1450.60,
        change: 18.40,
        changePercent: 1.28,
        volume: 4500000,
        marketCap: 6100000000000,
        high52Week: 1650.00,
        low52Week: 1250.00,
        lastUpdated: new Date()
    },
    {
        symbol: "ICICIBANK",
        name: "ICICI Bank Ltd",
        price: 980.45,
        change: 5.60,
        changePercent: 0.57,
        volume: 6200000,
        marketCap: 6800000000000,
        high52Week: 1050.00,
        low52Week: 850.00,
        lastUpdated: new Date()
    }
];

// Helper to generate more mock stocks if needed
export const generateMockStocks = (count: number): Stock[] => {
    return Array.from({ length: count }).map((_, i) => ({
        symbol: `STOCK${i + 1}`,
        name: `Mock Stock ${i + 1} Ltd`,
        price: 100 + Math.random() * 2000,
        change: (Math.random() - 0.5) * 50,
        changePercent: (Math.random() - 0.5) * 5,
        volume: Math.floor(Math.random() * 1000000),
        marketCap: Math.floor(Math.random() * 1000000000000),
        high52Week: 2000,
        low52Week: 100,
        lastUpdated: new Date()
    }));
};
