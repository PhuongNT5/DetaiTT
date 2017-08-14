
var questionDao = require('./../dao/question.dao');
var testDao = require('./../dao/test.dao');
var _ = require('lodash');
module.exports = {
    getTests: getTests,
    createTest: createTest,
    updateTest: updateTest,
    getTest: getTest,
    getTestsByLevel: getTestsByLevel,
    deleteTest: deleteTest
};

function getTests(req, res, next) {
    testDao.listAll({ deleted: null }, 'test_id').then(function (tests) {
        res.send(tests);
    }).catch(function (err) {
        next(err);
    })
}

function createTest(req, res, next) {
    testDao.count().exec(function (err, count) {
        var request = {
            test_id: count + 1,
            name: req.body.name,
            title: req.body.title,
            time: req.body.time,
            level: req.body.level
        };
        testDao.findOne({ test_id: request.test_id }).then(function (test) {

            if (test) {
                return next({ errorCode: 400, message: "duplicate test_id" });
            }

            testDao.create(request).then(function (test) {

                if (!test) {
                    return next({ errorCode: 400, message: "create failed" });
                }
                res.send(test).end();

            }).catch(function (err) {
                return next(err);
            });

        }).catch(function (err) {
            return next(err);
        })
    });
}

function updateTest(req, res, next) {
    var testId = req.params.test_id;
    var request = {
        test_id: req.body.test_id,
        name: req.body.name,
        title: req.body.title,
        time: req.body.time,
        level: req.body.level
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    testDao.update({ test_id: testId }, request).then(
        function (response) {
            res.status(200).send(response).end();
        }).catch(function (err) {
            return next(err);
        })
}

function getTest(req, res, next) {
    var testId = req.params.test_id;
    testDao.findOne({ test_id: testId }).then(function (test) {
        var response = test.toObject();
        res.send(test);
    }).catch(function (err) {
        return next(err);
    });
}
function getTestsByLevel(req, res, next) {
    var Level = req.params.level;
    testDao.listAll({ level: Level }).then(function (test) {
        // var response = test.toObject();
        // questionDao.listAll({ deleted: null, level: Level }, 'lesson_id').then(function (questions) {
        //     response.questions = questions;
        //     res.send(response).end();
        // }).catch(function (err) {
        //     return next(err);
        // });
        res.send(test);
    }).catch(function (err) {
        return next(err);
    });
}
function deleteTest(req, res, next) {
    var testId = req.params.test_id;

    testDao.findOne({ test_id: testId }).then(function (test) {

        if (!testId) {
            return next({ errorCode: 400, message: "Test not exist" });
        }
        else {
            testDao.Delete({ test_id: testId }).then(function (test) {
                res.send(test).end();
            }).catch(function (err) {
                return next(err);
            })
        }

    }).catch(function (err) {
        return next(err);
    })
}