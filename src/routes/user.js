import controllerUser from '../controllers/user/user';
import Validator from '../validators/user';

export default function (app, db, services) {
  const router = app.Router();
  const userController = controllerUser(services, db);
  const validator = Validator(services,db)

  router.post('/create', validator.create ,userController.create);
  return router;
}
