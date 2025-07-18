-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: shamuhik
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` bigint NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Ravikant Suthar','admin@admin.com',1234567890,'$2b$10$j.wHtv.B4B7ybBxDRfquLe9iD6qs5pMkbwDHg/lYLxIyX305g7lEu',1);
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advertisement`
--

DROP TABLE IF EXISTS `advertisement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advertisement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `mobile` bigint NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(60) NOT NULL,
  `img` varchar(60) NOT NULL,
  `status` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisement`
--

LOCK TABLES `advertisement` WRITE;
/*!40000 ALTER TABLE `advertisement` DISABLE KEYS */;
INSERT INTO `advertisement` VALUES (3,'Ravikant',8949384032,'RAvikant Suthar','/static/advertisement/1715677688807[000453].jpg','1715677688807[000453].jpg',1),(4,'Ravi',8949384032,'RAvikant Suthar','/static/advertisement/1715677729078[001055].jpg','1715677729078[001055].jpg',1),(5,'RK',9666017132,'RKKKKK','/static/advertisement/1715677892301[001087].jpg','1715677892301[001087].jpg',1),(7,'raiv',8949384032,'raiv','/static/advertisement/1715682658983[001401].jpg','1715682658983[001401].jpg',1),(8,'Raviii',8949384032,'RAvikant Suthar','/static/advertisement/1715682684955[000458].jpg','1715682684955[000458].jpg',1),(9,'Rakk',8949384032,'asdfghjkl','/static/advertisement/1715682790687[000481].jpg','1715682790687[000481].jpg',1);
/*!40000 ALTER TABLE `advertisement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` year NOT NULL,
  `file` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (11,2023,'1715016745590book.pdf');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Subject` varchar(45) NOT NULL,
  `Message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'Ravisuthar','ravi@fgmia','subjet','sdajfkls dflkj sldkfj lsdkfj lkasdfj lksdjf lksdjlk fsd f'),(2,'Ravisuthar','ravi@fgmia','subjet','sdajfkls dflkj sldkfj lsdkfj lkasdfj lksdjf lksdjlk fsd f'),(3,'Ravisuthar','ravi@fgmia','subjet','sdajfkls dflkj sldkfj lsdkfj lkasdfj lksdjf lksdjlk fsd f'),(4,'Ravisuthar','ravi@fgmia','subjet','sdajfkls dflkj sldkfj lsdkfj lkasdfj lksdjf lksdjlk fsd f'),(5,'Ravisuthar','ravi@fgmia','subjet','sdajfkls dflkj sldkfj lsdkfj lkasdfj lksdjf lksdjlk fsd f'),(6,'RavikantSuthar','ravi@gmail.com','Subject','asdf sdaf sdaf sdaf '),(7,'RavikantSuthar','ravi@gmail.com','Subject','df sdafasdf asdf f asdf sda fds'),(8,'RavikantSuthar','ravi@gmail.com','Subject','asdf sdf asdf sdf asdf sdaf sdfsdf ');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` year NOT NULL,
  `img` varchar(45) NOT NULL,
  `status` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `img_UNIQUE` (`img`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
INSERT INTO `gallery` VALUES (1,2023,'1.png',0),(2,2023,'2.png',0),(3,2023,'3.png',0);
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gifts`
--

DROP TABLE IF EXISTS `gifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gifts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) NOT NULL,
  `Numbers` varchar(20) NOT NULL,
  `Price` varchar(20) NOT NULL,
  `status` tinyint DEFAULT '0',
  `year` year NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gifts`
--

LOCK TABLES `gifts` WRITE;
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
INSERT INTO `gifts` VALUES (1,'साफा','13','3900',0,2023),(2,'सफ़ारी सूट','13','4875',0,2023),(3,'सीख','13','1300',0,2023),(4,'वधु बेस','13','16900',0,2023),(5,'21 स्टील बर्तन','13','48048',0,2023),(6,'लोहे का बक्सा','13','24180',0,2023),(7,'सोने','13','539500',0,2023),(8,'चाँदी','13','33500',0,2023),(9,'लोहे की अलमारी (6फीट)','13','123500',0,2023),(10,'प्लास्टिक की कुर्सी (4)','52','20150',0,2023),(11,'पलंग 6*4 बैक्सेडार','13','123500',0,2023);
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `givekarmawati`
--

DROP TABLE IF EXISTS `givekarmawati`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `givekarmawati` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `fatherName` varchar(45) NOT NULL,
  `year` year NOT NULL,
  `address` varchar(45) NOT NULL,
  `mobile` bigint NOT NULL,
  `Amount` int NOT NULL,
  `img` varchar(45) NOT NULL,
  `status` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `givekarmawati`
--

LOCK TABLES `givekarmawati` WRITE;
/*!40000 ALTER TABLE `givekarmawati` DISABLE KEYS */;
INSERT INTO `givekarmawati` VALUES (1,'श्री शिवप्रकाश डोयल','sdaf dsaf dsaf ',2024,'नया शहर थाने के सामने, बीकानेर',2589631470,6000,'3.png',0);
/*!40000 ALTER TABLE `givekarmawati` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `karmawati`
--

DROP TABLE IF EXISTS `karmawati`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `karmawati` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` year NOT NULL,
  `name` varchar(45) NOT NULL,
  `wifeof` varchar(45) NOT NULL,
  `img` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `mobile` bigint NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `karmawati`
--

LOCK TABLES `karmawati` WRITE;
/*!40000 ALTER TABLE `karmawati` DISABLE KEYS */;
INSERT INTO `karmawati` VALUES (1,2024,'सोहनी देवी नागल','झंवरलाला जी','11.gif','भीनासर',9928513325,1),(2,2024,'चंद्रकला माकड़','जगदीश जी','11.gif','भीनासर',9928513325,1),(3,2024,'श्यामादेवी नागल','भंवरलाल जी','11.gif','विश्वकर्मा गेट',1512223065,1);
/*!40000 ALTER TABLE `karmawati` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) NOT NULL,
  `S_Description` varchar(60) NOT NULL,
  `L_Description` text NOT NULL,
  `Image` varchar(60) NOT NULL,
  `Time` datetime NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'qwer','sdf dsajf lkds','j fklasdf jlksdajf lksdaj flkdsjafl kdsjalkf dslaf jlksadj flksjadflk jasdlkfj lksda jflsdajflksdaj lfksdjalkf jsdalf jdsa fasd fsda fasd fsda fsda fsda fs ','3.png','2024-04-02 00:22:15',1);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sammanit`
--

DROP TABLE IF EXISTS `sammanit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sammanit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` year NOT NULL,
  `name` varchar(45) NOT NULL,
  `FName` varchar(45) NOT NULL,
  `Date_of_birth` datetime NOT NULL,
  `Mobile` bigint NOT NULL,
  `address` varchar(45) NOT NULL,
  `Image` varchar(45) NOT NULL,
  `status` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sammanit`
--

LOCK TABLES `sammanit` WRITE;
/*!40000 ALTER TABLE `sammanit` DISABLE KEYS */;
INSERT INTO `sammanit` VALUES (1,2024,'चंद्रकला माकड़','जगदीश जी','1945-05-01 00:00:00',9928513325,'भीनासर','11.gif',1);
/*!40000 ALTER TABLE `sammanit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sliders`
--

DROP TABLE IF EXISTS `sliders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sliders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `SrNo` varchar(20) NOT NULL,
  `Dates` date DEFAULT NULL,
  `Year` year NOT NULL,
  `path` varchar(45) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Year_UNIQUE` (`Year`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sliders`
--

LOCK TABLES `sliders` WRITE;
/*!40000 ALTER TABLE `sliders` DISABLE KEYS */;
INSERT INTO `sliders` VALUES (1,' तेरहवा','2023-11-05',2023,'Slider-2023.png',1);
/*!40000 ALTER TABLE `sliders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `PostOn` varchar(45) NOT NULL,
  `Mobile` bigint NOT NULL,
  `img` varchar(60) NOT NULL,
  `Address` varchar(60) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'श्री कन्हैयालाल बरड़वा','प्रणेता',8546791230,'1.png','विश्वनाथ कॉलोनी, बीकानेर',1),(2,'श्री हनुमान प्रसाद डोयल','अध्यक्ष',9821255741,'2.png','विश्वनाथ कॉलोनी, बीकानेर',0),(3,'शिवप्रकाश डोयल','मंत्री',1234567890,'3.png','नया शहर थाने के सामने, बीकानेर',1),(4,'श्री छगनलाल छड़िया','कोषाध्यक्ष',9414139391,'4.png','पुष्करणा ग्राउंड के पीछे',1);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weddingregister`
--

DROP TABLE IF EXISTS `weddingregister`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weddingregister` (
  `id` int NOT NULL AUTO_INCREMENT,
  `year` year NOT NULL,
  `groomName` varchar(45) NOT NULL,
  `groomFatherName` varchar(45) NOT NULL,
  `groomGrandFatherName` varchar(45) NOT NULL,
  `groomMobile` bigint NOT NULL,
  `groomAddress` varchar(45) NOT NULL,
  `groomDOB` date NOT NULL,
  `BrideName` varchar(45) NOT NULL,
  `BrideFatherName` varchar(45) NOT NULL,
  `BrideGrandFatherName` varchar(45) NOT NULL,
  `BrideMobile` bigint NOT NULL,
  `BrideAddress` varchar(45) NOT NULL,
  `BrideDOB` date NOT NULL,
  `status` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weddingregister`
--

LOCK TABLES `weddingregister` WRITE;
/*!40000 ALTER TABLE `weddingregister` DISABLE KEYS */;
/*!40000 ALTER TABLE `weddingregister` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weddings`
--

DROP TABLE IF EXISTS `weddings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weddings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `SrNo` int NOT NULL DEFAULT '0',
  `year` year NOT NULL,
  `M_Name` varchar(60) NOT NULL,
  `MF_Name` varchar(60) NOT NULL,
  `MG_Name` varchar(60) NOT NULL,
  `M_Address` varchar(60) NOT NULL,
  `M_Mobile` bigint NOT NULL,
  `M_Photo` varchar(40) NOT NULL,
  `F_Name` varchar(60) NOT NULL,
  `FF_Name` varchar(60) NOT NULL,
  `FG_Name` varchar(60) NOT NULL,
  `F_Address` varchar(60) NOT NULL,
  `F_Mobile` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weddings`
--

LOCK TABLES `weddings` WRITE;
/*!40000 ALTER TABLE `weddings` DISABLE KEYS */;
INSERT INTO `weddings` VALUES (1,1001,2023,'महेश कुमार गेपाल','श्री ओमप्रकाश जी','स्व. श्री शंकर लाल जी','सुथारो की बड़ी गवाड़, बीकानेर',9929382549,'1001_F.png 1001_M.png','दिव्या बरड़वा','प्रेमरतन जी','गणेशदास जी','सुजानदेशर, बीकानेर',9950049948),(2,1002,2023,'अर्जुनराम मोटियार','रतनलाल जी','कानाराम जी','बंगला नगर, बीकानेर',9001165683,'1002_F.png 1002_M.png','भारती बरड़वा','प्रेमरतन जी','गणेशदास जी','सुजानदेशर, बीकानेर',9950049948),(3,1003,2023,'गणेश गेपाल','ओमप्रकाश जी','श्री शंकर लाल जी','सुथारो की बड़ी गवाड़, बीकानेर',9929382549,'1003_F.png 1003_M.png','भावना माण्डना','शिवलाल जी','छोटूराम जी','विश्वकर्मा गेट, बीकानेर',9711841247),(4,1004,2023,'द्वारकाप्रसाद जांगिड़','विनोद कुमार जी','स्व. लक्ष्मणराम जी','मुक्ता प्रसाद, बीकानेर',9602323657,'1004_F.png 1004_M.png','खुशबु बुढ़ड़','मनोज कुमार जी','नारायण जी','बंगला नगर, बीकानेर',7976759600),(5,1005,2023,'प्रकाश छाड़िया','मघाराम जी','स्व. भगवाना राम जी','नाथूसर बास, बीकानेर',8829880386,'1005_F.png 1005_M.png','शोभा खोखा','राजेन्द्र जी','रामेश्वर लाल जी','मुरलीधर व्यास कॉलोनी, बीकानेर',9772077766),(6,1006,2023,'कैलाश छाड़िया','मघाराम जी','स्व. भगवाना राम जी','नाथूसर बास, बीकानेर',8829880386,'1006_F.png 1006_M.png','सुमन खोखा','राजेन्द्र जी','रामेश्वर लाल जी','मुरलीधर व्यास कॉलोनी, बीकानेर',9772077766),(7,1007,2023,'रामु (राम) आसदेव','प्रभुदयाल जी','बुद्धाराम जी','बंगला नगर, बीकानेर',6378923305,'1007_F.png 1007_M.png','सीता नागल','हीरालाल जी','सुंदरलाल जी','मुरली मनोहर मंदिर, भिनासर, बीकानेर',9829630549),(8,1008,2023,'इंद्रचंद दुर्गेश्वर','भँवरलाल जी','किशनलाल जी','माकडो का महोला',8875552117,'1008_F.png 1008_M.png','गीता नागल','हीरालाल जी','सुंदरलाल जी','मुरली मनोहर मंदिर, भिनासर, बीकानेर',9829630549),(9,1009,2023,'गणेश बरड़वा','लालचंद जी','स्व. धूड़ाराम जी','विश्वकर्मा गेट, बीकानेर',6367694643,'1009_F.png 1009_M.png','मेगा लेखराव','मदनलाल जी','रतनलाल जी','जीवणनाथ जी बगेची, बीकानेर',8963839205),(10,1010,2023,'ब्रज मोहन लेखराव','मदनलाल जी','रतनलाल जी','जीवणनाथ जी बगेची, बीकानेर',8963839205,'1010_F.png 1010_M.png','मंजू बरड़वा','लालचंद जी','स्व. धूड़ाराम जी','विश्वकर्मा गेट, बीकानेर',6367694643),(11,1011,2023,'जसोल बामणिया','सीताराम जी','स्व. मांगीलाल जी','विश्वकर्मा कालोनी, गंगाशहर, बीकानेर',9314904595,'1011_F.png 1011_M.png','तारा कुलरिया','खींवाराम जी','स्व. अमरचंद जी','जय गणेश बिहार, बीकानेर',9928190109),(12,1012,2023,'गोविंद लदरेचा','माणकलाल जी','मोहनलाल जी','बंगला नगर, बीकानेर',8890935788,'1012_F.png 1012_M.png','नीजू धामु','मनोज जी','भीखराम जी','तिलक नगर, बीकानेर',9001345881),(13,1013,2023,'गणेशाराम मांडण','छगन लाल जी','खुमाणाराम जी','देंसलसर नौखा',9352434255,'1013_F.png 1013_M.png','निशा गेपाल','रामेश्वरलाल जी','स्व. हरखा राम, जी','विश्वकर्मा गेट, बीकानेर',9950494233);
/*!40000 ALTER TABLE `weddings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 16:18:55
