const models = require("../../../models/index");

export default async (req, res) => {
  const {
    query: { id, name },
    method,
    body,
  } = req;
  const { username, email, password } = body;
  const userId = req.query.id;

  switch (method) {
    case "POST":
      const newPost = await models.users.create({
        username,
        email,
        password,
        status: 1,
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
      const user = await models.users.findOne({
        where: {
          id: userId,
        },
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
      return res.json({ data: user });

    default:
      break;
  }
};
