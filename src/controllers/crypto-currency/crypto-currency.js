import response from '../../helper/response';

export default function (services, db) {
  return {
    async list(req, res, next) {
      try {
        const data = await services.coinGecko.getCoins('ars');
        const cryptoCurrencies = data.data.map((d) => ({
              id: d.id,
              symbol: d.symbol,
              name: d.name,
              image: d.image,
              current_price: d.current_price,
              last_updated: d.last_updated,
            }))
        return response(
          res,
          req
        )({
          data: { CryptoCurrencies: cryptoCurrencies },
          message: 'cryptocurrencies.list'
        });
      } catch (error) {
        return next(error);
      }
    },
  };
}
