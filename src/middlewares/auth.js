import response from '../helper/response';
import Error from '../helper/error';

export default function (services, db) {
  const { User } = db;
  return {
    async login(req, res, next) {
      const {
        data: { username, password },
      } = req.body;
      try {
        const user = await User.findByUsername(username);
        const passwordMatch = !user
          ? false
          : await user.comparePassword(password);
        if (!passwordMatch)
          return response(
            res,
            req
          )({
            data: null,
            error: new Error(401, 'validators.passwordOrUsername.invalid'),
          });
        const token = await user.generateJWT();
        req.token = token;
        req.User = user.toJSON();
        delete req.User.password;
        return next();  
      } catch (error) {
        return next(error);
      }
    },
    async checkAuth(req, res, next) {
        const authorization = req.headers.authorization;
        try {

            if (!authorization || !authorization.toLowerCase().startsWith('bearer'))
                return response(res,req)({
                    data: null,
                    error: new Error(401, 'validators.Authorization.isRequired')
                })
            const token = authorization.split(' ')[1]
            const verify = await User.verifyJWT(token);
            if (!verify.isValid) return response(res,req)({
                data: null,
                error: new Error(401, 'validators.token.invalid')
            })
            const { username } = verify.payload;
            const user  = await User.findByUsername(username)
            req.User = user.toJSON()
            return next()
            
        } catch (error) {
            return next(error)
            
        }
    },
  };
}
