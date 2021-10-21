import { check } from 'express-validator';
import validate from '../middlewares/validate';
import middlewareFavoriteCurrency from '../middlewares/favorite-currency';
import middlewareUser from '../middlewares/user';

export default function (services, db) {
  const favoriteCurrency = middlewareFavoriteCurrency(services, db);
  const userMiddleware = middlewareUser(services,db)
  return {
    create: [
      check('data').isObject().withMessage('validators.data.Object'),
      check('data.name')
        .exists()
        .withMessage('validators.data.name.isRequired')
        .isLength({ min: 2 })
        .withMessage('validators.data.name.minLength'),
      check('data.surname')
        .exists()
        .withMessage('validators.data.surname.isRequired')
        .isLength({ min: 2 })
        .withMessage('validators.data.surname.minLength'),
      check('data.username')
        .exists()
        .withMessage('validators.data.username.isRequired')
        .isLength({ min: 2 })
        .withMessage('validators.data.username.minLength'),
      check('data.password')
        .exists()
        .withMessage('validators.data.password.isRequired'),
      check('data.passwordConfirmation')
        .exists()
        .withMessage('validators.data.passwordConfirmation.isRequired')
        .custom((value, { req }) => value === req.body.data.password)
        .withMessage('validators.data.passwordConfirmation.notMatch'),
      check('data.favorite_currencyId')
        .exists()
        .withMessage('validators.data.favorite_currencyId.isRequired'),
      validate,
      userMiddleware.usernameExist,
      favoriteCurrency.favoriteCurrencyExist,
    ],
  };
}
