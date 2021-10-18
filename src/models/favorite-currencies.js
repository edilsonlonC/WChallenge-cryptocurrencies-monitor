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
    }
  }
  FavoriteCurrency.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'FavoriteCurrency',
      tableName: 'favorites_currencies',
      timestamps: false,
      paranoid: true,
    }
  );
  return FavoriteCurrency;
};
