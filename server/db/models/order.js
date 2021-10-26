'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
     Order.belongsTo(models.User, {
       foreignKey: 'user_id',
     }),
     Order.belongsToMany(models.Product, {
       through: 'ProductOrder,',
       as:'Products',
       foreignKey: 'order_id',
     });
    }
  };
  Order.init(
    {
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    processedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, 
  {
    sequelize,
    modelName: 'Order',
    tableName: 'Order',
  });
  return Order;
};