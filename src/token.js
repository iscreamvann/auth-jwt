const jwt = require('jsonwebtoken');

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secret) {
    // delete payload.iat
    // console.log():
    const token = jwt.sign(payload, secret);
    console.log("jwt", token)
    return token
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secret, expiresIn) {
    const token = jwt.sign(payload, secret, {expiresIn});
    console.log("jwt", token)
    return token
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, pass) {
    return jwt.verify(token, pass, function(err, decoded) {
        console.log('decoded: ',decoded, err) // bar
        if(err !== null){
            return false
        }
        return decoded
      });
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
