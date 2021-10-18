import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class CryptoCurrency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CryptoCurrency.init({
  }, {
    sequelize,
    modelName: 'CryptoCurrency',
    tableName: 'cypto_currencies',
    timestamps: false,
    paranoid: true
  });
  return CryptoCurrency;
};