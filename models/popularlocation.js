'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PopularLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PopularLocation.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longtitude: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PopularLocation',
  });
  return PopularLocation;
};