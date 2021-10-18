import response from '../../helper/response';

export default function (services, db) {
  const { User } = db;
  return {
    async create(req, res, next) {
      try {
        const { body: { data : { name, surname, username, password} }} = req;
        const dataUser = {
          name, surname, username, password
        }
        await User.create( dataUser );
        
        
        return response(
          res,
          req
        )({
          data: null,
          message: 'user.created',
          statusCode: 200,
        });
      } catch (err) {
        return next(err);
      }
    },
  };
}
