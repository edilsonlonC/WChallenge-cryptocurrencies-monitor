import { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.FavoriteCurrency, {
        foreignKey: 'favorite_currencyId',
        as: 'Currency',
      });
      User.hasMany(models.CryptoCurrency, { foreignKey: 'userId'})
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
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

  /* Scopes */
  User.addScope('userList', () => {
    return {
      include: [
        {
          model: sequelize.models.FavoriteCurrency,
          as: 'Currency',
        },
      ],
    };
  });
  /**
   * Comparea password with hash password into database
   * @param {string} password
   * @returns { boolean }
   */
  User.prototype.comparePassword = async function (password) {
    const passwordHash = this.password;
    return bcrypt.compareSync(password, passwordHash);
  };

  /**
   * return JWT with payload
   * @returns { string }
   */
  User.prototype.generateJWT = async function () {
    const user = this;
    const payload = {
      id: user.id,
      name: user.name,
      username: user.username,
      surname: user.surname,
    };
    return jwt.sign(payload, config.secretKeyJwt, { expiresIn: '1h'});
  };

  /**
   * Verify if token is valid
   * @param {string} token
   * @returns {object}
   */
  User.verifyJWT = async function (token) {
    try {
      return { payload: jwt.verify(token, config.secretKeyJwt), isValid: true };
    } catch (err) {
      return { isValid: false, payload: {} };
    }
  };

  /**
   * return user by user name
   * @param {string} username
   * @returns { object } - User model
   */
  User.findByUsername = async function (username) {
    const user = await User.scope(['userList']).findOne({
      where: { username },
    });

    return user;
  };
  return User;
};
