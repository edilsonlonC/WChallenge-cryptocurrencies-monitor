import controllerCurrency from '../controllers/favorite-currency/favorite-currency';


export default function (app, db, services) {
    const router = app.Router();
    const curerncyContoller = controllerCurrency(services,db)

    router.get('/favorite', curerncyContoller.list)
    return router;
}