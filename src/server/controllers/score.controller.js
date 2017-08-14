
var scoreDao = require('./../dao/score.dao');
var userDao = require('./../dao/user.dao');
var testDao = require('./../dao/test.dao');
var _ = require('lodash');
module.exports = {
    getScores: getScores,
    createScore: createScore,
    updateScore: updateScore,
    getScore: getScore,
    getScoreByUserId: getScoreByUserId
};

function getScores(req, res, next) {
    scoreDao.listAll({ deleted: null }, 'user_id').then(function (score) {
        res.send(score);
    }).catch(function (err) {
        next(err);
    })
}

function createScore(req, res, next) {
    var request = {
        score: req.body.score,
        userId: req.body.userId,
        testId: req.body.testId
    };
    scoreDao.findOne({ userId: request.userId }).then(function (score) {

        // if (score) {
        //     return next({ errorCode: 400, message: "duplicate user_id" });
        // }

        scoreDao.create(request).then(function (score) {

            if (!score) {
                return next({ errorCode: 400, message: "create failed" });
            }
            res.send(score).end();

        }).catch(function (err) {
            return next(err);
        });

    }).catch(function (err) {
        return next(err);
    })
}

// function updateScore(req, res, next) {
//     var userId = req.params.userId;
//     var request = {
//         time: req.body.time,
//         score: req.body.score
//     }
//     request = _.omit(request, function (value) {
//         return _.isUndefined(value)
//     });
//     scoreDao.update({ userId: userId }, request).then(
//         function (response) {
//             res.status(200).send(response).end();
//         }).catch(function (err) {
//             return next(err);
//         })
// }
function updateScore(req, res, next) {
    var request = {
        time: req.body.time,
        score: req.body.score
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    scoreDao.count().exec(function (err, count) {
        scoreDao.findOne().skip(count - 1).then(function (score) {
            scoreDao.update(score, request).then(function (response) {
                res.status(200).send(response).end();
            }).catch(function (err) {
                return next(err);
            })
        });
    });
}
function getScore(req, res, next) {
    // console.log(req.params.lesson_id);
    return scoreDao.findOne({
        userId: req.userId
    })
        .populate('testId').exec().then(function (score) {
            res.send(score);
        }).catch(function (err) {
            next(err);
        })
}
function getScoreByUserId(req, res, next) {
    var userId = req.params.userId;
    return scoreDao.listAll({ userId: userId })
        .populate('testId').exec().then(function (score) {
            res.send(score);
        }).catch(function (err) {
            next(err);
        })
}
