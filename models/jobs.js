"use strict";
module.exports = (sequelize, DataTypes) => {
  const jobs = sequelize.define(
    "jobs",
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
    {}
  );
  jobs.associate = function (models) {
    // associations can be defined here
    jobs.belongsTo(models.users, { as: "user" });
  };
  return jobs;
};
