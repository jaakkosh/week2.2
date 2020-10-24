'use strict';
const express = require('express'); //importataan express
const app = express(); 
const port = 3000;
const catRoute = require('./routes/catRoute.js')
const bodyParser = require('body-parser');
const rootRoute = require('./routes/rootRoute.js')




app.use(bodyParser.urlencoded({extended: true}));

app.use('/', rootRoute);
app.use('/cat', catRoute);

// app.get('/cat', (req, res) => {
//     res.send('From this endpoint you can get all cats.');
//   });
//   app.get('/cat/:id', (req, res) => {
//     console.log('http get cat with path params', req.params);
//     res.send(`From this endpoint you can get cat with id ?. ${req.params.id}`);
//   });
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
