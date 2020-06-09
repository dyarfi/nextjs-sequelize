const models = require("../../../models/index");

export default async (req, res) => {
  const {
    query: { id, name },
    method,
    body,
  } = req;
  const userId = req.query.id;

  switch (method) {
    case "POST":
      return res.json({
        message: "ok post",
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
