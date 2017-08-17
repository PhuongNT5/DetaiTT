
var questionDao = require('./../dao/question.dao');
var testDao = require('./../dao/test.dao');
var testdetailDao = require('./../dao/testdetail.dao');
var _ = require('lodash');
module.exports = {
    getTestDetails: getTestDetails,
    createTestDetail: createTestDetail,
    updateTestDetail: updateTestDetail,
    getTestDetail: getTestDetail,
    deleteTestDetail: deleteTestDetail,
    getTestDetailInfo: getTestDetailInfo,
    getTestDetailByTestId: getTestDetailByTestId
};

function getTestDetails(req, res, next) {
    return testdetailDao.listAll({
    })
        .populate('testId').exec().then(function (tests) {
            res.send(tests);
        }).catch(function (err) {
            next(err);
        })
}

function createTestDetail(req, res, next) {
    testdetailDao.count().exec(function (err, count) {
        var request = {
            testId: req.body.testId,
            questionId: req.body.questionId
        };
        testdetailDao.findOne({ _id: request._id }).then(function (testdetail) {

            if (testdetail) {
                return next({ errorCode: 400, message: "duplicate testdetail" });
            }

            testdetailDao.create(request).then(function (testdetail) {

                if (!testdetail) {
                    return next({ errorCode: 400, message: "create failed" });
                }
                res.send(testdetail).end();

            }).catch(function (err) {
                return next(err);
            });

        }).catch(function (err) {
            return next(err);
        })
    });
}

function updateTestDetail(req, res, next) {
    var testId = req.params.testId;
    var request = {
        questionId: req.body.questionId
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    testdetailDao.update({ testId: testId }, request).then(
        function (response) {
            res.status(200).send(response).end();
        }).catch(function (err) {
            return next(err);
        })
}

function getTestDetail(req, res, next) {
    var testId = req.params._id;
    var questions = [];
    return testdetailDao.findOne({
        _id: testId
    })
        .populate('testId')
        .populate('questionId').exec().then(function (test) {
            // for (var i in test.questionId) {
            //     questions.push(test.questionId[i]);
            // }
            // for (var i in questions) {
            //     // questions[i] = questions[i].toObject();
            //     delete questions[i].answer;
            // }
            res.send(test.questionId).end();
        }).catch(function (err) {
            next(err);
        })
}
function getTestDetailInfo(req, res, next) {
    var testId = req.params._id;
    return testdetailDao.findOne({
        _id: testId
    })
        .populate('testId').exec().then(function (test) {
            res.send(test).end();
        }).catch(function (err) {
            next(err);
        })
}

function getTestDetailByTestId(req, res, next) {
    var testId = req.params.testId;
    return testdetailDao.findOne({
        testId: testId
    })
        .populate('testId')
        .populate('questionId').exec().then(function (test) {
            // for (var i in test.questionId) {
            //     questions.push(test.questionId[i]);
            // }
            // for (var i in questions) {
            //     // questions[i] = questions[i].toObject();
            //     delete questions[i].answer;
            // }
            res.send(test).end();
        }).catch(function (err) {
            next(err);
        })
}

function deleteTestDetail(req, res, next) {
    var testId = req.params.test_id;

    testdetailDao.findOne({ test_id: testId }).then(function (testdetail) {

        if (!testId) {
            return next({ errorCode: 400, message: "Test not exist" });
        }
        else {
            testdetailDao.Delete({ test_id: testId }).then(function (testdetail) {
                res.send(test).end();
            }).catch(function (err) {
                return next(err);
            })
        }

    }).catch(function (err) {
        return next(err);
    })
}