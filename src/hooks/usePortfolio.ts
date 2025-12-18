// Hook to provide portfolio data and derived statistics
import { portfolioHoldings, Holding } from "../utils/portfolioData";

export interface PortfolioStats {
    totalValue: number;
    allocation: Record<string, number>; // assetClass -> percentage
}

export const usePortfolio = () => {
    // In a real app this could be a fetch call; for now we use static mock data
    const holdings: Holding[] = portfolioHoldings;

    const totalValue = holdings.reduce((sum, h) => sum + h.quantity * h.price, 0);

    const allocationRaw: Record<string, number> = {};
    holdings.forEach((h) => {
        const value = h.quantity * h.price;
        allocationRaw[h.assetClass] = (allocationRaw[h.assetClass] || 0) + value;
    });
    const allocation: Record<string, number> = {};
    Object.entries(allocationRaw).forEach(([key, val]) => {
        allocation[key] = Number(((val / totalValue) * 100).toFixed(1));
    });

    return { holdings, totalValue, allocation } as const;
};
