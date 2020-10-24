'use strict';
// catRoute

const express = require('express');
const router = express.Router();  

router.get('/cat', (req, res) => {
  res.send('From this endpoint you can get all cats.');
});
router.get('/:id', (req, res) => {
  console.log('http get cat with path params', req.params);
  res.send(`From this endpoint you can get cat with id ?. ${req.params.id}`);
});

  module.exports = router;