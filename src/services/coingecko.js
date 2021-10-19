import CoinGecko from 'coingecko-api';
import { async } from 'regenerator-runtime';

export default function coinGeckoService() {
  const coingGeckoClient = new CoinGecko();

  return {
    ping: async () => {
      return await coingGeckoClient.ping();
    },
    getCoins: async ({ currency, ids, perPage }) => {
      return await coingGeckoClient.coins.markets({
        vs_currency: currency,
        ids: ids  || [],
        per_page: perPage || 100
      });
    },
  };
}
