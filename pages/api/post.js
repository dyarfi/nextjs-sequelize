const models = require("../../models/index");

export default async (req, res) => {
  const posts = await models.posts.findAll({
    include: [
      {
        model: models.users,
        as: "user",
      },
    ],
    attributes: {
      exclude: ["userId"],
    },
  });

  res.statusCode = 200;
  res.json({ data: posts });
};
