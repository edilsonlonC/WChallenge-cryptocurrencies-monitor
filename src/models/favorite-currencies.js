import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class FavoriteCurrency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FavoriteCurrency.hasMany(models.User, {
        foreignKey: 'favorite_currencyId',
      });
    }
  }
  FavoriteCurrency.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'FavoriteCurrency',
      tableName: 'favorite_currencies',
      timestamps: false,
      paranoid: true,
    }
  );
  return FavoriteCurrency;
};
