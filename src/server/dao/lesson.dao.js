var mongoose = require('mongoose');
require('../model/lesson.model.js');
var Lesson = mongoose.model('Lesson');

module.exports = {
    listAll: listAll,
    create: create,
    findOne: findOne,
    update: update,
    Delete: Delete,
    count: count
};

function listAll(query, sort) {
    return Lesson.find(query).sort(sort)
}

function create(model) {
    var lesson = new Lesson(model);
    return lesson.save(model)
}

function findOne(condition) {
    return Lesson.findOne(condition)
}

function update(condition, model) {
    return Lesson.findOneAndUpdate(condition, model, { new: true });
}
function Delete(condition) {
    return Lesson.remove(condition);
}
function count() {
    return Lesson.count();
}



