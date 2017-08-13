
var lessonDao = require('./../dao/lesson.dao');
var grammarDao = require('./../dao/grammar.dao');
var _ = require('lodash');
module.exports = {
    getGrammars: getGrammars,
    createGrammars: createGrammars,
    updateGrammar: updateGrammar,
    getGrammar: getGrammar,
    deleteGrammar: deleteGrammar
};

function getGrammars(req, res, next) {
    grammarDao.listAll({ deleted: null }).then(function (grammars) {
        res.send(grammars);
    }).catch(function (err) {
        next(err);
    })
}

function createGrammars(req, res, next) {
    var request = {
        gramTitle: req.body.gramTitle,
        lesson_id: req.body.lesson_id,
        gramContent: req.body.gramContent
    };
    grammarDao.findOne({ _id: request.gramId }).then(function (grammar) {

        if (grammar) {
            return next({ errorCode: 400, message: "duplicate gramContent" });
        }

        grammarDao.create(request).then(function (grammar) {

            if (!grammar) {
                return next({ errorCode: 400, message: "create failed" });
            }
            res.send(grammar).end();

        }).catch(function (err) {
            return next(err);
        });

    }).catch(function (err) {
        return next(err);
    })
}

function updateGrammar(req, res, next) {
    // var lessonId = req.params.lesson_id;
    var request = {
        gramTitle: req.body.gramTitle,
        gramContent: req.body.gramContent,
        lesson_id: req.body.lesson_id
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    grammarDao.update({ _id: gramId }, request).then(
        function (response) {
            res.status(200).send(response).end();
        }).catch(function (err) {
            return next(err);
        })
}

function getGrammar(req, res, next) {
    grammarDao.findOne({ _id: gramId }).then(function (grammar) {
        var response = grammar.toObject();
        grammarDao.listAll({ deleted: null, _id: gramId }, 'grammar_id').then(function (grammars) {
            response.grammars = grammars;
            res.send(response).end();
        }).catch(function (err) {
            return next(err);
        });

    }).catch(function (err) {
        return next(err);
    });
}
function deleteGrammar(req, res, next) {
    var grammarId = req.params._id;

    grammarDao.findOne({ _id: grammarId }).then(function (grammar) {

        if (!grammarId) {
            return next({ errorCode: 400, message: "Grammar not exist" });
        }
        else {
            grammarDao.Delete({ _id: grammarId }).then(function (grammar) {
                res.send(unit).end();
            }).catch(function (err) {
                return next(err);
            })
        }

    }).catch(function (err) {
        return next(err);
    })
}