'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        userId: 1,
        title: 'Title post one',
        slug: 'title-post-one',
        content: 'Text content post one',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        title: 'Title post two',
        slug: 'title-post-two',
        content: 'Text content post two',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Title post three',
        slug: 'title-post-three',
        content: 'Text content post three',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Title post four',
        slug: 'title-post-four',
        content: 'Text content post four',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        title: 'Title post five',
        slug: 'title-post-five',
        content: 'Text content post five',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
