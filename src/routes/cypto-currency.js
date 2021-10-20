import controllerCryptoCurrency from '../controllers/crypto-currency/crypto-currency';

export default function (app, db, services) {
  const router = app.Router();
  const cryptoCurrencyController = controllerCryptoCurrency(services, db);
  /** TODO: move checkAuth to validator */
  router.get('/currencies', cryptoCurrencyController.list);
  router.post('/currencies', cryptoCurrencyController.create);
  router.get('/currencies/top', cryptoCurrencyController.top);
  return router;
}
