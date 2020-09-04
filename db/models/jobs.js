'use strict';
module.exports = (sequelize, DataTypes) => {
  const jobs = sequelize.define(
    'jobs',
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      content: DataTypes.TEXT,
      emailTo: DataTypes.STRING,
      reportManager: DataTypes.STRING,
      dateLimit: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
    },
    {
      hooks: {
        beforeCreate: function(job, options) {
          // Do stuff
          job.slug = job.title
            .toLowerCase()
            .replace(/[^A-Za-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-');
        },
      },
    },
  );
  jobs.associate = function(models) {
    // associations can be defined here
    jobs.belongsTo(models.users, { as: 'user' });
  };
  return jobs;
};
