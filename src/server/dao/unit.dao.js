var mongoose = require('mongoose');
require('../model/unit.model.js');
var Unit = mongoose.model('Unit');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    Delete: Delete,
    count: count
};

function listAll(query, sort) {
    return Unit.find(query).sort(sort)
}

function create(model) {
    var unit = new Unit(model);
    return unit.save(model)
}

function findOne(condition) {
    return Unit.findOne(condition)
}

function update(condition, model) {
    return Unit.findOneAndUpdate(condition, model, { new: true });
}
function Delete(condition) {
    return Unit.remove(condition);
}
function count() {
    return Unit.count();
}

