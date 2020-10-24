'use strict';
// catController

const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
    const cats = await catModel.getAllCats();
    res.json(cats);
};

const cat_get_by_id = (req, res) =>{
  console.log('http get cat with path params', req.params);
 // res.send(`From this endpoint you can get cat with id ?. ${req.params.id}`);
    res.json(cats.filter(cat => cat.id === req.params.id).reduce(cat => cat));
    // const cat = await catModel.getCat(req.params.id);
    // res.json(cat);
}

const cat_create = (req, res) => {
    //here we will create a cat with data comin from res
    res.send(`cat created with id ...`);
}
module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create
};
