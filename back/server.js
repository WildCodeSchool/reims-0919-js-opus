const connection = require('./conf');
const express = require('express');

const bodyParser = require('body-parser');

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
    if (err) {
      res.status(500).send('Error server 500');
    } else {
      res.json(results);
    }
  });
});

// POST OFFERS ////////////////////////////////////////////////
app.post('/offers/add', (req, res) => {
  const offerAdd = req.body;
  connection.query('INSERT INTO offer SET ?', offerAdd, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'ajout d'une offre");
    } else {
      res.sendStatus(200);
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
app.post('/users/add', (req, res) => {
  const userAdd = req.body;
  connection.query('INSERT INTO user SET ?', userAdd, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'ajout d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
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
