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
    order: [
      // Will escape title and validate DESC against a list of valid direction parameters
      ["createdAt", "DESC"],
    ],
  });

  res.statusCode = 200;
  res.json({ data: posts });
};
