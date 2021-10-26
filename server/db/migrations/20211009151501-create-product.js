'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
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
        allowNull: true,
        type: Sequelize.STRING
      },
      complement:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      price:{
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      image:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      type:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      sub_type:{
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Product');
  }
};