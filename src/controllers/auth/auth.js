import response from '../../helper/response';

export default function (services, db) {
  return {
    async Login(req, res, next) {
      try {
        return response(
          res,
          req
        )({
          data: { User: { ...req.User, token: req.token } },
          message: 'loginSuccess',
          statusCode: 200,
        });
      } catch (error) {
        next(error);
      }
    },
  };
}
