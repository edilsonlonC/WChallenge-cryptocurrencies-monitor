import controllerCryptoCurrency from '../controllers/crypto-currency/crypto-currency';
import authMiddleware from '../middlewares/auth';
export default function (app, db, services) {
  const router = app.Router();
  const cryptoCurrencyController = controllerCryptoCurrency(services, db);
  const auth = authMiddleware(services,db);
  /** TODO: move checkAuth to validator */
  router.get('/currencies',auth.checkAuth ,cryptoCurrencyController.list);
  router.post('/currencies', auth.checkAuth, cryptoCurrencyController.create);
  router.get('/currencies/top', auth.checkAuth,cryptoCurrencyController.top);
  return router;
}
