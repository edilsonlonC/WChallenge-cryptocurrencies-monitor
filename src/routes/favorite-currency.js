import controllerCurrency from '../controllers/favorite-currency/favorite-currency';
import Validator from '../validators/favorite-currencies';
export default function (app, db, services) {
    const router = app.Router();
    const currerncyContoller = controllerCurrency(services,db)
    const validators = Validator(services,db)

    router.get('/favorite', currerncyContoller.list)
    return router;
}
