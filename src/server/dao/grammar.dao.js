var mongoose = require('mongoose');
require('../model/grammar.model.js');
var Grammar = mongoose.model('Grammar');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    Delete: Delete
};

function listAll(query, sort) {
    return Grammar.find(query).sort(sort)
}

function create(model) {
    var grammar = new Grammar(model);
    return grammar.save(model)
}

function findOne(condition) {
    return Grammar.findOne(condition)
}

function update(condition, model) {
    return Grammar.findOneAndUpdate(condition, model, { new: true });
}
function Delete(condition) {
    return Grammar.remove(condition);
}
