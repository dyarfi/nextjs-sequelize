import nextConnect from 'next-connect';
import middleware from '../../../middleware/auth';
const models = require('../../../db/models/index');

const handler = nextConnect()
  // Middleware
  .use(middleware)
  // Get method
  .get(async (req, res) => {
    const { slug } = req.query;
    const post = await models.posts.findOne({
      where: {
        slug: slug,
      },
      include: [
        {
          model: models.users,
          as: 'user',
        },
      ],
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['createdAt', 'ASC'],
      ],
    });
    res.statusCode = 200;
    return res.json({ status: 'success', data: post });
  })
  // Post method
  .post(async (req, res) => {
    const { body } = req;
    const { title, content } = body;
    const { user } = req;
    const newPost = await models.posts.create({
      title,
      content,
      status: 1,
      userId: user.id,
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newPost,
    });
  })
  // Put method
  .put(async (req, res) => {
    res.end('method - put');
  })
  // Patch method
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default handler;
