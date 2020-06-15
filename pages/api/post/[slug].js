const models = require("../../../models/index");

export default async (req, res) => {
  const { method, body } = req;
  const { slug } = req.query;
  const { title, content } = body;

  switch (method) {
    case "POST":
      const newPost = await models.posts.create({
        title,
        content,
        status: 1,
        userId: 1,
      });

      return res.status(200).json({
        message: "done",
        data: newPost,
      });

    case "PATCH":
      return res.json({
        message: "ok post",
      });

    case "GET":
      const post = await models.posts.findOne({
        where: {
          slug: slug,
        },
        include: [
          {
            model: models.users,
            as: "user",
          },
        ],
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ["createdAt", "ASC"],
        ],
      });

      res.statusCode = 200;
      return res.json({ data: post });

    default:
      break;
  }
};
