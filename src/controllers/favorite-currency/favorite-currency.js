import response from '../../helper/response';

export default function (services, db) {
  const { FavoriteCurrency } = db;

  return {
    async list(req, res, next) {
      try {
        const favoriteCurrencies = await FavoriteCurrency.findAll();
        return response(
          res,
          req
        )({
          data: { Currencies: favoriteCurrencies },
          message: 'favorite.currency.list',
        });
      } catch (error) {
        next(error);
      }
    },
  };
}
