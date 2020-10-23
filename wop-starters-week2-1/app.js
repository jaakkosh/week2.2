'use strict';
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.')
});
app.get('/', (req, res) => {
  console.log('root toute with req', req.query);
  res.send(`hello world <a href="cat">click</a> <br> with
   ${req.query.test} and fun is ${req.query.more}`);
});

app.post('/',(req, res) => {
  console.log('/ route with post', req.body);
  res.send('hello root route with http post');
});
app.put('/',(req, res) => {
  console.log('http put')
  res.send('http put on root route');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
