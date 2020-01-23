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

//GET OFFERT + PARAMS /////////////////////////////////////////////////
app.get('/offers', verifyToken, (req, res) => {
  jwt.verify(req.token, key, (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      connection.query(
        'SELECT id_user FROM user WHERE email = ?',
        authData.email,
        (err, results) => {
          if (err) {
            console.error(err);
            res.status(500).send('Error server 500');
          } else {
            const citySearch = req.query.city;
            const personNumberSearch = req.query.person;
            const minPriceSearch = req.query.minprice;
            const maxPriceSearch = req.query.maxprice;
            let search = [results[0].id_user, results[0].id_user];
            let commandLine = '';
            if (citySearch !== undefined) {
              search.push(citySearch);
              commandLine += ' AND address_city = ?';
            }
            if (personNumberSearch !== undefined) {
              search.push(personNumberSearch);
              commandLine += ' AND capacity > ?';
            }
            if (minPriceSearch !== undefined && maxPriceSearch !== undefined) {
              search.push(minPriceSearch, maxPriceSearch);
              commandLine += ' AND price BETWEEN ? AND ? ORDER BY price ASC';
            }
            connection.query(
              `SELECT o.id_offer, o.society_name, o.title, o.picture, o.offer_picture_1, o.offer_picture_2, o.offer_picture_3, o.price, o.capacity, o.offer_description, o.address_street, o.address_city, o.zip_code, o.country, o.id_user, f.is_favorite, u.phone_number FROM offer as o LEFT JOIN favorite AS f ON o.id_offer = f.id_offer AND f.id_user = ? LEFT JOIN user AS u ON u.id_user = o.id_user WHERE o.id_user != ? ${commandLine}`,
              search,
              (err, offerResults) => {
                if (err) {
                  res.status(500).send('Error server 500');
                } else {
                  res.json(offerResults);
                }
              }
            );
          }
        }
      );
    }
  });
});

//GET USER OFFERT /////////////////////////////////////////////////
app.get('/user/offers', verifyToken, (req, res) => {
  jwt.verify(req.token, key, (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      connection.query(
        'SELECT id_user FROM user WHERE email = ?',
        authData.email,
        (err, results) => {
          if (err) {
            res.status(500).send('Error server 500');
          } else {
            connection.query(
              'SELECT o.id_offer, o.society_name, o.title, o.picture, o.offer_picture_1, o.offer_picture_2, o.offer_picture_3, o.price, o.capacity, o.offer_description, o.address_street, o.address_city, o.zip_code, o.country, o.id_user, COUNT(b.id_offer) AS reservation FROM offer  AS o LEFT JOIN booking AS b ON o.id_offer = b.id_offer WHERE o.id_user = ? GROUP BY o.id_offer ORDER BY reservation DESC',
              results[0].id_user,
              (err, offerResults) => {
                if (err) {
                  console.error(err);
                  res.status(500).send('Error server 500');
                } else {
                  res.json(offerResults);
                }
              }
            );
          }
        }
      );
    }
  });
});

//GET USER INFORMATION ///////////////////////////////////////
app.get('/user', verifyToken, (req, res) => {
  jwt.verify(req.token, key, (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      connection.query(
        'SELECT * FROM user WHERE email = ?',
        authData.email,
        (err, results) => {
          if (err) {
            res.status(500).send('Error server 500');
          } else {
            res.json(results);
          }
        }
      );
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
      connection.query(
        'SELECT id_user FROM user WHERE email = ?',
        authData.email,
        (err, resultsId) => {
          if (err) {
            console.error(err);
            res.status(500).send("Erreur lors de l'ajout d'une offre");
          } else {
            connection.query(
              'INSERT INTO offer SET ?',
              {
                society_name: offerAdd.society_name,
                title: offerAdd.title,
                picture: offerAdd.picture,
                offer_picture_1: offerAdd.offer_picture_1,
                offer_picture_2: offerAdd.offer_picture_2,
                offer_picture_3: offerAdd.offer_picture_3,
                price: offerAdd.price,
                capacity: offerAdd.capacity,
                offer_description: offerAdd.offer_description,
                address_street: offerAdd.address_street,
                address_city: offerAdd.address_city,
                zip_code: offerAdd.zip_code,
                country: offerAdd.country,
                id_user: resultsId[0].id_user
              },
              (err, results) => {
                if (err) {
                  console.error(err);
                  res.status(500).send("Erreur lors de l'ajout d'une offre");
                } else {
                  res.status(200).json({
                    message: 'Post created',
                    authData
                  });
                }
              }
            );
          }
        }
      );
    }
  });
});

