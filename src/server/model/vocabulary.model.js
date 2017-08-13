var mongoose = require('mongoose');
var schema = mongoose.Schema;
var vocabularySchema = new schema({
    lesson_id: {
        type: Number,
        require: true,
    },
    vocabulary_id: {
        type: Number,
        require: true,
        unique: true
    },
    word: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    pronunciation: {
        type: String,
        require: true
    },
    translate: {
        type: String,
        require: true
    },
    use: {
        type: String,
        require: true
    }
});
vocabularySchema.index({ "vocabulary_id": 1 }, { "unique": true });
var vocabulary = mongoose.model('Vocabulary', vocabularySchema);
module.exports = vocabulary;