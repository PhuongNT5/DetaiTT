/*jshint esversion: 6*/
var User = require('./../model/user.model');
var cryptoPasswordUtil = require('./../utils/crypto-password.util');
var successMessage = require('../services/successMessage');
var failMessage = require('../services/failMessage');
var jwtDecode = require('jwt-decode');

module.exports = {
    createUser: createUser,
    changePasswordUser: changePasswordUser,
    updateUser: updateUser,
    getUsers: getUsers,
    convertUserModelToUserResponse: convertUserModelToUserResponse
};
function getUsers() {
    return User.find().exec().then(function (user) {
        if (!user) {
            return Promise.reject({
                message: 'not found'
            })
        }
        return Promise.resolve({
            user: user
        })
    })
}
function convertUserModelToUserResponse(userModel) {
    var userObj = userModel.toObject();
    delete userObj.password;
    delete userObj.salt;
    return userObj;
}

function createUser(request) {
    var password = cryptoPasswordUtil.cryptoPassword(request.password);
    return User.findOne({ email: request.email }).then((user) => {
        if (user) {
            return Promise.reject({
                statusCode: 400,
                message: failMessage.user.signup.duplicateUser
            });
        }
        var newUser = User({
            email: request.email,
            password: password.hash,
            salt: password.salt,
            username: request.username,
            firstname: request.firstname,
            lastname: request.lastname,
            image: request.image,
            birthday: request.birthday,
            gender: request.gender,
            level: request.level,
            address: request.address,
            phone: request.phone,
            roles: request.roles
        });
        return newUser.save()
            .then((response) => {
                return Promise.resolve({
                    message: successMessage.user.signup,
                    user: convertUserModelToUserResponse(response)
                })

            }).catch(() => {
                return Promise.reject({
                    message: failMessage.user.signup.systemErr
                });
            });
    })
        .catch((err) => {
            return Promise.reject({
                statusCode: 400,
                message: failMessage.user.register.systemErr
            });
        });
}

function changePasswordUser(request) {

    var token = request.token;
    var decoded = jwtDecode(token);
    var _id = decoded._id;
    //console.log(decoded);
    return User.findById({
        _id: _id
    })
        .then((user) => {
            if (user) {
                //console.log("user")
                if (cryptoPasswordUtil.verifyPassword(user.password, user.salt, request.passwordOld)) {
                    var passwordNew = cryptoPasswordUtil.cryptoPassword(request.passwordNew);
                    user.password = passwordNew.hash;
                    user.salt = passwordNew.salt;
                    //console.log(passwordNew);
                    return user.save()
                        .then((res) => {
                            return Promise.resolve({
                                message: successMessage.user.changePassword
                            });
                        })
                        .catch((err) => {
                            return Promise.reject({
                                message: failMessage.user.changePassword.systemErr
                            });
                        });
                } else {
                    return Promise.reject({
                        message: failMessage.user.changePassword.passwordOldNotCorrect
                    })
                }
            }
        })
        .catch((err) => {
            return Promise.reject(err);
        });
}

function updateUser(id, user, callback) {
    return User.findByIdAndUpdate(id, user).exec()
        .then((result) => result)
        .catch((err) => err);
}

// function createUser(request, callback) {
//   if (request.email === '' || request.password === '' || request.username === '' || request.role === '') {
//     callback({
//       statusCode: 403,
//       message: failMessage.user.create.input
//     });
//   } else {
//     var password = cryptoPasswordUtil.cryptoPassword(request.password);
//     User.findOne({
//       email: request.email
//     }, function (err, user) {
//       if (err) {
//         callback({
//           message: failMessage.user.register.systemErr
//         });
//         return;
//       }
//       if (user !== null) {
//         callback({
//           statusCode: 400,
//           message: failMessage.user.register.duplicateUser
//         });
//       }

//       var newUser = new User({
//         email: request.email,
//         password: password.hash,
//         salt: password.salt,
//         username: request.username,
//         firstname: request.firstname,
//         lastname: request.lastname,
//         image: request.image,
//         birthday: request.birthday,
//         gender: request.gender,
//         level: request.level,
//         address: request.address,
//         phone: request.phone,
//         roles: request.roles
//       });

//       newUser.save(function (err, response) {
//         if (err) {
//           console.log(err);
//           var error = {
//             message: failMessage.user.signup.systemErr
//           };

//         } else {
//           callback(null, {
//             message: successMessage.user.signup,
//             user: convertUserModelToUserResponse(response)
//           });
//         }
//       });
//     });
//   }
// }


// function changePasswordUser(request, callback) {
//   if (request.passwordOld === '' || request.getPasswordNew === '') {
//     callback({
//       statusCode: 403,
//       message: failMessage.user.changePassword.input
//     });
//   } else {
//     var token = request.token;
//     var decoded = jwtDecode(token);
//     var _id = decoded._id;
//     console.log(decoded);


//     User.findById({
//       _id: _id
//     }, function (err, user) {
//       if (err) {
//         return;
//       }
//       if (user !== null) {
//         if (cryptoPasswordUtil.verifyPassword(user.password, user.salt, request.passwordOld)) {
//           var passwordNew = cryptoPasswordUtil.cryptoPassword(request.passwordNew);
//           user.password = passwordNew.hash;
//           user.salt = passwordNew.salt;
//           //console.log(passwordNew);
//           user.save(function (err, res) {
//             if (err) {
//               return;
//             } else {
//               callback(null, {
//                 message: successMessage.user.changePassword
//               });
//             }
//           });
//         } else {
//           callback(null, {
//             message: failMessage.user.changePassword.passwordOldNotCorrect
//           });
//         }
//       }
//     });
//   }
// }
