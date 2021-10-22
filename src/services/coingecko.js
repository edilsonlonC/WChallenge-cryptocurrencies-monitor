import CoinGecko from 'coingecko-api';

export default function coinGeckoService() {
  const coinGeckoClient = new CoinGecko();

  return {
    /**
     *
     * @param {object} params
     * @param {string} params.currency - type of currency
     * @param {array}  params.ids - crypto ids
     * @param {number}  params.perPage - number of elements
     * @param {number} params.page - page number
     * @param {string} params.order
     * @returns {object}
     */
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
    /**
     *
     * @param {object} param
     * @param {array} ids - crypto ids
     * @param {array} vs_currencies - type currencies
     * @returns  {object}
     */
    getPrices: async ({ ids, vs_currencies }) => {
      return await coinGeckoClient.simple.price({
        ids,
        vs_currencies,
      });
    },
  };
}
