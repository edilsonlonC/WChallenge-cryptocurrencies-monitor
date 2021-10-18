import response from '../helper/response';
import Error from '../helper/error';

export default function (services, db) {
  const { FavoriteCurrency } = db;

  return {
    favoriteCurrencyExist: async (req, res, next) => {
      const {
        data: { favorite_currencyId },
      } = req.body;
      try {
        const favoriteCurrency = await FavoriteCurrency.findByPk(
          favorite_currencyId
        );
        if (favoriteCurrency) return next();
        return response(
          res,
          req
        )({
          data: null,
          error: new Error(400, 'validators.favoriteCurrency.notExist'),
          statusCode: 400,
        });
      } catch (error) {
        next(error);
      }
    },
  };
}
