// src/utils/currencyData.ts
// Mock currency data including AED, SGD, INR (and a few common pairs)
export interface CurrencyPair {
    symbol: string; // e.g. "USD/INR"
    fromCurrency: string;
    toCurrency: string;
    rate: number;
    change: number;
    changePercent: number;
    lastUpdated: Date;
}

export const currencyPairs: CurrencyPair[] = [
    {
        symbol: "USD/INR",
        fromCurrency: "USD",
        toCurrency: "INR",
        rate: 83.12,
        change: 0.04,
        changePercent: 0.05,
        lastUpdated: new Date(),
    },
    {
        symbol: "USD/EUR",
        fromCurrency: "USD",
        toCurrency: "EUR",
        rate: 0.92,
        change: -0.001,
        changePercent: -0.11,
        lastUpdated: new Date(),
    },
    {
        symbol: "USD/GBP",
        fromCurrency: "USD",
        toCurrency: "GBP",
        rate: 0.78,
        change: -0.002,
        changePercent: -0.26,
        lastUpdated: new Date(),
    },
    {
        symbol: "USD/AED",
        fromCurrency: "USD",
        toCurrency: "AED",
        rate: 3.67,
        change: 0.001,
        changePercent: 0.03,
        lastUpdated: new Date(),
    },
    {
        symbol: "USD/SGD",
        fromCurrency: "USD",
        toCurrency: "SGD",
        rate: 1.35,
        change: 0.002,
        changePercent: 0.15,
        lastUpdated: new Date(),
    },
    {
        symbol: "USD/JPY",
        fromCurrency: "USD",
        toCurrency: "JPY",
        rate: 149.23,
        change: 0.25,
        changePercent: 0.17,
        lastUpdated: new Date(),
    },
];
