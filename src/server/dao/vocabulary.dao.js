var mongoose = require('mongoose');
require('../model/vocabulary.model.js');
var Vocabulary = mongoose.model('Vocabulary');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    count: count
};

function listAll(query, sort) {
    return Vocabulary.find(query).sort(sort)
}

function create(model) {
    var vocabulary = new Vocabulary(model);
    return vocabulary.save(model)
}

function findOne(condition) {
    return Vocabulary.findOne(condition)
}

function update(condition, model) {
    return Vocabulary.findOneAndUpdate(condition, model, { new: true });
}

function count() {
    return Vocabulary.count();
}