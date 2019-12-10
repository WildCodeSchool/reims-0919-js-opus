const connection = require('./conf')
const express = require("express")
const bodyParser = require('body-parser');
const app = express()
const cors = require("cors")
const port = 8000;

app.use(cors())

app.use(bodyParser.json());// Support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));// Support URL-encoded bodies

// CONNECTION PORT ///////////////////////////////////////////////////
app.listen(port, (err) => {
  if (err) {
    throw new Error('Error listening port ...');
  }
  console.log(`Server is listening on ${port}`);
});

//INITIALISATION GET ROUTE /////////////////////////////////////////////////
app.get('/offer', (req, res) => {
    connection.query('SELECT * from offer', (err, results) => {
      if (err) {
        res.status(500).send('Error server 500');
      } else {
       res.json(results);
      }
    });
  });

// SEARCH ID /////////////////////////////////////////////////
app.get('/offer/:id', (req, res) => {
  const idSearch = req.params.id;
  connection.query(`SELECT * from offer where id_offer = ?`, [idSearch],(err, results) => {
    if (err) {
      res.status(500).send('Error server 500');
    } else {
     res.json(results);
    }
  });
});  

// POST OFFERS ////////////////////////////////////////////////
app.post('/offer/add', (req, res) => {
  // const formAdd = req.body;
  const formAdd ={
    society_name:'dev-Wild',
    title:'Local',
    picture:'aaaaaaaaaaa',
    price:50,
    capacity:15,
    offer_description:'bbbbbbbbbbbbbbb',
    adress_street:'15 rue barbe',
    adress_city:'Reims',
    zip_code:'51100',
    country:'france'
  }
  console.log(formAdd);
  // connection.query('INSERT INTO offer VALUES ?', [formAdd], (err, results) => {
    connection.query('INSERT INTO offer(society_name,title,picture,price,capacity,offer_description,adress_street,adress_city,zip_code,country) VALUES (?)', formAdd, (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un fim");
    } else {
      res.sendStatus(200);
    }
  });
});
