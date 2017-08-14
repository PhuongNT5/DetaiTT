var mongoose = require('mongoose');
var schema = mongoose.Schema;
var questionSchema = new schema({
    question_id: {
        type: Number,
        require: true,
        unique: true
    },
    level: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    questionType: {
        type: String
    },
    A: {
        type: String,
        require: true
    },
    B: {
        type: String,
        require: true
    },
    C: {
        type: String,
        require: true
    },
    D: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    }
});
questionSchema.index({ "question_id": 1 }, { unique: true });
var question = mongoose.model('Question', questionSchema);

module.exports = question;