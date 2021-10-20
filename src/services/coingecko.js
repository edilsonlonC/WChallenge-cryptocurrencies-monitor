import CoinGecko from 'coingecko-api';

export default function coinGeckoService() {
  const coinGeckoClient = new CoinGecko();

  return { 
    getCoins: async ({ currency, ids, perPage, order, page }) => {
      const orderBy = {
        top_asc: 'market_cap_asc',
        top_desc: 'market_cap_desc',
      };
      return await coinGeckoClient.coins.markets({
        vs_currency: currency,
        ids: ids || [],
        per_page: perPage || 100,
        page: page || 1,
        order: orderBy[order] || orderBy.top_desc,
      });
    },
    getPrices: async ({ ids, vs_currencies }) => {
      return await coinGeckoClient.simple.price({
        ids,
        vs_currencies,
      });
    },
  };
}
