# Next.js with Sequelize a Full-Stack Web Application

Next.js is a production ready React framework that allows you to combine with other tools from Node.js ecosystem. Sequelize an easy-to-use multi SQL dialect ORM (Object Relation Mapping) for Node.js ecosystem framework application.

![Sequelize](./public/sequelize.svg) ![Next.js](./public/nextjs.svg)

### A short brief about what is Sequelize, RDBMS and ORM

- Sequelize

  Sequelize is a Node.js module that allows you to connect RDBMS databases in your Node.js Application. Sequelize used to be combined with Express.js framework Web Application a popular Node.js framework.

- RDBMS

  RDBMS (Relational Data Base Management System) is a database system that allows you to have a relationship data between tables. Usually it takes a primary key and a foreign key to connect the data between tables. RDBMS databases includes MySQL, MsSQL, PostGre, Sqlite and many others.

- ORM

  ORM (Object Relation Mapping) is a terms in database system that have a methods or functions to mapped all data in relationship between database tables. Common queries methods in ORM are `hasMany` , `belongsTo` , `hasOne` and `belongsToMany`. Other web programming language such as PHP Laravel Framework had already adopted ORM (Eloquent).

So did all of these were related? Absolutely yes! In a Full-stack Web Application these tools were heavily used to make all the system running.

### Create your Next.js project

`npx create-next-app` or just `create-next-app`. Install it if you haven't `npm i create-next-app`

### Install sqlite3 and Sequelize

#### Install sequelize-cli

`npm i -g sequelize-cli` or `yarn global add sequelize-cli`

#### Install sequelize

`npm i sequelize` or `yarn add sequelize` and `sequelize init`

#### Install sqlite3 driver

`npm i sqlite3` or `yarn add sqlite3`

#### Install mysql driver

`npm i mysql2` or `yarn add mysql2`

#### package.json

```json
{
  "name": "nextjs-sequelize",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "js-cookie": "^2.2.1",
    "jsonwebtoken": "^8.5.1",
    "mysql2": "^2.1.0",
    "next": "9.4.4",
    "next-connect": "^0.7.1",
    "nprogress": "^0.2.0",
    "pg": "^7.0.0",
    "pg-hstore": "^2.3.3",
    "postcss-preset-env": "^6.7.0",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "sequelize": "^5.21.11"
  }
}
```

### Create a Sqlite3 database in /db/nextjs-sequelize.db and start database migration commands:

- Users model

  `sequelize model:create --name users --attributes firstName:string,lastName:string,username:string,email:string,phoneNumber:string,gender:string,status:boolean`

- Users model seed

  `sequelize seed:generate --name users`

- Posts model

  `sequelize model:create --name posts --attributes userId:integer,title:string,slug:string,content:text,status:boolean`

- Posts model seed

  `sequelize seed:generate --name posts`

- Add Associations \* do not execute before you edit the seeder files.

  `sequelize migration:generate --name add-post-associate`

#### Open seeders files and modify.

- ./seeders/xxxxxxxxxxx-users.js

```js
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "johndoe1",
        firstName: "John",
        lastName: "Doe 1",
        email: "example1@example.com",
        password:
          "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
        status: 1,
        gender: "f",
        phoneNumber: "0239239249239",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
```

- ./seeders/xxxxxxxxxxx-posts.js

```js
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        title: "Title post one",
        slug: "title-post-one",
        userId: 1,
        content: "Text content post one",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
```

#### sequelize database migration and seed commnand

`sequelize db:migrate`

`sequelize db:seed:all`

#### sequelize undo database migration and seed command

`sequelize db:migrate:undo:all`

`sequelize db:seed:undo:all`

### Start the Next.js dev server and open up http://localhost:3000/

`yarn dev`

======================================================================================

### Demos [https://nextjs-sequelize.now.sh/](https://nextjs-sequelize.now.sh/)

All logos, trademarks and registered trademarks are the property of their respective owners.
