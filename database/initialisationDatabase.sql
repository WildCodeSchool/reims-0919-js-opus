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

INSERT INTO offer (
    society_name,
    title,
    picture,
    price,
    capacity,
    offer_description,
    address_street,
    address_city,
    zip_code,
    country) VALUES (
    'Opus',
    'salle de réunion',
    'https://ibb.co/p4QDF5M',
    150,
    8,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "6 rue de Saint Brice",
    "Reims",
    "51100",
    "France"
);

