'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {
      // define association here
    }
  };
  ProductOrder.init(
    {
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    qtd: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
  }, 
  {
    sequelize,
    timestamps: false,
    modelName: 'ProductOrder',
    tableName: 'ProductOrder'
  });
  return ProductOrder;
};