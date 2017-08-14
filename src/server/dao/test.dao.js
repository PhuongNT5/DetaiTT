var mongoose = require('mongoose');
require('../model/test.model.js');
var Test = mongoose.model('Test');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    Delete: Delete,
    count: count
};

function listAll(query, sort) {
    return Test.find(query).sort(sort)
}

function create(model) {
    var test = new Test(model);
    return test.save(model)
}

function findOne(condition) {
    return Test.findOne(condition)
}

function update(condition, model) {
    return Test.findOneAndUpdate(condition, model, { new: true });
}

function Delete(condition) {
    return Test.remove(condition);
}
function count() {
    return Test.count();
}

