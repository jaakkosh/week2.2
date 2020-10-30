'use strict';
// catController

const catModel = require('../models/catModel'); //sama kuin import

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
    const cats = await catModel.getAllCats();
    res.json(cats);
};

const cat_get_by_id = async (req, res) =>{
  console.log('http get cat with path params', req.params);
 // res.send(`From this endpoint you can get cat with id ?. ${req.params.id}`);
    // res.json(cats.filter(cat => cat.id === req.params.id).reduce(cat => cat));
      const cat = await catModel.getCat(req.params.id);
      res.json(cat);
}

const cat_create = async (req, res) => {
    //here we will create a cat with data comin from res
    console.log('catController cat_create', req.body, req.file)
    const cat = await catModel.getCat(await catModel.insertCat(req));
    res.send(cat);
}

const cat_update = async (req, res) =>{
  const updateOk = await catModel.updateCat(req.params.id, req)
  res.send('updated...');
}
const cat_delete = async (req, res) =>{
  res.send('deleted...');
}

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create,
  cat_update,
  cat_delete
};
