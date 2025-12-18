import { useQuery } from '@tanstack/react-query';
import { niftyStocks, Stock } from '../utils/niftyStocks';

// Simulate API delay
const fetchStocks = async (): Promise<Stock[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate live price updates
    return niftyStocks.map(stock => ({
        ...stock,
        price: stock.price * (1 + (Math.random() - 0.5) * 0.01), // Random 1% fluctuation
        lastUpdated: new Date()
    }));
};

export const useNiftyStocks = () => {
    return useQuery({
        queryKey: ['nifty-stocks'],
        queryFn: fetchStocks,
        refetchInterval: 5000, // Refresh every 5 seconds
    });
};
