import nextConnect from 'next-connect';
import middleware from '../../../middleware/auth';
const models = require('../../../db/models/index');

const handler = nextConnect()
  // Get method
  .get(async (req, res) => {
    const {
      query: { nextPage },
      method,
      body,
      user,
    } = req;

    const jobs = await models.jobs.findAndCountAll({
      include: [
        {
          model: models.users,
          as: 'user',
        },
      ],
      attributes: {
        exclude: ['userId'],
      },
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['id', 'DESC'],
      ],
      offset: nextPage ? +nextPage : 0,
      limit: 5,
    });

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: jobs.rows,
      total: jobs.count,
      nextPage: +nextPage + 5,
    });
  });

export default handler;
