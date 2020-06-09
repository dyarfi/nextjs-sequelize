# Next.js with Sequelize a Full-Stack Web Application

Next.js is a react framework that allows you to combine tools from Node.js ecosystem.

### A short brief about what is Sequelize, RDBMS and ORM

- Sequelize

  Sequelize is a Node.js module that allows you to connect RDBMS databases in your Node.js Application. Used to be combined with Express.js framework a popular Node.js framework.

- RDBMS

  RDBMS (Relational Data Base Management System) is a database system that allows you to have a relationship data between tables. Usually it takes a primary key and a foreign key to connect the data between tables. RDBMS databases includes MySQL, MsSQL, PostGre, Sqlite and many others.

- ORM

  ORM (Object Relation Mapping) is a terms in database system that have a methods or functions to mapped all data in relationship between database tables. Common queries methods in ORM are `hasMany` , `belongsTo` , `hasOne` and `belongsToMany`.

So did all of these were related? Absolutely yes! In a Full-stack Web Application these tools were heavily used to make all the system running.

### Create your Next.js project

`npx create-next-app` or just `create-next-app`. Install it if you haven't `npm i create-next-app`

### Install sqlite3 and Sequelize

#### Install sequelize

`npm i -g sequelize-cli` or `yarn global add sequelize-cli`

#### Install sqlite3 driver

`npm i sqlite` or `yarn add sqlite3`

#### Install mysql driver

`npm i mysql2` or `yarn add mysql2`

#### package.json

```
{
  "name": "nextjs-sequelize",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "9.4.4",
    "postcss-preset-env": "^6.7.0",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "sequelize": "^5.21.11",
    "sqlite3": "^4.2.0"
  }
}
```

### Create a Sqlite3 database in /db/nextjs-sequelize.db and start database migration commands:

- Users model

  `sequelize model:create --name users --attributes firstName:string,lastName:string,username:string,email:string,phoneNumber:string,gender:integer,status:boolean`

- Users seed model

  `sequelize seed:generate --name users`

- Posts model

  `sequelize model:create --name posts --attributes userId:integer,title:string,slug:string,content:text,status:boolean`

- Posts seed model

  `sequelize seed:generate --name posts`

- Jobs model

  `sequelize model:create --name jobs --attributes userId:integer,title:string,slug:string,content:text,emailTo:string,reportManager:string,dateLimit:date,status:boolean`

- Jobs seed model

  `sequelize seed:generate --name jobs`

- Add Associations

  `sequelize migration:generate --name add-post-associate`
  `sequelize migration:generate --name add-jobs-associate`

#### sequelize database migration and seed commnand

`sequelize db:migrate`

`sequelize db:seed:all`

#### sequelize undo database migration and seed command

`sequelize db:migrate:undo:all`

`sequelize db:seed:undo:all`

### Start the Next.js dev server and open up http://localhost:3001/

`yarn dev`

======================================================================================
