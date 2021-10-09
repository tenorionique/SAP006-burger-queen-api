'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
     products.hasMany(models.productOrders, {
       foreignKey: 'product_id',
     });
    }
  };
  products.init(
    {
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price:DataTypes.DOUBLE,
    image: DataTypes.STRING,
    type:  DataTypes.STRING,
    subtype:  DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'products',
  });
  return products;
};