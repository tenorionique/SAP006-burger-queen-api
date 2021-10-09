'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productOrders extends Model {
    static associate(models) {
      productOrders.belongsTo(models.orders, {
        foreignKey: 'order_id',
      });
      productOrders.belongsTo(models.products, {
        foreignKey: 'product_id',
      });
    }
  };
  productOrders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productOrders',
  });
  return productOrders;
};