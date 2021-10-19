import { check } from 'express-validator';
import authMiddleware from '../middlewares/auth';
import validate from '../middlewares/validate';

export default function (services, db) {
  const auth = authMiddleware(services, db);
  return {
    login: [
      check('data').isObject().withMessage('validators.data.Object'),
      check('data.username')
        .exists()
        .withMessage('validators.data.username.isRequired'),
      check('data.password')
        .exists()
        .withMessage('validators.data.password.isRequired'),
      validate,
      auth.login,
    ],
  };
}
