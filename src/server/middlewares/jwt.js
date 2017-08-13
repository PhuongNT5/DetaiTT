var jwt = require('jsonwebtoken');
module.exports = {
    authentication: authentication
};

function authentication(req, res, next) {
    // console.log(req.body);
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (err) {
                console.log('error');
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                //console.log("true");
                req.decoded = decoded;
                // console.log(req.decoded);
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}
