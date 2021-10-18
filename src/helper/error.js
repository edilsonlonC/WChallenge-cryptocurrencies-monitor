const env = process.env.NODE_ENV || 'development';

export default function (code, message, error) {
  Error.call(this);
  this.code = code;
  this.message = message;
  this.logging = function () {
    if (env === 'development') console.log(error);
  };
  this.logging();
}
