import User from './user';

export default function (app, db, services = null) {
  this.routes = {
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
