module.exports = function () {
  return function (req, res, next) {
    var crypto = require('crypto')
    var timestamp = (new Date).getTime();
    var str_to_sign = `cloud_name=${process.env.CLOUD_NAME}&timestamp=${timestamp}&username=${process.env.USERNAME}${process.env.API_SECRET}`
    var shasum = crypto.createHash('sha256');
    shasum.update(str_to_sign);
    var signature = shasum.digest('hex');
    req.ml_signature = {
      signature: signature,
      timestamp: timestamp
    }
    console.log("ml_signature",req.ml_signature)
    next();
  }
}