CREATE DATABASE opus;
USE opus;
CREATE TABLE `offer` (
    `id_offer`  int auto_increment NOT NULL PRIMARY KEY,
    `society_name` varchar(60) NOT NULL,
    `title` varchar(60) NOT NULL,
    `picture` text NOT NULL,
    `price` int NOT NULL,
    `capacity` int NOT NULL,
    `offer_description` text NOT NULL,
    `address_street` varchar(255) NOT NULL,
    `address_city` varchar(100) NOT NULL,
    `zip_code` varchar(25) NOT NULL,
    `country` varchar(50) NOT NULL  
);

CREATE TABLE `user` (
    `id_user` int auto_increment NOT NULL PRIMARY KEY,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `society_name` varchar(100) NOT NULL,
    `email` varchar(200) NOT NULL,
    `password` varchar(200) NOT NULL,
    `city` varchar(100) NOT NULL,
    `country` varchar(50) NOT NULL, 
);