const connection = require('./conf')
const express = require("express")
const app = express()
const cors = require("cors")
const port = 8000;

app.use(cors())

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


