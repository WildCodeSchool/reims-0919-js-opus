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
    'https://i.ibb.co/gFmHhTB/the-vault-2-1280.jpg',
    'https://i.ibb.co/F4vM2Nm/the-vault-3-1280.jpg',
    'https://i.ibb.co/JC9tqj9/the-vault-4-1280.jpg',
    'https://i.ibb.co/wyJp6zt/the-vault-5-1280.jpg',
    80,
    15,
    "Salle de réunion pouvant accueillir jusqu'à 15 personnes. Imprimante mise à disposition.",
    "6 rue de Saint Brice",
    "Reims",
    "51100",
    "France",
    "1"
),
(
    'Pascal and cie',
    'Salle de réunion',
    'https://i.ibb.co/ChhgSn8/25-3.png',
    'https://i.ibb.co/C5tvVC2/25-1.png',
    'https://i.ibb.co/D97d4PZ/25-2.png',
    'https://i.ibb.co/Msn9Fxd/25.png',
    60,
    10,
    "Salle pouvant accueillir jusqu'à 10 personnes, idéale pour les réunions en petit comité, écran à disposition.",
    "5 rue de la poupée qui tousse",
    "Reims",
    "51100",
    "France",
    "1"
),
(
    'Wild',
    'Salle de Réunion',
    'https://i.ibb.co/vznsMCj/25.png',
    'https://i.ibb.co/fF42r0v/25-1.png',
    'https://i.ibb.co/sJ335R0/25-2.png',
    'https://i.ibb.co/s3NLpZP/25-4.png',
    250,
    25,
    "Salle très spacieuse et conviviale.",
    "Impasse palotre",
    "Paris",
    "75000",
    "France",
    "1"
),
(
    'Afpa',
    'Salle de formation',
    'https://i.ibb.co/Qv2djjX/ETqp-NBFFAx-Ca-VRv-OSAQ1-Gy-GZo-SWI2dx-NGc-Uw-NLe-ZGUTe-Fb180-Tr-K9loq-XBQJ4-w1200-h630-p.png',
    'https://i.ibb.co/Qv2djjX/ETqp-NBFFAx-Ca-VRv-OSAQ1-Gy-GZo-SWI2dx-NGc-Uw-NLe-ZGUTe-Fb180-Tr-K9loq-XBQJ4-w1200-h630-p.png',
    'https://i.ibb.co/ZWJGTZh/Om-R4-N3ch-TSh-Ut-vku6j-SPEGW-LMJ2hpe3-RMo96fx3-KZG4-RINop-VTKVnt98n2-DUo-w1200-h630-p.png',
    'https://i.ibb.co/CPg6yn5/D1-W6l-Uf-Mf-YPz-SO36-C1-Ipu-F7-G-Lrlr-Jb-Ee-KIw-D-BSK6dht-B9gipngr-Powd7-H-h-Cs-w1200-h630-p.png',
    145,
    15,
    "Salle pour petite session de formation.",
    "87 Rue de la charité",
    "Lyon",
    "69000",
    "France",
    "1"
),
(
    "Wild",
    'Salon',
    'https://i.ibb.co/Lv8gQmj/RB8aba6-Im-Vp-Sc-Txf-DOtt-TFSx-QTf-TB6q-Fv-Wh1y-FDBBTf-ZPg-O1-Ke-Sx9c6-Ijh-Zupt4-w1200-h630-p.jpg',
    'https://i.ibb.co/Lv8gQmj/RB8aba6-Im-Vp-Sc-Txf-DOtt-TFSx-QTf-TB6q-Fv-Wh1y-FDBBTf-ZPg-O1-Ke-Sx9c6-Ijh-Zupt4-w1200-h630-p.jpg',
    'https://i.ibb.co/tXdyy3Y/a-Imb-Ak-I7-AXIX-2-Zacmy45uo2-EBV7b-Vr-YCna-U7u-Qf-QVk-Zmd-NITe-ASg3-I6qy-Np-Q-w1200-h630-p.jpg',
    'https://i.ibb.co/Lv8gQmj/RB8aba6-Im-Vp-Sc-Txf-DOtt-TFSx-QTf-TB6q-Fv-Wh1y-FDBBTf-ZPg-O1-Ke-Sx9c6-Ijh-Zupt4-w1200-h630-p.jpg',
    315,
    25,
    "Salon chaleureux, pouvant accueuillir des événèments en tout genre.",
    "32 avenue Jean Jaurès",
    "Lyon",
    "69000",
    "France",
    "1"
),
(
    "Conf & cie",
    "Salle de conférence",
    'https://i.ibb.co/1q9ddtW/7yaf-TP35-Bjxn-Yux-Mi6-Gh-if-OC48-VLEu6fxt-w7nw4-Dx-Copb-T3-Enyibak-Nzbr-Hb-E-w1200-h630-p.jpg',
    'https://i.ibb.co/1q9ddtW/7yaf-TP35-Bjxn-Yux-Mi6-Gh-if-OC48-VLEu6fxt-w7nw4-Dx-Copb-T3-Enyibak-Nzbr-Hb-E-w1200-h630-p.jpg',
    'https://i.ibb.co/1q9ddtW/7yaf-TP35-Bjxn-Yux-Mi6-Gh-if-OC48-VLEu6fxt-w7nw4-Dx-Copb-T3-Enyibak-Nzbr-Hb-E-w1200-h630-p.jpg',
    'https://i.ibb.co/fkv5sjv/3v-W0-ZZWK4-Ldatf6gcj-UQb-N10y1-M0k-Ig-Ejo-J1-Pg-LMp-Gvdzjj11-PGPbqtb-ZXlk-MKc-w1200-h630-p.jpg',
    380,
    70,
    "Salle spacieuse, café offert.",
    "56 rue de la liberté",
    "Lyon",
    "69000",
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
