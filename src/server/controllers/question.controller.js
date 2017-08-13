
var testDao = require('./../dao/test.dao');
var questionDao = require('./../dao/question.dao');
var _ = require('lodash');
module.exports = {
    getQuestions: getQuestions,
    createQuestion: createQuestion,
    updateQuestion: updateQuestion,
    // getQuestion: getQuestion,
    getRanQuestion: getRanQuestion,
    deleteQuestion: deleteQuestion,
    getQuestionByTest: getQuestionByTest
};

function getQuestions(req, res, next) {
    questionDao.listAll({ deleted: null }, 'question_id').then(function (questions) {
        res.send(questions);
    }).catch(function (err) {
        next(err);
    })
}
function getQuestionByTest(req, res, next) {
    var testId = req.params.test_id;
    questionDao.listAll({ test_id: testId }).then(function (question) {
        res.send(question);
    }).catch(function (err) {
        return next(err);
    });
}

function createQuestion(req, res, next) {
    var request = {
        lesson_id: req.body.lesson_id,
        test_id: req.body.test_id,
        question_id: req.body.question_id,
        title: req.body.title,
        description: req.body.description,
        questionType: req.body.questionType,
        A: req.body.A,
        B: req.body.B,
        C: req.body.C,
        D: req.body.D,
        answer: req.body.answer

    };
    questionDao.findOne({ question_id: request.question_id }).then(function (question) {

        if (question) {
            return next({ errorCode: 400, message: "duplicate question_id" });
        }

        questionDao.create(request).then(function (question) {

            if (!question) {
                return next({ errorCode: 400, message: "create failed" });
            }
            res.send(question).end();

        }).catch(function (err) {
            return next(err);
        });

    }).catch(function (err) {
        return next(err);
    })
}

function updateQuestion(req, res, next) {
    var questionId = req.params.question_id;
    var request = {
        lesson_id: req.body.lesson_id,
        test_id: req.body.test_id,
        question_id: req.body.question_id,
        title: req.body.title,
        description: req.body.description,
        questionType: req.body.questionType
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    questionDao.update({ question_id: questionId }, request).then(
        function (response) {
            res.status(200).send(response).end();
        }).catch(function (err) {
            return next(err);
        })
}
function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

// function getRanQuestion(req, res, next) {
//     questionDao.count().exec(function (err, count) {
//         var skipRecords = getRandomArbitrary(1, count / 2);
//         questionDao.listAll().limit(5).skip(skipRecords).exec().then(function (questions) {
//             res.send(questions);
//         }).catch(function (err) {
//             return next(err);
//         })
//     })
// }

function getRanQuestion(req, res, next) {
    var testId = req.params.test_id;
    questionDao.count().exec(function (err, count) {
        var skipRecords = getRandomArbitrary(1, count / 2);
        questionDao.listAll({ test_id: testId }).limit(5).skip(skipRecords).exec().then(function (questions) {
            res.send(questions);
        }).catch(function (err) {
            return next(err);
        })
    })
}

function deleteQuestion(req, res, next) {
    var questionId = req.params.question_id;

    questionDao.findOne({ question_id: questionId }).then(function (question) {

        if (!questionId) {
            return next({ errorCode: 400, message: "Question not exist" });
        }
        else {
            questionDao.Delete({ question_id: questionId }).then(function (question) {
                res.send(question).end();
            }).catch(function (err) {
                return next(err);
            })
        }

    }).catch(function (err) {
        return next(err);
    })
}
// function getQuestion(req, res, next) {
//     var questionId = req.params.question_id;
//     questionDao.findOne({ question_id: questionId }).then(function (question) {
//         var response = question.toObject();
//         questionDao.listAll({ deleted: null, question_id: questionId }, 'question_id').then(function (questions) {
//             response.questions = questions;
//             res.send(response).end();
//         }).catch(function (err) {
//             return next(err);
//         });

//     }).catch(function (err) {
//         return next(err);
//     });
// }