// DELETE OFFER /////////////////////////////////////////////
app.delete('/offer/delete', verifyToken, (req, res) => {
  const formData = req.body;
  jwt.verify(req.token, key, (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      connection.query(
        `SELECT id_user FROM user WHERE email = ?`,
        authData.email,
        (err, resultID) => {
          if (err) {
            res.status(500).send('Error server 500');
          } else {
            connection.query(
              `DELETE FROM offer WHERE id_user = ? AND id_offer = ?`,
              [resultID[0].id_user, formData.id_offer],
              (err, results) => {
                if (err) {
                  console.error(err);
                  res.status(500).send('Error server 500');
                } else {
                  res.status(200).send('Annonce retirer des favoris');
                }
              }
            );
          }
        }
      );
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
              country: userAdd.country,
              phone_number: userAdd.phone_number,
              siren_number: userAdd.siren_number,
              siret_number: userAdd.siret_number
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

// POST RESERVATION AND GET RESERVATION ///////////////////////////////////////////
app
  .route('/booking')
  .get(verifyToken, (req, res, next) => {
    jwt.verify(req.token, key, (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        connection.query(
          `SELECT id_user FROM user WHERE email = ?`,
          authData.email,
          (err, resultID) => {
            if (err) {
              res.status(500).send('Error server 500');
            } else {
              connection.query(
                `SELECT * FROM offer AS o INNER JOIN booking AS b ON o.id_offer = b.id_offer LEFT JOIN favorite AS f ON o.id_offer = f.id_offer AND f.id_user = ? WHERE b.id_user = ?`,
                [resultID[0].id_user, resultID[0].id_user],
                (err, result) => {
                  if (err) {
                    console.error(err);
                    res.status(500).send('Error server 500');
                  } else {
                    res.json(result);
                  }
                }
              );
            }
          }
        );
      }
    });
  })
  .post(verifyToken, (req, res) => {
    const formData = req.body;
    jwt.verify(req.token, key, (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        connection.query(
          `SELECT id_user FROM user WHERE email = ?`,
          authData.email,
          (err, resultID) => {
            if (err) {
              res.status(500).send('Error server 500');
            } else {
              connection.query(
                `INSERT INTO booking SET ?`,
                {
                  start_date: formData.start_date,
                  end_date: formData.end_date,
                  id_user: resultID[0].id_user,
                  id_offer: formData.id_offer
                },
                (err, results) => {
                  if (err) {
                    res.status(500).send('Error server 500');
                  } else {
                    res.status(200).json(formData);
                  }
                }
              );
            }
          }
        );
      }
    });
  });

// POST FAVORITE AND GET FAVORITE ///////////////////////////////////////////
app
  .route('/favorites')
  .get(verifyToken, (req, res) => {
    jwt.verify(req.token, key, (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        connection.query(
          `SELECT id_user FROM user WHERE email = ?`,
          authData.email,
          (err, resultID) => {
            if (err) {
              res.status(500).send('Error server 500');
            } else {
              connection.query(
                `SELECT * FROM offer AS o INNER JOIN favorite AS f ON o.id_offer = f.id_offer WHERE f.id_user = ?`,
                resultID[0].id_user,
                (err, result) => {
                  if (err) {
                    console.error(err);
                    res.status(500).send('Error server 500');
                  } else {
                    res.json(result);
                  }
                }
              );
            }
          }
        );
      }
    });
  })
  .post(verifyToken, (req, res) => {
    const formData = req.body;
    jwt.verify(req.token, key, (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        connection.query(
          `SELECT id_user FROM user WHERE email = ?`,
          authData.email,
          (err, resultID) => {
            if (err) {
              res.status(500).send('Error server 500');
            } else {
              connection.query(
                `INSERT INTO favorite SET ?`,
                {
                  id_user: resultID[0].id_user,
                  id_offer: formData.id_offer
                },
                (err, results) => {
                  if (err) {
                    res.status(500).send('Error server 500');
                  } else {
                    res.status(200).json(formData);
                  }
                }
              );
            }
          }
        );
      }
    });
  })
  .delete(verifyToken, (req, res) => {
    const formData = req.body;
    jwt.verify(req.token, key, (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        connection.query(
          `SELECT id_user FROM user WHERE email = ?`,
          authData.email,
          (err, resultID) => {
            if (err) {
              res.status(500).send('Error server 500');
            } else {
              connection.query(
                `DELETE FROM favorite WHERE id_user = ? AND id_offer = ?`,
                [resultID[0].id_user, formData.id_offer],
                (err, results) => {
                  if (err) {
                    console.error(err);
                    res.status(500).send('Error server 500');
                  } else {
                    res.status(200).send('Annonce retirer des favoris');
                  }
                }
              );
            }
          }
        );
      }
    });
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

// COUNT RESERVATION ///////////////////////////////////////////

app.get('/reservations', (req, res) => {
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
