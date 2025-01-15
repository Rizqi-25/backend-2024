-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: alumni
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumni`
--

DROP TABLE IF EXISTS `alumni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `graduation_year` int(11) NOT NULL,
  `status` enum('fresh-graduate','employed','unemployed') NOT NULL DEFAULT 'unemployed',
  `company_name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumni`
--

LOCK TABLES `alumni` WRITE;
/*!40000 ALTER TABLE `alumni` DISABLE KEYS */;
INSERT INTO `alumni` VALUES (1,'Prabowo','1122334455','Istana Negara',2024,'employed','Indonesia','Presiden','2025-01-15 07:22:20','2025-01-15 07:22:20'),(13,'Muhammad Rizqi','23829479247','Depok',2024,'employed','Universitas Indonesia','IT Infra','2025-01-15 07:31:32','2025-01-15 07:31:32'),(14,'Rere AZ Zahra','0812387537439','Depok',2025,'fresh-graduate',NULL,NULL,'2025-01-15 07:33:06','2025-01-15 07:33:06'),(15,'Mira Ananda Natalia','08123487338','Depok',2025,'fresh-graduate',NULL,NULL,'2025-01-15 07:33:59','2025-01-15 07:33:59'),(16,'Raihan Kaeni Smit','089623327323','Depok',2025,'employed','Fakultas Ilmu Komputer, Universitas Indoensia','Tukang Tambal Kompor','2025-01-15 07:34:25','2025-01-15 07:42:15'),(17,'Joko Widodo','08962332323','Solo',2024,'unemployed',NULL,NULL,'2025-01-15 07:35:03','2025-01-15 07:35:03'),(18,'Gibran Raka Buming','029322323','Istana Negara',2024,'employed','Negara Indonesia','Wakil Presiden','2025-01-15 07:47:06','2025-01-15 07:47:06'),(19,'Shin Tae-Yong','02932235656','Seoul, Korea Selatan',2024,'unemployed','Negara Indonesia','Ex-Coach','2025-01-15 07:48:00','2025-01-15 07:48:00'),(21,'SpongeBob Squarepants','029322223','Bikini Bottom',2024,'employed','Krusty Krab','Chef','2025-01-15 07:49:25','2025-01-15 07:49:25'),(22,'Squidward Tentacles','029322225','Bikini Bottom',2024,'employed','Krusty Krab','Casier','2025-01-15 07:49:47','2025-01-15 07:49:47');
/*!40000 ALTER TABLE `alumni` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-15 14:54:13
