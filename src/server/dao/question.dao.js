var mongoose = require('mongoose');
require('../model/question.model.js');
var Question = mongoose.model('Question');
var random = require('mongoose-simple-random');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    count: count,
    find: find,
    Delete: Delete
};

function listAll(query, sort) {
    return Question.find(query).sort(sort)
}

function create(model) {
    var question = new Question(model);
    return question.save(model)
}

function findOne(condition) {
    return Question.findOne(condition)
}

function update(condition, model) {
    return Question.findOneAndUpdate(condition, model, { new: true });
}
function count() {
    return Question.count();
}
function find(condition) {
    return Question.find(condition);
}

function Delete(condition) {
    return Question.remove(condition);
}

