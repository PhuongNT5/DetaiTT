var mongoose = require('mongoose');

var schema = mongoose.Schema;
var lessonSchema = new schema({
    unit_id: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'unit'
        type: Number,
        require: true
    },
    vocabularyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vocabulary'
    }],
    grammarId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grammar'
    }],
    lesson_id: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    // level: {
    //     type: String,
    //     require: true
    // },
    created: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    modified: {
        type: Date
    },
    modifiedBy: {
        type: String
    },
    deleted: {
        type: Date
    }
});
lessonSchema.index({ "lesson_id": 1 }, { unique: true });
var lesson = mongoose.model('Lesson', lessonSchema);
module.exports = lesson;