
var lessonDao = require('./../dao/lesson.dao');
var vocabularyDao = require('./../dao/vocabulary.dao');
var _ = require('lodash');
module.exports = {
    getWords: getWords,
    createWords: createWords,
    updateWord: updateWord,
    getWord: getWord
};

function getWords(req, res, next) {
    vocabularyDao.listAll({ deleted: null }, 'vocabulary_id').then(function (vocabularys) {
        res.send(vocabularys);
    }).catch(function (err) {
        next(err);
    })
}

function createWords(req, res, next) {
    vocabularyDao.count().exec(function (err, count) {
        var request = {
            vocabulary_id: count + 1,
            word: req.body.word,
            type: req.body.type,
            pronunciation: req.body.pronunciation,
            translate: req.body.translate,
            lesson_id: req.body.lesson_id
        };
        vocabularyDao.findOne({ vocabulary_id: request.vocabulary_id }).then(function (vocabulary) {

            if (vocabulary) {
                return next({ errorCode: 400, message: "duplicate vocabulary_id" });
            }

            vocabularyDao.create(request).then(function (vocabulary) {

                if (!vocabulary) {
                    return next({ errorCode: 400, message: "create failed" });
                }
                res.send(vocabulary).end();

            }).catch(function (err) {
                return next(err);
            });

        }).catch(function (err) {
            return next(err);
        })
    });
}

function updateWord(req, res, next) {
    var vocabularyId = req.params.vocabulary_id;
    var request = {
        word: req.body.word,
        type: req.body.type,
        pronunciation: req.body.pronunciation,
        translate: req.body.translate,
        lesson_id: req.body.lesson_id
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    vocabularyDao.update({ vocabulary_id: vocabularyId }, request).then(
        function (response) {
            res.status(200).send(response).end();
        }).catch(function (err) {
            return next(err);
        })
}

function getWord(req, res, next) {
    var vocabularyId = req.params.vocabulary_id;
    vocabularyDao.findOne({ vocabulary_id: vocabularyId }).then(function (vocabulary) {
        var response = vocabulary.toObject();
        vocabularyDao.listAll({ deleted: null, vocabulary_id: vocabularyId }, 'vocabulary_id').then(function (vocabularys) {
            response.vocabularys = vocabularys;
            res.send(response).end();
        }).catch(function (err) {
            return next(err);
        });

    }).catch(function (err) {
        return next(err);
    });
}