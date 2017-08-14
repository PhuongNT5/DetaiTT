
var unitDao = require('./../dao/unit.dao');
var lessonDao = require('./../dao/lesson.dao');
var vocabularyDao = require('./../dao/vocabulary.dao');
var grammarDao = require('./../dao/grammar.dao');
var questionDao = require('./../dao/question.dao');
var _ = require('lodash');
module.exports = {
    getLessons: getLessons,
    createLessons: createLessons,
    updateLesson: updateLesson,
    getLesson: getLesson,
    deleteLesson: deleteLesson
};

function getLessons(req, res, next) {
    lessonDao.listAll({ deleted: null }, 'lesson_id').then(function (lessons) {
        res.send(lessons);
    }).catch(function (err) {
        next(err);
    })
}

function createLessons(req, res, next) {
    lessonDao.count().exec(function (err, count) {
        var request = {
            lesson_id: count + 1,
            name: req.body.name,
            title: req.body.title
        };
        lessonDao.findOne({ lesson_id: request.lesson_id }).then(function (lesson) {

            if (lesson) {
                return next({ errorCode: 400, message: "duplicate lesson_id" });
            }

            lessonDao.create(request).then(function (lesson) {

                if (!lesson) {
                    return next({ errorCode: 400, message: "create failed" });
                }
                res.send(lesson).end();

            }).catch(function (err) {
                return next(err);
            });

        }).catch(function (err) {
            return next(err);
        })
    });
}

function updateLesson(req, res, next) {
    var lessonId = req.params.lesson_id;
    var request = {
        name: req.body.name,
        title: req.body.title
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    lessonDao.update({ lesson_id: lessonId }, request).then(
        function (response) {
            res.status(200).send(response).end();
        }).catch(function (err) {
            return next(err);
        })
}

function getLesson(req, res, next) {
    console.log(req.params.lesson_id);
    return lessonDao.findOne({
        lesson_id: req.params.lesson_id
    })
        .populate('vocabularyId')
        .populate('grammarId').exec().then(function (lesson) {
            res.send(lesson);
        }).catch(function (err) {
            next(err);
        })
}
function deleteLesson(req, res, next) {
    var lessonId = req.params.lesson_id;

    lessonDao.findOne({ lesson_id: lessonId }).then(function (lesson) {

        if (!lessonId) {
            return next({ errorCode: 400, message: "Lesson not exist" });
        }
        else {
            lessonDao.Delete({ lesson_id: lessonId }).then(function (lesson) {
                res.send(lesson).end();
            }).catch(function (err) {
                return next(err);
            })
        }

    }).catch(function (err) {
        return next(err);
    })
}
