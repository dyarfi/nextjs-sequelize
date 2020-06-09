const models = require("../../models/index");

export default async (req, res) => {
  const users = await models.users.findAll({
    // attributes: {
    //   include: [
    //     {
    //       model: models.posts,
    //       as: "posts",
    //     },
    //   ],
    // include: [[sequelize.fn("COUNT", sequelize.col("hats")), "no_hats"]],
    // },
    include: [
      {
        model: models.posts,
        as: "posts",
      },
      {
        model: models.jobs,
        as: "jobs",
      },
    ],
  });

  res.statusCode = 200;
  res.json({ data: users });
};
