var crypto = require('crypto')
var express = require('express');
var router = express.Router();

function getSignature(cloud_name, username, apisecret) {
  const timestamp = (new Date).getTime();
  const str_to_sign = `cloud_name=${cloud_name}&timestamp=${timestamp}&username=${username}${apisecret}`
  var shasum = crypto.createHash('sha256');
  shasum.update(str_to_sign);
  const signature = shasum.digest('hex');
  return {
    signature: signature,
    timestamp: timestamp
  }
}



/* GET signature . */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(getSignature())); //return authInfo object signature/timestamp
});

module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('signature');
// });

// module.exports = router;