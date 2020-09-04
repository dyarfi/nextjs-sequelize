import nextConnect from 'next-connect';
const models = require('../../../db/models/index');

const handler = nextConnect()
  .get(async (req, res) => {
    const {
      query: { id, name },
    } = req;
    const { slug } = req.query;
    const userId = slug;
    const user = await models.users.findOne({
      where: {
        id: userId,
      },
      include: [
        {
          model: models.posts,
          as: 'posts',
        },
        {
          model: models.jobs,
          as: 'jobs',
        },
      ],
    });
    res.statusCode = 200;
    return res.json({ status: 'success', data: user });
  })
  .post(async (req, res) => {})
  .put(async (req, res) => {})
  .patch(async (req, res) => {});

export default handler;
