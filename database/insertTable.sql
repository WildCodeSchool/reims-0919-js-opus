INSERT INTO `user` (
  firstname,
  lastname,
  society_name,
  email,
  password,
  city,
  country) VALUES 
(
  "Manu",
  "Tudescend",
  "Opus",
  "manu.t@opus.com",
  "0123456789",
  "Paris",
  "France"  
),
(
  "Michou",
  "Dimich",
  "Opus",
  "michou.d@opus.com",
  "0123456789",
  "Paris",
  "France"  
);

INSERT INTO offer (
    society_name,
    title,
    picture,
    offer_picture_1,
    offer_picture_2,
    offer_picture_3,
    price,
    capacity,
    offer_description,
    address_street,
    address_city,
    zip_code,
    country,
    id_user) VALUES 
(
    'Opus',
    'Salle de réunion',
    'https://i.ibb.co/0YKNbv6/salle-de-r-union-1.jpg',
    150,
    8,
    "Salle de réunion pouvant accueillir jusqu'à 8 personnes. Imprimante mise à disposition.",
    "6 rue de Saint Brice",
    "Reims",
    "51100",
    "France",
    "1"
),
(
    'Formation',
    'Salle de formation',
    'https://i.ibb.co/g4gL2Jv/Salle-de-r-union-10-personnes.jpg',
    90,
    20,
    "Salle pouvant accueillir jusqu'à 20 personnes, idéale pour les courtes sessions de formations.",
    "5 rue de la poupée qui tousse",
    "Reims",
    "51100",
    "France",
    "1"
),
(
    'Wild',
    'Salle de Réunion',
    'https://i.ibb.co/gWrLGx0/salle-de-r-union-2.jpg',
    250,
    45,
    "Salle très spacieuse.",
    "Impasse palotre",
    "Paris",
    "75000",
    "France",
    "1"
),
(
    'Opus2',
    'Salle de Réunion',
    'https://i.ibb.co/W6JHS7C/Salle-de-r-union-15-personnes.jpg',
    485,
    31,
    "Salle spacieuse pour tout type de réunion.",
    "87 Rue de la charité",
    "lyon",
    "69000",
    "France",
    "1"
),
(
    "Reunion2",
    'Salle de Réunion',
    'https://i.ibb.co/b559Qr2/Salle-de-r-union-3.jpg',
    485,
    56,
    "Salle spacieuse, imprimante, photocopieuse à disposition.",
    "Rue de Reims",
    "Reims",
    "51000",
    "France",
    "1"
),
(
    "Salle",
    "Salle de Réunion",
    'https://i.ibb.co/0YKNbv6/salle-de-r-union-1.jpg',
    380,
    51,
    "Salle spacieuse, café offert.",
    "Rue elle",
    "Reims",
    "51000",
    "France",
    "1"
);

INSERT INTO `booking` (
  start_date,
  end_date,
  id_user,
  id_offer) VALUES 
(
  "2020-05-13 12:00:00",
  "2020-05-13 13:00:00",
  "1",
  "1"
);

INSERT INTO `favorite` (
  id_user,
  id_offer) VALUES 
(
  "1",
  "1"
);
