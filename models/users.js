"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
    },
    {}
  );
  users.associate = function (models) {
    // associations can be defined here
    users.hasMany(models.posts, { as: "posts" });
    users.hasMany(models.jobs, { as: "jobs" });
  };
  return users;
};
