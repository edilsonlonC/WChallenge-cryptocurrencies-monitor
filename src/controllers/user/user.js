import response from '../../helper/response';

export default function (services, db) {
  return {
    async create(req, res, next) {
      try {
        return response(
          res,
          req
        )({
          data: null,
          message: 'user.created',
          statusCode: 201,
        });
      } catch (err) {
        return next(err);
      }
    },
  };
}
