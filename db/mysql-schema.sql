-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2020 at 05:33 PM
-- Server version: 8.0.18
-- PHP Version: 7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edjbbaut`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `content` text,
  `emailTo` varchar(255) DEFAULT NULL,
  `reportManager` varchar(255) DEFAULT NULL,
  `dateLimit` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `title`, `slug`, `content`, `emailTo`, `reportManager`, `dateLimit`, `status`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Job Post Title One', 'job-post-title-one', 'Text content job post one', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(2, 'Job Post Title Two', 'job-post-title-two', 'Text content job post two', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 3),
(3, 'Job Post Title Three', 'job-post-title-three', 'Text content job post three', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 2),
(4, 'Job Post Title Four', 'job-post-title-four', 'Text content job post four', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(5, 'Job Post Title Five', 'job-post-title-five', 'Text content job post five', 'email1@email.com', 'HR Manager', '2020-06-30 17:00:00', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 4);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `content` text,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `slug`, `content`, `status`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Title post one', 'title-post-one', 'Text content post one', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(2, 'Title post two', 'title-post-two', 'Text content post two', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 3),
(3, 'Title post three', 'title-post-three', 'Text content post three', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 2),
(4, 'Title post four', 'title-post-four', 'Text content post four', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 1),
(5, 'Title post five', 'title-post-five', 'Text content post five', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(32) DEFAULT NULL,
  `lastName` varchar(32) DEFAULT NULL,
  `username` varchar(32) DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(32) DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `username`, `email`, `password`, `phoneNumber`, `gender`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'John', 'Doe 1', 'johndoe1', 'example1@example.com', 'password', '0239239249239', 'f', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05'),
(2, 'Jane', 'Doe 2', 'janedoe', 'example2@example.com', 'password', '0239239249239', 'm', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05'),
(3, 'John', 'Doe 3', 'johndoe3', 'example3@example.com', 'password', '0239239249239', 'f', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05'),
(4, 'John', 'Doe 4', 'johndoe4', 'example4@example.com', 'password', '0239239249239', 'm', 1, '2020-06-13 04:46:05', '2020-06-13 04:46:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_userId_foreign_idx` (`userId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_userId_foreign_idx` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_userId_foreign_idx` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_userId_foreign_idx` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
