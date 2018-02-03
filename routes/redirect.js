const express = require('express');
const router = express.Router();

router.get('/', (err,res) => {
  res.redirect('/accounts');
});

module.exports = router;
