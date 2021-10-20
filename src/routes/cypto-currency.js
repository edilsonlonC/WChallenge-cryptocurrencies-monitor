import controllerCryptoCurrency from '../controllers/crypto-currency/crypto-currency';
import Validator from '../validators/crypto-currency';
export default function (app, db, services) {
  const router = app.Router();
  const cryptoCurrencyController = controllerCryptoCurrency(services, db);
  const validator = Validator(services, db);
  /** TODO: move checkAuth to validator */
  router.get('/currencies',validator.list, cryptoCurrencyController.list);
  router.post('/currencies',validator.create ,cryptoCurrencyController.create);
  router.get('/currencies/top',validator.top ,cryptoCurrencyController.top);
  return router;
}
