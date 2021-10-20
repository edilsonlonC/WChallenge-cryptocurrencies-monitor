import CoinGecko from 'coingecko-api';

export default function coinGeckoService() {
  const coingGeckoClient = new CoinGecko();

  return {
    ping: async () => {
      return await coingGeckoClient.ping();
    },
    getCoins: async ({ currency, ids, perPage, order, page }) => {
      const orderBy = {
        top_asc: 'market_cap_asc',
        top_desc: 'market_cap_desc'
      }
      return await coingGeckoClient.coins.markets({
        vs_currency: currency,
        ids: ids  || [],
        per_page: perPage || 100,
        page: page || 1,
        order: orderBy[order] || orderBy.top_desc

      });
    },
    getPrices: async ({ ids, vs_currencies}) => {
      return await coingGeckoClient.simple.price({
        ids,
        vs_currencies
      })

    }
  };
}
