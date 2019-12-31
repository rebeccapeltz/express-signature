var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("req signature",req.ml_signature.timestamp,req.ml_signature.signature)
  // res.render('index', { title: 'ML Signed',timestamp: req.ml_signature.timestamp, signature:req.ml_signature.signature });
  res.render('index', { title: 'ML Signed'});

});

module.exports = router;
