const connection = require('./conf')
const express = require("express")
const app = express()
const port = 8000;

// CONNECTION PORT ///////////////////////////////////////////////////
app.listen(port, (err) => {
    if (err) {
      throw new Error('Error listening port ...');
    }
    // console.log(`Server is listening on ${port}`);
  });

//NCREATION ROUTES /////////////////////////////////////////////////
app.get('/offer', (req, res) => {
    connection.query('SELECT * from offer', (err, results) => {
      if (err) {
        res.status(500).send('Error server 500');
      } else {
       res.json(results);
        console.log('aaaaaaaa')
      }
    });
  });
