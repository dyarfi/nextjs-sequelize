import nextConnect from 'next-connect';
import { verifyToken } from './utils';

const middleware = nextConnect();

/* Sample using middleware */
/* middleware.use(database).use(session).use(passport.initialize()).use(passport.session()); */

/* Set restricted public access / put any api access that is restricted in here */
const restricted = ['/api/post/[slug]', '/api/job/[slug]'];

/*
 * @params {request, response, callback} default Request and Response
 * @return {object} object if true, response message if false and continue
 */
export default middleware.use(async (req, res, next) => {
  let authHeader = req.headers.authorization || '';
  let user = {};

  if (!restricted.includes(req.url) && !authHeader) {
    return next();
  }
  if (authHeader) {
    let sessionID = authHeader.split(' ')[1];
    if (sessionID) {
      user = verifyToken(sessionID);
      if (user) {
        /* Could put check against users tables in database  User.find({email:user.email}) */
        req.user = user;
      } else {
        res.statusCode = 401;
        return res.send({
          status: 'error',
          error: 'Expired',
        });
      }
    } else {
      res.statusCode = 401;
      return res.send({
        status: 'error',
        error: 'Wrong Token',
      });
    }
  } else {
    res.statusCode = 401;
    return res.send({
      status: 'error',
      error: 'Unauthorized',
    });
  }
  return next();
});
