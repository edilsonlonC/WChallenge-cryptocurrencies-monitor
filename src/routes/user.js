import controllerUser from '../controllers/user/user';

export default function (app, db, services) {
  const router = app.Router();
  const userController = controllerUser(services, db);

  router.post('/create', userController.create);
  return router;
}
