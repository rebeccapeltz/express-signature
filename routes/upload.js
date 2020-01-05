var express = require('express');
var router = express.Router();
var crypto = require('crypto')


router.get('/', function (req, res, next) {
  var timestamp = (new Date).getTime();
  var str_to_sign = `source=uw&timestamp=${timestamp}${process.env.API_SECRET}`
  shasum = crypto.createHash('sha1');
  shasum.update(str_to_sign, 'binary');
  var signature =  shasum.digest('hex');
  res.render('upload', { title: 'Upload Signed', timestamp: timestamp, signature: signature });
});

module.exports = router;


