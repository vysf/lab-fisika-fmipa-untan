-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2022 at 10:15 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_labfisika`
--

-- --------------------------------------------------------

--
-- Table structure for table `bebas_lab`
--

CREATE TABLE `bebas_lab` (
  `id` char(36) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `nim` char(11) NOT NULL,
  `prodi` char(24) NOT NULL,
  `status` enum('Selesai','Menunggu Proses') NOT NULL DEFAULT 'Menunggu Proses',
  `hp` char(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nomorRegistrasi` int(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bebas_lab`
--

INSERT INTO `bebas_lab` (`id`, `nama`, `nim`, `prodi`, `status`, `hp`, `email`, `nomorRegistrasi`, `createdAt`, `updatedAt`) VALUES
('9efe177c-d53e-4f7b-a917-9cb47b11ec15', 'Arief', 'H1071141007', 'Rekayasa Sistem Komputer', 'Selesai', '085252591472', 'ariefmuhammad21@gmail.com', 1373, '2021-04-23 15:29:15', '2021-04-26 12:42:57'),
('a50ede00-9cbd-45ed-9df1-c3a50398582f', 'Yusuf Umar Al Hakim', 'H1071171026', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1375, '2021-05-03 09:26:08', '2021-05-03 09:26:08'),
('1796efd8-73f5-4b8c-8750-bf8c8768cc52', 'Yusuf Umar Al Hakim', 'H1071171027', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1376, '2021-05-03 09:27:08', '2021-05-03 09:27:08'),
('a8b642f6-6970-49d2-9df5-f19748fd485f', 'Tampan', 'H1071171023', 'Matematika', 'Menunggu Proses', '085252591472', 'yusuf@gmail.com', 1377, '2021-06-17 12:24:48', '2021-06-17 12:24:48'),
('b968d1e6-d71c-4854-8929-5cbba65670f8', 'Tampan', 'H1071171021', 'Matematika', 'Menunggu Proses', '085252', 's@gmail.com', 1378, '2021-06-17 12:29:56', '2021-06-17 12:29:56'),
('4e64b7e6-718a-4a35-91ad-9746f34e0fc0', 'Yusuf1', 'H1071171028', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1379, '2021-06-24 14:18:26', '2021-06-24 14:18:26'),
('00ec8f3e-56fd-4fe2-ab56-1f8ec1b781ac', 'Yusuf1', 'H1071171029', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1380, '2021-06-24 14:18:38', '2021-06-24 14:18:38'),
('a59a6220-c993-4d2f-aa57-042e6089369b', 'Yusuf3', 'H1071171030', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1381, '2021-06-24 14:18:51', '2021-06-24 14:18:51'),
('dc8f39c0-df8f-4864-8bba-ce370314e3bb', 'Yusuf3', 'H1071171031', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1382, '2021-06-24 14:18:57', '2021-06-24 14:18:57'),
('7556d547-4e7a-4763-99a5-79fa6f34a6d8', 'Yusuf3', 'H1071171032', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1383, '2021-06-24 14:19:01', '2021-06-24 14:19:01'),
('91c86e92-3313-4da5-bbe8-c7764b68c391', 'Yusuf3', 'H1071171033', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1384, '2021-06-24 14:19:06', '2021-06-24 14:19:06'),
('aea26e03-f2b4-4ea6-bcda-8241160cd554', 'Yusuf3', 'H1071171034', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1385, '2021-06-24 14:19:11', '2021-06-24 14:19:11'),
('07afb79e-b30f-4b7e-adf1-6f3802d9b5c7', 'Yusuf3', 'H1071171035', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1386, '2021-06-24 14:19:18', '2021-06-24 14:19:18'),
('cef5a82d-7ca9-4337-843c-b05bc951089d', 'Yusuf3', 'H1071171036', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1387, '2021-06-24 14:19:23', '2021-06-24 14:19:23'),
('73899ff7-9c52-48f1-b380-b9d5a51198bf', 'Yusuf3', 'H1071171037', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1388, '2021-06-24 14:19:27', '2021-06-24 14:19:27'),
('eb290f12-d599-4c56-ad57-6766b1d0c02e', 'Yusuf3', 'H1071171038', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1389, '2021-06-24 14:19:32', '2021-06-24 14:19:32'),
('ecda6008-11bf-40a8-8a4c-c5086553c2f0', 'naruto', 'H1071171039', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1390, '2021-06-24 14:20:10', '2021-06-24 14:20:10'),
('81cb0b98-8e7c-4a6d-9a9b-f8ad6751ad64', 'naruto', 'H1071171040', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1391, '2021-06-24 14:20:17', '2021-06-24 14:20:17'),
('43e662e9-0b74-4665-aa14-f74335bff961', 'naruto', 'H1071171041', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1392, '2021-06-24 14:20:20', '2021-06-24 14:20:20'),
('ac57e05e-2601-47d8-995a-531e55788a45', 'naruto', 'H1071171042', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1393, '2021-06-24 14:20:24', '2021-06-24 14:20:24'),
('f4595ba6-89ab-4384-ac5b-a05647924aba', 'naruto', 'H1071171043', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1394, '2021-06-24 14:20:30', '2021-06-24 14:20:30'),
('b115e5b3-a060-47d7-8072-939742463975', 'naruto', 'H1071171044', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1395, '2021-06-24 14:20:36', '2021-06-24 14:20:36'),
('5d6dfb8c-ed56-4d58-9dba-cc0503d859de', 'kucing', 'H1071171045', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1396, '2021-06-24 14:20:48', '2021-06-24 14:20:48'),
('c12a7882-353f-4696-8b60-fee616a51927', 'kucing', 'H1071171046', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1397, '2021-06-24 14:20:53', '2021-06-24 14:20:53'),
('b658e0e7-4db5-4668-bf9e-0da453e25533', 'kucing', 'H1071171047', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1398, '2021-06-24 14:20:57', '2021-06-24 14:20:57'),
('fa51e8a2-04d7-4a24-9455-f8ef66145524', 'kucing', 'H1071171048', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1399, '2021-06-24 14:21:01', '2021-06-24 14:21:01'),
('35469bc7-d031-4a6e-a09d-c0387901adad', 'kucing', 'H1071171049', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1400, '2021-06-24 14:21:06', '2021-06-24 14:21:06'),
('82c4c0f2-571d-4b61-b943-4ffb1fb29b84', 'kucing', 'H1071171010', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1401, '2021-06-24 14:21:10', '2021-06-24 14:21:10'),
('bcbf7b11-472c-4605-b5e6-70eace2a1f02', 'kucing', 'H1071171001', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1402, '2021-06-24 14:21:22', '2021-06-24 14:21:22'),
('4a3f24e0-153f-4233-9447-bca4cd94fd33', 'skubidu', 'H1071171002', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1403, '2021-06-24 14:21:35', '2021-06-24 14:21:35'),
('f809dfb9-2ce9-4e5a-a2b0-2ae140fd389f', 'skubidu', 'H1071171003', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1404, '2021-06-24 14:21:39', '2021-06-24 14:21:39'),
('f86edd53-2e65-48e6-a030-b9587aaa749d', 'skubidu', 'H1071171004', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1405, '2021-06-24 14:21:57', '2021-06-24 14:21:57'),
('58c3f316-09ba-4544-9ab1-c8fb8def09b9', 'skubidu', 'H1071171005', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1406, '2021-06-24 14:22:01', '2021-06-24 14:22:01'),
('a9ea9a20-9925-4243-91a2-7b8c5ba10b72', 'skubidu', 'H1071171006', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1407, '2021-06-24 14:22:07', '2021-06-24 14:22:07'),
('9024f6bb-2ae9-4a38-8796-99bba757338a', 'skubidu', 'H1071171007', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1408, '2021-06-24 14:22:12', '2021-06-24 14:22:12'),
('2c047595-04fa-400e-aaaa-e7178f2fc1db', 'skubidu', 'H1071171008', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1409, '2021-06-24 14:22:16', '2021-06-24 14:22:16'),
('460ce644-294e-4ffa-bb12-70426c051c52', 'skubidu', 'H1071171009', 'Rekayasa Sistem Komputer', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1410, '2021-06-24 14:22:20', '2021-06-24 14:22:20'),
('334a94b0-e995-45fe-b6c5-5df96e107d98', 'Yusuf Umar Al Hakim', 'H1071171025', 'Geofisika', 'Menunggu Proses', '085252591472', 'yusufumar@student.untan.ac.id', 1417, '2022-03-28 13:36:33', '2022-03-28 13:36:33');

-- --------------------------------------------------------

--
-- Table structure for table `permohonan_nilai_lab`
--

CREATE TABLE `permohonan_nilai_lab` (
  `id` char(36) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `nim` char(11) NOT NULL,
  `prodi` char(24) NOT NULL,
  `matkul` char(30) NOT NULL,
  `hp` char(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tahun` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `permohonan_nilai_lab`
--

INSERT INTO `permohonan_nilai_lab` (`id`, `nama`, `nim`, `prodi`, `matkul`, `hp`, `email`, `tahun`, `createdAt`) VALUES
('a30be555-b0f6-4708-898a-0f35df0523c6', 'tampan', 'H1071171025', 'Fisika', 'Fisika Dasar 1', '085252', 'y@gmail.com', '2015', '2021-06-17 13:07:51'),
('a6af9a2e-4c27-4ab3-9867-2563c4cd092e', 'tampan', 'H1071171025', 'Matematika', 'Fisika Modern', '085252', 't@gmail.com', '2017,2019', '2021-06-17 12:51:42');

-- --------------------------------------------------------

--
-- Table structure for table `praktikum_lab`
--

CREATE TABLE `praktikum_lab` (
  `id` char(36) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `gender` char(9) NOT NULL,
  `nim` char(11) NOT NULL,
  `prodi` char(24) NOT NULL,
  `hp` char(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `reguler` char(1) NOT NULL,
  `praktikum` char(29) NOT NULL,
  `keterangan` enum('Ikut Praktikum','Hanya Mengulang Teori') NOT NULL DEFAULT 'Ikut Praktikum',
  `angkatan` int(4) NOT NULL,
  `ketua` char(5) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `praktikum_lab`
--

INSERT INTO `praktikum_lab` (`id`, `nama`, `gender`, `nim`, `prodi`, `hp`, `email`, `reguler`, `praktikum`, `keterangan`, `angkatan`, `ketua`, `createdAt`, `updatedAt`) VALUES
('029a1625-9fe8-4228-8e48-54be5e8f0307', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Modern', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:56:27', '2021-06-18 12:56:27'),
('0826ec8f-86ec-489c-b235-625aad0cb2ee', 'Ilham ganteng', 'Laki-laki', 'H1071171026', 'Fisika', '08525252525', 'nande@gmail.com', 'A', 'Fisika Dasar 1A', '', 2014, 'Ya', '2021-06-22 13:16:49', '2021-06-22 13:16:49'),
('0a10345f-d0af-4d08-89b8-f10f57b5c66c', 'Tampan', 'Laki-laki', 'H1071171025', 'Matematika', '085252', 'yusuf@gmail.com', 'B', 'Fisika Dasar 2B', '', 2017, 'Ya', '2021-06-17 11:42:53', '2021-06-17 11:42:53'),
('0fbc4324-55c7-45ad-8194-ddfa711dc12e', 'yss', 'Laki-laki', 'H1071171026', 'Matematika', '085252591472', 'y@gmail.com', 'B', 'Fisika Modern', '', 2014, 'Tidak', '2021-06-17 12:28:55', '2021-06-17 12:28:55'),
('12edc7c6-14da-436a-adb9-dd0dcc220612', 'Yusuf Umar Al Hakim1', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:50:45', '2021-06-18 12:50:45'),
('17524e88-1b74-411b-b576-8acc41e92623', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:56:03', '2021-06-18 12:56:03'),
('17db6353-c4ae-4428-81d3-77cdc987e1b0', 'Yusuf Umar Al Hakim2', 'Laki-laki', 'H1071171027', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-05-04 14:25:38', '2021-06-23 13:16:55'),
('1e320d02-15cb-4045-9d33-df04bf66e23c', 'Tampan2', 'Laki-laki', 'H1071171025', 'Matematika', '085252591472', 'yusuf@gmail.com', 'A', 'Fisika Dasar 1B', '', 2018, 'Tidak', '2021-06-17 11:49:56', '2021-06-17 11:49:56'),
('22b21e7f-f78b-45fd-9067-a2d3564ae35b', 'mamat', 'Laki-laki', 'H1071171024', 'Geofisika', '08525252525', 'mamat@student.untan.ac.id', 'A', 'Fisika Modern', '', 2017, 'Tidak', '2021-08-16 15:37:04', '2021-08-16 15:37:04'),
('3c0f659c-9619-4503-9146-70a5f5e29c14', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:57:46', '2021-06-18 12:57:46'),
('42771c9f-17e7-4441-9fda-497846e01a4c', 'Yusuf Umar Al Hakim3', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:50:50', '2021-06-23 13:17:04'),
('43040983-ca1c-412f-927e-763d5fd8f9ea', 'Tampan2', 'Laki-laki', 'H1071171025', 'Matematika', '085252591472', 'yusuf@gmail.com', 'A', 'Fisika Dasar 1A', '', 2018, 'Tidak', '2021-06-17 11:49:10', '2021-06-17 11:49:10'),
('45fdf25e-86f5-47c1-9ee8-4c57c069c1ce', 'Yusuf Umar Al Hakim4', 'Laki-laki', 'H1071171028', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:49:49', '2021-06-23 13:17:11'),
('46456a3f-0d4f-40a2-8c1c-1ad63edca731', 'Yusuf Umar Al Hakim5', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:50:42', '2021-06-23 13:20:55'),
('4a8ae613-7a52-4696-be42-117e638a6fbe', 'Yusuf Umar Al Hakim6', 'Laki-laki', 'H1071171023', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-05-04 13:36:58', '2021-06-23 13:20:47'),
('511067de-5610-41e4-b58e-4c085450c6f4', 'Yusuf Umar Al Hakim7', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Elektronika Dasar', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:51:02', '2021-06-23 13:17:34'),
('52e833f0-07a8-4668-aec8-5404a639f93e', 'Yusuf Umar Al Hakim8', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:50:30', '2021-06-23 13:17:41'),
('59ab85ce-b55b-42c8-84e4-d07f7716d4ab', 'Yusuf Umar Al Hakim9', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Modern', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:50:14', '2021-06-23 13:17:48'),
('70231ab5-af26-411b-917a-6169e0fecf09', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Elektronika Dasar', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:57:07', '2021-06-18 12:57:07'),
('79602979-aeed-4965-b5d2-491e57f4d8e2', 'Yusuf Umar Al Hakim10', 'Laki-laki', 'H1071171026', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-05-04 14:20:00', '2021-06-23 13:17:54'),
('7c5a6614-2392-4c77-85d5-18657e6e5252', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:55:54', '2021-06-18 12:55:54'),
('7cdcf993-4ba5-48a3-be90-687594843dcc', 'Yusuf Umar Al Hakim11', 'Laki-laki', 'H1071171026', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-05-04 14:20:18', '2021-06-23 13:18:01'),
('7fb7e55c-ec2c-41c3-bddf-9ae52d640bf7', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:56:08', '2021-06-18 12:56:08'),
('86e9c1f8-2ace-4520-886b-2a7800181d7a', 'yusuf', 'Laki-laki', 'H1071171028', 'Matematika', '085252591472', 'yusuf@gmail.com', 'A', 'Elektronika Dasar', '', 2017, 'Ya', '2021-06-14 13:05:16', '2021-06-14 13:05:16'),
('8762c7ae-dd81-4da2-9bcd-30e300a75381', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:55:59', '2021-06-18 12:55:59'),
('8c053f07-b950-44ed-bedd-12e969aa8875', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:55:38', '2021-06-18 12:55:38'),
('8d8dc5a9-7f17-4d0b-9463-f6281e7bb56b', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171028', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:49:29', '2021-06-18 12:49:29'),
('a188fcac-c3c5-4576-a6de-cbbe08779743', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:57:26', '2021-06-18 12:57:26'),
('a2514a9c-ac2b-44ec-9974-140973ce7060', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171023', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-05-04 13:34:50', '2021-05-04 13:34:50'),
('a3ca8b23-68d0-41f2-a70b-06260f076b02', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:57:36', '2021-06-18 12:57:36'),
('a51c05be-ea79-481e-9f4a-7a5c8089ada2', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171028', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Modern', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-10 10:20:28', '2021-06-10 10:20:28'),
('a5e64305-9c4a-4d3f-b63e-2aba1140a4e5', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:57:22', '2021-06-18 12:57:22'),
('a6585e0b-5a2b-4365-ad92-812106b6ecdd', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Elektronika Dasar', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:55:21', '2021-06-18 12:55:21'),
('b0845a9b-c386-4e7d-a4e1-b30658c0e733', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171028', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-05-04 14:27:51', '2021-05-04 14:27:51'),
('b0c09167-e8d9-4573-a31b-49a25cd7103b', 'Yusuf Umar Al Hakim1', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:50:36', '2021-06-18 12:50:36'),
('b4c679b7-0c5f-4928-9162-eec5100ecfaf', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:57:41', '2021-06-18 12:57:41'),
('b816e3a9-b8a8-4e41-a03e-c8261060916d', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Modern', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:58:01', '2021-06-18 12:58:01'),
('ba3d2c14-349e-42c1-b774-8bbef3ad9519', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171028', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:49:41', '2021-06-18 12:49:41'),
('c0194099-6d56-4881-80c4-a394979344d7', 'Naruto', 'Laki-laki', 'H1071171020', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:55:32', '2021-06-18 12:55:32'),
('c4e1a261-078c-4810-b6b4-1493b87510f4', 'Tampan', 'Laki-laki', 'H1071171025', 'Matematika', '085252', 'yusuf@gmail.com', 'B', 'Fisika Dasar 1', '', 2017, 'Ya', '2021-06-17 11:46:18', '2021-06-17 11:46:18'),
('d2b76cbf-7218-4cf3-8fd2-a3c6c5b1eb78', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171027', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-05-04 14:26:34', '2021-05-04 14:26:34'),
('d5c9497a-20e1-4cd5-9db4-0e23383d6d58', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171028', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1B', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:49:33', '2021-06-18 12:49:33'),
('dfaa0414-61f2-4bfd-93b0-2d980007e514', 'udin', 'Laki-laki', 'H1071171019', 'Biologi', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:57:16', '2021-06-18 12:57:16'),
('edac26db-8cf6-4afc-a911-93e541dbb879', 'Yusuf Umar Al Hakim1', 'Laki-laki', 'H1071171021', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 1', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:50:26', '2021-06-18 12:50:26'),
('fe030e07-30d1-4552-ba17-bfd67a7e9fa4', 'Yusuf Umar Al Hakim', 'Laki-laki', 'H1071171028', 'Rekayasa Sistem Komputer', '085252591472', 'yusufumar@student.untan.ac.id', 'A', 'Fisika Dasar 2A', 'Hanya Mengulang Teori', 2017, 'Tidak', '2021-06-18 12:49:45', '2021-06-18 12:49:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bebas_lab`
--
ALTER TABLE `bebas_lab`
  ADD PRIMARY KEY (`nomorRegistrasi`);

--
-- Indexes for table `permohonan_nilai_lab`
--
ALTER TABLE `permohonan_nilai_lab`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `praktikum_lab`
--
ALTER TABLE `praktikum_lab`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bebas_lab`
--
ALTER TABLE `bebas_lab`
  MODIFY `nomorRegistrasi` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1418;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
