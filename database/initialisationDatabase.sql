CREATE DATABASE opus;
USE opus;
CREATE TABLE `user` (
    `id_user` int auto_increment NOT NULL PRIMARY KEY,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `society_name` varchar(100) NOT NULL,
    `email` varchar(200) NOT NULL,
    `password` varchar(255) NOT NULL,
    `city` varchar(100) NOT NULL,
    `country` varchar(50) NOT NULL
);
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
    `country` varchar(50) NOT NULL,
    `id_user` int NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user(id_user)
);
CREATE TABLE `booking` (
    `id_offer_user`  int auto_increment NOT NULL PRIMARY KEY,
    `reservation_date` DATETIME NOT NULL,
    `id_user` int NOT NULL,
    `id_offer` int NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user(id_user),
    FOREIGN KEY (id_offer) REFERENCES offer(id_offer)
);