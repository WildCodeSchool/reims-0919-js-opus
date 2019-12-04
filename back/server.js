import conf from './conf'
const express = require("express")
const app = express()
app.listen(8000,()=>console.log('Hello Folks'))

app.get('/', function (req, res) {
    res.send('hello world')
});

app.get('/offer', function (req, res) {
    res.send('welcome in offer')
});