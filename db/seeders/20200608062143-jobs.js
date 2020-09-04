'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    var now = new Date();
    return queryInterface.bulkInsert('jobs', [
      {
        title: 'Job Post Title One',
        slug: 'job-post-title-one',
        userId: 1,
        content: 'Text content job post one',
        emailTo: 'email1@email.com',
        reportManager: 'HR Manager',
        dateLimit: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Job Post Title Two',
        slug: 'job-post-title-two',
        userId: 3,
        content: 'Text content job post two',
        emailTo: 'email1@email.com',
        reportManager: 'HR Manager',
        dateLimit: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Job Post Title Three',
        slug: 'job-post-title-three',
        userId: 2,
        content: 'Text content job post three',
        emailTo: 'email1@email.com',
        reportManager: 'HR Manager',
        dateLimit: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Job Post Title Four',
        slug: 'job-post-title-four',
        userId: 1,
        content: 'Text content job post four',
        emailTo: 'email1@email.com',
        reportManager: 'HR Manager',
        dateLimit: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Job Post Title Five',
        slug: 'job-post-title-five',
        userId: 4,
        content: 'Text content job post five',
        emailTo: 'email1@email.com',
        reportManager: 'HR Manager',
        dateLimit: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  },
};
