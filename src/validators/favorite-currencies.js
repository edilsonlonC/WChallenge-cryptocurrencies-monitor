import authMiddleware from '../middlewares/auth';

export default function (services, db) {
  const auth = authMiddleware(services, db);
  return {
    list: [auth.checkAuth],
  };
}
