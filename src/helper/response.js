export default function (res, req) {
  return function ({ data, message, error, statusCode }) {
    const response = !error
      ? { message: req.translate(message), statusCode: statusCode || 200, data }
      : {
          message: req.translate(error.message),
          statusCode: error.code || statusCode,
          data,
        };
    return res.status(response.statusCode).json(response);
  };
}
