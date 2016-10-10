-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2016 at 01:57 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sentinel`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_todo`
--

CREATE TABLE `user_todo` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `detail` text NOT NULL,
  `pri` tinyint(4) NOT NULL,
  `s_t` varchar(255) NOT NULL,
  `s_d` varchar(255) NOT NULL,
  `s_m` varchar(255) NOT NULL,
  `s_y` varchar(255) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_todo`
--

INSERT INTO `user_todo` (`id`, `name`, `detail`, `pri`, `s_t`, `s_d`, `s_m`, `s_y`, `time_stamp`) VALUES
(106, 'immigration services', 'check out the local immigration office and ask them about the recent updates', 2, '10:00', '21', '8', '2016', '2016-08-20 23:08:51'),
(107, 'Grocery store', 'Go to the grocery store and buy something for the festival', 3, '11:00', '21', '8', '2016', '2016-08-20 23:08:56'),
(108, 'hackathon presentation', 'Get ready for the hackathon presentation. Prepare the video and freshen up', 4, '07:30', '21', '8', '2016', '2016-08-20 23:09:02'),
(109, 'Presentation ', 'hackathon presentation ... present our sentinel', 3, '08:30', '21', '8', '2016', '2016-08-20 23:09:11'),
(110, '', '', 0, '', '2', '0', '0', '2016-08-20 23:39:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_todo`
--
ALTER TABLE `user_todo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_todo`
--
ALTER TABLE `user_todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
