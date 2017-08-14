
var unitDao = require('./../dao/unit.dao');
var lessonDao = require('./../dao/lesson.dao');
var _ = require('lodash');
module.exports = {
    getUnits: getUnits,
    createUnit: createUnit,
    updateUnit: updateUnit,
    getUnit: getUnit,
    deleteUnit: deleteUnit
};

function getUnits(req, res, next) {
    unitDao.listAll({ deleted: null }, 'unit_id').then(function (units) {
        res.send(units);
    }).catch(function (err) {
        next(err);
    })
}

function createUnit(req, res, next) {
    unitDao.count().exec(function (err, count) {

        var request = {
            unit_id: count + 2,
            name: req.body.name,
            title: req.body.title,
            picture: req.body.picture
        };
        unitDao.findOne({ name: request.name }).then(function (unit) {

            if (unit) {
                return next({ errorCode: 400, message: "duplicate unit name" });
            }

            unitDao.create(request).then(function (unit) {

                if (!unit) {
                    return next({ errorCode: 400, message: "create failed" });
                }
                res.send(unit).end();

            }).catch(function (err) {
                return next(err);
            });

        }).catch(function (err) {
            return next(err);
        })
    });
}

function updateUnit(req, res, next) {
    var unitId = req.params.unit_id;
    var request = {
        name: req.body.name,
        title: req.body.title
    }
    request = _.omit(request, function (value) {
        return _.isUndefined(value)
    });
    unitDao.update({ unit_id: unitId }, request).then(
        function (response) {
            res.status(200).send(response).end();
        }).catch(function (err) {
            return next(err);
        })
}

function getUnit(req, res, next) {
    var unitId = req.params.unit_id;
    unitDao.findOne({ unit_id: unitId }).then(function (unit) {
        var response = unit.toObject();
        lessonDao.listAll({ deleted: null, unit_id: unitId }, 'lesson_id').then(function (lessons) {
            response.lessons = lessons;
            res.send(response).end();
        }).catch(function (err) {
            return next(err);
        });

    }).catch(function (err) {
        return next(err);
    });
}
function deleteUnit(req, res, next) {
    var unitId = req.params.unit_id;

    unitDao.findOne({ unit_id: unitId }).then(function (unit) {

        if (!unitId) {
            return next({ errorCode: 400, message: "Unit not exist" });
        }
        else {
            unitDao.Delete({ unit_id: unitId }).then(function (unit) {
                res.send(unit).end();
            }).catch(function (err) {
                return next(err);
            })
        }

    }).catch(function (err) {
        return next(err);
    })
}