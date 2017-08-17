var mongoose = require('mongoose');
require('../model/testdetail.model.js');
var TestDetail = mongoose.model('TestDetail');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    Delete: Delete,
    count: count
};

function listAll(query, sort) {
    return TestDetail.find(query).sort(sort)
}

function create(model) {
    var testdetail = new TestDetail(model);
    return testdetail.save(model)
}

function findOne(condition) {
    return TestDetail.findOne(condition)
}

function update(condition, model) {
    return TestDetail.findOneAndUpdate(condition, model, { new: true });
}

function Delete(condition) {
    return TestDetail.remove(condition);
}
function count() {
    return TestDetail.count();
}

