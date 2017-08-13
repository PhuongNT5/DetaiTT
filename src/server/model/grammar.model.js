var mongoose = require('mongoose');
var schema = mongoose.Schema;
var grammarSchema = new schema({
    lesson_id: {
        type: Number,
        require: true,
        unique: true
    },
    gramTitle: {
        type: String,
        require: true
    },
    gramContent: {
        content: String,
        description: String,
        example: String

    }
});
grammarSchema.index({ "grammar_id": 1 }, { unique: true });
var grammar = mongoose.model('Grammar', grammarSchema);

module.exports = grammar;