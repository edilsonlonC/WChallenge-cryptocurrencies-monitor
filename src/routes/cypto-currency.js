import controllerCryptoCurrency from '../controllers/crypto-currency/crypto-currency';

export default function (app, db, services) {
  const router = app.Router();
  const cryptoCurrencyController = controllerCryptoCurrency(services, db);
  router.get('/currencies', cryptoCurrencyController.list);
  return router;
}
