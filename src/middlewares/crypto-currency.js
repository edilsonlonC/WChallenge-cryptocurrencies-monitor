import response from '../helper/response';
import Error from '../helper/error';

export default function (services, db) {
  const { CryptoCurrency } = db;
  return {
    async cryptoCurrencyExist(req, res, next) {
      const {
        data: { id },
      } = req.body;
      try {
        const data = await services.coinGecko.getCoins({ ids: [id] });
        if (data.data.length) return next();
        return response(
          res,
          req
        )({
          data: null,
          error: new Error(400, 'validators.cryptoCurrency.notExist'),
        });
      } catch (error) {
        return next(error);
      }
    },
    async userHaveCryptoCurrency(req, res, next) {
      const {
        data: { id },
      } = req.body;
      const { id: userId } = req.User;
      try {
        const cryptoCurrency = await CryptoCurrency.findOne({
          where: {
            userId,
            id,
          },
        });
        if (!cryptoCurrency) return next();
        return response(
          res,
          req
        )({
          data: null,
          error: new Error(400, 'validators.cryptoCurrency.exist'),
        });
      } catch (error) {
        return next(error);
      }
    },
  };
}
