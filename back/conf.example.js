const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'notroot',
  password: 'password',
  database: 'opus'
});