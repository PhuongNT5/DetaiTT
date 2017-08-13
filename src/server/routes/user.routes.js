/*jshint esversion: 6*/
var router = require('express').Router();
var userDao = require('./../dao/user.dao');
var middlewareJwt = require('../middlewares/jwt');
var uploadSingle = require('../middlewares/uploadSingle');

module.exports = function () {

  router.post('/create', createUser);
  router.post('/change', middlewareJwt.authentication, changePasswordUser);
  router.get('/get', getUser);
  router.post('/uploadImage', middlewareJwt.authentication, uploadSingle.uploadSingle, changePicture);

  function getUser(req, res) {
    userDao.getUsers().then(function (user) {
      res.status(200).send(user).end();
    }).catch(function (err) {
      res.status(404).send(err.message).end();
    })
  }

  function changePicture(req, res, next) {
    var id = req.decoded._id;
    var user = {
      image: req.profileImageURL
    };
    userDao.updateUser(id, user)
      .then((result) => res.status(200).send({
        image: req.profileImageURL
      }).end()).catch((err) => next(err));
  }



  function createUser(req, res, next) {
    var request = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      image: req.body.image,
      birthday: req.body.birthday,
      gender: req.body.gender,
      level: req.body.level,
      address: req.body.address,
      phone: req.body.phone,
      roles: req.body.roles
    };

    if (request.email == "" || request.password == "" || request.username == "" || request.role == "") {
      res.status(403).send(failMessage.user.create.input).end();
    }
    userDao.createUser(request)
      .then((res) => {
        res.status(200).send(response).end()
      }).catch((err) => {
        next(err);
      });
  }

  function changePasswordUser(req, res, next) {
    var request = {
      passwordOld: req.body.passwordOld,
      passwordNew: req.body.passwordNew,
      token: req.body.token || req.query.token || req.headers['x-access-token']
    };

    if (request.passwordOld == "" || request.getPasswordNew == "") {
      console.log("403")
      return res.status(403).send(failMessage.user.changePassword.input).end()
    }
    userDao.changePasswordUser(request)
      .then((response) => {
        console.log(response)
        res.status(200).send(response).end()
      }).catch((err) => {
        next(err);
      })
  }

  return router;
};


// function createUser(req, res, next) {
    //     var request = {
    //         email: req.body.email,
    //         password: req.body.password,
    //         role: req.body.role
    //     };
    //     userDao.createUser(request, function(err, reponse) {
    //         if (err) {
    //             next(err);
    //         } else {
    //             res.status(200).send(reponse).end();
    //         }
    //     });
    // }


    // function changePasswordUser(req, res, next) {
    //     var request = {
    //         passwordOld: req.body.passwordOld,
    //         passwordNew: req.body.passwordNew,
    //         token: req.body.token || req.query.token || req.headers['x-access-token']
    //     };
    //     userDao.changePasswordUser(request, function(err, response) {
    //         if (err) {
    //             next(err);
    //         } else {
    //             res.status(200).send(response).end();
    //         }
    //     });
    // }
