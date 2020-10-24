'use strict';
const express = require('express');
const router = express.Router();  
  
  router.get('/', (req, res) => {
    console.log('root toute with req', req.query);
    res.send(`hello world <a href="cat">click</a> <br> with
     ${req.query.test} and fun is ${req.query.more}`);
  });
  
  router.post('/',(req, res) => {
    console.log('/ route with post', req.body);
    res.send('hello root route with http post');
  });
  router.put('/',(req, res) => {
    console.log('http put')
    res.send('http put on root route');
  });
  module.exports = router;