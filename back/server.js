const connection = require('./conf');
const express = require('express');

const bodyParser = require('body-parser');

const key = require('./key');
const verifyToken = require('./verifyToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());

app.use(bodyParser.json()); // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies

// CONNECTION PORT ///////////////////////////////////////////////////
app.listen(port, err => {
  if (err) {
    throw new Error('Error listening port ...');
  }
  console.log(`Server is listening on ${port}`);
});

//GET OFFERT /////////////////////////////////////////////////
app.get('/offers', (req, res) => {
  connection.query('SELECT * from offer', (err, results) => {
    console.log(err);
    if (err) {
      res.status(500).send('Error server 500');
    } else {
      res.json(results);
    }
  });
});

// POST OFFERS ////////////////////////////////////////////////
app.post('/offers/add', verifyToken, (req, res) => {
  const offerAdd = req.body;
  jwt.verify(req.token, key, (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.json({
        message: 'Post created',
        authData
      });
      connection.query('INSERT INTO offer SET ?', offerAdd, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de l'ajout d'une offre");
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

//GET USER /////////////////////////////////////////////////
app.get('/users', (req, res) => {
  connection.query('SELECT * from user', (err, results) => {
    if (err) {
      res.status(500).send('Error server 500');
    } else {
      res.json(results);
    }
  });
});

// POST USER ////////////////////////////////////////////////
app.post('/users/signup', (req, res) => {
  const userAdd = req.body;
  connection.query(
    'SELECT email FROM user WHERE email = ?',
    userAdd.email,
    (err, results) => {
      if (results.length !== 0) {
        res.send('Email déjà existant');
      } else {
        let hashpassword = '';
        bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(userAdd.password, salt, (err, hash) => {
            hashpassword = hash;
            insert();
          });
        });
        const insert = () => {
          connection.query(
            'INSERT INTO user SET ?',
            {
              firstname: userAdd.firstname,
              lastname: userAdd.lastname,
              society_name: userAdd.society_name,
              email: userAdd.email,
              password: hashpassword,
              city: userAdd.city,
              country: userAdd.country
            },
            (err, results) => {
              if (err) {
                console.log(err);
                res.status(500).send("Erreur lors de l'ajout d'un utilisateur");
              } else {
                jwt.sign(userAdd, key, (err, token) => {
                  res.json({
                    token
                  });
                });
              }
            }
          );
        };
      }
    }
  );
});

// LOGIN USER ////////////////////////////////////////////////
app.post('/users/signin', (req, res) => {
  const userInfo = req.body;
  connection.query(
    'SELECT email, password FROM user WHERE email = ?',
    userInfo.email,
    (err, results) => {
      if (err) {
        res.status(500).send('Error server 500');
      } else if (results.length === 0) {
        res.send('Email incorrecte');
      } else {
        bcrypt.compare(
          userInfo.password,
          results[0].password,
          (err, response) => {
            if (response) {
              jwt.sign(userInfo, key, (err, token) => {
                res.json({
                  token
                });
              });
            } else {
              res.send('correspondance mot de passe incorrecte');
            }
          }
        );
      }
    }
  );
});

// SEARCH CITY /////////////////////////////////////////////////
app.get('/offers/:city', (req, res) => {
  const citySearch = req.params.city;
  connection.query(
    `SELECT * from offer where address_city = ?`,
    [citySearch],
    (err, results) => {
      if (err) {
        res.status(500).send('Error server 500');
      } else {
        res.json(results);
      }
    }
  );
});
// SEARCH ID /////////////////////////////////////////////////
app.get('/offers/:id', (req, res) => {
  const idSearch = req.params.id;
  connection.query(
    `SELECT * from offer where id_offer = ?`,
    [idSearch],
    (err, results) => {
      if (err) {
        res.status(500).send('Error server 500');
      } else {
        res.json(results);
      }
    }
  );
});
