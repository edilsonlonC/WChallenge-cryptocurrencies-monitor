import response from "../helper/response";
import Error from '../helper/error';

export default function (services, db) {
    const { User } = db;
    
    return {
        async usernameExist(req, res, next) {
            const { data: { username  } } = req.body
            try{
                const user = await User.findByUsername(username)
                if (!user) return next()
                return response(res,req)({
                    data: null,
                    error: new Error(400, 'validators.username.exist')
                })
                

            }catch(error){
                return next(error)
            }
        }
    }
}