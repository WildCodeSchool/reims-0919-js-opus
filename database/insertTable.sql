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
    'salle de réunion',
    'https://i.ibb.co/0YKNbv6/salle-de-r-union-1.jpg',
    150,
    8,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "6 rue de Saint Brice",
    "Reims",
    "51100",
    "France",
    "1"
),
(
    'Formation',
    'salle de formation',
    'https://i.ibb.co/g4gL2Jv/Salle-de-r-union-10-personnes.jpg',
    90,
    20,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "5 rue de la poupée qui tousse",
    "Reims",
    "51100",
    "France",
    "1"
),
(
    'Wild',
    'salle de Réunion',
    'https://i.ibb.co/gWrLGx0/salle-de-r-union-2.jpg',
    250,
    45,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "Impasse palotre",
    "Paris",
    "75000",
    "France",
    "1"
),
(
    'Opus2',
    'salle de Réunion',
    'https://i.ibb.co/W6JHS7C/Salle-de-r-union-15-personnes.jpg',
    485,
    31,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "Rue de la rue",
    "lyon",
    "69000",
    "France",
    "1"
),
(
    "Reunion2",
    'salle de Réunion',
    'https://i.ibb.co/b559Qr2/Salle-de-r-union-3.jpg',
    485,
    56,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "Rue de Reims",
    "Reims",
    "51000",
    "France",
    "1"
),
(
    "Salle",
    "salle de Réunion",
    'https://i.ibb.co/0YKNbv6/salle-de-r-union-1.jpg',
    380,
    51,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
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
