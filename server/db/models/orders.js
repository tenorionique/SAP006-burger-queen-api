'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
     orders.belongsTo(models.User, {
       foreignKey: 'user_id',
     }),
     orders.hasMany(models.productOrders, {
       foreignKey: 'order_id',
     });
    }
  };
  orders.init(
    {
    client_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    processedAt: DataTypes.DATE,
  }, 
  {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};