import { useQuery } from '@tanstack/react-query';
import { currencyPairs, CurrencyPair } from '../utils/currencyData';

const fetchCurrencies = async (): Promise<CurrencyPair[]> => {
    await new Promise(resolve => setTimeout(resolve, 800));

    return currencyPairs.map(pair => ({
        ...pair,
        rate: pair.rate * (1 + (Math.random() - 0.5) * 0.005), // 0.5% fluctuation
        lastUpdated: new Date()
    }));
};

export const useCurrencyPairs = () => {
    return useQuery({
        queryKey: ['currency-pairs'],
        queryFn: fetchCurrencies,
        refetchInterval: 5000,
    });
};
