const express = require('express');
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router({mergeParams: true});
const Account = require('../models/account');

//handle delete to a certain id
router.delete('/', (req,res) => {
  //check for valid id
  if(!ObjectId.isValid(req.params.id)){
    return res.sendStatus(404);
  }
  Account.remove({_id: req.params.id},(error) => {
    if(error){
      res.sendStatus(500);
    }else{
      res.sendStatus(204);
    }
  });
});
//handle put (update) rrequests for a certain id
router.put('/', (req,res) => {
  //check for valid id
  if(!ObjectId.isValid(req.params.id)){
    return res.sendStatus(404);
  }
  //update account with id by the request body
  Account.update({_id: req.params.id},req.body,(error) => {
    if(error){
      res.sendStatus(500);
    }else{
      res.sendStatus(204);
    }
  });
});

module.exports = router;
