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
        allowNull: false,
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
      subtype:{
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Product');
  }
};