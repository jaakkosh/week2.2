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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const myArr = [ 3, 3, 37,42,73 ,11,2,7]
// const mapArr =myArr.map(i => i * 3);
// const filter = myArr.filter(i => i > 10)
// const reduce =myArr.reduce((acc, i)=> acc +=i);
// console.log('original', myArr, 'map', mapArr , 'filter', filter, 'reduce', reduce);