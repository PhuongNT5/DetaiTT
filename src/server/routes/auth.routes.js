var router = require('express').Router();
var authDao = require('./../dao/auth.dao');
var failMessage = require('./../services/failMessage');

module.exports = function () {

    router.post('/signin', signin);
    router.post('/signup', signup);
    router.post('/sendEmail', sendEmail);
    router.post('/resetPassword', resetPassword);

    /**
     * @api {post} /api/auth SignIn
     * @apiDescription SignIn
     * @apiVersion 0.0.1
     * @apiName SignIn
     * @apiGroup User
     * @apiPermission User
     *
  
     * @apiExample {curl} Example usage:
     *      curl -i http://localhost/api/auth/signin
     *
     * @apiParamExample {json} Params-Example
     *  {
     *    "email": "huycongxe@gmail.com",
     *    "password": "123456"
     *  }
     *
     * @apiParam (Request Body) {String} email Email
     * @apiParam (Request Body) {String} password Password
     *
     * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
     * @apiSuccess (Response Body 200) {String} _id User id
     * @apiSuccess (Response Body 200) {String} firstName First name
     * @apiSuccess (Response Body 200) {String} lastName Last name
     * @apiSuccess (Response Body 200) {String} email Email
     * @apiSuccess (Response Body 200) {String} password Password
     * @apiSuccess (Response Body 200) {String} salt Salt
     * @apiSuccess (Response Body 200) {String} role Role
     * @apiSuccess (Response Body 200) {Date} createdDate Created date
     * @apiSuccess (Response Body 200) {Boolean} deleted Deleted status
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 LOGIN_SUCESS
     * {
     *    "data": {
     *        "__v": 0,
     *        "role": "user",
     *        "password": "4d87f2e14843b5300e0a16f44cd7cf30",
     *        "salt": "a0ea96eb5e26f24c",
     *        "email": "huycongxe@.com",
     *        "firstName": "Dang Nhat",
     *        "lastName": "Huy",
     *        "status": "active",
     *        "_id": "5902c7a6ae683517f8df2466"
     *    }
     * }
     *
     * @apiError (Response Body 404) {String} message Error message
     * @apiErrorExample {json} Error-404-Response:
     *  {
     *      "message": "USER_NOT_FOUND"
     * }
     * @apiError (Response Body 403) {String} message Error message
     * @apiErrorExample {json} Error-403-Response:
     *  {
     *      "message": "ERROR_INPUT"
     * }
     * @apiError (Response Body 500) {String} message Error message
     * @apiErrorExample {json} Error-500-Response:
     *  {
     *      "message": "SYSTEM_ERROR"
     * }
     * @apiError (Response Body 400) {String} message Error message
     * @apiErrorExample {json} Error-400-Response:
     *  {
     *      "message": "PASSWORD_INCORRECT"
     * }
     */

    /**
     * @api {post} /api/auth SignUp
     * @apiDescription SignUp
     * @apiVersion 0.0.1
     * @apiName SignUp
     * @apiGroup User
     * @apiPermission User
     *
     * @apiExample {curl} Example usage:
     *      curl -i http://localhost/api/auth/signup
     *
     * @apiParamExample {json} Params-Example
     *  {
     *    "email": "huycongxe@gmail.com",
     *    "password": "123456"
     *  }
     *
     *
     * @apiParam (Request Body) {String} email Email
     * @apiParam (Request Body) {String} password Password
     *
     * @apiSuccess (Response Header 200) {String} Content-Type="application/json" Content Type
     * @apiSuccess (Response Body 200) {String} _id User id
     * @apiSuccess (Response Body 200) {String} email Email
     * @apiSuccess (Response Body 200) {String} password Password
     * @apiSuccess (Response Body 200) {String} salt Salt
     * @apiSuccess (Response Body 200) {String} role Role
     * @apiSuccess (Response Body 200) {Date} createdDate Created date
     * @apiSuccess (Response Body 200) {Boolean} deleted Deleted status
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 REGISTER_SUCCESS
     * {
     *    "data": {
     *        "__v": 0,
     *        "role": "user",
     *        "password": "4d87f2e14843b5300e0a16f44cd7cf30",
     *        "salt": "a0ea96eb5e26f24c",
     *        "email": "huycongxe@.com",
     *        "_id": "5902c7a6ae683517f8df2466"
     *    }
     * }
     *
     * @apiError (Response Body 403) {String} message Error message
     * @apiErrorExample {json} Error-403-Response:
     *  {
     *      "message": "ERROR_INPUT"
     * }
     * @apiError (Response Body 500) {String} message Error message
     * @apiErrorExample {json} Error-500-Response:
     *  {
     *      "message": "SYSTEM_ERROR"
     * }
     * @apiError (Response Body 400) {String} message Error message
     * @apiErrorExample {json} Error-400-Response:
     *  {
     *      "message": "DUPLICATE_USER"
     * }
     */

    function signin(req, res, next) {
        var request = {
            email: req.body.email,
            password: req.body.password
        };
        if (!request.email || !request.password) {
            res.status(403).send(failMessage.user.login.input).end();
        }

        authDao.signin(request) 
        .then((response) => {
            res.status(200).send(response).end();
        })
        .catch((err) => {
            next(err);
        });
    }

    function signup(req, res, next) {
        var request = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.phone,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            image: req.body.image,
            birthday: req.body.birthday,
            gender: req.body.gender,
            position: req.body.position,
            address: req.body.address,
            phone: req.body.phone,
            roles: 'user',
        };
        if (request.email === '' || !request.password  || !request.username) {
            res.status(403).send(failMessage.user.register.input).end();
        }
        authDao.signup(request) 
        .then((response) => {
            res.status(200).send(response).end();
        })
        .catch((err) => {
            next(err);
        });
    }

    function sendEmail(req, res, next) {
        var request = {
            email: req.body.email
        };
        if (!request.email) {
            return Promise.reject({
                statusCode: 403,
                message: failMessage.user.login.input
            });
        }

        authDao.sendEmail(request) 
        .then((response) => {
             res.status(200).send(response).end();
        })
        .catch((err) => {
            next(err);
        })
    }

    function resetPassword(req, res, next) {
        var request = {
            newPassword: req.body.newPassword,
            token: req.body.token
        };
        if (!request.newPassword || !request.token) {
            res.status(403).send(failMessage.user.login.input).end();
        }
        
        authDao.resetPassword(request)
        .then((response) => {
            res.status(200).send(response).end();
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
    }

    // function signin(req, res, next) {
    //     var request = {
    //         email: req.body.email,
    //         password: req.body.password
    //     };
    //     authDao.signin(request, function (err, response) {
    //         if (err) { next(err); }
    //         else {
    //             res.status(200).send(response).end();
    //         }
    //     });
    // }

    // function signup(req, res, next) {
    //     var request = {
    //         email: req.body.email,
    //         password: req.body.password,
    //         username: req.body.username,
    //         firstname: req.body.firstname,
    //         lastname: req.body.lastname,
    //         image: req.body.image,
    //         birthday: req.body.birthday,
    //         gender: req.body.gender,
    //         position: req.body.position,
    //         address: req.body.address,
    //         phone: req.body.phone,
    //         roles: 'user'
    //     };
        
    //     authDao.signup(request, function (err, response) {
    //         if (err) {
    //             next(err);
    //         } else {
    //             res.status(200).send(response).end();
    //         }
    //     });
    // }

    // function sendEmail(req, res, next) {
    //     var request = {
    //         email: req.body.email
    //     };
    //     authDao.sendEmail(request, function (err, response) {
    //         if (err) {
    //             next(err);
    //         } else {
    //             res.status(200).send(response).end();
    //         }
    //     });
    // }

    // function resetPassword(req, res, next) {
    //     var request = {
    //         newPassword: req.body.newPassword,
    //         token: req.body.token
    //     };
    //     authDao.resetPassword(request, function (err, response) {
    //         if (err) {
    //             next(err);
    //         } else {
    //             res.status(200).send(response).end();
    //         }
    //     });
    // }

    return router;
};