import passport from "passport";
import models from "../../../models/index";
import nextConnect from "next-connect";
import bcrypt from "bcryptjs";
// var bcrypt = require("bycryptjs");
import jwt from "jsonwebtoken";

const KEY = process.env.JWT_KEY;

// const authenticate = (method, req, res) =>
//   new Promise((resolve, reject) => {
//     passport.authenticate(method, { session: false }, (error, token) => {
//       if (error) {
//         reject(error)
//       } else {
//         resolve(token)
//       }
//     })(req, res)
//   })

// passport.use(localStrategy)

// console.log(passportMiddleware);

const handler = nextConnect()
  .use(passport.initialize())
  .get((req, res) => {
    res.send("Hello world");
  })
  .post(async (req, res) => {
    /* Get Post Data */
    const { email, password } = req.body;
    /* Any how email or password is blank */
    if (!email || !password) {
      return res.status(400).json("Request missing username or password");
    }
    /* Check user in database */
    const user = await models.users.findOne({
      where: { email: email },
      attributes: ["id", "email", "password"],
      limit: 1,
    });
    /* Check if exists */
    if (!user) {
      res.status(400).json({ userNotFound: "User Not Found" });
    }
    /* Define variables */
    const dataUser = user.toJSON();
    const userId = dataUser.id,
      userEmail = dataUser.email,
      userPassword = dataUser.password;
    /* Check and compare password */
    bcrypt.compare(password, userPassword).then((isMatch) => {
      if (isMatch) {
        /* User matched */
        /* Create JWT Payload */
        const payload = {
          id: userId,
          email: userEmail,
        };
        /* Sign token */
        jwt.sign(
          payload,
          KEY,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
        // res.json({ data: isMatch });
      } else {
        res.status(400).json({ passwordIncorrect: "Password incorrect" });
      }
    });
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
