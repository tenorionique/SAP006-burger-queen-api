'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      flavor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      complement:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      price:{
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      image:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      type:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      subtype:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};