'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      hooks: {
        beforeCreate: async function(user, options) {
          // Do stuff
          user.password = await bcrypt.hashSync(user.password, 10);
        },
      },
    },
  );
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.posts, { as: 'posts' });
    users.hasMany(models.jobs, { as: 'jobs' });
  };
  return users;
};
