CREATE TABLE users (
  id integer NOT NULL,
  firstName varchar(32) DEFAULT NULL,
  lastName varchar(32) DEFAULT NULL,
  username varchar(32) DEFAULT NULL,
  email varchar(32) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  phoneNumber varchar(32) DEFAULT NULL,
  gender varchar(1) DEFAULT NULL,
  status smallint DEFAULT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NOT NULL
);

ALTER TABLE users
  ADD PRIMARY KEY (id);

INSERT INTO users (id, firstName, lastName, username, email, password, phoneNumber, gender, status, createdAt, updatedAt) VALUES
(1, 'John', 'Doe 1', 'johndoe1', 'example1@example.com', 'password', '0239239249239', 'f', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05'),
(2, 'Jane', 'Doe 2', 'janedoe', 'example2@example.com', 'password', '0239239249239', 'm', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05'),
(3, 'John', 'Doe 3', 'johndoe3', 'example3@example.com', 'password', '0239239249239', 'f', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05'),
(4, 'John', 'Doe 4', 'johndoe4', 'example4@example.com', 'password', '0239239249239', 'm', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05');

CREATE TABLE jobs (
  id integer NOT NULL,
  title varchar(255) DEFAULT NULL,
  slug varchar(255) DEFAULT NULL,
  content text,
  emailTo varchar(255) DEFAULT NULL,
  reportManager varchar(255) DEFAULT NULL,
  dateLimit timestamp DEFAULT NULL,
  status smallint DEFAULT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NOT NULL,
  userId integer DEFAULT NULL
);

ALTER TABLE jobs
  ADD PRIMARY KEY (id);

INSERT INTO jobs (id, title, slug, content, emailTo, reportManager, dateLimit, status, createdAt, updatedAt, userId) VALUES
(1, 'Job Post Title One', 'job-post-title-one', 'Text content job post one', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(2, 'Job Post Title Two', 'job-post-title-two', 'Text content job post two', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 3),
(3, 'Job Post Title Three', 'job-post-title-three', 'Text content job post three', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 2),
(4, 'Job Post Title Four', 'job-post-title-four', 'Text content job post four', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(5, 'Job Post Title Five', 'job-post-title-five', 'Text content job post five', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 4);

CREATE TABLE posts (
  id integer NOT NULL,
  title varchar(255) DEFAULT NULL,
  slug varchar(255) DEFAULT NULL,
  content text,
  status smallint DEFAULT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NOT NULL,
  userId integer DEFAULT NULL
);

ALTER TABLE posts
  ADD PRIMARY KEY (id);

INSERT INTO posts (id, title, slug, content, status, createdAt, updatedAt, userId) VALUES
(1, 'Title post one', 'title-post-one', 'Text content post one', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(2, 'Title post two', 'title-post-two', 'Text content post two', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 3),
(3, 'Title post three', 'title-post-three', 'Text content post three', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 2),
(4, 'Title post four', 'title-post-four', 'Text content post four', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(5, 'Title post five', 'title-post-five', 'Text content post five', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 4);
