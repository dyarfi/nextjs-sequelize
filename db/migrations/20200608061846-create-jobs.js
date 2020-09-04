'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      emailTo: {
        type: Sequelize.STRING,
      },
      reportManager: {
        type: Sequelize.STRING,
      },
      dateLimit: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('jobs');
  },
};
