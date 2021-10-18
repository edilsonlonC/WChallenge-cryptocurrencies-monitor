import { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      password: {
        type: DataTypes.STRING(512),
        set(value) {
          const saltRounds = 10;
          this.setDataValue('password', bcrypt.hashSync(value, saltRounds));
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    }
  );
  User.prototype.comparePassword = async function (password) {
    const passwordHash = this.setDataValue('password');
    return bcrypt.compareSync(password, passwordHash);
  };
  return User;
};
