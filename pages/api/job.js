const models = require("../../models/index");

export default async (req, res) => {
  const jobs = await models.jobs.findAll({
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
  res.json({ data: jobs });
};
