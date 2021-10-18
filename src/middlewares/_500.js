import response from '../helper/response';
import Error from '../helper/error';

export default function _500() {
  return function (err, req, res, next) {
    return response(
      res,
      req
    )({
      data: null,
      error: new Error(500, 'server.error', err),
    });
  };
}
