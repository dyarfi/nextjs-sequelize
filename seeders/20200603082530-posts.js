"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Posts", [
      {
        title: "Title post one",
        slug: "title-post-one",
        userId: 1,
        content: "Text content post one",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title post two",
        slug: "title-post-two",
        userId: 3,
        content: "Text content post two",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title post three",
        slug: "title-post-three",
        userId: 2,
        content: "Text content post three",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title post four",
        slug: "title-post-four",
        userId: 1,
        content: "Text content post four",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title post five",
        slug: "title-post-five",
        userId: 4,
        content: "Text content post five",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
