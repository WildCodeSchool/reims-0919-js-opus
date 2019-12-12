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
    country) VALUES 
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
    "France"
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
    "France"
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
    "France"
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
    "France"
),
(
    "Reunion2",
    'salle de Réunion',
    'https://i.ibb.co/b559Qr2/Salle-de-r-union-3.jpg',
    485,
    31,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "Rue de Reims",
    "Reims",
    "51000",
    "France"
),
(
    "Salle",
    "salle de Réunion",
    'https://i.ibb.co/0YKNbv6/salle-de-r-union-1.jpg',
    485,
    31,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit elit nec est scelerisque, et facilisis lacus gravida. Donec imperdiet ex tincidunt ex accumsan hendrerit. Nulla pellentesque accumsan dolor quis iaculis. Sed sed dui a nisi nullam.",
    "Rue elle",
    "Reims",
    "51000",
    "France"
);

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
)