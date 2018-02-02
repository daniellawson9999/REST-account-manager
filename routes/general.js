const express = require('express');
const router = express.Router({mergeParams: true});
const Account = require('../models/account');

//handle get /accounts
router.get('/', (req,res) => {
  //find all documents
  Account.find({},(err,docs) =>{
    if(err){
      res.sendStatus(500);
    }else{
      //convert documents into JSON, send array of all documents
      data = [];
      docs.forEach((doc)=>{
        data.push(doc.toJSON());
      });
      res.render('index', { accounts: data});
      //res.status(200).send(docs);
    }
  });
});
//create post /accounts by creating an account with request body
router.post('/', (req,res) => {
  console.log(req.body);
  const account = new Account(req.body);
  account.save((error) => {
    if(error){
      res.sendStatus(500);
    }else{
      res.sendStatus(201);
    }
  });
});

module.exports = router;
