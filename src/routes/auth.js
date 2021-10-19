import controllerAuth from '../controllers/auth/auth';
import Validator from '../validators/auth';

export default function (app, db, services) {
  const router = app.Router();
  const authController = controllerAuth(services, db);
  const validator = Validator(services, db);
  router.post('/login', validator.login, authController.Login);
  return router;
}
