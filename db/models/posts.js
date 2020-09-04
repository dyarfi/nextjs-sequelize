'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    'posts',
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      content: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function(post, options) {
          // Do stuff
          post.slug = post.title
            .toLowerCase()
            .replace(/[^A-Za-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-');
        },
      },
    },
  );
  posts.associate = function(models) {
    // associations can be defined here
    posts.belongsTo(models.users, { as: 'user' });
  };
  return posts;
};
