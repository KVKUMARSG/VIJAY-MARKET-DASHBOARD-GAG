import { useQuery } from '@tanstack/react-query';
import { cryptoData, Crypto } from '../utils/cryptoData';

const fetchCrypto = async (): Promise<Crypto[]> => {
    await new Promise(resolve => setTimeout(resolve, 1200));

    return cryptoData.map(coin => ({
        ...coin,
        price: coin.price * (1 + (Math.random() - 0.5) * 0.03), // 3% volatility
        lastUpdated: new Date()
    }));
};

export const useCryptoData = () => {
    return useQuery({
        queryKey: ['crypto-data'],
        queryFn: fetchCrypto,
        refetchInterval: 5000,
    });
};
