'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'johndoe1',
        firstName: 'John',
        lastName: 'Doe 1',
        email: 'example1@example.com',
        password: 'password',
        status: 1,
        gender: 'f',
        phoneNumber: '0239239249239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'janedoe',
        firstName: 'Jane',
        lastName: 'Doe 2',
        email: 'example2@example.com',
        password: 'password',
        status: 1,
        gender: 'm',
        phoneNumber: '0239239249239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'johndoe3',
        firstName: 'John',
        lastName: 'Doe 3',
        email: 'example3@example.com',
        password: 'password',
        status: 1,
        gender: 'f',
        phoneNumber: '0239239249239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'johndoe4',
        firstName: 'John',
        lastName: 'Doe 4',
        email: 'example4@example.com',
        password: 'password',
        status: 1,
        gender: 'm',
        phoneNumber: '0239239249239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
