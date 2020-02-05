const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'noroot',
  password: '123',
  database: 'DB'
});

module.exports = connection;