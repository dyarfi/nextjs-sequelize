'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(32),
      },
      lastName: {
        type: Sequelize.STRING(32),
      },
      username: {
        type: Sequelize.STRING(32),
      },
      email: {
        type: Sequelize.STRING(32),
      },
      password: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING(32),
      },
      gender: {
        type: Sequelize.STRING(1),
      },
      status: {
        type: Sequelize.INTEGER(1),
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
