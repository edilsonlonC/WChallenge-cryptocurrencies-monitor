import respone from '../helper/response';
import Error from '../helper/error';


export default function _404 (){  
    return function (req, res, next) {
    return respone(
        res,
        req
    )({
        data: null,
        error: new Error(404,req.translate('resource.NotFound'))
    })
}
}