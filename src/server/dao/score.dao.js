var mongoose = require('mongoose');
require('../model/score.model.js');
var Score = mongoose.model('Score');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    Delete: Delete,
    count: count
};

function listAll(query, sort) {
    return Score.find(query).sort(sort)
}

function create(model) {
    var score = new Score(model);
    return score.save(model)
}

function findOne(condition) {
    return Score.findOne(condition)
}

function update(condition, model) {
    return Score.findOneAndUpdate(condition, model, { new: true });
}
function Delete(condition) {
    return Score.remove(condition);
}
function count() {
    return Score.count();
}

