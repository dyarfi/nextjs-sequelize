"use strict";
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    "posts",
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      userId: DataTypes.STRING,
      content: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {}
  );
  posts.associate = function (models) {
    // associations can be defined here
    posts.belongsTo(models.users, { as: "user" });
  };
  return posts;
};
