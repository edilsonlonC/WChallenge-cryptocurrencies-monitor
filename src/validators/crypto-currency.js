import { query, check } from 'express-validator';
import validate from '../middlewares/validate';
import authMiddleware from '../middlewares/auth';
import cryptoCurrencyMiddleware from '../middlewares/crypto-currency';

export default function (services, db) {
  const auth = authMiddleware(services, db);
  const middlewareCrypto = cryptoCurrencyMiddleware(services, db);
  return {
    create: [
      check('data').isObject().withMessage('validators.data.isRequired'),
      check('data.id').exists().withMessage('validators.data.id.isRequired'),
      validate,
      auth.checkAuth,
      middlewareCrypto.cryptoCurrencyExist,
      middlewareCrypto.userHaveCryptoCurrency,
    ],
    list: [auth.checkAuth],
    top: [
      query('top')
        .isInt({ min: 0, max: 25 })
        .withMessage('validators.query.top.invalidRange'),
      validate,
      auth.checkAuth,
    ],
  };
}
