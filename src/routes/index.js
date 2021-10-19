import User from './user';
import CryptoCurrency from './cypto-currency';
import Auth from './auth';

export default function (app, db, services = null) {
  this.routes = {
    Auth,
    CryptoCurrency,
    User,
  };
  this.associate = function () {
    const names = Object.keys(this.routes);
    for (let i = 0; i < names.length; i++) {
      this[names[i]] = this.routes[names[i]](app, db, services);
    }
  };
  this.associate();
}
